/**
 * Created by gy on 2016/11/30.
 */
import React from 'react';
import {Link } from 'react-router';
import { Layout,Table,Menu,Icon ,Breadcrumb } from 'antd';
import SiderMenu from '../menu/index';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    if(route.clickable=='false')
    {
        return <span>{route.breadcrumbName}</span>;
    }
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}
class Panel extends React.Component{
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div style={{color:"#fff"}}>Monitor</div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <SiderMenu></SiderMenu>
                    </Sider>
                    <div style={{ padding: '0 24px 24px',padding: '0px 24px 24px',
                        display: 'flex',flexFlow: 'column', flex: 1}}>
                        <Breadcrumb itemRender={itemRender} >
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {this.props.children}
                        </Content>
                    </div>
                </Layout>
            </Layout>
        )
    }
};
const LayoutPanel = ({ routes, params, children }) => (
    <Layout>
        <Header className="header">
            <div style={{color:"#fff"}}>Monitor</div>
        </Header>
        <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <SiderMenu></SiderMenu>
            </Sider>
            <div style={{ padding: '0 24px 24px',padding: '0px 24px 24px',
                display: 'flex',flexFlow: 'column', flex: 1}}>
                <Breadcrumb  itemRender={itemRender} routes={routes} params={params} style={{
                    lineHeight: '24px',
                    padding: '12px 0'}} />
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {children}
                </Content>
            </div>
        </Layout>
    </Layout>
);
export default LayoutPanel;