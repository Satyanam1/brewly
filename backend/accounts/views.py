from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny

from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class =RegisterSerializer
    permission_classes = [AllowAny]

class ProfileView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "message":"Authentication successful",
            "user":request.user.email,
            "name": request.user.name,
        })