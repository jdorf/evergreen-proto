import _ from 'lodash'
import React, { Component, useState } from 'react'
import { Table, Icon, Dropdown, Menu, Popup, Button } from 'semantic-ui-react'
import tableData from './profiles.json'

function PopupMenu({setInEdit}) {
    const [ open, setOpen ] = useState(false)
    const [ activeItem, setActiveItem ] = useState(null)
    const dropdownTrigger = <Button active={open} className='invisible-button' ><Icon name='ellipsis horizontal'/></Button>

    const handleMenuClick = (e, { name }) => {
        setActiveItem(name)
        if (name === 'edit') {
            setInEdit(true);
        }
    }

    const menu = <Menu vertical>
        <Menu.Item name='edit' onClick={handleMenuClick} active={activeItem === 'edit'} className="borderless-menu-group"><Icon name={"pencil"} />Edit...</Menu.Item>
        <Menu.Item name='connection' onClick={handleMenuClick} active={activeItem === 'connection'} className="borderless-menu-group"><Icon name={"globe"} />Connection</Menu.Item>
        <Menu.Item name='delete' onClick={handleMenuClick} active={activeItem === 'delete'} className="red-color"><Icon className="red-color" name={"trash alternate"} />Delete</Menu.Item>
    </Menu>

    return (
        <Popup
            trigger={dropdownTrigger}
            on='click'
            basic
            className='menu-popup'
            position='bottom left'
            eventsEnabled
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Popup.Content>
                {menu}
            </Popup.Content>
        </Popup>
    )
}



export default class TableExampleSortable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <div className="table-boundary">
            <Table sortable fixed size="large">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={this.handleSort('name')}
                        >
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'email' ? direction : null}
                            onClick={this.handleSort('email')}
                        >
                            Email
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'address' ? direction : null}
                            onClick={this.handleSort('address')}
                        >
                            Address
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            className="menu-column"
                        />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ name, email, address }) => (
                        <Table.Row key={name}>
                            <Table.Cell >{name}</Table.Cell>
                            <Table.Cell >{email}</Table.Cell>
                            <Table.Cell >{address}</Table.Cell>
                            <Table.Cell ><PopupMenu setInEdit={this.props.setInEdit}/></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
                </div>
        )
    }
}
