# Generated by Django 2.2.7 on 2019-11-28 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_auto_20191128_1950'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='refs',
            field=models.TextField(blank=True, null=True, verbose_name='引用文章地址'),
        ),
    ]
