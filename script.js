
let weather = {
    key: "82224252a7482a434889e3cadb101397",

    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid="
            + this.key
            + "&units=metric"
        ).then(response =>
            response.json()
        ).then((data) =>

            this.displayWeather(data)
        );
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;

        document.querySelector(".city").innerText = name;
        document.querySelector(".degree").innerText = temp + "°";
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".info").classList.remove("info")
    },

    search: function () {
        this.fetchWeather(document.querySelector(".input").value)
    }

};

document.querySelector(".search").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".input").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Seattle");