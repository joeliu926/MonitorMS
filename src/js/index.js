/**
 * Created by AnThen on 2016-11-23.
 */
'use strict';
//require('../css/index')
require('../css/index.css')
import React from 'react';
import ReactDom from 'react-dom';
import RootRouters from 'module/router/index';
import '../css/index.css';
import '../ant/css/antd.css';
ReactDom.render(
    <RootRouters />, document.getElementById('app'))