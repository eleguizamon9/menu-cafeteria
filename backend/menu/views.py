from django.http import JsonResponse
from .models import Producto

def lista_productos(request):
    productos = Producto.objects.all()
    datos_productos = []

    for producto in productos:
        # Verificamos si el producto tiene una imagen guardada
        ruta_imagen = producto.imagen.url if producto.imagen else ""

        datos_productos.append({
            'nombre': producto.nombre,
            'tamano': producto.tamano,
            'precio': producto.precio,
            'descripcion': producto.descripcion,
            'imagen': ruta_imagen
        })
    return JsonResponse({'menu': datos_productos})