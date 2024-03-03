let element;

window.addEventListener("keydown", function(event){
  if(event.code == "Backspace" && event.altKey && element != undefined){
    element.remove();
    document.getElementById("numlistSettings").style.display = "none";
    document.getElementById("textSettings").style.display = "none";
    document.getElementById("textField").style.display = "none";
  }
});

let x = 0;
let y = 0;

function drag(e){
  e = e || window.event;
  e.preventDefault();
  x = e.clientX;
  y = e.clientY;
  document.onmouseup = cancelDrag;
  document.onmousemove = moveElm;
}

function moveElm(e){
  e = e || window.event;
  e.preventDefault();
  x = e.clientX;
  y = e.clientY;
  element.style.left = x + "px";
  element.style.top = y + "px";
}

function cancelDrag(){
  document.onmouseup = null;
  document.onmousemove = null;
}

//text functions below

function addText(){
  let textElm = document.createElement("p");
  textElm.innerText = "Hello world!";
  textElm.onclick = displayTextSettings;
  textElm.onmousedown = drag;
  textElm.style.position = "absolute";
  textElm.style.left = "250px";
  textElm.style.top = "100px";
  document.getElementById("workspace").appendChild(textElm);
  console.log(document.body.offsetWidth);
  console.log(document.body.offsetHeight);
}

function displayTextSettings(e){
  document.getElementById("numlistSettings").style.display = "none";
  document.getElementById("textSettings").style.display = "block";
  document.getElementById("textField").style.display = "none";
  document.getElementById("btnSettings").style.display = "none";
  document.getElementById("linker").style.display = "none";
  element = e.target;
  document.getElementById("textVal").value = element.innerText;
  let compStyle = window.getComputedStyle(element);
  let fontsize = compStyle.getPropertyValue("font-size");
  document.getElementById("textSize").value = fontsize.replace("px", "");

}

function changeText(){
  element.innerText = document.getElementById("textVal").value;
}

function changeTextColor(){
  element.style.color = document.getElementById("textCol").value;
}

function changeFontsize(){
  element.style.fontSize = document.getElementById("textSize").value + "px";
}

function changeTxtId(){
  element.id = document.getElementById("changeTxtId").value;
}

//numlist funcs below

let num = 1;

function addNumList(){
  let listElm = document.createElement("ol");
  let listElmComp = document.createElement("li");
  listElmComp.innerText = "Hello world!";
  listElm.appendChild(listElmComp);
  listElm.onclick = displayNumlists;
  listElm.onmousedown = drag;
  listElm.style.position = "absolute";
  listElm.style.left = "250px";
  listElm.style.top = "100px";
  document.getElementById("workspace").appendChild(listElm);
}

function displayNumlists(e){
  document.getElementById("numlistSettings").style.display = "block";
  document.getElementById("textSettings").style.display = "none";
  document.getElementById("textField").style.display = "none";
  document.getElementById("btnSettings").style.display = "none";
  document.getElementById("linker").style.display = "none";
  element = e.target.parentElement;
  for(let i = 1; i < num+1; i++){
    document.getElementById("listElm" + num.toString()).value = element.parentElement.children[0].innerText;
  }
}

function addNumlistComp(){
  num+=1;
  let id = "listElm" + num.toString();
  let newComp = document.createElement("input");
  newComp.type = "text";
  newComp.id = id;
  newComp.setAttribute("onchange", "changeNumlist(" + num.toString() + ");")
  document.getElementById("listLis").appendChild(newComp);
  element.appendChild(document.createElement("li"));
}

function changeNumlist(listnum){
  element.children[listnum-1].innerText = document.getElementById("listElm" + listnum).value;
}

function setListType(){
  element.type = document.getElementById("listType").value;
}

function numlistColor(){
  for(let i=0; i < element.children.length; i++){
    element.children[i].style.color = document.getElementById("numlistColor").value;
  }
}

function changeListId(){
  element.id = document.getElementById(changeListId).value;
}

//image functions below

function addUrl(){

  let link = document.createElement("img");
  link.src="https://www.shareicon.net/data/2015/10/07/652352_connection_512x512.png";

  link.height = 20; link.width = 20;

  link.style.position = "absolute";
  link.onmousedown = drag;
  link.style.position = "absolute";
  link.style.left = "250px";
  link.style.top = "100px";

  document.getElementById("workspace").appendChild(link);
  console.log("link added");

  link.onclick = redirect;
}

function redirect(e) {

  if (event.detail === 1) {
    var text = document.getElementById("linker");
    text.style.display = "block";
    document.getElementById("textSettings").style.display="none";
    document.getElementById("btnSettings").style.display = "none";
    document.getElementById("textField").style.display = "none";
    element = e.target;
    element.href = document.getElementById("link").value
   } else if (event.detail === 2) {
    window.location.href = element.href;
   }

}

function changelink() {
  element.href = document.getElementById("url").value;
}

function changeLinkId(){
  element.id = document.getElementById("changeLinkId").value;
}


function addImg(){

  let imgElm = document.createElement("img");
  imgElm.src="https://i.ytimg.com/vi/89DrqcdMPj0/maxresdefault.jpg";
  imgElm.height = 100;
  imgElm.width = 120;
  imgElm.onmousedown = drag;
  imgElm.style.position = "absolute";
  imgElm.style.left = "250px";
  imgElm.style.top = "100px";
  document.getElementById("workspace").appendChild(imgElm);
  console.log("image added");

  imgElm.onclick = printmsg;

}

function printmsg(e) {
    var text = document.getElementById("textField");
    text.style.display = "block";
    document.getElementById("textSettings").style.display="none";
    document.getElementById("numlistSettings").style.display = "none";
    document.getElementById("btnSettings").style.display = "none";
    document.getElementById("linker").style.display = "none";
    element = e.target;

    document.getElementById("url").value = element.src;
    document.getElementById("height").value = element.height;
    document.getElementById("width").value = element.width;
}

function stuff() {
  element.src = document.getElementById("url").value;
  element.height = document.getElementById("height").value;
  element.width = document.getElementById("width").value;

}

function changeImgId(){
  element.id = document.getElementById("changeImgId").value;
}

function addBtn(){
  let newBtn = document.createElement("button");
  newBtn.innerHTML = "Button";
  document.getElementById("workspace").appendChild(newBtn);
  newBtn.style.position = "absolute";
  newBtn.style.left = "250px";
  newBtn.style.top = "100px";
  newBtn.onclick = displayBtnSettings;
  newBtn.onmousedown = drag;
}

function displayBtnSettings(e){
  document.getElementById("btnSettings").style.display = "block";
  document.getElementById("textSettings").style.display="none";
  document.getElementById("numlistSettings").style.display = "none";
  document.getElementById("textField").style.display = "none";
  document.getElementById("linker").style.display = "none";
  element = e.target;
  document.getElementById("btnScrpt").value = element.getAttribute(onclick);
}

function btnLabel(){
  element.innerHTML = document.getElementById("btnLabel").value;
}

function btnScrpt(){
  element.onclick = function(){eval(document.getElementById("btnScrpt").value)};
}

function displayCode(){
  let codeToShow = document.getElementById("workspace").innerHTML;
  let page = window.open("code.html", "_blank");
  page.addEventListener('DOMContentLoaded', () => {
    if(codeToShow == ""){
      page.document.getElementById("codeDisplay").innerText = "No code to show. :(";
    }else{
      page.document.getElementById("codeDisplay").innerText = codeToShow;
    }
  })
}