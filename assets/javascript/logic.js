$(document).ready(function() {
    // An array of actions, new actions will be pushed into this array;
    var actions = ["Matrix", "Dancing", "Jogging", "Falling", "Reading", "Pushing", "Swimming", "Eating", "Skipping", "Crying", "Winking", "Beyoncing", "Strolling", "Hopping"];
    displayGifButtons();
    // Creating Functions & Methods
    // Function that displays all gif buttons
    function displayGifButtons() {
        console.log("Inside gif function")
        $("#gifButtonsView").empty(); // erasing anything in this div id so that it doesnt duplicate the results
        for (var i = 0; i < actions.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", actions[i]);
            gifButton.text(actions[i]);
            console.log("butoon to stick on page" + gifButton)
            $("#gifButtonsView").append(gifButton);
        }
    }
    // Function to add a new action button
    function addNewButton() {
        $("#addGif").on("click", function() {
            var action = $("#action-input").val().trim();
            if (action == "") {
                return false; // added so user cannot add a blank button
            }
            actions.push(action);
    
            displayGifButtons();
            return false;
        });
    }
});