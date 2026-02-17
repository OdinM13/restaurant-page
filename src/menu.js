function menuPage() {
    const menupage = document.createElement("div");
    menupage.classList.add("menupage");

    const header = document.createElement("h1");
    header.textContent = "Our Menu & Daily Specials";
    menupage.appendChild(header);

    const text1 = document.createElement("div");
    text1.classList.add("text");
    text1.textContent = "We rotate our menu selections daily, featuring everything from nutrient-packed smoothies to hearty toasted sandwiches. Our ingredients are sourced carefully to ensure every bite is as fresh as it is delicious.";
    menupage.appendChild(text1);

    const text2 = document.createElement("div");
    text2.classList.add("text");
    text2.textContent = "Whether you are here for a quick espresso, a refreshing smoothie after a long night, or a relaxed lunch with friends, our kitchen is ready to serve you. Explore our chalkboard for today's specials and treat yourself to our homemade sweets and savory bites.";
    menupage.appendChild(text2);

    return menupage;
}

export { menuPage };

