//search element
function searchElement(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}
let arr=[4,2,0,10,8,30];
let result = searchElement(arr,49);
console.log(result);

//return negative number
let arr1=[2,-9,17,0,1,-10,-4,8,-9];
let count=0;
function countneg(arr1){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]<0){
            count=count+1;
        }
    }
    return count;
}
let res1=countneg(arr1);
console.log(res1);

//return largest number
let arr2=[-9,-19,-31];
let largest=-Infinity;
function largestnum(arr2){
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]>largest){
            largest=arr2[i];
        }
    }
    return largest;
}
let res2=largestnum(arr2);
console.log(res2);

//return smallest number
let arr3=[1,3,50,70,0,-1,3];
let smallest=Infinity;
function smallestnum(arr3){
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]<smallest){
            smallest=arr3[i];
        }
    }
    return smallest;
}
let res3=smallestnum(arr3);
console.log(res3);

//return second largest
let arr4=[10,20,8,20,9,3,5,20,20,15];
function findsecondlargest(arr4){
    if(arr4.length<2){
        return null;
    }
    let firstlargest=-Infinity;
    let secondlargest=-Infinity;
    for(let i=0;i<arr4.length;i++){
        if(arr4[i]>firstlargest){
            secondlargest=firstlargest;
            firstlargest=arr4[i];
        }
        else if(arr4[i]>secondlargest && arr4[i]!=firstlargest){
            secondlargest=arr4[i];

        }
    }
    return secondlargest;
}
let res5=findsecondlargest(arr4);
console.log(res5);



