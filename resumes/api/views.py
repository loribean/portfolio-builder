from rest_framework.generics import ListCreateAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView,ListAPIView
from resumes.models import Resume,Comment
from .serializers import ResumeSerializer,CommentSerializer
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

class CommentListView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        resume = self.kwargs['resume']
        return Comment.objects.filter(resume=resume)
    
    def post(self,request,resume,format=None):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


 