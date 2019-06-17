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

            $(".nav_groups").addClass("nav_selected");
            $(".nav_places").removeClass("nav_selected");
            $(".nav_calendar").removeClass("nav_selected");
            $(".nav_settings").removeClass("nav_selected");
        });

        $(".nav_places").click(function () {
            $(".places").show();
            $(".groups").hide();
            $(".calendar").hide();
            $(".settings").hide();

            $(".nav_places").addClass("nav_selected");
            $(".nav_groups").removeClass("nav_selected");
            $(".nav_calendar").removeClass("nav_selected");
            $(".nav_settings").removeClass("nav_selected");
        });

        $(".nav_calendar").click(function () {
            $(".calendar").show();
            $(".places").hide();
            $(".groups").hide();
            $(".settings").hide();

            $(".nav_calendar").addClass("nav_selected");
            $(".nav_groups").removeClass("nav_selected");
            $(".nav_places").removeClass("nav_selected");
            $(".nav_settings").removeClass("nav_selected");
        });

        $(".nav_settings").click(function () {
            $(".settings").show();
            $(".places").hide();
            $(".calendar").hide();
            $(".groups").hide();

            $(".nav_settings").addClass("nav_selected");
            $(".nav_groups").removeClass("nav_selected");
            $(".nav_places").removeClass("nav_selected");
            $(".nav_calendar").removeClass("nav_selected");
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

        // Edit button
        $(".edit_button").click(function () {
            $(".modal_edit").removeClass("hide");
        });
        $(".close_modal_edit").click(function () {
            $(".modal_edit").addClass("hide");
        });

        //group remove user
        $(".remove_user").click(function () {
            $(".user_remove").hide();
        });

        //Modal "aceptar"
        $(".close_modal").click(function () {
            $(".modal_edit").hide();
        });

    }

);




/*----------- USERS ------------*/

/*----------- GROUPS ------------*/

/*----------- PLACES ------------*/