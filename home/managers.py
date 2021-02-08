from django.db import models
from datetime import datetime
from django.core import serializers
from django.db.models import Q
from django.core.exceptions import ObjectDoesNotExist


def get_related(obj, parent, obj_id):
    """
    get related model data of a foreign key relation
    Args:
        obj ([model class]): [related model class]
        parent ([model class]): [model class with the foreign key]
        obj_id ([int]): [related model object id]
    Returns:
        [array]: [array with related object data]
    """
    related_arr = []
    for p in parent.values():
        related = obj.objects.filter(id=p[obj_id]).values()
        for r in related:
            related_arr.append(r)

    return related_arr


def get_prefetch_related(parent):
    """
    get related model data of a many to many key relation
    Args:
        related_field ([model class]): [related field name in model class]
        parent ([model class]): [model class with the many to many key]
    Returns:
        [array]: [array with related object data]
    """
    related_arr = None

    for p in parent:
        related_arr = p

    return related_arr


# class OrdersManager(models.Manager):
#     def create_order(self, **kwargs):
#         from products.models import Vehicule

    # get payment method
