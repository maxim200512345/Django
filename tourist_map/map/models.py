from django.db import models
from django_mysql.models import ListCharField
class TouristObject(models.Model):
    headline = models.CharField(max_length=20)
    description = models.TextField()
    xCoords = models.TextField()
    yCoords = models.TextField()
    location = models.TextField()
    difficult = models.IntegerField()
    is_for_kids = models.BooleanField()
    approximate_budget = models.IntegerField()
    start_coordinates = models.TextField()
    end_coordinates = models.TextField()
    link_to_map = models.TextField()
    approximate_duration = models.TextField()
    distance_from_railwayStation = models.IntegerField()
    array = ListCharField(
        base_field=models.CharField(max_length=25),
        size=35,
        max_length=(35 * 26)
    )

