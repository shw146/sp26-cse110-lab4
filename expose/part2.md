# Part 2

## Questions:
1. Line 12 will **print** out the last *index* of prices (assuming prices is zero indexed) [aka 2] because "i" was declared as a var type variable, which keeps its value even when outside of its scope
2. Line 13 will **print** out the discounted price of the last item in prices [aka 150] because it was declared as a var type variable which would keep the last assigned value while the scope moved away from the scope the variable was originally declared in
3. Line 14 will **print** out the last final *discounted* price for all items in prices [aka 150] because it was declared as a var type variable which would keep its last assigned value (note that I'm pretty sure that using a var vs let wouldn't really change the outcome of this line's return)
4. This function should **return** the discounted prices of all of the given items in prices [aka [50, 100, 150]]. There doesn't seem to be any issues that would make this return value any different from what seems to be expected. We've accessed each price, multiplied by the discount factor, rounded for whole numbers, then added to a list of discounted prices. 
5. Line 12 would cause an error in this case because the let variable type terminates when outside of its variable scope so by the time we get to line 12, "i" no longer exists
6. Line 13 would cause an error exactly like line 12 in the same scenario because the let variable type terminates "discountedPrice" before we reach line 13
7. Line 14 would print the final price of the last item in prices [aka 150]. It is called and declared within the same scope, so there should be no issues with its variable access. However, since we've kept updating "finalPrice" inside of the loop, we'll only have the final price of the last item
8. This function should return the discounted prices of all the given items in prices [aka [50, 100, 150]] because the use of a "let" variable type will not cause issues since it is called and declared in the same scope
9. Line 11 would cause an error because the let variable type terminates when outside of its variable scope so by the time we get to line 12, "i" no longer exists
10. Line 12 would print out the length of prices [aka 3] and cause no problems as a const type variable because its value is never altered and it is called and declared in the same scope
11. This function will return the discounted prices of all of the given items in prices [aka [50, 100, 150]]. Although it seems like the const type variable could cause issues (and for best practices shouldn't be used unless explicitly needed) it only disallows reassigning the variable, not the assignment of new items in the original variable. It's also nice to note that removing items out of the array is also still allowed!
12. 
  - A: student.name
  - B: student["Grad Year"]
  - C: student.greeting()
  - D: student["Favorite Teacher"].name
  - E: student.courseLoad[0]
13. |Part|Answer|Reasoning|
    |----|------|---------|
    |A|32|Integers will map to their string representations and then concatenate together when using addition|
    |B|1|Since subtraction doesn't have anything to do with strings, the string converts into an integer and goes through arithmetic subtraction|
    |C|3|Null maps to 0 when converting to a value and 3+0=0|
    |D|3null|Since we are using the addition symbol with a string component, JS defaults to string concatenation and converts null into its string counterpart 'null'|
    |E|4|True maps to 1 when converting to a value and 1+3=4|
    |F|0|Since there are no strings, JS defaults to arithmetic addition. Since false and null both map to 0 as values, 0+0=0|
    |G|3undefined|Since there is a string involved, default to concatenation and convert undefined into its string counterpart 'undefined'|
    |H|NaN|Subtraction defaults to arithmetic subtraction, converting undefined into its equivalent numeric counterpart. Since arthmetic with an undefined value is undefined, we get NaN|
14. |Part|Answer|Reasoning|
    |-|-|-|
    |A|true|Since a number is involved, the comparison defaults to numerical comparison, so '2' gets converted into a number then compared|
    |B|false|Since there are no numbers involved, use string comparison. Since 2 comes after 1 in lexicographic order, it is considered bigger despite being numerically less than 12|
    |C|true|Since there is a number involved, default to numeric comparison. '2' gets converted into 2 and 2 is indeed equal to 2|
    |D|false|=== compares literals, and since 2 is not the same as '2', it returns false|
    |E|false|Since there is a number, default to numeric comparison. True is converted to 1, which is not equal to 2|
    |F|true|Since both values are booleans, checks boolean equivalence. Boolean(2) evaluates to true because 2 is a non-zero value and true is indeed equal to true|
15. Double equals (==) checks the comparison between two values, allowing for flexibility between variable types. However, a triple equals (===) check literal equivalence, not allowing for any kind of type conversions when comparing.
