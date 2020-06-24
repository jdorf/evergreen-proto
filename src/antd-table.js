import React, { Component } from 'react'
import { EllipsisOutlined, EditOutlined, DeleteOutlined, GlobalOutlined } from '@ant-design/icons';
import { Table, Popover, Button, Menu } from 'antd'
import tableData from './profiles.json'

function MoreOptionsMenu({ record }) {
    const onClick = ({ key }) => {
        alert(`Menu Item clicked: ${key} for ${record.name}`)
    }
    const dropdownTrigger = <Button type='text' ><EllipsisOutlined /></Button>
    const content = <Menu
        onClick={onClick}
    >
        <Menu.Item key='edit'><EditOutlined />Edit...</Menu.Item>
        <Menu.Item key='connections'><GlobalOutlined />Connection</Menu.Item>
        <Menu.Item key='delete' className='red-color'><DeleteOutlined />Delete...</Menu.Item>
    </Menu>

    return (
        <Popover
            placement="leftTop"
            trigger='click'
            content={content}
            overlayClassName="popover-custom"
        >
            {dropdownTrigger}
        </Popover>
    )
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend'],
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
        sortDirections: ['ascend', 'descend'],
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: (a, b) => a.address.localeCompare(b.address),
        sortDirections: ['ascend', 'descend'],
    },
    {
        title: '',
        key: 'menu',
        render: (text, record) => <MoreOptionsMenu record={record} />,
        fixed: 'right',
        width: 75
    }
];

export default class TableExampleSortable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    render() {
        const { data } = this.state

        return (
            <div className="table-boundary">
            <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                size='middle'
                scroll={{y: 500}}
            />
            </div>
        )
    }
}
