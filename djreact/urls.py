
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
     path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('resumes.api.urls')),
]
