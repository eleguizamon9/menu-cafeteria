from django.http import HttpResponse

def lista_productos(request):
    return HttpResponse("¡Bienvenidos! Aquí mostraremos el menú de la cafetería.")