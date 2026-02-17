function contactPage() {
    const contactpage = document.createElement("div");
    contactpage.classList.add("contactpage");

    const header = document.createElement("h1");
    header.textContent = "Visit Us & Get in Touch";
    contactpage.appendChild(header);

    const text1 = document.createElement("div");
    text1.classList.add("text");
    text1.textContent = "We love hearing from our community. Whether you want to reserve a table for a group, ask about our daily specials, or simply say hello, we are here for you. Our doors are open daily for anyone looking for a cozy spot to relax.";
    contactpage.appendChild(text1);

    const text2 = document.createElement("div");
    text2.classList.add("text");
    text2.textContent = "You can find us at the address listed below or reach out to us directly via phone or email. We look forward to welcoming you to Cozy Beans Cafe soon!";
    contactpage.appendChild(text2);

    return contactpage;
}

export { contactPage };
