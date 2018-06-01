import React, { Component } from 'react';
import { Card } from 'antd';
import './who-are-we.css';

export default class WhoAreWeComponent extends Component {
    render(){
        return (
            <div>
                <a id="whoAreWe-anchor" style={{
                    "display":"block",
                    "position":"relative",
                    "top": "-80px",
                    "visibility":"hidden",
                }}></a>
                <Card title="Who Are We?" id="whoAreWe">
                    <p>We are informed, organized, and active citizens and neighbors from the Northeast Park, Windom Park, and Logan Park communities of Northeast Minneapolis. We value affordable family housing, green space, pedestrian and bike-friendly zones, low building profiles to preserve privacy and sunlight, and traffic safety for our children.</p>
                </Card>
            </div>
        )
    }
}
