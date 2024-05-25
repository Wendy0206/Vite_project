
import './style.css'


window.onload = function() {
  const menuOff = document.querySelectorAll(".link_section");
  const submit = document.querySelector(".submit-btn");
  const darkMode = document.querySelector(".darkMode");
  const imageHover = document.querySelectorAll(".project_img_div");
  const showInfo = document.querySelectorAll(".project_info_div");

  imageHover[0].addEventListener("mouseover", () => {
    showInfo[0].classList.add("show_project_info");
    showInfo[1].classList.remove("show_project_info");
    showInfo[2].classList.remove("show_project_info");
  });

  imageHover[1].addEventListener("mouseover", () => {
    showInfo[1].classList.add("show_project_info");
    showInfo[0].classList.remove("show_project_info");
    showInfo[2].classList.remove("show_project_info");
  });

  imageHover[2].addEventListener("mouseover", () => {
    showInfo[2].classList.add("show_project_info");
    showInfo[0].classList.remove("show_project_info");
    showInfo[1].classList.remove("show_project_info");
  });

  for (let i = 0; i < imageHover.length; i++) {
    showInfo[i].addEventListener("mouseleave", () => {
      showInfo[i].classList.remove("show_project_info");
    });
  }

  menuOff.forEach(link => {
    link.addEventListener("click", () => {
      const uncheck = document.querySelector("#ham-menu");
      if (uncheck) {
        uncheck.checked = false;
      }
    });
  });

  const currentYear = new Date().getFullYear();
  const footerYear = document.querySelector(".footer_text");
  if (footerYear !== null) {
    footerYear.innerHTML = `© ${currentYear} wendydonleypierre.dev`;
  }

  let currentMode = 1;
  darkMode.addEventListener("click", () => {
    const homeLeft = document.querySelector(".left_side");
    const project = document.querySelector(".all_project_div");
    const footerS = document.querySelector(".footer_style");
    const container = document.querySelector(".container_div");
    const awesome = document.querySelectorAll(".about_img i");
    const inputBg = document.querySelectorAll(".input_class");
    const chat = document.querySelector(".contact_text");
    const social = document.querySelectorAll(".social_a");
    const hiLine = document.querySelectorAll(".line_hi");

    if (currentMode === 1) {
      homeLeft.style.backgroundColor = "#1a261d";
      project.style.backgroundColor = "#1a261d";
      footerS.style.backgroundColor = "#1a261d";
      submit.style.backgroundColor = "#1a261d";
      footerYear.style.color = "white";

      chat.style.color = "white";
      social[0].style.color = "white";
      social[1].style.color = "white";
      social[2].style.color = "white";
      hiLine[0].style.color = "white";
      hiLine[1].style.color = "white";
      hiLine[2].style.color = "white";
      container.classList.toggle("dark_mode");
      inputBg.forEach(element => {
        element.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      });

      awesome.forEach(element => {
        element.style.color = "white";
      });
      document.documentElement.style.setProperty("--color", "white");
      currentMode = 0;
    } else {
      homeLeft.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      project.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      footerS.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      submit.style.backgroundColor = "rgba(33, 96, 47, 0.51)";

      chat.style.color = "#1a261d";
      footerYear.style.color = "black";
      container.classList.toggle("dark_mode");
      awesome.forEach(element => {
        element.style.color = "black";
      });
      hiLine[0].style.color = "black";
      hiLine[1].style.color = "black";
      hiLine[2].style.color = "black";
      social[0].style.color = "black";
      social[1].style.color = "black";
      social[2].style.color = "black";
      inputBg.forEach(element => {
        element.style.backgroundColor = "#2d2d2d";
      });
      document.documentElement.style.setProperty("--color", "#373B44");
      currentMode = 1;
    }
  });

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("active");
      }
    }
  });

  submit.addEventListener("click", () => {
    // const comment = document.querySelector(".comment_in");
    // const phone = document.querySelector(".phone_in");
    // const email = document.querySelector(".email_in");
  });
};