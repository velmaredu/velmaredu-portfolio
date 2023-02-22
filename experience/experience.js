$(document).ready(function () {
    $("[id^='scroll-top']").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top - $("header").outerHeight()
        }, 100);
    });

    fetchData("experience").then(data => {
        showExperience(data, -1);
    });
});