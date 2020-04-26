import populartimes
import sys 

placeid = str(sys.argv[1])
data = populartimes.get_id( "AIzaSyBb10HJkDvVvJQThvtmulz7gkrzQJCrZAA", placeid ) 


print(data)
sys.stdout.flush()

#AIzaSyBb10HJkDvVvJQThvtmulz7gkrzQJCrZAA
