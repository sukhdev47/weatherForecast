function GetInfo(){
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML=   "--"+newName.value+"--" ;
    const apikey="appid";





    let audioturn=new Audio("ting.mp3");




    let music= new Audio("birds.mp3");



    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=eae6a70ee34906b2fdd2df15b3f0c115')

.then(response=> response.json())
.then(data=>{
    
    for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+"temp").innerHTML="Temperature: " + Number(data.list[i].main.temp -273).toFixed(1)+"°";
    }
    for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+"feels_like").innerHTML="Feels_like: " + Number(data.list[i].main.feels_like -273).toFixed(1)+"°";
    }
    for(i=0; i<5; i++){

        document.getElementById("img" + (i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
       
}


for(i=0; i<5; i++){
    document.getElementById("day" + (i+1)+ "description").innerHTML="Description: " + String(data.list[i].weather[0].description);
}
}

)    



    .catch(err=> alert("City not found!"))

audioturn.play();   


}















  

const d=new Date();
const weekday=["Sunday", "Monday", "Tuesday" , "Wednesday", "Thursday","Friday", "Saturday"];
function CheckDay(day){
    if(day+d.getDay()>6){
        return day + d.getDay()-7;
    }
    else{
        return day+d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML=weekday[CheckDay(i)];
}













