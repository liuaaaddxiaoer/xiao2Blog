from django.db import models
from django.utils import timezone
# Create your models here.



class Category(models.Model):
    """
    文章的分类
    """
    name = models.CharField(max_length=50, unique=True, verbose_name='分类名字')

    def __str__(self):
        return self.name


class Tag(models.Model):
    """
    文章的标签
    """
    name = models.CharField(max_length=50, unique=True, verbose_name='标签名字')

    def __str__(self):
        return self.name

class Article(models.Model):
    """
    文章
    """
    title = models.CharField(max_length=100, unique=True, verbose_name='标题')
    created_time = models.DateTimeField(default=timezone.now, verbose_name='创建时间')
    modify_time = models.DateTimeField(auto_now=True, verbose_name='修改时间')
    content = models.TextField(blank=False, verbose_name='文章内容')
    url = models.URLField(blank=True, verbose_name='文章封面URL', null=True)
    desc = models.TextField(blank=True, verbose_name='简介文章的desc')
    category = models.ForeignKey(Category, related_name='category', on_delete=models.DO_NOTHING, verbose_name='文章所属分类')
    tags = models.ManyToManyField(Tag, related_name='tags', verbose_name='文章标签', blank=True)
    is_delete = models.BooleanField(blank=False, default=False)
    refs = models.TextField(blank=True, null=True, verbose_name='引用文章地址')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id']

class Test(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    class Meta:
        ordering=['name']
