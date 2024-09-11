//1. Create a rigister form with fields first name, last name , mobile, email, password , confirm password
//2.  Once you submit it should check all the field are filled , if any field is empty display error message on ui , confirm password as well
//3. Once everything is perfect store the data inside an array then store the array inside localStorsge. [{fullname:"john miller",mobile:51616, email:"abc@gmail.com", password:"confrm word"}, {fullname:"john miller",mobile:51616, email:"abc@gmail.com", password:"confrm word"}]
//4. Everytime you are adding a user please check weather weather the user is already available or not inside your local storage (email and mobile)

let fn = document.querySelector("#firstName");
let ln = document.querySelector("#lastName");
let m = document.querySelector("#mobile");
let e = document.querySelector("#email");
let p = document.querySelector("#password");
let cp = document.querySelector("#cnfPass");
let errorShow = document.querySelector("#errorShow");

let users = JSON.parse(localStorage.getItem("users")) || [];

function alertMes() {
  // event.preventDefault();

  


  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  if (fn.value === "" ) {
    errorShow.style.display = "block";
    errorShow.style.color = "red";
    errorShow.innerText = "Please Enter first Name";
    return false;
  } else if (ln.value == "") {
    errorShow.innerText = "Please Enter Last Name";
    errorShow.style.color = "red";
    return false;
  } else if (m.value == "") {
    errorShow.innerText = "Please Enter Mobile Number";
    errorShow.style.color = "red";
    return false;
  } else if (e.value == "") {
    errorShow.innerText = "Please Enter Email";
    errorShow.style.color = "red";
    return false;
  } else if (p.value == "") {
    errorShow.innerText = "Please Enter Password";
    errorShow.style.color = "red";
    return false;
  } else if (cp.value == "") {
    errorShow.innerText = "Please Current Password";
    errorShow.style.color = "red";
    return false;
  } else if (cp.value !== p.value) {
    errorShow.innerText = "Please enter Current Password Same as  Password";
    errorShow.style.color = "red";
    return false;
  }

  if (m.value.length == 11) {
    errorShow.innerText = "mobile number should not be Greater than 10 digit";
    errorShow.style.color = "red";
    return false;
  } else if (m.value != Number(m.value)) {
    errorShow.innerText = "mobile number should not be character";
    errorShow.style.color = "red";
    return false;
  }

  let user = {
    Fullname: fn.value + " " + ln.value,
    mobile: m.value,
    password: p.value,
    email: e.value,
  };

  let checkLocalDataUsers = users.some((cand) => {
    return cand.mobile === m.value || cand.email == e.value;
  });
  
  if (checkLocalDataUsers === false) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  } else {
    alert("User already Exists");
    return false;
  }

  // *****************************************************
  // if (
  //   localStorage.getItem("users") == null &&
  //   checkingValue == true &&
  //   checkMobileF == true
  // ) {
  //   localStorage.setItem("users", JSON.stringify(users));
  // } else {
  //   let arrObj = JSON.parse(localStorage.getItem("users"));

  //   let checkExist = arrObj.some(({ mobile, email }) => {
  //     return email === user.email || mobile === user.mobile;
  //   });

  //   if (checkExist === false) {
  //     arrObj.push(user);
  //     localStorage.setItem("users", JSON.stringify(arrObj));
  //   } else {
  //     alert("User already Exists");
  //   }
  // }
  // ****************************************************
  // info.push(user)
  //     localStorage.setItem("User",JSON.stringify(info))
  // }

  // if(localStorage.getItem(JSON.parse("info")) == info[user]){
  //     alert("User is already present")
  // }

  // info.push(`{Fullname: ${fn.value+" "+ln.value}, mobile: ${m.value}, password: ${p.value}, email: ${e.value} }`)
}

