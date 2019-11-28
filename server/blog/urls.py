from django.urls import path, re_path
from blog.views import CreateArticle, ArticleList, CategoryList, CategoryCount, NextArticle

urlpatterns = [
    path('createArticle/l', CreateArticle.as_view()),  # 创建/更新文章
    re_path('articleList/?', ArticleList.as_view()),  # 获取文章列表
    re_path('categoryList/?', CategoryList.as_view()),  # 获取文章列表
    re_path('articleCount/?', CategoryCount.as_view()),  # 获取文章列表数量
    re_path('nextArticle/?', NextArticle.as_view()),  # 获取文章上一个下一个
]