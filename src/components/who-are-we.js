import React, { Component } from 'react';
import { Card } from 'antd';

export default class WhoAreWeComponent extends Component {
    render(){
        return (
          <Card title="Who Are We?" id="whoAreWe">
            <p>A concerned group of citizens and neighbors who share the values of affordable housing, green space, pedestrian and bike-friendly zones, low building profiles to preserve privacy and sunlight, and traffic safety for children.</p>
          </Card>
        )
    }
}
