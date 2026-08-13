from django.contrib import admin
from django.utils.html import format_html
from .models import Producto

admin.site.site_header = 'Aroma & Tradición'
admin.site.site_title = 'Aroma & Tradición'
admin.site.index_title = 'Administración de la carta'


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('miniatura', 'nombre', 'tamano', 'precio')
    list_display_links = ('miniatura', 'nombre')
    list_filter = ('tamano',)
    search_fields = ('nombre', 'descripcion')
    ordering = ('nombre',)

    fieldsets = (
        ('Producto', {'fields': ('nombre', 'tamano', 'precio')}),
        ('Contenido de la carta', {'fields': ('descripcion', 'imagen')}),
    )

    @admin.display(description='Foto')
    def miniatura(self, obj):
        if obj.imagen:
            return format_html(
                '<img src="{}" style="width:52px;height:52px;object-fit:cover;'
                'border-radius:8px;border:1px solid #CBB89E;">',
                obj.imagen.url
            )
        return '—'