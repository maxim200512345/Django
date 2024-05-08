from django.test import TestCase
from django.test.client import Client
# Create your tests here.
class TestMap(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData")
        pass
    def setUp(self):
        print("SetUp")
    def isPageExists(self):
        c = Client()
        assert (c.get('/').status_code == 200)