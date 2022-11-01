$(document).ready(function(){
        $("#carouselExampleControls").carousel({
            interval : 3000
        });
        $(".carousel-control-prev").click(function(){
            $("#carouselExampleControls").carousel("prev");
        });
        $(".carousel-control-next").click(function(){
            $("#carouselExampleControls").carousel("next");
        });
});

function openModalSignIn(){
    document.getElementById('Simplemodal').style.display ="block";
}
function closeModalSingIn(){
    document.getElementById('Simplemodal').style.display ="none";
}

function openModalSignUp(){
    document.getElementById('Simplemodale').style.display ="block";
}
function closeModalSingUp(){
    document.getElementById('Simplemodale').style.display ="none";
}