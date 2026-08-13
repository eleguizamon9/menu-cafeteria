from django.http import JsonResponse
from .models import Producto


def lista_productos(request):
    productos = Producto.objects.all()

    datos = []
    for producto in productos:
        datos.append({
            'id': producto.id,
            'nombre': producto.nombre,
            'tamano': producto.tamano,
            'precio': producto.precio,
            'descripcion': producto.descripcion,
            'imagen': request.build_absolute_uri(producto.imagen.url) if producto.imagen else None,
        })

    return JsonResponse({'menu': datos})