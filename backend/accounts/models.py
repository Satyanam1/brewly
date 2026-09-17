from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is reqquired")
        email = self.normalize_email(email)

        user = self.model(
            email=email,
            name=name,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user
    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)
        extra_fields.setdefault("is_active",True)

        return self.create_user(
            email=email,
            name=name,
            password=password,
            **extra_fields
        )


class User(AbstractBaseUser, PermissionsMixin):
    email= models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    objects =UserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email

class Cafe(models.Model):
    owner = models.OneToOneField(User,on_delete=models.CASCADE,related_name="cafe")
    name =  models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
        