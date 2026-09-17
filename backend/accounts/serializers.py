from rest_framework import serializers
from .models import User, Cafe

class RegisterSerializer(serializers.ModelSerializer):
    cafe_name = serializers.CharField(write_only = True, max_length = 150)
    password = serializers.CharField(write_only = True, min_length = 8)

    class Meta:
        model = User
        fields = [
            "name",
            "email",
            "password",
            "cafe_name",
        ]
    def create(self, validated_data):
        cafe_name = validated_data.pop("cafe_name")

        user = User.objects.create_user(
            name = validated_data["name"],
            email = validated_data["email"],
            password = validated_data["password"]
        )

        Cafe.objects.create(
            owner = user,
            name = cafe_name,
        )
        return user
