// Task 2 - Fetch Products with .then()

// Creating a function that gets product data from the API and console-log any errors if anything is wrong.

function fetchProductThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Calling the function to see if it works.

fetchProductThen();





// ----------------------------------------------------------------------------------------------------------------------

// Task 3 - Fetch Products with async/await

// Creating a async function that returns a promise by fetching store product data from the API.

async function fetchproudctasync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        displayproducts(data);
    }   catch (error) {
        handleerror();
    }
}


// ----------------------------------------------------------------------------------------------------------------------


    // Task 4 - Display the Products

    // Creating a function to display any product in the container.

function displayproducts(products) {
    const productcontainer = document.getElementById('product-container');

    products.forEach(product => {
        const productelement = document.createElement('div');
        productelement.classList.add('product');
        productelement.innerHTML = `<h3>${product.fields.name}</h3>`;
        productcontainer.appendChild(productelement);
    });

    // Using const to set a name, price, and image to the first 5 products and inputting it in the HTML code, then finally appending it.

    for (let i = 0; i < 5; i++) {
        const product = products[i];

        const productelement = document.createElement('div');
        productelement.classList.add('product');

        const productname = product.fields.name;
        const productprice = product.fields.price;
        const productimage = product.fields.image[0].url

        productelement.innerHTML = `
        <img src ="${productimage}" alt=${productname} class="product-image">
        <h3>${productname}</h3>
        <p>Price: $${productprice}</p>
        `;

        productcontainer.appendChild(productelement);
    }
}



// ----------------------------------------------------------------------------------------------------------------------





// Task 5 - Reusable Error Handler

// Creating a function to catch and handle any errors that could happen in the website.

function handleerror(error) {
    console.error('An error occurred:', error);
    const productcontainer = document.getElementById('product-container');
    productcontainer.innerHTML = `<p>There was an error loading the products. Please try again.</p>`;
    }



// ----------------------------------------------------------------------------------------------------------------------

// Task 6 - Call your Fetch Functions

// Using .then and .async to the same task: Fetching products and displaying them on the page.

fetchProductThen();
fetchproudctasync();