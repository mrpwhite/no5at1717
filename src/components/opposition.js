import React, { Component } from 'react';

import { List, Card, Col, Row } from 'antd';

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
          <div id="opposition">
            <Card title="Why We Are Opposed">
                <Row>
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
          </div>
        )
    }
}


