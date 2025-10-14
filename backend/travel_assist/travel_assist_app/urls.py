from django.urls import path
from travel_assist_app import views

urlpatterns = [
    path('example/', views.example_view, name='example'),
]
