$(document).ready(function () {
    //$('#baricon').hide();
    $('#titlelist').hide();
    $('#hometitle').hide();
    $('#weathertitle').hide();
    $('#forecasttitle').hide();
    $('#developertitle').hide();
    $('#baricon').click(function () {
        $('#titlelist').show();
        $('#hometitle').slideToggle(500);
        $('#weathertitle').slideToggle(500);
        $('#forecasttitle').slideToggle(500);
        $('#developertitle').slideToggle(500);
    });

});

document.getElementById('homebtn').onclick=function(){
    location.href=('/')
}
document.getElementById("hometitle").onclick = function () {
    location.href = "/";
}

document.getElementById('weathertitle').onclick = function () {
    location.href = ('pune')
}
document.getElementById('weatherbtn').onclick = function () {
    location.href = ('pune')
}

document.getElementById('forecastbtn').onclick = function () {
    location.href = ('forecasting')
}
document.getElementById('forecasttitle').onclick = function () {
    location.href = ('forecasting')
}

var loader = document.getElementById("loading");

function loadFunc() {
    loader.style.display = "none";
    document.getElementById("yt1").style.display = "none";
    document.getElementById("yt2").style.display = "none";
    document.getElementById("yt3").style.display = "none";
}