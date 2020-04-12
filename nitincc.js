  function live(){
  alert("First log in who ever you are !");
}
function myfunction(){
  let x=document.getElementById('myInput');
  let y=document.getElementById('eye_open');
  let z=document.getElementById('hide');

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
    }
    else {
      x.type = "password";
      y.style.display = "none";
      z.style.display = "block";
    }
}
function myfunction1(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  a.style.display = "block";
  b.style.display = "none";
}
function myfunction2(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  a.style.display = "none";
  b.style.display = "block";
}
function myfunction11(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  a.style.display = "none";
  b.style.display = "none";
}
function myfunction22(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  a.style.display = "none";
  b.style.display = "none";
}
function myfunction_up(){
  let p=document.getElementById('up_password');
  let q=document.getElementById('up_eye_open_id');
  let r=document.getElementById('up_hide_id');
  if (p.type === 'password') {
    p.type = "text";
    q.style.display = "block";
    r.style.display = "none";
  }
  else {
    p.type = "password";
    q.style.display = "none";
    r.style.display = "block";
  }
}

function myfunction_up2(){
  let p=document.getElementById('up_password2');
  let q=document.getElementById('up_eye_open_id2');
  let r=document.getElementById('up_hide_id2');
  if (p.type === 'password') {
    p.type = "text";
    q.style.display = "block";
    r.style.display = "none";
  }
  else {
    p.type = "password";
    q.style.display = "none";
    r.style.display = "block";
  }
}
function head_cyber(){
  let h=document.getElementById('head_cyber_h');
  let l=50;
  h.style.left= l + "px";
}
function head_cyber2(){
  let h=document.getElementById('head_cyber_h');
  let l=200;
  h.style.left= l + "px";
}
function signin(){
  let email=document.getElementById('email').value;
  let password=document.getElementById('myInput').value;
  if (email == "") {
    alert("Please enter your email !")
  }
  if (email == "Abhishek@123") {
    if (password == "") {
      alert("Please enter your Password !");
    }
    if (password == "dulat123") {
      alert("Hello ji Welcome to A.D ");
    }
    else {
      alert("Password is incorrect ");
    }
  }
  else {
    alert("email and password is incorrect");
  }
}
