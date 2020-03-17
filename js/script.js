// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var picture = $("input").val()
    fetch("https://api.giphy.com/v1/gifs/search?q="+picture+"&rating=pg&api_key=dc6zaTOxFJmzC")
    .then(function(response){
        return response.json();
        
    })
    .then(function(data){
        var pic_url = data.data[0].images.original.url

        $(".container").append(`<img src=` + pic_url + '>');

    });


  
  
});

