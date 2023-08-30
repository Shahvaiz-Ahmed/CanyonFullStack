from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from .views import *
from rest_framework import routers

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('products', ProductViewSet, basename='products')

urlpatterns = [
    path('api/', include(router.urls)),
    path('get-data/', DataFetchView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r".*", TemplateView.as_view(template_name='base.html'))
]
