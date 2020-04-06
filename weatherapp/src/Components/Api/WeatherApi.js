import React, {Component} from 'react';
import Weatherform from '../Weatherform';
import WeatherResult from '../WeatherResult';
import Forecast from '../Forecast';

const API_KEY = "&appid=f277e5a34d37300cb7bff8c75e39c26e&units=metric";
const query = "https://api.openweathermap.org/data/2.5/weather?q="
const forecastQuery = "https://api.openweathermap.org/data/2.5/forecast?q="

class CurrentWeather extends Component {

    state = {
        error: undefined,
        isLoading: true,
        weathermain: undefined,
        weatherDescription: undefined,
        locationName : undefined,
        observationTime: undefined,
        requestData : undefined,
        forecastData: undefined,
        allForecastData: undefined,
        cod: undefined,
        favorites: [{id: 1, content: "Stockholm"},
                    {id: 2, content: "London"}]
    };

    componentDidMount() {
        this.fetchAllData("Stockholm");
    }

   fetchAllData = city => {
    
    const urls = [
        `${query}${city}${API_KEY}`,
        `${forecastQuery}${city}${API_KEY}`
    ];

        Promise.all(urls.map((url,index) =>
            fetch(url)
                .then(this.checkStatus)
                .then(this.parseJson)
                .catch(error => {
                    if(error.status === 404){
                        this.setState({
                            error: "404"
                        })
                    }
                })
                .then(data => {
                    if(index === 0) {
                        this.setState({
                            weathermain: data.main,
                            locationName: data.name,
                            weatherDescription : data.weather,
                            observationTime : data.dt,
                            requestData : data.sys,
                            error: ""
                        })      
                    }                  
                    else if(index === 1){
                        this.setState({
                            forecastData : data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                        })
                    }
                 }
                ).catch(error => {
                    console.log(error);
                    this.setState({
                        error: "404"
                    })
                })
                
            )
        )
   }

   checkStatus = response => {
        if(response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText))
            
        }
   }
   parseJson = response => {
       return response.json();
   }

    render() {
        
        if (this.state.error || !this.state.weathermain) {
            return <div className="lead">
                      <Weatherform 
                        searchLocation = {this.fetchAllData} 
                      />
                      <p>Felaktig input... Testa igen</p>
                   </div>
        }
        else {
        return(
            <React.Fragment>
                <Weatherform 
                    searchLocation = {this.fetchAllData} 
                />
                <WeatherResult 
                    info = {this.state.weathermain} 
                    name = {this.state.locationName}
                    time = {this.state.observationTime}
                    description = {this.state.weatherDescription[0]}
                    data = {this.state.requestData}
                    />
                <Forecast 
                    forecast = {this.state.forecastData}
                    getForecast = {this.getForecast}
                    name = {this.state.locationName}
                    allData = {this.state.allForecastData}
                    />
            </React.Fragment>
        );
    }
  }
}

export default CurrentWeather