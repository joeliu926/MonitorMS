/**
 * Created by gy on 2017/5/1.
 */
import React from 'react';
import LayoutPanel from 'module/layout/index';
import TableDemo from 'module/tableDemo/index';
import EchartDemo from 'module/echartDemo/index';
import Home from 'module/home/index';
import TargetSet from 'module/targetSet/index';


import {Router,Route,Link,hashHistory,IndexRoute,IndexRedirect,browserHistory  } from 'react-router';

class RootRouters extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <Router history={hashHistory} >
                <Route name="home" breadcrumbName="首页" path="/" component={LayoutPanel}>
                    <IndexRedirect to="home" />
                    <Route name="home" path="home"  component={Home}/>
                    <Route name="targetManagement" path="targetManagement" breadcrumbName="目标管理">
                         <Route name="targetSet" path="targetSet" breadcrumbName="目标设定" component={TargetSet}/>
                    </Route>
                    <Route name="table" path="table" breadcrumbName="table" component={TableDemo}/>
                    <Route path="chart" breadcrumbName="echart"   component={EchartDemo}/>
                </Route>
            </Router>
        );
    }
}

export default RootRouters;
