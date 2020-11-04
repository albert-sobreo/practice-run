from django.db import models

# Create your models here.
class Post(models.Model):
    post = models.CharField(max_length=1024)
    upvote = models.IntegerField(default=0)
    downvote = models.IntegerField(default=0)

    class Meta:
        db_table = 'post'

    def __str__(self):
        return self.post


class Account(models.Model):
    username = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        db_table = 'account'

    def __str__(self):
        return self.username
