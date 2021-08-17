from django.urls import path
from .import views
from .views import CreateUserView, MedicalDataDetail,MedicalDataList
from rest_framework import routers
router = routers.DefaultRouter()

urlpatterns=[

    path('record/',MedicalDataList.as_view()),
    path('data/',MedicalDataDetail.as_view()),
    path('api/register/',CreateUserView.as_view()),

]