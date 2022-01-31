const user = new XMLHttpRequest();
user.open("GET", "https://api.github.com/users/aroary");
user.setRequestHeader("Accept", "application/vnd.github.v3+json");
user.onreadystatechange = () => {
    if (user.readyState === 4) console.log(user.JSON.parse(user.responseText));
};
user.send();