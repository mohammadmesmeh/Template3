const otherLink = document.querySelector(".other-link");
const megaMnue = document.querySelector(".mega-mnue");

otherLink.onclick= ()=> {
  if( megaMnue.classList.contains("click")){
    megaMnue.classList.remove("click");
  }else{
  megaMnue.classList.add("click");
  }
}

