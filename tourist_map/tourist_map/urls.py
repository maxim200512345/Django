
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from map import views
from map.views import SomeView

urlpatterns = [
    path('', SomeView.as_view(template_name='index.html')),
]
