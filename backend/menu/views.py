from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import MenuCategory, MenuItem
from .serializers import MenuCategorySerializer, MenuItemSerializer


class MenuCategoryListCreateView(generics.ListCreateAPIView):
    serializer_class = MenuCategorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MenuCategory.objects.filter(
            cafe=self.request.user.cafe
        )

    def perform_create(self, serializer):
        serializer.save(
            cafe=self.request.user.cafe
        )


class MenuItemListCreateView(generics.ListCreateAPIView):
    serializer_class = MenuItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MenuItem.objects.filter(
            category__cafe=self.request.user.cafe
        )