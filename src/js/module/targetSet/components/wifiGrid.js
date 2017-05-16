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

        const columns = [
            {title: '序号', dataIndex: 'index', key: 'index'},
            {title: 'WIFI名称 ',dataIndex: 'name',key: 'name'},
            {title: '位置', dataIndex: 'position', key: 'position'}
        ];

        const data = [
            {key:_.getReactKey(),index: 1, name: 'WIFI名称 01', position: '1层'},
            {key:_.getReactKey(),index:2, name: 'WIFI名称 02', position: '2层', address: '西湖区湖底公园1号', description: '我是fas，今年32岁，住在西湖区湖底公园1号。'},
            {key:_.getReactKey(),index:3, name: 'WIFI名称 03', position: '3层', address: '西湖区湖底公园2号', description: '我是wyz，今年42岁，住在西湖区湖底公园2号。'}
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
            <Table columns={columns}
                rowSelection={rowSelection}
                dataSource={data}
                className="table"
            />
        );

    }
}
export default Panel;