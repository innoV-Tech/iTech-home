from rest_framework import routers
from home.views import ContactView


router = routers.DefaultRouter()
router.register('contact', ContactView)
