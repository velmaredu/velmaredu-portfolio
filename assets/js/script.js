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

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

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
            let offset = $(this).offset().top - $("header").height();
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[id="scroll-to-${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
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
        $('html, body').animate({
            scrollTop: $("#" + id).offset().top - $("header").outerHeight()
        }, 1000);
    });

    $("[id^='scroll-top']").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top - $("header").outerHeight()
        }, 1000);
    });



    //To get portfolio data
    function fetchData(type) {
        return $.ajax({
            url: type + ".json",
            dataType: "json",
            type: "get"
        });
    }

    fetchData("skills").then(data => {
        showSkills(data);
    });

    fetchData("projects").then(data => {
        showProjects(data);
    });

    fetchData("experience").then(data => {
        showExperience(data);
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Eduardo Velasco";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

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

function showProjects(projects) {
    let projectsContainer = document.getElementById("projectsContainer");
    let projectHTML = "";
    projects.slice(0, 6).forEach(project => {
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

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

function showExperience(experience) {
    let experienceContainer = document.getElementById("experienceContainer");
    experience.slice(0, 4).forEach(function (experience, index) {
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
                  <span id="time-text">${experience.time}</span> · 
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

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

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

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 100,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.projects .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

