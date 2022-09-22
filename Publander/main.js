// Header
console.log('hyyy');
var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("main_header").style.top = "0";
      } else {
            document.getElementById("main_header").style.top = "-104.61px";
      }

      prevScrollpos = currentScrollpos;

      }


// Phone Number Selector

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


//disable input -- signup//


var individual = document.getElementById("individual");
var company = document.getElementById("company");
var checkbox = document.getElementById("checkbox");
var website = document.getElementById("website");

function individualclickfun()
{
      if(individual.checked){
          company.setAttribute("disabled","disabled");
      }
      else{
          company.removeAttribute("disabled");
      }  
};
  
individual.addEventListener("click",individualclickfun);

function checkboxclickfun()
{
      if(checkbox.checked){
          website.setAttribute("disabled","disabled");
      }
      else{
          website.removeAttribute("disabled");
      }  
};
  
checkbox.addEventListener("click",checkboxclickfun);

//password validation//

function passwordfun(){
    let password = document.getElementById("password").value;
    let confirmp = document.getElementById("confirm").value;
    
    
        if(password =="" && confirmp ==""){
            alert("password cannot be empty");
        }
        else if(password == confirmp){
            alert("login success");
        }
        else{
            alert("password doesn't match !")
        }
       }

//password hide show//

function viewPassword(){
    
  var passwordInput = document.getElementById('password');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye';
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye-slash';
  }
}
