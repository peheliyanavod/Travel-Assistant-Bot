from django.urls import path
from api.views import CreateTravelView, ListTravelView, DeleteTravelView

urlpatterns = [
    path("travel/create/", CreateTravelView.as_view(), name="create_travel"),
    path("travel/list/", ListTravelView.as_view(), name="list_travel"),
    path("travel/delete/<int:pk>/", DeleteTravelView.as_view(), name="delete_travel"),
]