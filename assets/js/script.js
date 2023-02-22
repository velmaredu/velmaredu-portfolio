$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    //Type effect
    var typed = new Typed(".typing-text", {
        strings: ["full-stack development", "photo editing", "branding", "logo creation"],
        loop: true,
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 600,
    });

    $("[id^='scroll-to-']").click(function () {
        let id = $(this).attr("id").replace("scroll-to-", "");
        let scrollSpeed = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) ? 100 : 1000;
        $('html, body').animate({
            scrollTop: $("#" + id).offset().top - $("header").outerHeight()
        }, scrollSpeed);
    });

    fetchData("skills").then(data => {
        showSkills(data);
    });

    fetchData("projects").then(data => {
        showProjects(data, 6);
    });

    fetchData("experience").then(data => {
        showExperience(data, 4);
    });
});