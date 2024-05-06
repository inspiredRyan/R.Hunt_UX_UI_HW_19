console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("#resume").on("click", function(){
        console.log("You clicked on my resume button");
    });
    $("#resume").on("click", function(){
        $("#resume").animate({
            height: "100px",
            width: "300px",
        });
    });
});

