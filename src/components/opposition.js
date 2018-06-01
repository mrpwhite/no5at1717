import React, { Component } from 'react';
import { List, Card, Col, Row } from 'antd';
import './opposition.css';

const list1 = [
    "Building is too tall- takes away sun, decreases privacy",
    "Lack of Green Space",
    "Lack of Parking",
    "Too many units- too small to house families"
];

const list2 = [
    "Not affordable",
    "Sound and Light Pollution",
    "Increased traffic equals decreased safety for our children",
    "Does not fit with pedestrian/bike zone"
];

export default class OppositionComponent extends Component {
    render(){
        return (
            <Card title="Why We Are Opposed" id="opposition">
                <p>As neighbors to this property, we oppose the current plan for this site.  We disagree with the physical foot print on the neighborhood, the proposed height of the building, the design, the lack of green space, the lack of parking, and the number of units proposed.</p>
                <p>This property does not meet the needs for affordable housing in our neighborhood.  This property height does not conform to the more recent development along Central and in the neighborhood directly.  This development plan does not fit with the pedestrian bike zone recently created and supported by the city.  The increased traffic will reduce the safety for our children, many who have school bus stops on the block for a variety of schools, public, private, and charter.  The sound and light pollution ultimately created by the magnitude of this property will negatively impact our quality of living and reduce our privacy.</p>
                <Row style= {{ 'margin-bottom': '14px' }}>
                    <Col span={11}>
                        <List
                            bordered
                            dataSource={list1}
                            renderItem={item => (
                                <List.Item>
                                    {item}
                                </List.Item>
                            )}
                        >
                        </List>
                    </Col>
                    <Col offset={2} span={11}>
                        <List
                            bordered
                            dataSource={list2}
                            renderItem={item => (
                                <List.Item>
                                    {item}
                                </List.Item>
                            )}
                        >
                        </List>
                    </Col>
                </Row>
            </Card>
        )
    }
}


