var info=[
{
 place:"Ahmedabad",
 coordinate:{langi:20.25 ,longi:23.45},
 discription:"this is ahmedabad",
 title:"abd"
},

{
 place:"Anand",
 coordinate:{langi:20.25 ,longi:23.45},
 discription:"this is anand",
 title:"and"
},

{
 place:"Gandhinagar",
  coordinate:{langi:20.25 ,longi:23.45},
 discription:"this is Gandhinagar",
 title:"gandhi"
},

{
 place:"Surat",
  coordinate:{langi:20.25 ,longi:23.45},
 discription:"this is Gandhinagar",
 title:"sur"
},


]
var model=function(){

this.placeArray=ko.observableArray([]);

for (var i=0;i<info.length;i++)	{

this.placeArray().push(info[i]);
}

//this function will be used for closing the side-nav
// this.close=function() {   

// 	document.getElementById()
// }
 
 this.input_place=ko.observable("");
 
}
ko.applyBindings(new model());
//ko.applyBindings(input,document.getElementById("input"));