function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password,cpassword)
}
function checkusername(username){
    if(username.length>7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('usernameerror').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('usernameerror').innerHTML='username must be 8 letters'
    }
}
function checkemail(email){
    if(email.length>8 && email.includes('@gmail')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('emailerror').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('emailerror').innerHTML='email must be 9 letters and include @gmail'
    }
}
function checkpassword(password){
    if(password.length>7){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('passworderror').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('passworderror').innerHTML='password must be 8 letters'
    }
}
function checkpasswordsmatch(password, cpassword){
    if(password == cpassword && password!=''){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassworderror').innerHTML=''
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassworderror').innerHTML='please check your password'
    }
}
