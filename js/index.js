// https://api.jquery.com/id-selector/
var form = $('#mainForm');

// https://api.jquery.com/submit/
form.submit(function (e) {
    e.preventDefault();
    var inputZip = $('#inputZip').val();

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/location
    window.location.href = "./results.html" + '?zip=' + inputZip;
});