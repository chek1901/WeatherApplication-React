import React from 'react';
import CurrentWeather from '../Api/WeatherApi';

const Home = () => {

    return(
        <React.Fragment>
            <h1>Forecast 101</h1>
            <p className="lead">Begin your search below</p>
            <div className="container justify-content-center">
                <CurrentWeather />
            </div>
        </React.Fragment>
    )
}
export default Home