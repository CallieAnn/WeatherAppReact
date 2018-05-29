import React, { Component } from 'react';

class ZipForm extends Component {
    render(){
        return(
            <div className="zip-form"> 
                <form id="zipForm"> 
                    <div className="flex-parent"> 
                        <label htmlFor="zipcode">Zip</label> 
                        <input className="form-control" type="input" id="zipcode" name="zipcode" value="" required /> 
                        <button type="submit" className="btn btn-success"> Get the forcast!</button> 
                    </div>
                </form> 
            </div>
        )
    }

}

export default ZipForm;