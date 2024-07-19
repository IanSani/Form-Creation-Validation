document.addEventListener('DOMContentLoaded',function (){
    const form=document.getElementById('registration-form');
    const feedback=document.getElementById('form-feedback');


    form.addEventListener('submit',(event)=>{
        event.preventDefault(); //prevent form from submitting

        let isValid=true;
        const messages =[];
    

        //username validation
        const username =document.getElementById('username').value.trim();
        if(username.length < 3){
            isValid = false;
            messages.push('Username must be more three characters and above');
            return;
        }
        //Email validation
        const email = document.getElementById('email').value.trim();
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
          }

        //Password Validation
        const password = document.getElementById('password').value.trim();
        if(password.length < 8){
            isValid = false;
            messages.push('Please Enter a Valid password');
        }
        
        //show feedback
        if(isValid){
            feedback.style.display = "block";
            feedback.textContent="Registration successful!";
            feedback.style.color ='#28a745';
            
        }
        else{
            feedback.innerHTML =messages.join('<br>');
            feedback.style.color ="#dc3545";
        }
        
    })



})