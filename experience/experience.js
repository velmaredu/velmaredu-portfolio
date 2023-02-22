window.onload = function () {
    let timeBlocksElements = document.querySelectorAll("#time-block");
    timeBlocksElements.forEach(function (timeBlockElement) {
        let timeTextElement = timeBlockElement.querySelector("#time-text");
        let { specificDate, currentDate } = setDatesFromTimeText(timeTextElement.innerHTML);
        let diffYears = currentDate.diff(specificDate, 'years');
        let diffMonths = currentDate.subtract(diffYears, 'years').diff(specificDate, 'months') + 1;
        let diffString = "";
        if (diffYears > 0) {
            diffString += diffYears + " years ";
        }
        if (diffMonths > 0) {
            diffString += diffMonths + " months";
        }
        let timeDiffElement = timeBlockElement.querySelector("#time-diff");
        timeDiffElement.innerHTML = diffString;
    });
}

function setDatesFromTimeText(timeText) {
    let dateRegex = /\w{3}\. \d{4}|present/g;
    let dates = timeText.match(dateRegex);
    if (dates && dates.length === 2) {
        let specificDate = moment(dates[0], "MMM. YYYY");
        let currentDate = (dates[1] === 'present') ? moment() : moment(dates[1], "MMM. YYYY");
        return { specificDate, currentDate };
    } else {
        console.log("The dates could not be found in the time-text element.");
    }
}

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