const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");

const headerLogo = document.createElement("img");

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Marvel Cinematic Universe";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");

const headerButton = document.createElement("Home");
headerButton.textContent = "All Superheroes";

headerButton.addEventListener("click", function handleClick(event) {
    window.location = "/";
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);
