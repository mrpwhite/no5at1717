import React, { Component } from 'react';
import { Card } from 'antd';
import './happening.css';

export default class HappeningComponent extends Component {
    render(){
        return (
            <Card title="What is happening?" id="happening">
              <p>There is a <a href="http://www.minneapolismn.gov/www/groups/public/@cped/documents/webcontent/wcmsp-206920.pdf" target="_blank">proposal</a> to build a 5-story studio apartment and commercial complex at 1717 Central Ave NE (the southeast corner of 18th Ave and Central Ave). The 5-story height is currently beyond city zoning limits and requires special approval. The building design will provide over 70 small studio apartment units for rent above affordable housing rates. Additionally, the property building footprint will butt up against the sidewalks, with little-to-no green space visible from the street.</p>
            </Card>
        )
    }
}
