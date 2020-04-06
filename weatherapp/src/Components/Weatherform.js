import React, {Component} from 'react';

class Weatherform extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="container p-2">
                    <div className="row justify-content-md-center">
                        <div className="d-flex col-md-auto m-1">
                            <i className="fa fa-search fa-2x p-1" aria-hidden="true"></i>
                            <input type="text" 
                                name="location" 
                                className="form-control d-inline-block m-1" 
                                name = "locationName"
                                placeholder="Enter location here . . ." 
                                ref= {val => this.searchText = val}
                            />
                                <button className="btn btn-info btn-md m-1 p-2" 
                                    type="text" 
                                    onClick = {() => this.props.searchLocation(this.searchText.value)}>
                                    <span>Search</span>
                                </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Weatherform