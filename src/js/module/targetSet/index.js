/**
 * Created by gy on 2016/11/30.
 */
'use strict';
import React from 'react';
import { Tabs } from 'antd';
import  WifiGrid  from './components/wifiGrid';
import  TerminalGrid  from './components/terminalGrid';
const TabPane = Tabs.TabPane;
class Panel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    tabCallback(key){
        console.log(key)
    }
    render() {
        let self = this;
        return (
            <Tabs defaultActiveKey="target-set-wifi" onChange={this.tabCallback}>
                <TabPane tab="Wifi" key="target-set-wifi"><WifiGrid /></TabPane>
                <TabPane tab="终端" key="target-set-terminal"><TerminalGrid /></TabPane>
            </Tabs>
        );

    }
}
export default Panel;