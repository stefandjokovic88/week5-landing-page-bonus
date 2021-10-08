document.addEventListener("DOMContentLoaded", () => {

    //accordion card
    const questions = document.querySelectorAll(".question");
    questions.forEach((question) => question.addEventListener("click", () => {

        if (question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active");
        }
        else {
            questions.forEach(question => question.parentNode.classList.remove("active"));
            question.parentNode.classList.add("active");
        }

    }))

    //email validation
    const emailField = document.getElementById("emailField");
    const btn = document.getElementById("btn");
    const response = document.getElementById("response");
    const emaiWithResponse = document.getElementById("email-with-response");

    btn.addEventListener("click", function () {
    const email = emailField.value;
    if (validateEmail(email)) {
        response.innerHTML = "Your email is valid";
        // response.style.color = "#FFFFFF";
        // response.style.background = "#54E6AF";
        emailField.classList.remove("error");
        emailField.classList.add("valid");
        emaiWithResponse.style.background = "green";

    } else {
        response.innerHTML = "Whoops, make sure it's an email";
        // response.style.color = "#FFFFFF";
        // response.style.background = "#FA5959";
        emailField.classList.add("error");
        emaiWithResponse.style.background = "#FA5959";
        emailField.classList.add("input-example");
        emailField.placeholder = "email@example/com";
    }
    });

    function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }

    //cards change
    const card1 = document.getElementById("card-1"); 
    const card2 = document.getElementById("card-2");
    const card3 = document.getElementById("card-3");

    const illustrationTab = document.getElementById("illustration-tab-1");
    const tabCaption = document.getElementById("tab-caption");
    const tabText = document.getElementById("tab-text");

    function ChangeCard1() {
        illustrationTab.src = "images/illustration-features-tab-1.svg";
        tabCaption.innerHTML = "Bookmark in one click";
        tabText.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
        card1.style.borderBottom = "4px solid #FA5959";
        card2.style.borderBottom = "1px solid rgba(73, 93, 207, 0.2)";
        card3.style.borderBottom = "1px solid rgba(73, 93, 207, 0.2)";
    }

    function ChangeCard2() {
        illustrationTab.src = "images/illustration-features-tab-2.svg";
        tabCaption.innerHTML = "Intelligent search";
        tabText.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
        card2.style.borderBottom = "4px solid #FA5959";
        card1.style.borderBottom = "1px solid rgba(73, 93, 207, 0.2)";
        card3.style.borderBottom = "1px solid rgba(73, 93, 207, 0.2)";
    }

    function ChangeCard3() {
        illustrationTab.src = "images/illustration-features-tab-3.svg";
        tabCaption.innerHTML = "Share your bookmarks";
        tabText.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
        card3.style.borderBottom = "4px solid #FA5959";
        card1.style.borderBottom = "1px solid rgba(73, 93, 207, 0.2)";
        card2.style.borderBottom = "1px solid rgba(73, 93, 207, 0.2)";
    }

    card1.addEventListener("click", ChangeCard1);
    card2.addEventListener("click", ChangeCard2);
    card3.addEventListener("click", ChangeCard3);

});