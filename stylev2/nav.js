     
/** Dropdown **/
$(document).ready(function(){
      $('profile').on('change', function(){
        var demovalue = $(this).val(); 
          $("div.myDiv").hide();
          $("#show"+demovalue).show();
      });
  });
/** Active Navbar **/
  const li = document.querySelectorAll("a");
  const sec = document.querySelectorAll("section");

  function activeMenu() {
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop) {} 
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
    li.setAttribute("aria-current", "page");
  }
  activeMenu();
  window.addEventListener("scroll", activeMenu);
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }