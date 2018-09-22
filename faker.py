from json import dumps
from faker import Faker
import collections
import random

# data format:
## id
## title
## description
## url
## category
## latitude
## longitude
## time-start
## time-end

fake = Faker()

fake_database = []
filename = "fakedata"
size = 5
categories = ["Track and Field", "Master Classes", "Recitals"]

print "Begin.."
print "faking data"

for x in range(size):
    fake_database.append(collections.OrderedDict([
        ('id', x),
        ('title', fake.bs()),
        ('description', fake.sentence()),
        ('url', fake.url()),
        ('category', categories[random.randint(0,len(categories))]),
        ('latitude', fake.latitude()),
        ('longitude', fake.longitude()),
        ('time-start', fake.iso8601()),
        ('time-end', fake.iso8601())
    ])

print "Done faking data"
print "Copying fake data to fake JSON file"

with open('%s.json' % filename, 'w') as output:
    output.write(dumps(database, indent=3))

print "Done copying"
print "Done."







                         
                         
                                     





          
                                                                       
                                                                            
