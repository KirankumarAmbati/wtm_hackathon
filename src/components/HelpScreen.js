import React, { Component } from 'react';
import { Jumbotron, Media, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import sos from './sos.png'

class HelpScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            lat: '',
            long: ''
        }
    }

    componentDidMount() {
        axios.get('https://nominatim.openstreetmap.org/reverse?format=json&lat=17&lon=78&zoom=18&addressdetails=1')
            .then(res => {
                this.setState({
                    name: res.data.display_name,
                    lat: res.data.lat,
                    long: res.data.lon
                })
            })
    }


    render() {
        const {name, lat, long} = this.state
        
        return (
            <div>
                <Jumbotron>
                    <h1>Current Location</h1>
                    <p>You are at: <b>{name}</b></p>
                    <p>Lat: <b>{lat}</b></p>
                    <p>Long: <b>{long}</b></p>
                    <img width="150" height="150" src={sos} onClick={() => alert('Finding help for you!')} />
                </Jumbotron>
            </div>
        );
    }
}

export default HelpScreen;
