console.log("index.js");

// https://api.jquery.com/id-selector/
var form = $('#mainForm');

// https://api.jquery.com/submit/
form.submit(function(e){
    e.preventDefault();
    console.log(e);

    // http://api.jquery.com/val/
    var inputZip  = $('#inputZip').val();
    console.log("Zip:", inputZip);

    //https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
    window.location.href = "./results.html" + '?zip=' + inputZip;

});