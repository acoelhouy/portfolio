$(document).ready(function () {
ChargeNewInfo();
GetMenu();


});

    

//By default we set spanish as the main language
var Language = localStorage.getItem("language");
if(!Language){
localStorage.setItem("language", "es");
}else{
    localStorage.setItem("language", Language);  
}
$("#English").click(function(){
    localStorage.setItem("language", "en");

    location.reload();
});

$("#Spanish").click(function(){
    localStorage.setItem("language", "es");

    location.reload();
});



function ChargeNewInfo(){    
    $.getJSON("./data/about-me.json", function(data){
            let InfoToShow = [];
            Language == "es" ? InfoToShow.push(data.spanish) : InfoToShow.push(data.english);
            InfoToShow.forEach(function(info){
                let FirstIntro = info.content.FirstIntro; 
                let PersonalInfo = info.content.Personalinfo; 
        
                $("#Presentation").append("<span class='bracket-1'>({</span>" + FirstIntro+ "<span class='bracket-2'>});</span>").hide().fadeIn();
                
                $("#Personalinfo").append(PersonalInfo).hide().fadeIn();
                


      

                }
            );
    }).fail(function(){
        console.log("Failure loading personal info");
    });
    }
  
function GetMenu(){
    $.getJSON("./data/fixed-menu.json", function(data){
        let MenuToShow = [];
        Language == "es" ? MenuToShow.push(data.spanish) : MenuToShow.push(data.english);
        MenuToShow.forEach(function(info){

            for(let element in info){
   
                let URL = info[element].Link;
                let Alt = info[element].Alt;
                let Name = info[element].NameMenu;
                let FullNode = "<li class='element-menu'><a href='"+URL+"' alt='"+Alt+"'>"+Name+"</a></li>";
                $("#MainMenu").append(FullNode);              
            }
            
            }
        );
}).fail(function(){
    console.log("Failure on load menu");
});

}    