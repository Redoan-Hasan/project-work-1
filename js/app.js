const API_KEY = `5a40df1c087cae1841838caa23b4b27c`;

const searchTemp = () => {
    const city = document.getElementById("city-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemp(data))
}
const setInnerText = (idName, text) => {
    document.getElementById(idName).innerHTML = text
}
const displayTemp = (temperature) => {
    setInnerText("city-name", temperature.name);
    setInnerText("temperature", temperature.main.temp);
    setInnerText("condition", temperature.weather[0].main);
    console.log(temperature.weather[0])

    // set img 
    const icon = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    console.log(icon)
    const conditionImg = document.getElementById("condition-img");
    conditionImg.setAttribute("src", `${icon}`)
}