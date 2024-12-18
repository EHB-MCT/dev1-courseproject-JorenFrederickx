//  https://chatgpt.com
//  12/12/2024
//  Om ervoor te zorgen dat de cirkels de andere kant uitgingen bij het botsen, heb ik ChatGPT gebruikt

    elements.forEach((element) => {
        element.x += element.dx;
        element.y += element.dy;

        if (element.x <= 0 || element.x >= width) element.dx *= -1;
        if (element.y <= 0 || element.y >= height) element.dy *= -1;



//  https://chatgpt.com
//  18/12/2024
//  Met deze formule wordt de afstand tot de muis berekend voor elke cirkel

        const distance = Math.hypot(element.x - mouseX, element.y - mouseY);
