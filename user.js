
let Username = JSON.parse(localStorage.getItem("users"))
// let userPageRow = document.getElementById("userRowPage")

// console.log(Username)



// Username.map((student)=>{
//     let userData = document.getElementById("userData")
//     return userData.innerText = student.Fullname

// })

// Username.map((student)=>{
//     let mobileNumber = document.getElementById("mobileNumber")
//     return mobileNumber.innerText = student.mobile
// })

// Username.map((student)=>{
//     let userEmail = document.getElementById("userEmail")
//     return userEmail.innerText = student.email
// })

let tableBody = document.getElementById("tableBody")

Username.map((user)=>{
    // let userData = document.getElementById("userData")
    // let mobileNumber = document.getElementById("mobileNumber")
    // let userEmail = document.getElementById("userEmail")
    // userData.innerText += user.Fullname
    // mobileNumber.innerText += user.mobile
    // userEmail.innerText += user.email

    let row = `<tr >
                        <td>
                            ${user.Fullname}
                        </td>
                        <td>
                            ${user.mobile}
                        </td>
                        <td id="userEmail">
                            ${user.email}
                        </td>
                </tr>`

    tableBody.innerHTML += row


    

})




// Username.map((student)=>{
//     return userData.innerHTML = `<h2>Welcome ${student.Fullname} your email is ${student.email} and Mobile number is ${student.mobile}</h2>`
// })
