const num1 = document.getElementById('num1')as HTMLInputElement;
const num2 =  document.getElementById('num2')as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: Array<number> = [];
const stringResults: string[]=[];

type NumOrString  =number | string;
type Result={val :number; timeStamp :  Date};

interface ResultObj {
    val:number; timeStamp:Date
}

function add(num1:NumOrString, num2:NumOrString){
    
    if(typeof num1 ==='number' && typeof num2 === 'number'){
    return num1 + num2;
    }
    else if(typeof num1 ==='string' && typeof num2 === 'string'){
        return num1 +' ' +num2;
    }
    return +num1 + +num2;

}
function printResult (resultObj :ResultObj ){
console.log(resultObj.val)
}

buttonElement.addEventListener('click',()=>{
    const a = num1.value;
    const b = num2.value;
    const res = add(+a,+b);
    numResults.push(res as number)
    const stringResult =add(a,b)
    stringResults.push(stringResult as string)
    printResult({val: res as number,timeStamp:new Date()})
    console.log(numResults,stringResults)
})  

const myPromise = new Promise<string>((res,rej)=>{
    setTimeout(() => {
        res('it worked ')
    }, 1000);
})

myPromise.then((res)=>{
    console.log(res.split('w'));
})