we have two approaches brute force and gcd method
approach 1: brute force
approach 2: using gcd (recommended approach)

Step 1: Input  
str1 = "ABCABC"  
str2 = "ABC"

Step 2: Check if strings are compatible  
str1 + str2 = "ABCABCABC"  
str2 + str1 = "ABCABCABC"

✅ They are equal — means both can be built using a common base pattern.
So, we continue.

If they were not equal, we’d return "".

Step 3: Compute maxLength using GCD of lengths  
len1 = 6  
len2 = 3

Now call:

gcd(6, 3)

Step 4: Dry run the gcd() function  
gcd(6, 3)  
→ gcd(3, 6 % 3)  
→ gcd(3, 0)  
→ return 3

✅ So, maxLength = 3.

Step 5: Take prefix of length 3 from str1  
str1.slice(0, 3) = "ABC"

✅ That’s our GCD string.

Step 6: Return result
return "ABC"

Output:

"ABC"

Dry run summary:  
str1 + str2 === str2 + str1 ✅  
gcd(6, 3) = 3  
Return str1.slice(0, 3) → "ABC"
