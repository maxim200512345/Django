from django.shortcuts import render
from django.http import HttpResponse

from .models import TouristObject
from .queryesToSql import GetAllDataFromObject
def mainPage(request):
    data = TouristObject.objects.all()
    from django.core import serializers
    data = serializers.serialize("python", TouristObject.objects.all())

    context = {
        'data':data,
    }

    return render(request, "index.html", context)


