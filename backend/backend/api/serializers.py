from django.contrib.auth.models import User
from rest_framework import serializers
from .models import TravelData


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class TravelDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TravelData
        fields = ["id", "user", "destination", "travel_date", "preferences"]
    def create(self, validated_data):
        travel_data = TravelData.objects.create(**validated_data)
        return travel_data



