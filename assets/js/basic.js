$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

    // scroll spy
    $('section').each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if (top > offset && top < offset + height) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
    });

});

$(document).ready(function () {
    $("[id^='scroll-top']").click(function () {
        let scrollSpeed = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) ? 100 : 1000;
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
    });
});

//To get portfolio data
function fetchData(type) {
    return $.ajax({
        url: "/data/" + type + ".json",
        dataType: "json",
        type: "get"
    });
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
            <div class="box">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects, num) {
    let projectsContainer = document.getElementById("projectsContainer");
    let projectHTML = "";
    projects.slice(0, num).forEach(project => {
        projectHTML += `
        <div class="box">
      <img draggable="false" src="${project.image}" alt="project" />
      <div class="content">
        <h3>${project.name}</h3>
        <div class="desc">
            <p>${project.desc}</p>
            <div class="btns">
                <a href="${project.links.view}" class="btn dark-red button1" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn dark-red button2" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;
}

function showExperience(experience, num) {
    let experienceContainer = document.getElementById("experienceContainer");
    let expList;
    if (num == -1) {
        expList = experience
    } else {
        expList = experience.slice(0, num);
    }
    expList.forEach(function (experience, index) {
        let className = index % 2 === 0 ? "left" : "right";
        let link = experience.link ? `<a href=${experience.link}>` : '';
        let linkClose = experience.link ? '</a>' : '';
        experienceContainer.innerHTML += `
        <div class="container ${className}"> 
          <i class="fa-2x fa-solid fa-briefcase"></i> 
          ${link} 
          <div class="content"> 
            <img draggable="false" src=${experience.icon} alt=""> 
            <div class="text"> 
              <h2>${experience.name}</h2> 
              <div class="desc"> 
                <h3>${experience.role}</h3> 
                <p id="time-block"> 
                  <span id="time-text">${experience.time}</span>
                  <span id="time-diff"></span> 
                </p> 
              </div> 
            </div> 
          </div> 
          ${linkClose} 
        </div>
      `;
    });
}

//Developer mode shortcuts disabler
document.addEventListener('keydown', function (e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "U") {
        e.preventDefault();
    }
});

$(window).on('load', function() {
    let timeBlocksElements = document.querySelectorAll("#time-block");
    timeBlocksElements.forEach(function (timeBlockElement) {
        let timeTextElement = timeBlockElement.querySelector("#time-text");
        let { specificDate, currentDate } = setDatesFromTimeText(timeTextElement.innerHTML);
        let diffYears = currentDate.diff(specificDate, 'years');
        let diffMonths = currentDate.subtract(diffYears, 'years').diff(specificDate, 'months') + 1;
        let diffString = " · ";
        if (diffYears > 0) {
            diffString += diffYears + " years ";
        }
        if (diffMonths > 0) {
            diffString += diffMonths + " months";
        }
        let timeDiffElement = timeBlockElement.querySelector("#time-diff");
        timeDiffElement.innerHTML = diffString;
    });
});

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