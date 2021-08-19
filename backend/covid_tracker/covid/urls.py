from django.urls import path
from .import views
from .views import CreateUserView, MedicalDataDetail,MedicalDataList
from rest_framework import routers
router = routers.DefaultRouter()

urlpatterns=[

    path('record/<int:pk>',views.MedicalDataList.as_view()),
    path('create/', views.CreateUserView.as_view(), name='create'),
    path('token/', views.CreateTokenView.as_view(), name='token'),
    path('me/', views.ManageUserView.as_view(), name='me'),   
   
]