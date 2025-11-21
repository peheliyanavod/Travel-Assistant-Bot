from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, TravelDataSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CreateTravelView(generics.ListCreateAPIView):
    serializer_class = TravelDataSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        if(serializer.is_valid()):
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)


class ListTravelView(generics.ListAPIView):
    serializer_class = TravelDataSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
    

class DeleteTravelView(generics.DestroyAPIView):
    serializer_class = TravelDataSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)