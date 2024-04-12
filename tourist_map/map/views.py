from django.shortcuts import render
from django.http import HttpResponse
from .queryesToSql import GetItemsFilteredByBudget
def mainPage(request):
    return render(request, "index.html")


