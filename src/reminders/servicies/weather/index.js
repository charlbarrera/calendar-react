

export class WeatherService {

    async getWeatherByCity(city) {
        // default get 16 days
        const cnt = 16;
        const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=886705b4c1182eb1c69f28eb8c520e20`
        const options = {}
        return await request(url, options);
    }

}
function request(url, options) {
    return fetch(url, options)
        .then((data) => data.json())
        .catch((error) => console.error('there are an error', error));
}