let navAction = document.getElementById("nav-action");
let dropdownMenu = document.getElementById("dropdown-menu");

navAction.addEventListener('click', function(){
	let isMenuOpened = this.getAttribute("data-open") === "0" ? false : true;

	if(isMenuOpened){
    this.setAttribute("src", "/static/img/burger.svg");
		this.setAttribute("data-open", "0");
		dropdownMenu.setAttribute("class", "dropdown-menu-deactive");
	}else{
		this.setAttribute("src", "/static/img/close.svg");
		this.setAttribute("data-open", "1");
		dropdownMenu.setAttribute("class", "dropdown-menu-active")
		}
})