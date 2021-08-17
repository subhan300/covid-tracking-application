from django.urls import path
from .import views
from .views import CreateUserView, MedicalDataDetail,MedicalDataList
from rest_framework import routers

urlpatterns=[
    path('list/',MedicalDataList.as_view()),
    path('data/<int:pk>',MedicalDataDetail.as_view()),
    path('api/register/',CreateUserView.as_view()),

]