# Generated by Django 2.2.7 on 2019-11-22 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20191122_2119'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='is_delete',
            field=models.BooleanField(default=False),
        ),
    ]