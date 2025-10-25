from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True, unique=True, null=False)
    username = models.CharField(max_length=150, unique=False, null=False)
    email = models.EmailField(max_length=254, unique=True, null=False)
    password = models.CharField(max_length=128, null=False)
    preferences = models.JSONField(default=dict, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


# Place model
class Place(models.Model):
    place_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()
    category = models.CharField(max_length=100, blank=True)
    rating = models.FloatField(null=True, blank=True)
    address = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    source = models.CharField(max_length=50, default="Google Maps")

    def __str__(self):
        return self.name


# Trip model
class Trip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="trips")
    title = models.CharField(max_length=150)
    destination = models.CharField(max_length=150)
    start_date = models.DateField()
    end_date = models.DateField()
    itinerary = models.JSONField(default=list, blank=True)  # Example: [{"day": 1, "places": [...]}]
    budget_estimate = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.destination})"


# Feedback model
class Feedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="feedbacks")
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name="feedbacks")
    rating = models.IntegerField()
    comments = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback from {self.user.name}"


# Chat log (for future chatbot)
class ChatLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chatlogs")
    message = models.TextField()
    response = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"ChatLog for {self.user.name} at {self.timestamp}"
