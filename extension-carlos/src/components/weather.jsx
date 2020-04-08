import React from 'react';
import axios from 'axios';

const resData = [
  {
  "distance": 1198,
  "title": "Bogotá",
  "location_type": "City",
  "woeid": 368148,
  "latt_long": "4.656370,-74.117790"
  },
  {
  "distance": 728360,
  "title": "Maracaibo",
  "location_type": "City",
  "woeid": 395270,
  "latt_long": "10.734450,-71.630562"
  }
  ]

const resWeather2 = {
  "consolidated_weather": [
  {
    "id": 6421058565439488,
    "weather_state_name": "Showers",
    "weather_state_abbr": "s",
    "wind_direction_compass": "E",
    "created": "2020-04-08T18:16:16.862556Z",
    "applicable_date": "2020-04-08",
    "min_temp": 11.190000000000001,
    "max_temp": 22.585,
    "the_temp": 20.759999999999998,
    "wind_speed": 3.4316006012328004,
    "wind_direction": 85.34060165746568,
    "air_pressure": 1024.5,
    "humidity": 51,
    "visibility": 7.456764992444127,
    "predictability": 73
  },
  {
    "id": 4728569425035264,
    "weather_state_name": "Light Cloud",
    "weather_state_abbr": "lc",
    "wind_direction_compass": "E",
    "created": "2020-04-08T18:16:16.790144Z",
    "applicable_date": "2020-04-09",
    "min_temp": 10.01,
    "max_temp": 20.625,
    "the_temp": 19.475,
    "wind_speed": 5.991668345040961,
    "wind_direction": 89.0006098385439,
    "air_pressure": 1026,
    "humidity": 48,
    "visibility": 9.792499304064265,
    "predictability": 70
    }
  ]
}

class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      locality: "unknown",
      weather: "unknown"
    }
  }

  async componentDidMount(){
    
    const res = await axios.get(
      `https://www.metaweather.com/api/location/search/?lattlong=${this.props.location.lat},${this.props.location.lng}`
    )

    const resWeather = await axios.get(
      `https://www.metaweather.com/api/location/${resWeather2[0].woeid}`
    )
    this.setState({weather: resWeather2["consolidated_weather"][0]})
    this.setState({ locality: resData[0].title })
    
  }

  render(){
    return(
      <div>
        <div>
          City: { this.state.locality }
        </div>
        <div>
          Weather: { this.state.weather }
        </div>
      </div>

    )
  }
}

export default Weather;
