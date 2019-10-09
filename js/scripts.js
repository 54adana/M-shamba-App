$(document).ready(function(){
    $(" blank form").click(function(event){
        var name= $("input#name").val();
        event.preventDefault();

        alert("Hi," + name + " , " + "Your email will be replied shortly"+"thank you for the feedback!");

        
    });
});