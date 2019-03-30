function submitData() {
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
    var age=document.querySelector("#age").value;
    var phone_no=document.querySelector("#phone_no").value;
    var mail=document.querySelector("#mail").value;
    var designation=document.querySelector("#Designation").value;

  var ginstitue=document.querySelector("#ginstitue").value;
  var select_branch=document.querySelector("#select_branch").value;
  var year=document.querySelector("#year").value;
  var percentage=document.querySelector("#percentage").value;

  var college=document.querySelector("#college").value;
  var branch=document.querySelector("#group").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercentage=document.querySelector("#ipercentage").value;

  var sinstitute=document.querySelector("#school").value;
  var board=document.querySelector("#sbranch").value;
  var syear=document.querySelector("#syear").value;
  var spercentage=document.querySelector("#spercentage").value;

  var skills=document.querySelector("#skills").value;
  var submit=document.querySelector("#submit").value;

  var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedBD || window.webkitIndexedDB;
  if (!idb in window) {
    console.log("indexedDB is not supported");
  }
  // IndexedDB creation
  var request;
  var store;
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
  store.put({

    career:career,
    name:name,
    age:age,
    phone_no:phone_no,
    mail:mail,
    designation:designation,
  Education:  [
      {
    institue:ginstitue,
    branch:select_branch,
    year:year,
    percentage:percentage
  },
  {
    institue:college,
    branch:branch,
    year:iyear,
    percentage:ipercentage
  },
  {
    institue:sinstitute,
    branch:board,
    year:syear,
    percentage:spercentage
  }],
    skills:skills

  });
}
  window.open("index.html");
}
