//Tabbed Menu
function openMenu(event, menuName) {
    let i, menuArray, tablinks;
    menuArray = document.getElementsByClassName("menu");
    for (i = 0; i < menuArray.length; i++) {
       menuArray[i].style.display = "none";
    }

        tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {  // This should be tablinks.length
       tablinks[i].classList.remove("active-tab");  // Using classList for better readability
    }

    document.getElementById(menuName).style.display = "block";
  event.currentTarget.classList.add("active-tab");  // Using classList for better readability
}

document.getElementById("mainLink").click(); // Auto-clicks the Pizza tab when the page loads

