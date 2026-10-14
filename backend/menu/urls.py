from django.urls import path
from .views import(MenuCategoryListCreateView,MenuItemListCreateView)

urlpatterns = [
    path("categories/",MenuCategoryListCreateView.as_view(),name="menu-categories"),
    path("items/",MenuItemListCreateView.as_view(),name="menu-items"),
]