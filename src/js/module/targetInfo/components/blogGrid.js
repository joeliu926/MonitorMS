/**
 * Created by AnThen on 2017-5-15.
 */
/**
 * Created by gy on 2016/11/30.
 */
'use strict';
import React from 'react';
import { Table } from 'antd';
class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.showCurRowMessage = this.showCurRowMessage.bind(this);
    }

    componentDidMount() {

    }

    //展示当前行信息
    showCurRowMessage(record) {
        // alert("key:"+record.key + " name:"+record.name + " age:" + record.age + " address:" + record.address + " description:" + record.description);
    }

    render() {
        let self = this;
        // WIFI名称  接入终端数 可疑目标数  位置
        const columns = [
            {title: '热度排名', dataIndex: 'hot', key: 'hot'},
            {title: 'WIFI名称 ',dataIndex: 'name',key: 'name'},
            {title: '接入终端数', dataIndex: 'joinNumber', key: 'joinNumber'},
            {title: '可疑目标数', dataIndex: 'targetNumber', key: 'targetNumber'},
            {title: '位置', dataIndex: 'position', key: 'position'}
        ];

        const data = [
            {key:_.getReactKey(),hot: 1,joinNumber:10, targetNumber:30,name: 'WIFI名称 01', position: '1层'},
            {key:_.getReactKey(),hot:2, joinNumber:101,targetNumber:32,name: 'WIFI名称 02', position: '2层'},
            {key:_.getReactKey(),hot:3, joinNumber:102,targetNumber:33, name: 'WIFI名称 03', position: '3层'}
        ];

        const rowSelection = {
            onChange(selectedRowKeys, selectedRows) {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll(selected, selectedRows, changeRows) {
                console.log(selected, selectedRows, changeRows);
            }
        };

        return (
            <div>
                <div className="m-toolbar">
                    <div className="m-float-r">
                      <span className="grid-count-text">博客 200 篇</span>  <span className="grid-count-text">目标 50 篇</span>
                    </div>
                </div>
                <div>
                    <Table columns={columns}
                        dataSource={data}
                        className="table"
                    />
                </div>

            </div>

        );

    }
}
export default Panel;