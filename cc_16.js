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