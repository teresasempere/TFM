// Side Menu
$(document).ready(
    function () {
        $(".menu_close").click(function () {
            $(".side_menu_container").hide();
        });

        $(".menu_toggle").click(function () {
            $(".side_menu_container").show();
        });
    }
);

// Search Bar
$(document).ready(
    function () {
        $(".search_icon").click(function () {
            $(".search_bar").toggleClass("show");
            $(".no_selected").toggleClass("hide");
            $(".search_icon").toggleClass("i_selected");

        });
    }
);



/*----------- USERS ------------*/

/*----------- GROUPS ------------*/

/*----------- PLACES ------------*/