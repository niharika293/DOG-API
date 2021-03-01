// The script has 3 ways to send AJAX Requests.
// Plain Vanilla JS, $.ajax(), $.get()
function fetchDogs(){
    //Way-1 to use ajax.
    //1. make an XMLHTTPRequest object to interact with server .
    // var xhrRequest = new XMLHttpRequest();
    // //onload will be called once the request is recieved
    // xhrRequest.onload=function(){
    //    console.log(xhrRequest.response);//returns in string
    //    var responseJson = JSON.parse(xhrRequest.response);
    //    var imageURL = responseJson.message;
    //    $("#img_dog").attr('src',imageURL);
    // };
    // //2. Initialise a request.
    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    // //3. sends the request.
    // xhrRequest.send();

    //Using jQuery to make AJAX requests.
    //Way-2 : $.ajax() : sends asynchronous HTTP requests to the server

    // $.ajax({
    //     url:'https://dog.ceo/api/breeds/image/random',
    //     method:'GET',
    //     success : function(data){
    //         //console.log(data);
    //         var imageURL = data.message;
    //         $("#img_dog").attr('src',imageURL);
    //     }
    // });

    // way-3 : $.get() : loads data from server asynchronously;
    // $.get(
    //     "https://dog.ceo/api/breeds/image/random",
    //     function(data){
    //         var imageURL = data.message;
    //        $("#img_dog").attr('src',imageURL);
    //     }).fail(function(xhr,textStatus,errorThrown){
    //     console.log("Request failed");
    // }) // use in case of error handling. (way-1).

    //Error handling other ways :
    // way -2 : using .fail() on ajax().
    // Output of this will be an error, since wrong URL is mentioned. 
    // $.ajax({
    //         url:'https://dog.ceo/api/breeds/iage/random',
    //         method:'GET',
    //         success : function(data){
    //             //console.log(data);
    //             var imageURL = data.message;
    //             $("#img_dog").attr('src',imageURL);
    //         }
    //     }).fail(function(xhr,textStatus
    //         ,errorThrown){
    //             console.log("Error");
    //         });

    //Way-3 : plain vanilla JS.

    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        //console.log(xhrRequest.response);
        var responseJson = JSON.parse(xhrRequest.response);
        var imageURL = responseJson.message;
        $('#img_dog').attr('src',imageURL);
    };
    xhrRequest.onerror = function(){
        console.log("Error");
    };   
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send('');

};
$('#btn_fetch').click(fetchDogs);