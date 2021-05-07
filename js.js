

function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('s').addEventListener('click',open_close);

var menuState = 0;
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("search").style.width = "70%";
     document.getElementById('searchDiv').style.width = '100%';
  }
  else {
     menuState = 0;
     document.getElementById("search").style.width = "0";
     document.getElementById('searchDiv').style.width = '0';
  }
 
}

