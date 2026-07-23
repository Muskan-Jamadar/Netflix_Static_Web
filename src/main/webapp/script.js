// Get Started Button

const getStartedBtn = document.querySelector(".email-box button");
const emailInput = document.querySelector(".email-box input");

getStartedBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === ""){
        alert("Please enter your email address.");
        return;
    }

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!pattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    alert("Welcome to StreamFlix!\nYour account is ready to get started.");

    emailInput.value="";

});


// Smooth Scroll

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const id=this.getAttribute("href");

        if(id!=="#"){

            document.querySelector(id).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Reveal Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="all 1s ease";

    observer.observe(section);

});


// Pricing Button

document.querySelectorAll(".plan-card button").forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Thank you for choosing StreamFlix!");

    });

});