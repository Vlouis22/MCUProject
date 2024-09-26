const renderGifts = async () => {
    const response = await fetch("/gifts");
    const data = await response.json();

    const mainContent = document.getElementById("main-content");

    if (data) {
        data.map((gift) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const topContainer = document.createElement("div");
            topContainer.classList.add("top-container");

            const bottomContainer = document.createElement("div");
            bottomContainer.classList.add("bottom-container");

            topContainer.style.backgroundImage = `url(${gift.image})`;

            const name = document.createElement("h3");
            name.textContent = gift.name;
            bottomContainer.appendChild(name);

            const pricePoint = document.createElement("p");
            pricePoint.textContent = "Price: " + gift.pricePoint;
            bottomContainer.appendChild(pricePoint);

            const audience = document.createElement("p");
            audience.textContent = "Great For: " + gift.audience;
            bottomContainer.appendChild(audience);

            const link = document.createElement("a");
            link.textContent = "Read More >";
            link.setAttribute("role", "button");
            link.href = `/gifts/${gift.id}`;
            bottomContainer.appendChild(link);

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            mainContent.appendChild(card);
        });
    } else {
        const noGifts = document.createElement("h2");
        noGifts.textContent = "No gifts found";
        mainContent.appendChild(noGifts);
    }
};

const renderGift = async () => {
    const requestedID = parseInt(window.location.pathname.split("/").pop());
    const response = await fetch("/gifts");
    const data = await response.json();

    console.log(`Current gift data = ${data}`)

    const giftContent = document.getElementById("gift-content");
    let gift;

    if (data) {
        gift = data.find((gift) => gift.id === requestedID);
    }

    console.log(`Current gift Id: ${gift.id}`)

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`

    } else {
        const noGift = document.createElement("h2");
        noGift.textContent = "Gift not found";
        giftContent.appendChild(noGift);
    }
};

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
    //window.location.href = "../404.html";
    renderGift();
} else {
    renderGifts();
}

renderGift();
