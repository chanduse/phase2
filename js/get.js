// check browser compactaility

  var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedBD || window.webkitIndexedDB;
  if (!idb in window) {
    console.log("indexedDB is not supported");
  }
  // IndexedDB creation
  var request;
  var store;
  var open=idb.open("storeData",1);
  console.log("IndexedDB is created");
  // events perform after create indexedDB
  // events are onupgradeneeded, onerror, on onsuccess events
  // onupgradeneeded event
open.onupgradeneeded=function (e){
  var request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
// onerror event
open.onerror=function(error){
  console.log("error is occured");

}

// onsuccess event
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info = store.getAll(); // to get ALL user in output
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }

}
var parent=document.querySelector(".parent");
function display(d){
for (var i = 0; i < d.length; i++) {

  var child=document.createElement("div");
  child.classList.add("child");


  var image=document.createElement("img");
  image.src="images/profile.svg";
  image.alt=d[i].name;


  var name=document.createElement("h2");
  name.textContent=d[i].name;


  var link=document.createElement("a");
  link.classList.add("link");
  link.textContent="viewprofile";
  link.href="resume.html?id="+d[i].id;


  child.append(image);
  child.append(name);
  child.append(link);
  parent.append(child);

}
}
