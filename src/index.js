/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');
appNode.className = 'flex flex-center'

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}

//web api
//Conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //JSON -> Renderizar info browser
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            //crear imegen
            const imagen = document.createElement("img");
            //url imagen
            //imagen.className =
               // "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            imagen.src = `${baseUrl}${item.image}`;
            //crear titulo
            const title = document.createElement("h2");
            title.className = 'text-xl text-blue-900';
            title.textContent = item.name;

            //crear precio
            const price = document.createElement("div");
            price.textContent = formatPrice(item.price);

            const container = document.createElement("div");
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });

        appNode.append(...todosLosItems);
    })

