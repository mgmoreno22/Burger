$(function() {
    $(".change-devour").on("click", (event) => {
        var id = $(event.currentTarget).data("id");
        var newDevour = $(event.currentTarget).data("newdevour");
        var newDevourState = {
            devour: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed burger to", newDevour);
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

    // $(".delete-burger").on("click", function(event) {
    //     var id = $(this).data("id");

    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function() {
    //             console.log("deleted burger", id);
    //             location.reload();
    //         }
    //     );
    // });
});