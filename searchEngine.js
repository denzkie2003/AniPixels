


function searchAnime() {



  var input, filter, ol, li, a, i, txtValue, divShow;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  
  divShow = document.getElementById('notFound');
  
  ol = document.getElementById("resultFound");
  li = ol.getElementsByTagName('li');
 
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      
      li[i].style.display = "block";
      
    } else {
      
      li[i].style.display = "none";
    
    }
   
      
  }
}