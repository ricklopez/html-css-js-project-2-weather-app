
//[1] Grab zip code from url param

// https://developer.mozilla.org/en-US/docs/Web/API/Location
// https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

var urlString = window.location.href;
var url = new URL(urlString);
var zipCode = url.searchParams.get("zip");


//[2] Make the API call with Zip Code

var endpoint = `//api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=b231606340553d9174136f7f083904b3`;
var data = null;

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

fetch(endpoint)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJsonObj) {
        //[3] Prepare data
        data = prepareData(myJsonObj);
    });

//[4]Present data
// TODO: Next week



// Custom Functions

function prepareData(data){
    // do stuff with data
    var result = data;
    return result;
}


