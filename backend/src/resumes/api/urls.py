from django.urls import path

from .views import ResumeListView, ResumeDetailView

urlpatterns = [
    path('',ResumeListView.as_view()),
    path('<pk>',ResumeDetailView.as_view()),
]
