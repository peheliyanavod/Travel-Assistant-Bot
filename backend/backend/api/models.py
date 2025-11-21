from django.db import models

# Create your models here.
class TravelData(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    destination = models.CharField(max_length=255)
    travel_date = models.DateField()
    preferences = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.destination} on {self.travel_date}"