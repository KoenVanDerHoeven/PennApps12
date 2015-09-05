function keyWordsearch(){
  gapi.client.load('youtube', 'v3', apiSetup);
}

function apiSetup() {
    gapi.client.setApiKey('AIzaSyA3jHfUPrSZ3bAMXIIhRjdTlHAasiEUH_w');
    search();
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

 request.execute(function(response) {
  var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}