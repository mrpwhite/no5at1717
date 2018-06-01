import React, { Component } from 'react';
import { Menu } from 'antd';

export default class MenuComponent extends Component {
    handleClick = ()=>{

    }
    render(){
        return (
            <Menu
              onClick={this.handleClick}
              mode="horizontal"
              style={{ background: '#f15a29' }}
            >
                <Menu.Item key="whoAreWe">
                    <a style={{ color: '#fff' }} href="#whoAreWe-anchor">Who Are We?</a>
                </Menu.Item>
                <Menu.Item key="happening">
                    <a style={{ color: '#fff' }} href="#happening-anchor">What Is Happening?</a>
                </Menu.Item>
                <Menu.Item key="opposition">
                    <a style={{ color: '#fff' }} href="#opposition-anchor">Why Are We Opposed?</a>
                </Menu.Item>
                <Menu.Item key="action">
                    <a style={{ color: '#fff' }} href="#action-anchor">What Can We Do?</a>
                </Menu.Item>
            </Menu>
        )
    }
}
