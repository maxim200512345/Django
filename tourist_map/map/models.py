from django.db import models

class TouristObject(models.Model):
    headline = models.CharField(max_length=20)
    description = models.TextField()
    xCoords = models.TextField()
    yCoords = models.TextField()
    difficult = models.IntegerField()
    is_for_kids = models.BooleanField()
    approximate_budget = models.IntegerField()
    start_coordinates = models.TextField()
    end_coordinates = models.TextField()
    link_to_map = models.TextField()
    approximate_duration = models.TextField()
    distance_from_railwayStation = models.IntegerField()
