var colors = ["blue", "red", "yellow", "green", "orange", "purple"];

var index = 0;

$('#button').click(function change() {

    if (index === colors.length) {
        index = 0;
    }


    $("body").css("background-color", colors[index]);
    //console.log(colors[index]);

    index++;
});