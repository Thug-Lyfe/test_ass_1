function func_tri(a,b,c){
if(a <= 0 || b <= 0 || c <= 0){
    console.log("not a triangle")
}
else if(a == b && b == c){
    console.log("equilateral")
}
else if(a == b || b == c || c == a){
    console.log("isosceles")
}
else if(a != b && b != c && c != a){
    console.log("scalene triangle")
}
else{
    console.log("not a triangle")
}
}