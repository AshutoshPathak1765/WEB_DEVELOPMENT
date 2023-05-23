const form=document.getElementById('form');
const msgBox=document.getElementById('msgBox');
const submitBtn=document.getElementById('submitBtn');
const feedback=document.querySelector('.feedback');
const displayMsg=document.getElementById('displayMsg');
submitBtn.addEventListener('click',function(e) {
    e.preventDefault();
    const val=msgBox.value;
    if(val==='') {
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 4000);
    }
    else {
        displayMsg.innerText=val;
    }
})