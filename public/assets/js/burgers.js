$(function() {
    $(".change-devour").on("click", (event) => {
        var id = event.currentTarget.attributes[1].value;
        var newDevourState = {
            devour: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");

                location.reload();
            }
        );
    });
});