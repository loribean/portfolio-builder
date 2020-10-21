
from django.contrib import admin
from django.urls import path, include,re_path
from django.views.generic import TemplateView

urlpatterns = [
    
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
     path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('resumes.api.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='../public/index.html', content_type='text/html'))
]
