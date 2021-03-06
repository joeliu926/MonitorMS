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
        // 热度排名  MAC   操作系统  数量  可疑目标数
        const columns = [
            {title: '热度排名', dataIndex: 'hot', key: 'hot'},
            {title: 'MAC ',dataIndex: 'mac',key: 'mac'},
            {title: '操作系统', dataIndex: 'system', key: 'system'},
            {title: '数量', dataIndex: 'number', key: 'number'},
            {title: '可疑目标数', dataIndex: 'dubious', key: 'dubious'}
        ];

        const data = [
            {key:_.getReactKey(),hot: 1,mac:'340u945dfgjdfgj',system:'ios', number: '12', dubious: '100'},
            {key:_.getReactKey(),hot:2,mac:'345djgjt-p=dg=',system:'Android', number: '45', dubious: '1002'},
            {key:_.getReactKey(),hot:3,mac:'fgpeikpkg5-34-3',system:'Android', number: '56', dubious: '1003'}
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
                      <span className="grid-count-text">WIFI热点 20 个</span>  <span className="grid-count-text">终端 200 台</span>   <span  className="grid-count-text">目标终端 50 台</span>
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