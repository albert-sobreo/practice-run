from django.urls import path, include
from app import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.home),
    path('post/', views.post),
    path('push/', views.push),
    path('upvote/<int:pk>', views.upvote),
    path('downvote/<int:pk>', views.downvote)

]