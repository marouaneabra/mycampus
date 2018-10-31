from json import dumps
import collections
import random
import lorem

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

fake_database = []
filename = "fakedata"
size = 5
fake_titles = ['29 Psalms for 29 Palms','A Gathering of Hunters','Act Out Your Age','Adventure Camping','Advertising Nauseum','Aesthetic Bug Gloss',
				'Air Fair','Alanonymous','Amagansett Go Around','Amateur Barber Night','An Arbor Day to Remember','Antisocial Darwinism','Apathesis',
				'Apocalypso','Aria Safari','Arise and Shinola','Aromastotle','Ass Texas','Attila the Humm','Aurora Tori Spelling','Away we golf',
				'Bali Who','Balls of the Bull Festival']
fake_description = lorem.sentence()
fake_categories = ["Art", "Music", "Sports", "Outdoors", "Academics", "Career","Community Service", "Religion and Spiriality", "Health", "Master Classes", "Recitals"]
fake_latitude = random.uniform(-180,180)
fake_longitude = random.uniform(-180,180)
fake_time_starts = ["2018-09-22T08:30:00-04:00","2018-09-22T08:00:00-04:00","2018-07-22T05:30:00-04:00","2018-09-22T08:35:00-04:00","2018-03-22T10:30:00-04:00",
					"2018-09-22T05:30:00-04:00","2018-09-22T03:30:00-04:00","2018-09-22T02:00:00-04:00","2018-09-22T08:46:00-04:00"]
fake_time_ends = ["2018-09-22T08:30:00-04:00","2018-09-22T08:00:00-04:00","2018-07-22T05:30:00-04:00","2018-09-22T08:35:00-04:00","2018-03-22T10:30:00-04:00",
					"2018-09-22T05:30:00-04:00","2018-09-22T03:30:00-04:00","2018-09-22T02:00:00-04:00","2018-09-22T08:46:00-04:00"]

for x in range(size):
    fake_database.append(collections.OrderedDict([
        ('id', x),
        ('title', fake_titles[random.randint(0,len(fake_titles)-1)]),
        ('description', fake_description),
        ('url', "https://calendar.oberlin.edu/event/"+fake_titles[random.randint(0,len(fake_titles)-1)]),
        ('category', fake_categories[random.randint(0,len(fake_categories)-1)]),
        ('latitude', fake_latitude),
        ('longitude', fake_longitude),
        ('time-start', fake_time_starts[random.randint(0,len(fake_time_starts)-1)]),
        ('time-end', fake_time_ends[random.randint(0,len(fake_time_ends)-1)])
    ]))


with open('%s.json' % filename, 'w') as output:
    output.write(dumps(fake_database, indent=3))







                         
                         
                                     





          
                                                                       
                                                                            
