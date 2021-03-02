const button = document.getElementById("btn");
url = 'https://randomuser.me/api/';

button.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
})

const getData = () => {fetch(url)
    .then(res => res.json())
    .then(data => {
        document.getElementById("image").src = data.results[0].picture["large"];
        document.getElementById("fname").innerHTML = data.results[0].name["first"];
        document.getElementById("lname").innerHTML = data.results[0].name["last"];
        document.getElementById("tel-number").innerHTML = data.results[0].cell;
        document.getElementById("location").innerHTML = data.results[0].location.country;
        document.getElementById("email").innerHTML = data.results[0].email;
        console.log(data)
        
    });
}