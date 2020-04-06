import React, {useState} from 'react';
import Fade from 'react-bootstrap/Fade';

const Forecast = ({forecast}) => {
    const [open, setOpen] = useState(false);

    function handleChange() {
        setOpen(!open);
    }

    function getFilteredData(){

        if(forecast) {
            const cardItems = forecast
            .filter(item => item)
            .map((item, index) => 
                <div className="card bg-primary" id="forecastCard" key={index+1}>
                    <img className="card-image-top" id="forecastIcon" 
                        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} 
                        alt="forecastIcon"/>
                    <div className="card-body text-center text-white"><h6>{item.dt_txt.toString().substring(0, 10)}</h6></div>
                        <p className="card-text text-white">Min temp: {item.main.temp_min}&#176; </p>
                        <p className="card-text text-white mb-4">Max temp: {item.main.temp_max}&#176; </p>
                    </div>
            );
            return (
                <div className="card-deck">
                    {cardItems}
                </div>
            );
        } else {
            return "Allt är undefined av någon anledning";
        }
           
    }

    return(
        <>
            <button className="m-2 p-2 btn btn-lg btn-primary"
               id="specialBtn"
               onClick={() => handleChange()}
               aria-controls="example-fade-text"
               aria-expanded={open}>
                Get 5 day forecast
            </button>
            <Fade in={open}>
                <div id="example-fade-text">
                    <div className="container">
                        <h4 className="lead">Forecast Information</h4>
                            <div className="card-deck">
                                <div>{getFilteredData()}</div>                      
                            </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Forecast