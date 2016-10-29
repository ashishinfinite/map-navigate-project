var info=[
    {title:"Ahmedabad" ,location:{lat: 23.022505  ,lng: 72.571362},id:1},
    {title:"surat",location:{lat:21.17024, lng:72.831061},id:1},
    {title:"Gandhinagar",location:{lat: 23.215635 ,lng:72.636941},id:1},
    {title:"vadodara",location:{lat:22.307159 ,lng:73.181219},id:1}


]
var model=function(){

var self=this;

self.top_nav_heading="GUJARAT LOCATIONS";

self.placeArray=ko.observableArray([]);

info.forEach(function(infos){
self.placeArray().push(new maps(infos));


});


self.close=function() {   

  document.querySelector(".container").classList.toggle("slides");
  document.querySelector("#map").classList.toggle("marg");

}
 
 self.input_place=ko.observable("");

 self.validation=ko.computed(function(){
      
      
      self.placeArray().forEach(function(obj,i){
           
          if( obj.title()===self.input_place() ){
             //obj.title('ok');
             obj.id(1);
          }
           else if ((obj.title()!==self.input_place())&& self.input_place()!==''){
            // console.log(self.input_place());
                obj.id(0);
           }
      });


});


}// end of models


ko.applyBindings(new model());
  

 function ashish(){
       document.querySelector("#map").innerHTML="<div class='ee'>FAILED TO FETCH  RESOURCE</div>";
    }


function maps(data){
  this.title=ko.observable(data.title);
  this.location=ko.observable(data.location);
  this.id =ko.observable(data.id);

}