let items=["3 Lt Su İç","50 Sayfa Kitap Oku","Kod Yaz"];
let list=document.querySelector("#mylist");

items.forEach(function(item){
    newElement(item);
});
list.addEventListener("click",function(item){
    if(item.target.tagName='LI'){
        item.target.classList.toggle("checked");
        ToggleDeleteButton();
    }
});
function ToggleDeleteButton(){
    let checkCount=document.querySelectorAll(".checked");
    if(checkCount.length>0){
        document.querySelector("#clearAll").classList.remove("d-none");
    }
    else{
        document.querySelector("#clearAll").classList.add("d-none");
    }
}
document.querySelector('#clearAll').addEventListener('click',function(){
    let element=document.querySelectorAll(".checked");
    element.forEach(function(item){
        item.style.display='none';
    });
    document.querySelector("#clearAll").classList.add("d-none");
});
document.querySelector('#add').addEventListener('click',function(){
    let değer=document.querySelector('#todo').value;
    document.querySelector('#todo').value="";
    if(değer===""){
        document.querySelector('#alertt').classList.remove("d-none");
        return;
    }
    newElement(değer);
});
document.querySelector('#iptal').addEventListener('click',function(){
    document.querySelector('#alertt').classList.add("d-none");
});

function newElement(item){
    let li=document.createElement("li");
    let text=document.createTextNode(item);
    li.className="list-group-item";
    list.appendChild(li);
    li.appendChild(text);

    let span=document.createElement("span");
    let txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick=function(){
        let li=this.parentElement;
        li.style.display='none';
        li.classList.remove("checked");
    }
}