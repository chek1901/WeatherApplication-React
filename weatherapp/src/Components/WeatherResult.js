import React from 'react';

const WeatherResult = ({info, name, description, data, time}) => {

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    const appendLeadingZeroes = n => {
        if (n <= 9) {
          return "0" + n;
        }
        return n;
    }
    var dt = new Date(time*1000);
    var now =   
        appendLeadingZeroes(dt.getHours()) + 
        ":" + appendLeadingZeroes(dt.getMinutes()) +
        ":" +appendLeadingZeroes(dt.getSeconds());
        
    const weathericon = `http://openweathermap.org/img/w/${description.icon}.png`;
    return (
        <React.Fragment>
        
        <div className="row justify-content-lg-center">
            <div className="card" id="mainCard">
                <div className="card-body">
                    <div className="col-md-12 inline-block">
                        <h5 className="cardTitle"> {name} - {data.country}</h5>
                        <h6><span> {date}/{month} - {year} || {now}</span></h6>
                    </div>
                    
                    <span className="p-2"><img id="weatherIcon" src={weathericon} alt="WeatcherIcon"/> </span>
                    <span> <i className="fa fa-thermometer-half fa-2x" aria-hidden="true"> </i>
                            <span> Temperature: {info.temp.toFixed(0)} &#176; </span>
                            <span> Feels like: {info.feels_like.toFixed(1)} &#176;</span>
                    </span>
                    <p>Max: {info.temp_min.toFixed(1)} &#176; / Min: {info.temp_max.toFixed(1)} &#176; </p>
                    <p className="p-2">
                        {description.main} - {description.description}
                    </p>
                </div>
            </div>
        </div>

        </React.Fragment>            
  
    )
}

export default WeatherResult