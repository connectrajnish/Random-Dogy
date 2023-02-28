function fetchRandomDogImage(){
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'get',
        success: function(data){
            const imageUrl = data.message;
            $('#dog-image').attr('src', imageUrl);
        }
    });
}


$('.button-85').click(fetchRandomDogImage);

$(document).ready(function() {
    fetchRandomDogImage();
});






//using JS

// //This code ensures that the jQuery code inside the function is executed only after the document has finished loading.
// $(document).ready(function() {

//     function fetchRandomDogImage(){
//         var xhrRequest = new XMLHttpRequest();
        
//         //as the loading completes
//         xhrRequest.onload() = function(){
//             const responseJSON = JSON.parse(xhrRequest.response);
//             const imageUrl = responseJSON.message;
//             $('#dog-image').attr('src', imageUrl);
//         };

//         //intialize the request
//         xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
        
//         //send
//         xhrRequest.send();
        
//     }
    
//     //on button click call the function to generate random dog image
//     $('.button-85').click(fetchRandomDogImage);
// });
  