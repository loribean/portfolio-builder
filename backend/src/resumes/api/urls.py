# from resumes.api.views import ResumeViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ResumeViewSet, base_name='resumes')
# urlpatterns = router.urls




from django.urls import path

from .views import (ResumeListView, ResumeDetailView,ResumeUpdateView,ResumeDeleteView)

urlpatterns = [
    path('',ResumeListView.as_view()),
    path('<pk>',ResumeDetailView.as_view()),
    path('<pk>/update/',ResumeUpdateView.as_view()),
    path('<pk>/delete/',ResumeDeleteView.as_view()),
   
]
