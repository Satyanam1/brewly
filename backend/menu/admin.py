from django.contrib import admin
from .models import MenuCategory,MenuItem

@admin.register(MenuCategory)
class MenuCategory(admin.ModelAdmin):
    list_display = ("name","cafe","created_at")
    search_fields =("name",)
@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ("name","category","price","is_available","created_at")  
    list_filter = ("is_available", "category")
    search_fields = ('name',)  
