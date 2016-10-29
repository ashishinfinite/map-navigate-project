//   $.getScript("app.js", function(){

//    alert("Script loaded but not necessarily executed.");

// });
     // TODO: Create a map variable
     var markers=[];
     var map;
     
     function initMap() {
        map=new google.maps.Map(document.getElementById('map'),{
             center:{lat: 23.022505  ,lng: 72.571362},
             zoom:13

       });


        var locations=[
    {title:"Ahmedabad" ,location:{lat: 23.022505  ,lng: 72.571362}},
    {title:"surat",location:{lat:21.17024, lng:72.831061}},
    {title:"Gandhinagar",location:{lat: 23.215635 ,lng:72.636941}},
    {title:"vadodara",location:{lat:22.307159 ,lng:73.181219}}

    ];

    var  largeInfowindow=new google.maps.InfoWindow();
     
      var bounds=new google.maps.LatLngBounds();
     for (var i=0;i<locations.length;i++){
     var marker=new google.maps.Marker({
          map:map,
         position:locations[i].location,
         title:locations[i].title,
         id:1,
         animation: google.maps.Animation.DROP,
     }); 
     


     markers.push(marker);
     //  document.getElementById('closee').addEventListener('click',jesse);
     //   document.getElementById('openee').addEventListener('click',jesse1);
      marker.addListener('click',function(){
         populateInfoWindow(this,largeInfowindow);

     });


    bounds.extend(markers[i].position);
   
    
     }


      
    map.fitBounds(bounds);
           

     }



 //    function jesse(){
 //     var bounds=new google.maps.LatLngBounds();

 //     for (var i=0;i<markers.length;i++){

 //      markers[i].setMap(map);
 //       bounds.extend(markers[i].position);
 //     }
 //      map.fitBounds(bounds);
 //    }

 //    function jesse1(){

 // for (var i=0;i<markers.length;i++){

 //      markers[i].setMap(null);
       
 //     }
 //    }

    function populateInfoWindow(marker,infowindow){

       if (infowindow.marker!=marker){
          infowindow.setContent('<div>'+marker.position+'</div>');
          infowindow.open(map,marker);
          // marker.setAnimation(google.maps.Animation.BOUNCE);
           if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
          infowindow.addListener('closeclick',function(){
          // infowindow.setMarker(null);
       
          });
       }


    }


  

 