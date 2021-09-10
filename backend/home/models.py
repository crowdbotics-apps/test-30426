from django.conf import settings
from django.db import models


class Title(models.Model):
    "Generated Model"
    body = models.BigIntegerField()
