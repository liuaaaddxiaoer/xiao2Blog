from django.db import models

# Create your models here.

class Test(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    class Meta:
        ordering=['name']
