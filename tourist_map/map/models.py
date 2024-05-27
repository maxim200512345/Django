from django.db import models
from django_mysql.models import ListCharField
class TouristObject(models.Model):
    headline = models.CharField(max_length=20)
    description = models.TextField()
    xCoords = models.TextField()
    yCoords = models.TextField()
    location = models.TextField()
    link_to_map = models.TextField()
    detailedDescription = models.TextField()
    typeOfRoute = models.TextField()

