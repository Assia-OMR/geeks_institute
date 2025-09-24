# Challenge 1
"""
number= int(input("Please enter a number: "))
length=int(input("Please enter a lenght: "))
i=1
l=[]
while i<=length:
    l.append(number*i)
    i+=1
print(l)
"""

# Challenge 2
word=input("Enter your word: ")
new=""
for i in range(len(word)):
    if word[i] != word[i-1]:
        new+=word[i]
print(new)
