# Exercise 1 : Hello World
print("Hello World "*4)

# Exercise 2 : Some Math

print((99**3)*8)

# Exercise 3 : What’s your name ?
"""
name=input("What's your name? ")
name=name.capitalize()
if name=="Assia":
    print(f"yeah {name}! We have the same name!")
else:
    print(f"Nice to meet you {name}!")
"""


# Exercise 4 : Tall enough to ride a roller coaster
"""
height=int(input("Tell me your height in centemeters please: "))
if height>=145:
    print("You are tall enough to ride a roller coaster!")
else:
    print("You need to grow so that you can ride a roller coaster!")
"""

# Exercise 5 : Favorite Numbers
"""
my_fav_numbers={8, 5, 19, 21, 28}
    # 2 Add two new numbers to the set.
my_fav_numbers.add(155)
my_fav_numbers.add(170)
print(my_fav_numbers)
    # 3 Remove the last number.
my_fav_numbers=list(my_fav_numbers) # we have converted my_fav_numbers to a list so that we can index the element that we want to remove
my_fav_numbers.pop(-1)
print(my_fav_numbers)
    # 4
friend_fav_numbers={105, 1200, 7300}
    # 5
our_fav_numbers=my_fav_numbers+list(friend_fav_numbers)
print(our_fav_numbers)
"""


# Exercise 6: Tuple: no it's not possible to add more integers to the tuple because tuples are immutable

# Exercise 7: List
"""
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)
basket.pop(-1)
print(basket)
basket.extend(["Kiwi"])
print(basket)
basket.insert(0,"Apples")
print(basket)
print(basket.count("Apples"))
print(len(basket))
basket.clear()
print(basket)
"""


# Exercise 8 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich",
                   "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(sandwich_orders)

finished_sandwiches=[]
while sandwich_orders:
    sandwich=sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print("I made your ", sandwich)
print(finished_sandwiches)
print(sandwich_orders)
