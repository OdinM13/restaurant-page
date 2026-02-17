function homePage() {
    const homepage = document.createElement("div");
    homepage.classList.add("homepage");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Cozy Beans Cafe – Your Daily Retreat";
    homepage.appendChild(header);

    const text1 = document.createElement("div");
    text1.classList.add("text");
    text1.textContent = "Step into a world where rustic charm meets fresh flavor.";
    homepage.appendChild(text1);

    const text2 = document.createElement("div");
    text2.classList.add("text");
    text2.textContent = "At Cozy Beans Cafe, we are dedicated to serving more than just great coffee - we serve an experience. From our revitalizing smoothies and homemade sweets to our signature toasted sandwiches, every item on our chalkboard is crafted with care and fresh ingredients. Whether you are catching up with friends or looking for a quiet corner to unwind amongst the greenery, our laid-back atmosphere is the perfect escape from the bustle.";
    homepage.appendChild(text2);

    const text3 = document.createElement("div");
    text3.classList.add("text");
    text3.textContent = "Come for the brew, stay for the vibes.";
    homepage.appendChild(text3);

    return homepage;
}

export { homePage };
