from rest_framework import serializers
from .models import MenuCategory,MenuItem

class MenuCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuCategory
        fields = [
            "id",
            "name",
            "created_at",
        ]

class MenuItemSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.name",read_only = True)
    class Meta:
        model = MenuItem
        fields = [
            "id",
            "name",
            "description",
            "price",
            "is_available",
            "category",
            "category_name",
            "created_at",
        ]


