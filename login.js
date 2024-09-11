let loginShow = document.getElementById("loginShow")
let loginForm = document.getElementById("loginForm")

let otp;

function login(e){
    // e.preventDefault();


    // 

    let loginEmail = document.getElementById("loginEmail")
    let emailValue = loginEmail.value

    let loginPass = document.getElementById("loginPassword")
    let PassValue = loginPass.value

    let loginArrObj = JSON.parse(localStorage.getItem("users"))

    console.log(loginArrObj)

    let checkAvailable = loginArrObj.some(({email , password})=>{
        return email===emailValue && password === PassValue
    })

    


    if(checkAvailable === true){
        // e.preventDefault()
        loginShow.innerText = "You logged in succesfully"
        otp = Math.floor(Math.random()*100000+1);
        localStorage.setItem("otp",otp)
        // window.location.href = "./otp.html"
        return true

        
        // console.log(userName.innerText)

        

    }
    else{
        // e.preventDefault()
        loginShow.innerText = "User not registered"
        return false
    }



}
