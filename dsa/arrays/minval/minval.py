# https://www.w3schools.com/dsa/dsa_data_arrays.php
# Algorithm: Find The Lowest Value in an Array

my_array = [7, 12, 9, 4, 11]
minVal = my_array[0]

for i in my_array:
    # print('Current value:',i)
    if i < minVal:
        minVal = i

print('Lowest value:',minVal)

''' 
time complexity: O(n)
space complexity: O(1)
'''