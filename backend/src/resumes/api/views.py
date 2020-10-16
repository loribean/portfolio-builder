from rest_framework.generics import ListCreateAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView
from resumes.models import Resume
from .serializers import ResumeSerializer
from django.http import HttpResponseRedirect,HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
# class ResumeViewSet(viewsets.ModelViewSet):
#     serializer_class = ResumeSerializer
#     queryset = Resume.objects.all()



class ResumeListView(ListCreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

    def post(self,request,format=None):
        serializer = ResumeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse('/api/create/')

    

class ResumeDetailView(RetrieveAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer



class ResumeUpdateView(UpdateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

class ResumeDeleteView(DestroyAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer