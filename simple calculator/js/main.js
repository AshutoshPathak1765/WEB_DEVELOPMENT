let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let clear=document.querySelector('.btn-clear');
let equal=document.querySelector('.btn-equal');

buttons.forEach(function(button) {
    button.addEventListener('click',(e)=> {
        let value=e.target.innerText;
        screen.value+=value;
    })
})

equal.addEventListener('click',function(e) {
    // console.log(screen.value);
    if(screen.value==='') 
        screen.value="";
    else {
        let expression=screen.value;
        console.log(expression.substring(0,expression.length-1));
        let answer=eval(expression.substring(0,expression.length-1));
        console.log(answer);
        screen.value=answer;
    }
})

clear.addEventListener('click',()=> {
    screen.value="";
})