for(let i=0; i<51; i=i+5){
    console.log(i);
}
let x= {
    datatype: "integer",
    value: 3
}
for(let key in x){
    console.log(key, x[key]);
}

let students= ["rishabh", "himesh", "lakshya", "karmesh"];
for( let index in students){
    console.log(index, students[index])
}
// in loop which gives the value with the index integer value

for(let direct of students){
    console.log(direct)
}
// of loop which takes the value of the loop without the use of indexing 