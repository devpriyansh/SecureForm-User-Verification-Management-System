let otpInput = document.getElementById("otpInput")

let otp = localStorage.getItem("otp")



function verify(){
    if(otpInput.value == otp){
        
        window.location.href = "./user.html"
        return true
        console.log("object")
    }
    else{
        alert("Wrong OTP")
        return false
    }
}
