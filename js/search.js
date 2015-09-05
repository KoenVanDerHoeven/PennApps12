function test() {
   	var toAdd = $("input[name=message]").val();
    $('#messages').append("<p>"+toAdd+"</p>");
};