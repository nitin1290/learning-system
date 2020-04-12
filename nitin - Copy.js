function video(){
  alert("Enjoy AD hub video !");
  window.open("nitin_video.html");
  window.close();
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
  let c=document.getElementById('mid');
  let d=100;
  a.style.display = "block";
  b.style.display = "none";
  c.style.left=d+"px";
}
function my1function1(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  let c=document.getElementById('mid');
  let d=200;
  c.style.left=d+"px";
  a.style.display = "none";
  b.style.display = "none";

}
function myfunction2(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  let c=document.getElementById('mid');
  let d=100;
    c.style.left=d+"px";
  a.style.display = "none";
  b.style.display = "block";
}
function next_me(){
  let e=document.getElementById('up_fullname').value;
  let f=document.getElementById('up_email').value;
  let g=document.getElementById('up_phone').value;
  let h=document.getElementById('up_password').value;
  let i=document.getElementById('up_password2').value;
  if (e == "" || f == "" || g == "" || h == "" || i == "") {
    alert("please complete the form");
  }
  if (g.length < 10) {
    alert("phone number is not correct");
  }


  if (h == i) {
    alert("Welcome to A.D Education hub");
    let z=prompt("what you like to do (cyber security(1))or(webdesigning(2))");
    if (z == "") {
      alert("please write something!");
    }
    if (z == 1) {

    window.open("nitincc.html");
    window.close();
    }
    else if (z == 2) {
    window.open("nitin_programmer.html");
    window.close();
    }
  }
  else {
    alert("password and conform password not match ! ");
  }
}

function my2function2(){
  let a=document.getElementById('sign_in');
  let b=document.getElementById('sign_up');
  let c=document.getElementById('mid');
  let d=200;
    c.style.left=d+"px";
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
function signin(){
  let email=document.getElementById('email').value;
  let password=document.getElementById('myInput').value;
  if (email == "AD@gmail.com") {
    if (password == "9992908567") {
      alert("Welcom to A.D Education hub");


      let z=prompt("what you like to do (cyber security(1))or(webdesigning(2))");
      if (z == "") {
        alert("please write something!");
      }
      if (z == 1) {

      window.open("nitincc.html");
      window.close();
      }
       if (z == 2) {
      window.open("nitin_programmer.html");
      window.close();
      }


    }
    else {
      alert("Password is incorrect ,or you are not registered!");
    }
  }
  else {
    alert("email and password is incorrect");
  }
}
function cyber_me(){
  let a=prompt("if you are member say yes & if not say no :");
  let b=document.getElementById('sign_in');
  let e=document.getElementById('sign_up');
  if (a == "yes") {
    alert("please Sign in ");
    let c=document.getElementById('mid');
    let d=100;
    c.style.left=d+"px";
    b.style.display="block";
  }
  if (a == "no") {
    alert("please Sign up ");
    let c=document.getElementById('mid');
    let d=100;
    c.style.left=d+"px";
    e.style.display="block";
  }
}


function email_id_me(){
  let a=document.getElementById('show_me1');
  let b=document.getElementById('show_me2');
  a.style.display="block";
  b.style.display="none";
}
function call_me_baby(){
  let a=document.getElementById('show_me1');
  let b=document.getElementById('show_me2');
  a.style.display="none";
  b.style.display="block";
}

function email_id_me1(){
  let a=document.getElementById('show_me1');
  let b=document.getElementById('show_me2');
  a.style.display="none";
  b.style.display="none";
}
function call_me_baby1(){
  let a=document.getElementById('show_me1');
  let b=document.getElementById('show_me2');
  a.style.display="none";
  b.style.display="none";
}
