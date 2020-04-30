var hidenav;

function hide(){
	jQuery('.navhold').hide();
}

function delayHide(){
	hidenav = window.setTimeout(hide, 10000);
}

delayHide();