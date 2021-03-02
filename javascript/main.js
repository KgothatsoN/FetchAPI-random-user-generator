const button = document.getElementById("btn");
url = 'https://randomuser.me/api/';

// Button event
button.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
})

// Get user data using Fetch
const getData = () => {fetch(url)
    // Fetch json file
    .then(res => res.json())
    // set elements to following data from array
    .then(data => {
        document.getElementById("image").src = data.results[0].picture["large"];
        document.getElementById("fname").innerHTML = data.results[0].name["first"];
        document.getElementById("lname").innerHTML = data.results[0].name["last"];
        document.getElementById("tel-number").innerHTML = data.results[0].cell;
        document.getElementById("location").innerHTML = data.results[0].location.country;
        document.getElementById("email").innerHTML = data.results[0].email;
    });
}