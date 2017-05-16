/**
 * Created by gy on 2017/4/30.
 */
import React from 'react';
import { Table,Menu,Icon  } from 'antd';
import {Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class SiderMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let _this = this;
        return (
            <Menu
                mode="inline"
                /*defaultSelectedKeys={['targetSet']}*/
                /*defaultOpenKeys={['targetManagement']}*/
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" title={<span><Icon type="user" />例子</span>}>
                    <Menu.Item key="1"><Link to="/table" activeClassName="active">列表</Link ></Menu.Item>
                    <Menu.Item key="2"><Link to="/chart" activeClassName="active">Echart</Link ></Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="targetManagement" title={<span><Icon type="notification" />目标管理</span>}>
                    <Menu.Item key="targetSet"><Link to="/targetManagement/targetSet" >目标设定</Link></Menu.Item>
                    <Menu.Item key="targetInfo"><Link to="/targetInfo" >目标信息</Link></Menu.Item>
                    <Menu.Item key="targetSearch"><Link to="/targetSearch" >目标搜索</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="dataCube" title={<span><Icon type="notification" />数据魔方</span>}>
                    <Menu.Item key="targetAnalysis"><Link to="/targetAnalysis" >目标分析</Link></Menu.Item>
                    <Menu.Item key="associationAnalysis"><Link to="/associationAnalysis" >关联分析</Link></Menu.Item>
                    <Menu.Item key="behaviorAnalysis"><Link to="/behaviorAnalysis" >行为分析</Link></Menu.Item>
                    <Menu.Item key="trajectoryAnalysis"><Link to="/trajectoryAnalysis" >轨迹分析</Link></Menu.Item>
                    <Menu.Item key="comprehensiveAnalysis"><Link to="/comprehensiveAnalysis" >综合分析</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="alarmManagement" title={<span><Icon type="notification" />告警管理</span>}>
                    <Menu.Item key="alarmSet"><Link to="/alarmSet" >告警设置</Link></Menu.Item>
                    <Menu.Item key="alarmAnalysis"><Link to="/alarmAnalysis" >告警分析</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="tagManagement" title={<span><Icon type="notification" />标签管理</span>}>
                    <Menu.Item key="tagDesign"><Link to="/tagDesign" >目标设定</Link></Menu.Item>
                    <Menu.Item key="tagMaintain"><Link to="/tagMaintain" >目标维护</Link></Menu.Item>
                </SubMenu>
            </Menu>
        );

    }
}

export default SiderMenu;