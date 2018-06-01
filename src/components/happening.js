import React, { Component } from 'react';

import { Card } from 'antd';

export default class HappeningComponent extends Component {
    render(){
        return (
            <Card title="What is happening?" id="happening">
              <p>There is a <a href="http://www.minneapolismn.gov/www/groups/public/@cped/documents/webcontent/wcmsp-206920.pdf" target="_blank">proposal</a> to build a 5-story studio apartment and commercial complex outside of the city planning codes at the southeast corner of 18th Ave and Central Ave.</p>
              <p>In regard to the proposed property development at 1717 Central Ave NE, as neighbors to this property, we oppose the current plan for this site.  We disagree with the physical foot print on the neighborhood, the proposed height of the building, the design, the lack of green space, the lack of parking, and the number of units proposed.</p>
              <p>This property does not meet the needs for affordable housing in our neighborhood.  This property height does not conform to the more recent development along Central and in the neighborhood directly.  This development plan does not fit with the pedestrian bike zone recently created and supported by the city.  The increased traffic will reduce the safety for our children, many who have school bus stops on the block for a variety of schools, public, private, and charter.  The sound and light pollution ultimately created by the magnitude of this property will negatively impact our quality of living and reduce our privacy.</p>
            </Card>
        )
    }
}
