from django.shortcuts import render
from django.http import HttpResponse

from .models import TouristObject
from .queryesToSql import GetAllDataFromObject
def mainPage(request):
    data = TouristObject.objects.all()
    return render(request, "index.html", {"TouristObject" : data})


