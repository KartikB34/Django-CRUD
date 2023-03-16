from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api_app.views import PatientViewSet

router = routers.DefaultRouter()
router.register('patient', PatientViewSet, basename='patient')

urlpatterns = [
    path('', include(router.urls)),
]