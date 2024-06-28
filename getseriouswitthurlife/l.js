// dom call
let email = document.querySelector("lemail")
let password = document.querySelector("#lpassword")

let loginbtn = document.querySelector("#loginbtn")
let msg = document.querySelector("#msg")

loginbtn.addEventListener('click', LoginUser)

function LoginUser() {
    let emailE = email.value
    let passE = password.value

    let emailLs = localStorage.getItem('email')
    let passwordLs = localStorage.getItem('password')

    if(!emailE || !passE) {
        msg.innerHTML = "<p class ='alert alert-danger'> fill all requires fiels</p>"
    }

    if(emailE !=emailLs || passE !=passwordLs){
        msg.innerHTML = "<p class= 'alert alert-danger'>email or password not correct</p>"
    }else {
        alert("Login Successful")
        location.href = 'grocery.html'
    }
}