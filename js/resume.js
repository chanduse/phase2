var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedBD || window.webkitIndexedDB;
if (!idb in window) {
  console.log("indexedDB is not supported");
}
// IndexedDB creation
var request;
var store;
var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
  console.log(paravalue);
}
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function (e){
var request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(error){
console.log("error is occured");

}
open.onsuccess=function(e){
request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue); // get mean one person detail geting output
info.onsuccess=function(data){
  console.log(data.target.result);
 display(data.target.result);
}
}

var left=document.querySelector(".left");
var right=document.querySelector(".right");

function display(pi){
  // console.log("sdhjkbjhdb");
  var image=document.createElement("img");
  image.src="images/add-user.svg";
  image.alt=pi.name;
  left.append(image);

  var br=document.createElement("br");
  left.append(br);


  var name=document.createElement("h2");
  name.textContent=pi.name;
  left.append(name);

  var br1=document.createElement("br");
  left.append(br);


  var age=document.createElement("age");
  age.textContent=pi.age;
  left.append(age);

  var br=document.createElement("br");
  left.append(br);



  var phone_no=document.createElement("nuber");
  phone_no.textContent=pi.phone_no;
  left.append(phone_no);

  var br=document.createElement("br");
  left.append(br);


  var mail=document.createElement("mail");
  mail.textContent=pi.mail;
  left.append(mail);

  var br=document.createElement("br");
  left.append(br);


  var designation=document.createElement("designation");
  designation.textContent=pi.designation;
  left.append(designation);

  var car=document.createElement("h2");
  car.textContent="Career_objective";
  right.append(car);

  var hr=document.createElement("hr");
  right.append(hr);

  var care=document.createElement("h2");
  care.textContent=pi.career;
  right.append(care);


  var car=document.createElement("h2");
  car.textContent="Education detail";
  right.append(car);

  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
  table.border="1";
  var tr3="<tr><td>Education detail</td></tr>";
  var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>";
  var tr2="";
  for (var i in pi.Education) {
   tr2=tr2+"<tr><td>"+pi.Education[i].institue+"</td><td>"+pi.Education[i].branch+"</td><td>"+pi.Education[i].year+"</td><td>"+pi.Education[i].percentage+"</td></tr>";
  }

  table.innerHTML=tr1+tr2;

  right.append(table);

  var car=document.createElement("h2");
  car.textContent="Skills";
  right.append(car);

  var skl=document.createElement("hr");
  right.append(skl);

  var skill=document.createElement("h2");
  skill.textContent=pi.skills;
  right.append(skill);

  }
