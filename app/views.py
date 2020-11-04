from django.shortcuts import render, HttpResponse, redirect
from app.models import Account, Post
from django.http import JsonResponse
import os

# Create your views here.
def home(request):
    data = {
        'account': Account.objects.all()
    }
    return render(request, 'index.html', data)

def post(request):
    # id:0, username:'System', post:'Fetching Data From Server', upvote:0, downvote:0
    posts = Post.objects.all()
    newData = []
    for post in posts:
        newData.append({'id': post.pk, 'username': 'me', 'post': post.post, 'upvote': post.upvote, 'downvote': post.downvote})

    return JsonResponse(newData, safe=False)

def push(request):
    post = Post()

    post.post = request.POST['post']

    post.save()

    return redirect('/')

# def upvotepost(request, post_id):
#     post = Post.object.get(id=post_id)

#     post.upvote += 1
#     post.save()

#     data = {
#         'upvote': int(post.upvote)
#     }

#     return JsonResponse(data)

# def downvotepost(request, post_id):
#     post = Post.object.get(id=post_id)

#     post.upvote += 1
#     post.save()

#     data = {
#         'downvote': int(post.downvote)
#     }

#     return JsonResponse(data)
