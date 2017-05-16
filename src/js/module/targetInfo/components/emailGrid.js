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
        // 热度排名 邮箱  账号  数量 可疑目标数
        const columns = [
            {title: '热度排名', dataIndex: 'hot', key: 'hot'},
            {title: '邮箱 ',dataIndex: 'email',key: 'email'},
            {title: '账号', dataIndex: 'account', key: 'account'},
            {title: '数量', dataIndex: 'number', key: 'number'},
            {title: '可疑目标数', dataIndex: 'dubious', key: 'dubious'}
        ];

        const data = [
            {key:_.getReactKey(),hot: 1,email:'gmail',account:'340u945@uu.com', number: '12', dubious: '100'},
            {key:_.getReactKey(),hot:2,email:'163',account:'340u945@uu.com', number: '45', dubious: '1002'},
            {key:_.getReactKey(),hot:3,email:'yahoo',account:'340u945@uu.com', number: '56', dubious: '1003'}
        ];


        return (
            <div>
                <div className="m-toolbar">
                    <div className="m-float-r">
                      <span className="grid-count-text">邮箱 200 个</span>  <span className="grid-count-text">目标邮箱 50 个</span>
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