import React, { Component } from 'react';
import {Row, Col, Layout} from 'antd';
import './App.css';

import WhoAreWeComponent from './components/who-are-we';
import MenuComponent from './components/menu';
import HappeningComponent from './components/happening';
import OppositionComponent from './components/opposition';
import ActionComponent from './components/action';

class App extends Component {
  render() {
    return (
      <div style={{'margin-bottom':'500px'}} className="App">
        <Layout>
            <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Row>
                    <Col span={4}>
                        <h1>NO 5 AT 1717</h1>
                    </Col>
                    <Col span={16}>
                        <MenuComponent/>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Row>
                    <Col style={{'margin-bottom': '20px'}} span={16} offset={4}>
                        <WhoAreWeComponent />
                    </Col>
                    <Col style={{'margin-bottom': '20px'}} span={16} offset={4}>
                        <HappeningComponent />
                    </Col>
                    <Col style={{'margin-bottom': '20px'}} span={16} offset={4}>
                        <OppositionComponent />
                    </Col>
                    <Col style={{'margin-bottom': '20px'}} span={16} offset={4}>
                        <ActionComponent />
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
      </div>
    );
  }
}

export default App;
