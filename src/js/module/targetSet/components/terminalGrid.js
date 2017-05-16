/**
 * Created by AnThen on 2017-5-15.
 */
/**
 * Created by AnThen on 2017-5-15.
 */
/**
 * Created by gy on 2016/11/30.
 */
'use strict';
import React from 'react';
import { Table } from 'antd';
import { Input } from 'antd';
const Search = Input.Search;
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
            {title: 'MAC ',dataIndex: 'mac',key: 'mac'},
            {title: '手机号', dataIndex: 'mobile', key: 'mobile'}
        ];

        const data = [
            {key:_.getReactKey(),index: 1, mac: 'sadtertdfgdf', mobile: '13000000001'},
            {key:_.getReactKey(),index:2, mac: '983259287837sf', mobile: '13000000002'},
            {key:_.getReactKey(),index:3, mac: '9832592ddd87837sf', mobile: '13000000003'}
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
                  <Search
                      placeholder="input search text"
                      style={{ width: 200 }}
                      onSearch={value => console.log(value)} />
              </div>
                <div>
                    <Table columns={columns}
                        rowSelection={rowSelection}
                        dataSource={data}
                        className="table"
                    />
                </div>
            </div>

        );

    }
}
export default Panel;