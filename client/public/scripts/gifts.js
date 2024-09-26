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
            pricePoint.textContent = "Rating: " + gift.rating;
            bottomContainer.appendChild(pricePoint);

            const audience = document.createElement("p");
            audience.textContent = "Played by: " + gift.actor;
            bottomContainer.appendChild(audience);

            const link = document.createElement("a");
            link.textContent = `More Info on ${gift.name}>`;
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

    const giftContent = document.getElementById("gift-content");
    let gift;

    if (data) {
        gift = data.find((gift) => gift.id === requestedID);
    }


    if (gift) {

        const card = document.createElement("div");


        const imageElement = document.getElementById('image');
        imageElement.src = gift.image;
        imageElement.style.width = '250px'; // Example of applying inline styles
        imageElement.style.height = 'auto';
        imageElement.style.borderRadius = '5px';
        imageElement.style.marginRight = '20px';

        const nameElement = document.getElementById('name');
        nameElement.textContent = gift.name;
        nameElement.style.fontSize = '24px';
        nameElement.style.margin = '0';
        nameElement.style.color = '#333';

        const pricePointElement = document.getElementById('pricePoint');
        pricePointElement.textContent = 'Rating: ' + gift.rating;
        pricePointElement.style.fontSize = '18px';
        pricePointElement.style.fontWeight = 'bold';
        pricePointElement.style.margin = '5px 0';
        pricePointElement.style.color = '#4CAF50';

        const audienceElement = document.getElementById('audience');
        audienceElement.textContent = 'Actor: ' + gift.actor;
        audienceElement.style.fontSize = '14px';
        audienceElement.style.margin = '5px 0';
        audienceElement.style.color = '#555';

        const descriptionElement = document.getElementById('description');
        descriptionElement.textContent = `Description: ${gift.description}`;
        descriptionElement.style.fontSize = '14px';
        descriptionElement.style.margin = '5px 0';
        descriptionElement.style.color = '#555';

        card.appendChild(imageElement);
        card.appendChild(nameElement);
        card.appendChild(pricePointElement);
        card.appendChild(audienceElement);
        card.appendChild(descriptionElement);

        document.getElementById('gift-content').appendChild(card);

        card.style.borderWidth = "3px";
        card.style.display = "flex";
        card.style.flexDirection = "column";

        document.title = `UnEarthed - ${gift.name}`;
    } else {
        const noGift = document.createElement("h2");
        noGift.textContent = "Gift not found";
        noGift.style.fontSize = '24px'; // Style for no gift message
        noGift.style.color = '#e74c3c'; // Red color for error message
        giftContent.appendChild(noGift);
    }
};

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
    renderGift();
} else {
    renderGifts();
}

renderGift();
