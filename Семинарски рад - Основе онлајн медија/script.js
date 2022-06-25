const name2=document.getElementById('name2');
const email=document.getElementById('email');
const theme=document.getElementById('theme');
const message=document.getElementById('message');
const btn=document.getElementById('submit-btn');

btn.addEventListener('click', e=> {
    checkInputs();
});


function checkInputs(){

    const nameValue=name2.value.trim();
    const emailValue=email.value.trim();
    const themeValue=theme.value.trim();
    const messageValue=message.value.trim();

    if(nameValue===''){
        setErrorFor(name2,'Име и презиме не може бити празно!');
    }
    else{
        setSuccessFor(name2);
    }

    if(email.value===''){
        setErrorFor(email,'E-mail не може бити празан!');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'E-mail није валидан!')
    }else{
        setSuccessFor(email);
    }

    if(themeValue===''){
        setErrorFor(theme,'Наслов не може бити празан!');
    }else{
        setSuccessFor(theme);
    }

    if(messageValue===''){
        setErrorFor(message,'Порука не може бити празна!')
    }else{
        setSuccessFor(message);
    }

    if(isAllGood()){
        alert("Порука је послата!");
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isAllGood(){
    if(name2.parentElement.className==='form-control success'
        && email.parentElement.className=='form-control success'
        && theme.parentElement.className=='form-control success'
        && message.parentElement.className=='form-control success'){
            return true;
        }
        else return false;
    }

 
