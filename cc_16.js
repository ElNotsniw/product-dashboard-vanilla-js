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
            console.log(product.name);
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

// Creating a function to display any product in the container.

function displayproducts(products) {
    const productcontainer = document.getElementById('product-container');

    products.forEach(product => {
        const productelement = document.createElement('div');
        productelement.classlist.add('product');
        productelement.innerhtml = `<h3>${product.name}</h3>`;
        productcontainer.appendChild(productelement);
    });
}

// Creating a function to catch and handle any errors that could happen in the website.

function handleerror(error) {
    console.error('Error:', error);
    const productcontainer = document.getElementById('product-container');
    productcontainer.innerHTML = `<p>There was an error loading the products. Please try again.</p>`;
}

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

fetchproudctasync();