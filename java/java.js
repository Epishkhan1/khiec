txtResult=document.querySelector("#txtresult");
const btns = document.querySelectorAll('button');
// console.log(btns);
var num=txtResult.value;
console.log(num);
var num2=0;
console.log(num);
btns.forEach((item) => {
    item.addEventListener('click', () =>{
        if (item.classList.contains('nine')) {
            // console.log('9');
            txtResult.value+='9';
            
        } else
        if (item.classList.contains('eight')) {
            txtResult.value+='8';
            num2=txtResult.value
            console.log(num2);
        }
        else
        if (item.classList.contains('seven')) {
            txtResult.value+='7';
            // num2=txtResult.value
        }else
        if (item.classList.contains('six')) {
            txtResult.value+='6';
            // num2=txtResult.value
        }else
        if (item.classList.contains('five')) {
            txtResult.value+='5';
            // num2=txtResult.value
        }else
        if (item.classList.contains('four')) {
            txtResult.value+='4';
            // num2=txtResult.value
        }else
        if (item.classList.contains('three')) {
            txtResult.value+='3';
            // num2=txtResult.value
        }else
        if (item.classList.contains('two')) {
            txtResult.value+='2';
            // num2=txtResult.value
        }else
        if (item.classList.contains('one')) {
            txtResult.value+='1';
            num2=txtResult.value
        }else
        if (item.classList.contains('zero')) {
            txtResult.value+='0';
            // num2=txtResult.value
        }
        else
        if (item.classList.contains('sum')) {
            // txtResult.value='0';
            
            sum();
            // console.log(num2);
        }
    
    
    })

})

function sum(num,num2){
num=num*num2
console.log(num);
}
