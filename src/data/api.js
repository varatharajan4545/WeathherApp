const API_KEY = 'a54e1511dc11a49d3f8e8ee4ec81fbef'
const URL = "http://api.openweathermap.org/data/2.5/group"



export const weatherForecast = (loc) => `${URL}?id=${loc}&units=metric&cnt=7&appid=${API_KEY}`

export const samplerequset={
    "coord":{
        "lon":37.62,
        "lat":55.75
        },
        "sys":{
        "type":1,
        "id":7323,
        "message":0.044,
        "country":"RU",
        "sunrise":1457582106,
        "sunset":1457623444
        },
        "weather":[
        {
        "id":800,
        "main":"Clear",
        "description":"Sky is Clear",
        "icon":"01d"
        }
        ],
        "main":{
        "temp":7.75,
        "pressure":1026,
        "humidity":57,
        "temp_min":7,
        "temp_max":9
        },
        "visibility":10000,
        "wind":{
        "speed":3,
        "deg":130
        },
        "clouds":{
        "all":0
        },
        "dt":1457609400,
        "id":524901,
        "name":"Moscow"
}