// 1
function add(array,index,item)
{
  array.splice(index,0,item);
  for (let items of array) {
    console.log(items);
  }
}





let x = [2,3,4,6]
let i = x.length;
let name = "salam"


add(x,i,name)




// 2

function deleted (array,index,item){
    array.splice(index,1);
    console.log(array);

}

let a =[1,2,3,4,5];
let index=2;

deleted (a,index)