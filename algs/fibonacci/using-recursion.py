'''
https://www.w3schools.com/dsa/dsa_algo_simple.php
solution: fibonacci using recursion
'''
print(0)
print(1)
count = 2

def fibonacci(prev1, prev2):
    global count
    if count <= 19:
        newFibo = prev1 + prev2
        print(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count += 1
        fibonacci(prev1, prev2)
    else:
        return

fibonacci(1,0)

#Python

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