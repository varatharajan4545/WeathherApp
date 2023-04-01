export const data:{CityCode:string;CityName:string;Temp:string;Status:string}[]=[{"CityCode":"1248991","CityName":"Colombo","Temp":"33.0","Status":"Clouds"},
{"CityCode":"1850147","CityName":"Tokyo","Temp":"8.6","Status":"Clear"},
{"CityCode":"2644210","CityName":"Liverpool","Temp":"16.5","Status":"Rain"},
{"CityCode":"2988507","CityName":"Paris","Temp":"22.4","Status":"Clear"},
{"CityCode":"2147714","CityName":"Sydney","Temp":"27.3","Status":"Rain"},
{"CityCode":"4930956","CityName":"Boston","Temp":"4.2","Status":"Mist"},
{"CityCode":"1796236","CityName":"Shanghai","Temp":"10.1","Status":"Clouds"},
{"CityCode":"3143244","CityName":"Oslo","Temp":"-3.9","Status":"Clear"}]


export type Data= {
    coord: {
        lon: 0,
        lat: Number,
    },
    sys: {
        type: Number,
        id: Number,
        message: Number,
        country: String,
        sunrise: Number,
        sunset: Number,
    },
    weather: {
        id: Number,
        main: String,
        description: String,
        icon: String,
  }
}