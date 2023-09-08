from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views

# https://www.django-rest-framework.org/api-guide/routers/#defaultrouter for more information on default routers.
router = routers.DefaultRouter()
# We need to register the /todos/ routes
router.register(r'todos', views.TodoViewSet, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]