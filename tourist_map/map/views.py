from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

from .models import TouristObject
from .queryesToSql import GetAllDataFromObject


class SomeView(TemplateView):
    template_name = 'index.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['all'] = [
            {
                'id' : obj.id,
                'headline' : obj.headline,
                'xCoords' : obj.xCoords,
                'yCoords' : obj.yCoords,
                'description' : obj.description,
                'link' : obj.link_to_map,
            }
        for obj in TouristObject.objects.all()
        ]
        context['ekb'] = [
            {
                'id': obj.id,
                'headline': obj.headline,
                'xCoords': obj.xCoords,
                'yCoords': obj.yCoords,
                'description': obj.description,
                'link': obj.link_to_map,
            }
            for obj in TouristObject.objects.all().filter(location = 'город')
        ]
        context['district'] = [
            {
                'id': obj.id,
                'headline': obj.headline,
                'xCoords': obj.xCoords,
                'yCoords': obj.yCoords,
                'description': obj.description,
                'link': obj.link_to_map,
            }
            for obj in TouristObject.objects.all().filter(location = 'область')
        ]
        context['walk'] = [
            {
                'id': obj.id,
                'headline': obj.headline,
                'xCoords': obj.xCoords,
                'yCoords': obj.yCoords,
                'description': obj.description,
                'link': obj.link_to_map,
            }
            for obj in TouristObject.objects.all().filter(difficult = '0')
        ]
        context['car'] = [
            {
                'id': obj.id,
                'headline': obj.headline,
                'xCoords': obj.xCoords,
                'yCoords': obj.yCoords,
                'description': obj.description,
                'link': obj.link_to_map,
            }
            for obj in TouristObject.objects.all().filter(difficult='2')
        ]
        context['publicT'] = [
            {
                'id': obj.id,
                'headline': obj.headline,
                'xCoords': obj.xCoords,
                'yCoords': obj.yCoords,
                'description': obj.description,
                'link': obj.link_to_map,
            }
            for obj in TouristObject.objects.all().filter(difficult='1')
        ]
        return context