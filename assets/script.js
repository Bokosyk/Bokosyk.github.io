$(document).ready(function () {

    //Blank for now.
    var cityInput = "";
    var apiKeyOWM = "";
    var apiKeyYoutube = "";
    var userInput = "";

    //Skeleton code for weather API
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKeyOWM;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    console.log(queryURL);

    //QueryURL for youtube playlists still needs to be found.
    var queryURL = "https://www.googleapis.com/youtube/v3/playlists" + userInput + "&appid=" + apiKeyYoutube;
    $.ajax({
        url: queryURL,
        method: "GET"
    })


})