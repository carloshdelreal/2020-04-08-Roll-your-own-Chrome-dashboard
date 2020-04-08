import React from 'react';
import Weather from './weather';



class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: {
        lat: 0,
        lng: 0
      },
      locationAvailable: false,
    }
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    this.setState({location, locationAvailable: true})
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.updateLocation)
    } else {
      // Browser doesn't support Geolocation
      this.setState({locationAvailable: false});
    }
  }

  render(){
    const style = {
      color: "red",
      textAlign: "left"
    }

    return(
      <div style={style}>
        { this.state.locationAvailale
          ? <div>"location is not available"</div>
          : null
        }
        <div>
          Latitud: {parseFloat(this.state.location.lat, 10).toFixed(7)}
        </div>
        <div>
          Longitud: {parseFloat(this.state.location.lng, 10).toFixed(7)}
        </div>
        { this.state.locationAvailale
          ? <div>"location is not available"</div>
          : <Weather location={this.state.location} />
        }
      </div>
    )
  }
}

export default Location;
