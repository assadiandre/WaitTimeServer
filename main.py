import populartimes
import sys 


# { "id": "ChIJCYYAFMV9hYARmJORQa4TX58", "name": "Safeway"} required format

data = populartimes.get_id( "AIzaSyBb10HJkDvVvJQThvtmulz7gkrzQJCrZAA", "ChIJCYYAFMV9hYARmJORQa4TX58" ) 

#return {"id": "ChIJCYYAFMV9hYARmJORQa4TX58", "name": "Safeway"}
print(data)
sys.stdout.flush()

#AIzaSyBb10HJkDvVvJQThvtmulz7gkrzQJCrZAA
