from rest_framework.views import APIView
from blog.models import Article, Category, Tag
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from blog.serializers import ArticleListSerializer, CategorySerializer
import json


class Page(PageNumberPagination):
    page_size = 10
    page_query_param = 'page'
    page_size_query_param = 'pagesize'


def my_response(data=[], code=0, msg='请求成功', **kwargs):
    return Response({
        'code': code,
        'msg': msg,
        'data': data,
        **kwargs
    })


def my_body(request):
    try:
        post_data = request.data
        print(post_data)
        if isinstance(post_data, str) and len(post_data) > 0:
            try:
                post_data = json.loads(post_data)
            except:
                print('err')
                post_data = request.POST
        return post_data
    except Exception as err:
        return request.POST


class CreateArticle(APIView):
    """
    id 更新文章
    发布文章
    """

    def get(self, request):
        return self.post(request)

    def post(self, request):

        post = request.POST
        has_id = False if post.get('id', None) is None else True

        try:
            category = Category.objects.get_or_create(name=post['category'])[0]

            defaults = {
                'title': post['title'],
                'content': post['content'],
                'url': None if post.get('url', None) == '' else post.get('url', None),
                'desc': post.get('desc', post['content'][0:100]),
                'category': category
            }

            article = Article.objects.update_or_create(defaults=defaults, title=post['title'])[0]
            tags = post.get('tags', None)

            if tags:
                tags = tags.split(',')
                for tag in tags:
                    tag = Tag.objects.get_or_create(name=tag)[0]
                    article.tags.add(tag)

            return Response({
                'code': 0,
                'msg': '创建成功' if has_id is False else '更新成功',
                'data': []
            })

        except Exception as err:
            return Response({
                'code': -1,
                'msg': err,
                'data': []
            })


class ArticleList(APIView):

    def get(self, request):
        return self.post(request)

    """
    文章列表
    """

    def post(self, request):

        post_data = my_body(request)

        try:

            # 判断是否是某个分类下的文章列表
            category = post_data.get('category', None)

            page_size = post_data.get('pagesize', 10)

            time = post_data.get('order', None)

            articleQuerySet = Article.objects.filter(is_delete=False,
                                                     category__name=category) if category else Article.objects.filter(
                is_delete=False)

            if time is not None:
                order = int(time) if time.isdigit() else 0
                ordertime = ('-' if order > 0 else '') + 'created_time'
                print(ordertime)
                articleQuerySet = articleQuerySet.order_by(ordertime)

            page = Page()
            page.page_size = page_size
            filterSet = page.paginate_queryset(articleQuerySet, request, self)
            serias = ArticleListSerializer(filterSet, many=True)

            return my_response(serias.data, has_more=True if page.get_next_link() is not None else False)

        except Exception as err:
            print('err', err)
            return my_response(code=-1, msg=err)


class CategoryList(APIView):

    def get(self, request):
        return self.post(request)

    """
    获取文章分类
    """

    def post(self, request):
        categorys = Category.objects.all()

        serias = CategorySerializer(categorys, many=True)
        print(serias.data)

        return my_response(serias.data)


class CategoryCount(APIView):

    def get(self, request):
        return self.post(request)

    def post(self, request):
        ar_count = Article.objects.all().count()
        ca_count = Category.objects.all().count()

        return my_response({
            'articleCount': ar_count,
            'categoryCount': ca_count
        })


class NextArticle(APIView):

    def get(self, request):
        return self.post(request)

    def post(self, request):


        body2 = my_body(request)

        print(request.data)

        id = body2.get('id', None)

        if (id is None):
            return my_response({}, -1, msg='没传文章id')
        else:

            next = Article.objects.filter(id__gt=id).first()
            pre = Article.objects.filter(id__lt=id).first()

            return my_response({
                'pre': None if pre is None else ArticleListSerializer(pre).data,
                'next': None if next is None else ArticleListSerializer(next).data,
            })
