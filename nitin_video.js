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
function thumbs_up(){
  let v=document.getElementById('thumbs_up');
  let x=document.getElementById('thumbs_up1');
  let y=document.getElementById('thumbs_down');
  let z=document.getElementById('thumbs_down1');
  v.style.display= "none";
  x.style.display= "block";
  y.style.display= "none";
  z.style.display= "block";
}
function thumbs_up1(){
  let v=document.getElementById('thumbs_up');
  let x=document.getElementById('thumbs_up1');
  let y=document.getElementById('thumbs_down');
  let z=document.getElementById('thumbs_down1');
  v.style.display= "block";
  x.style.display= "none";
  y.style.display= "none";
  z.style.display= "block";
}
function thumbs_down(){
  let v=document.getElementById('thumbs_up');
  let x=document.getElementById('thumbs_up1');
  let y=document.getElementById('thumbs_down');
  let z=document.getElementById('thumbs_down1');
  v.style.display= "none";
  x.style.display= "block";
  y.style.display= "none";
  z.style.display= "block";
}
function thumbs_down1(){
  let v=document.getElementById('thumbs_up');
  let x=document.getElementById('thumbs_up1');
  let y=document.getElementById('thumbs_down');
  let z=document.getElementById('thumbs_down1');
  v.style.display= "none";
  x.style.display= "block";
  y.style.display= "block";
  z.style.display= "none";
}
function save(){
  let s=document.getElementById('save');
  s.style.border="thin solid yellow";
}
function SubscribeC(){
  let s=document.getElementById('Subscribe');
  s.style.backgroundColor= "white";
  s.style.color= "#992B11";
}
function comment(){
  let aa=document.getElementById('comment_v').value;
  let ab=document.getElementById('comment1');
  ab.innerHTML= aa;
}
function signin(){
  let email=document.getElementById('email').value;
  let password=document.getElementById('myInput').value;
  if (email == "Abhishek@123") {
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


function video1() {
  let a=document.getElementById('video2');
  let b=document.getElementById('video1');
  let c=document.getElementById('part-3');
  let d=document.getElementById('part-21');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=40;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video11() {
  let b=document.getElementById('video1');
  let a=document.getElementById('video2');
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=40;
  let wx1=400;
  let hy1=170;
  b.style.left=x+"px";
  b.style.top=y+"px";
  b.style.width=wx+"px";
  b.style.height=hy+"px";
  a.style.left=x1+"px";
  a.style.top=y1+"px";
  a.style.width=wx1+"px";
  a.style.height=hy1+"px";
}

function video2() {
  let a=document.getElementById('video3');
  let b=document.getElementById('video2');
  let c=document.getElementById('part-4');
  let d=document.getElementById('part-31');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=230;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video21() {
  let a=document.getElementById('video1');
  let b=document.getElementById('video2');
  let c=document.getElementById('part-3');
  let d=document.getElementById('part-21');
  let e=document.getElementById('part-1');
  let f=document.getElementById('part-2');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=40;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}


function video3() {
  let a=document.getElementById('video4');
  let b=document.getElementById('video3');
  let c=document.getElementById('part-5');
  let d=document.getElementById('part-41');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=420;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video32() {
  let a=document.getElementById('video2');
  let b=document.getElementById('video3');
  let c=document.getElementById('part-3');
  let d=document.getElementById('part-21');
  let e=document.getElementById('part-4');
  let f=document.getElementById('part-31');
  c.style.display="block";
  d.style.display="block";
  e.style.display="none";
  f.style.display="none";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=230;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video4() {
  let a=document.getElementById('video5');
  let b=document.getElementById('video4');
  let c=document.getElementById('part-6');
  let d=document.getElementById('part-51');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=610;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video43() {
  let a=document.getElementById('video3');
  let b=document.getElementById('video4');
  let c=document.getElementById('part-5');
  let d=document.getElementById('part-41');
  let e=document.getElementById('part-4');
  let f=document.getElementById('part-31');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=420;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video5() {
  let a=document.getElementById('video6');
  let b=document.getElementById('video5');
  let c=document.getElementById('part-7');
  let d=document.getElementById('part-61');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=800;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video54() {
  let a=document.getElementById('video4');
  let b=document.getElementById('video5');
  let c=document.getElementById('part-6');
  let d=document.getElementById('part-51');
  let e=document.getElementById('part-5');
  let f=document.getElementById('part-41');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=610;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}
function video6() {
  let a=document.getElementById('video7');
  let b=document.getElementById('video6');
  let c=document.getElementById('part-8');
  let d=document.getElementById('part-71');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=990;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video65() {
  let a=document.getElementById('video5');
  let b=document.getElementById('video6');
  let c=document.getElementById('part-7');
  let d=document.getElementById('part-61');
  let e=document.getElementById('part-6');
  let f=document.getElementById('part-51');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=800;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video7() {
  let a=document.getElementById('video8');
  let b=document.getElementById('video7');
  let c=document.getElementById('part-9');
  let d=document.getElementById('part-81');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=1180;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video76() {
  let a=document.getElementById('video6');
  let b=document.getElementById('video7');
  let c=document.getElementById('part-8');
  let d=document.getElementById('part-71');
  let e=document.getElementById('part-7');
  let f=document.getElementById('part-61');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=990;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}
function video8() {
  let a=document.getElementById('video9');
  let b=document.getElementById('video8');
  let c=document.getElementById('part-10');
  let d=document.getElementById('part-91');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=1370;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video87() {
  let a=document.getElementById('video7');
  let b=document.getElementById('video8');
  let c=document.getElementById('part-9');
  let d=document.getElementById('part-81');
  let e=document.getElementById('part-8');
  let f=document.getElementById('part-71');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=1180;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video9() {
  let a=document.getElementById('video10');
  let b=document.getElementById('video9');
  let c=document.getElementById('part-11');
  let d=document.getElementById('part-101');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1560;
  let y1=1180;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video98() {
  let a=document.getElementById('video8');
  let b=document.getElementById('video9');
  let c=document.getElementById('part-10');
  let d=document.getElementById('part-91');
  let e=document.getElementById('part-9');
  let f=document.getElementById('part-81');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=1370;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}
function video10() {
  let a=document.getElementById('video11');
  let b=document.getElementById('video10');
  let c=document.getElementById('part-12');
  let d=document.getElementById('part-111');
  c.style.display="block";
  d.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1560;
  let y1=1560;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}

function video109() {
  let a=document.getElementById('video9');
  let b=document.getElementById('video10');
  let c=document.getElementById('part-11');
  let d=document.getElementById('part-101');
  let e=document.getElementById('part-10');
  let f=document.getElementById('part-91');
  c.style.display="none";
  d.style.display="none";
  e.style.display="block";
  f.style.display="block";
  let x=50;
  let y=20;
  let wx=1000;
  let hy=425;
  let x1=1100;
  let y1=1370;
  let wx1=400;
  let hy1=170;
  a.style.left=x+"px";
  a.style.top=y+"px";
  a.style.width=wx+"px";
  a.style.height=hy+"px";
  b.style.left=x1+"px";
  b.style.top=y1+"px";
  b.style.width=wx1+"px";
  b.style.height=hy1+"px";
}
