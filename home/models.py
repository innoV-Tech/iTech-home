from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, null=True, blank=True)
    tel_number = models.CharField(max_length=255, null=True, blank=True)
    message = models.CharField(max_length=255)
    add_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.name)
