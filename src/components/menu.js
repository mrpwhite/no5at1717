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
            >
                <Menu.Item key="whoAreWe">
                    <a href="#whoAreWe">Who Are We?</a>
                </Menu.Item>
                <Menu.Item key="happening">
                    <a href="#happening">What is happening?</a>
                </Menu.Item>
                <Menu.Item key="opposition">
                    <a href="#opposition">Why are we opposed?</a>
                </Menu.Item>
                <Menu.Item key="action">
                    <a href="#action">What can we do?</a>
                </Menu.Item>
            </Menu>
        )
    }
}
