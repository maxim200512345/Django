from .models import TouristObject

def GetAllDataFromObject():
    item = TouristObject.objects.all()
    print(item.query)
def GetItemsFilteredByBudget(Approx_budget_left, Approx_budget_right):
    items = TouristObject.objects.filter(approximate_budget__range=(Approx_budget_left, Approx_budget_right))
    return list(items)

def GetItemsClosestToEkb(radius):
    items = TouristObject.objects.filter(distance_from_railwayStation__range=(0, radius))
    return list(items)
def GetCertainItem(id):
    return TouristObject.objects.filter(id=id)
