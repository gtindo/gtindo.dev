
function showMenu() {
	let navAction = document.getElementById("nav-action");
	let dropdownMenu = document.getElementById("dropdown-menu");

	let isMenuOpened = navAction.getAttribute("data-open") === "0" ? false : true;

	if(isMenuOpened){
		navAction.setAttribute("src", "/static/img/burger.svg");
		navAction.setAttribute("data-open", "0");
		dropdownMenu.setAttribute("class", "dropdown-menu-deactive");
	}else{
		navAction.setAttribute("src", "/static/img/close.svg");
		navAction.setAttribute("data-open", "1");
		dropdownMenu.setAttribute("class", "dropdown-menu-active")
		}
}