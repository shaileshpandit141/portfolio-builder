"""
URL configuration for server project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from accounts import urls

urlpatterns = [
    path("", admin.site.urls),
    path("api/auth/", include(urls)),
]

# Allows the application to know what folder to access on the server side when receiving a request from the MEDIA_URL.
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
