/**
 * Created by gy on 2016/11/30.
 */
'use strict';
import React from 'react';
import { Tabs } from 'antd';
import  WifiGrid  from './components/wifiGrid';
import  TerminalGrid  from './components/terminalGrid';
import  MacGrid  from './components/macGrid';
import  EmailGrid  from './components/emailGrid';
import  VidGrid  from './components/vidGrid';
import  BlogGrid  from './components/blogGrid';
import  SoftGrid  from './components/softGrid';
import  AppGrid  from './components/appGrid';
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
            <Tabs className="target-info" defaultActiveKey="target-info-wifi" onChange={this.tabCallback}>
                <TabPane tab="Wifi统计" key="target-info-wifi"><WifiGrid /></TabPane>
                <TabPane tab="终端统计" key="target-info-terminal"><TerminalGrid /></TabPane>
                <TabPane tab="Mac统计" key="target-info-mac"><MacGrid /></TabPane>
                <TabPane tab="邮箱统计" key="target-info-email"><EmailGrid /></TabPane>
                <TabPane tab="虚拟身份统计" key="target-info-virtual-id"><VidGrid /></TabPane>
                <TabPane tab="博客统计" key="target-info-blog"><BlogGrid /></TabPane>
                <TabPane tab="小众软件统计" key="target-info-soft"><SoftGrid /></TabPane>
                <TabPane tab="APP统计" key="target-info-app"><AppGrid /></TabPane>
            </Tabs>
        );

    }
}
export default Panel;