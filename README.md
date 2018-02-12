
# test_ass_1




| Case          | Expected output |
| ---------- |:---------: | 
| [3,3,3]       | equilateral |
| [3,3,2]   | Isosceles triangle |  
| [0,1,2],[0,0,0],[0,0,1],[2,2,4] | Not triangle      |  
| [“2”,1,2],[“&”,2,2] | Not triangle, contains string      | 
| Any value is zero | not triangle    |    
| [4,5,6] | Scalene triangle |

Conclusions:

1. One, but not all, sides are infinite: Not a triangle
2. One side equal to the sum of the other two sides: Not a triangle (that’s a line)
3. All sides of equal length, but non zero: Equilateral triangle
4. Two sides equal to each other but the third is not: Isosceles triangle
5. None of the sides equal to each other: Scalene triangle



run all tests with node triangle.js
expected output
![alt text](https://github.com/Thug-Lyfe/test_ass_1/edit/master/1.png "expected output")


