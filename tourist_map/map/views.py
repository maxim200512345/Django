from django.shortcuts import render
from django.http import HttpResponse
from .queryesToSql import GetItemsFilteredByBudget
def index(request):
    return render(request, "index.html")


