import _ from 'lodash'
import React, { Component, useState } from 'react'
import { EllipsisOutlined, EditOutlined, DeleteOutlined, GlobalOutlined } from '@ant-design/icons';
import { Table, Popover, Button, Menu } from 'antd'
import tableData from './profiles.json'

// function PopupMenu({setInEdit}) {
//     const [ open, setOpen ] = useState(false)
//     const [ activeItem, setActiveItem ] = useState(null)
//     const dropdownTrigger = <Button active={open} className='invisible-button' ><Icon name='ellipsis horizontal'/></Button>
//
//     const handleMenuClick = (e, { name }) => {
//         setActiveItem(name)
//         if (name === 'edit') {
//             setInEdit(true);
//         }
//     }
//
//     const menu = <Menu vertical>
//         <Menu.Item name='edit' onClick={handleMenuClick} active={activeItem === 'edit'} className="borderless-menu-group"><Icon name={"pencil"} />Edit...</Menu.Item>
//         <Menu.Item name='connection' onClick={handleMenuClick} active={activeItem === 'connection'} className="borderless-menu-group"><Icon name={"globe"} />Connection</Menu.Item>
//         <Menu.Item name='delete' onClick={handleMenuClick} active={activeItem === 'delete'} className="red-color"><Icon className="red-color" name={"trash alternate"} />Delete</Menu.Item>
//     </Menu>
//
//     return (
//         <Popup
//             trigger={dropdownTrigger}
//             on='click'
//             basic
//             className='menu-popup'
//             position='bottom left'
//             eventsEnabled
//             onClose={() => setOpen(false)}
//             onOpen={() => setOpen(true)}
//             open={open}
//         >
//             <Popup.Content>
//                 {menu}
//             </Popup.Content>
//         </Popup>
//     )
// }


function MoreOptionsMenu({ record }) {
    const [ open, setOpen ] = useState(false);
    const [ activeItem, setActiveItem ] = useState(null);
    const dropdownTrigger = <Button type='text' ><EllipsisOutlined /></Button>
    const content = <Menu >
        <Menu.Item><EditOutlined />Edit...</Menu.Item>
        <Menu.Item><GlobalOutlined />Connection</Menu.Item>
        <Menu.Item className='red-color'><DeleteOutlined />Delete...</Menu.Item>
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

// {
//     "lastActivity": "a few seconds ago",
//     "void": " ",
//     "ltv": "$365",
//     "id": "1",
//     "status": "regular",
//     "image": "assets/Female/Cheryl-Carter.jpg",
//     "icon": "message",
//     "city": "San Francisco",
//     "job": "Senior Financial Analyst",
//     "company": "Skyble",
//     "description": "Senior Financial Analyst, Skyble",
//     "country": "United States",
//     "gender": "Female",
//     "firstname": "Cheryl",
//     "lastname": "Carter",
//     "name": "Cheryl Carter",
//     "email": "cheryl@skyble.com",
//     "phone": "2-(017)772-7449",
//     "address": "396 Calypso Parkway"
// },

export default class TableExampleSortable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    render() {
        const { column, data, direction } = this.state

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
