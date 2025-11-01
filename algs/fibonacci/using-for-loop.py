'''
https://www.w3schools.com/dsa/dsa_algo_simple.php
solution: fibonacci using for loop
'''
prev2 = 0
prev1 = 1

print(prev2)
print(prev1)
for fibo in range(18):
    newFibo = prev1 + prev2
    print(newFibo)
    prev2 = prev1
    prev1 = newFibo


'''
output:
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181 
'''