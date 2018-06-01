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
            <Layout.Header style={{ padding: '0', top:'0', position: 'fixed', zIndex: 1, width: '100%' }}>
                <Row style={{ background: '#f15a29' }}>
                    <Col lg={6} md={6} sm={0} xs={0} offset={1}>
                        <span><h1 style={{ 'font-size':'xx-large', 'color':'#fff' }}>NO 5 AT 1717</h1></span>
                    </Col>
                    <Col lg={17} md={17} sm={0} xs={0}>
                        <MenuComponent/>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content style={{ padding: '0'}}>
                <Row>
                    <Col style={{'margin-bottom': '50px'}} span={24}>
                        <WhoAreWeComponent />
                    </Col>
                    <Col style={{'margin-bottom': '50px'}} span={24}>
                        <HappeningComponent />
                    </Col>
                    <Col style={{'margin-bottom': '50px'}} span={24}>
                        <OppositionComponent />
                    </Col>
                    <Col style={{'margin-bottom': '50px'}} span={24}>
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
