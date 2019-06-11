$(document).ready(
    function () {

        // Side Menu
        $(".menu_close").click(function () {
            $(".side_menu_container").hide();
        });

        $(".menu_toggle").click(function () {
            $(".side_menu_container").show();
        });

        // Search Bar
        $(".search_icon").click(function () {
            $(".search_bar").toggleClass("show");
            $(".no_selected").toggleClass("hide");
            $(".search_icon").toggleClass("i_selected");

        });

        // User display

        $(".nav_groups").click(function () {
            $(".groups").show();
            $(".places").hide();
            $(".calendar").hide();
            $(".settings").hide();
        });

        $(".nav_places").click(function () {
            $(".places").show();
            $(".groups").hide();
            $(".calendar").hide();
            $(".settings").hide();
        });

        $(".nav_calendar").click(function () {
            $(".calendar").show();
            $(".places").hide();
            $(".groups").hide();
            $(".settings").hide();
        });

        $(".nav_settings").click(function () {
            $(".settings").show();
            $(".places").hide();
            $(".calendar").hide();
            $(".groups").hide();
        });

        // "Show more"
        $(".show_more").click(function () {
            $(".more_info").show();
            $(".show_more").hide();
            $(".show_less").show();
        });

        $(".show_less").click(function () {
            $(".more_info").hide();
            $(".show_more").show();
            $(".show_less").hide();
        });

        //Calendar

    }

);




/*----------- USERS ------------*/

/*----------- GROUPS ------------*/

/*----------- PLACES ------------*/