  var markers=[];
     var map;
     
     // TODO: Complete the following function to initialize the map
  


     function initMap() {


      var styles=[
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
           
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
         
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ];
       map=new google.maps.Map(document.getElementById('map'),{
             center:{lat: 23.022505  ,lng: 72.571362},
             zoom:13,
             styles:styles,
             mapTypeControl:false

       });


        var locations=[
  {title:"Ahmedabad" ,location:{lat: 23.022505  ,lng: 72.571362},id:1},
    {title:"surat",location:{lat:21.17024, lng:72.831061},id:2},
    {title:"Gandhinagar",location:{lat: 23.215635 ,lng:72.636941},id:3},
    {title:"vadodara",location:{lat:22.307159 ,lng:73.181219},id:4}

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

   function jesse1(){

 for (var i=0;i<markers.length;i++){

      markers[i].setMap(null);
       
     }
    }

    function populateInfoWindow(marker,infowindow){

       if (infowindow.marker!=marker){
         infowindow.marker = marker;
          infowindow.setContent('<div>'+marker.position+'</div>');
          infowindow.open(map,marker);
          // marker.setAnimation(google.maps.Animation.BOUNCE);
           if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
          infowindow.addListener('closeclick',function(){
           infowindow.setMarker(null);
       
          });
       }


    }

