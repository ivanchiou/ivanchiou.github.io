$("header").load("layout/header.html", function(){
  let searchInputBox = document.querySelector('input[name="search"]');
  let searchAutoCompleteBox = document.querySelector(".search-autocomplete");
  searchInputBox.onkeyup = function () {
    if (searchInputBox.value) {
      searchAutoCompleteBox.setAttribute("style", "display:block");
    } else {
      searchAutoCompleteBox.setAttribute("style", "display:none");
    }
  };
  
  searchInputBox.onblur = function () {
    searchAutoCompleteBox.setAttribute("style", "display:none");
  };
})

function mouseover_on_nav_item(item) {
  if (item.querySelector(".nav-submenu")) {
    item.querySelector(".nav-submenu").setAttribute("style", "display:block");
  }
}

function mouseout_on_nav_item(item) {
  item.querySelector(".nav-submenu").setAttribute("style", "display:none");
}

$("nav").load("layout/nav.html");
$("footer").load("layout/footer.html");