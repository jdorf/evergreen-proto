import React, { useState } from 'react';
import './App.css';
import { InlineAlert, Checkbox, Button, Icon } from 'evergreen-ui';
import Table from "./table"

const menuItemContainer =  <div className="menu-item-container">
    <button className="button-link link-blue" tabIndex="0" type="button">Return to V2</button>
    <div className="menu-item-KLeyWDO store-status-menu">
        <div className="store-dropdown-container-BWgHogp">
            <div className="icon-wrapper-3Jvq2-z">
                <svg width="30" height="30" viewBox="0 0 30 30" className="icon refresh-icon-3bYKff8">
                    <path fill-rule="evenodd"
                          d="M22.231 8.244l-1.359 1.36a3.57 3.57 0 00-.226-.25A8.007 8.007 0 0015 7c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.946 7.946 0 007.668-5.715 1 1 0 10-1.916-.57A5.962 5.962 0 0115 21c-3.309 0-6-2.691-6-6s2.691-6 6-6c1.599 0 3.115.65 4.236 1.765l.204.271-2.195 2.195c-.425.425-.283.769.318.769h4.893a.543.543 0 00.544-.544V8.563c0-.601-.344-.743-.769-.319"></path>
                </svg>
            </div>
        </div>
    </div>
    <div className="divider"/>
    <div className="menu-item-KLeyWDO">
        <div className="icon-wrapper-8cwvxDa">
            <svg width="30" height="30" viewBox="0 0 30 30" className="icon">
                <path fill-rule="evenodd"
                      d="M22.5 9a.5.5 0 01.5.5V16h-2v-4H9v4H7V9.5a.5.5 0 01.5-.5H10V6.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5V9h2.5zM10 25V13h10v12H10zm9-1V14h-8v10h8zm-7-7v-1h6v1h-6zm0 2v-1h6v1h-6zm0 2v-1h6v1h-6z"></path>
            </svg>
        </div>
    </div>
    <div className="menu-item-KLeyWDO"><a href="/settings">
        <div className="icon-wrapper-8cwvxDa">
            <svg width="30" height="30" viewBox="0 0 30 30" className="icon">
                <path fill-rule="evenodd"
                      d="M23 19.5c0 .55-.45 1-1 1s-1-.45-1-1c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5c.55 0 1 .45 1 1s-.45 1-1 1c-1.93 0-3.5-1.57-3.5-3.5 0-.33.06-.64.14-.94l-4.7-4.7c-.3.08-.61.14-.94.14C8.57 14 7 12.43 7 10.5c0-.55.45-1 1-1s1 .45 1 1c0 .83.67 1.5 1.5 1.5.09 0 .18-.01.27-.03.03 0 .05 0 .07-.01.08-.02.15-.04.22-.07a.3.3 0 00.11-.06c.29-.13.53-.37.66-.66a.3.3 0 00.06-.11c.03-.07.05-.14.07-.22.01-.02.01-.04.01-.07.02-.09.03-.18.03-.27 0-.83-.67-1.5-1.5-1.5-.55 0-1-.45-1-1s.45-1 1-1c1.93 0 3.5 1.57 3.5 3.5 0 .33-.06.64-.14.94l4.7 4.7c.3-.08.61-.14.94-.14 1.93 0 3.5 1.57 3.5 3.5"></path>
            </svg>
        </div>
    </a></div>
    <div className="menu-item-KLeyWDO help-menu-1tg_xSh">
        <div className="drop-2QZyf0- dropdown-menu-19dsq2H">
            <button
                className="button-unstyled icon-wrapper-3yvqoUe dropdown-toggler dropdown-menu-toggler-1ZSy_0z"
                tabIndex="0" type="button">
                <div className="dropdown-toggler-content-beMiJ4B">
                    <svg width="30" height="30" viewBox="0 0 30 30" className="icon">
                        <path fill-rule="evenodd"
                              d="M15.854 15.696a2.364 2.364 0 00-.347 1.062.374.374 0 01-.372.357h-1.01c-.265 0-.363-.18-.358-.432.007-.388.075-.88.192-1.152.251-.576.782-1.116 1.195-1.499.513-.476.865-.812.865-1.408 0-.783-.54-1.106-1.368-1.106-.563 0-.99.23-1.356.53a.369.369 0 01-.478-.02l-.616-.565a.376.376 0 01-.01-.549c.794-.722 1.767-1.114 2.791-1.114 1.976 0 3.11 1.02 3.11 2.797 0 1.687-1.667 2.126-2.238 3.1M14.606 20.2a1.024 1.024 0 01-1.049-1.049c0-.604.442-1.06 1.05-1.06.607 0 1.06.456 1.06 1.06 0 .593-.453 1.05-1.06 1.05M15 7a8 8 0 10.001 16 8 8 0 000-16"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <div className="menu-item-KLeyWDO account-menu-2RV8aLM">
        <div className="drop-2QZyf0- dropdown-menu-19dsq2H">
            <button
                className="button-unstyled icon-wrapper-1jTQFrQ dropdown-toggler dropdown-menu-toggler-1ZSy_0z"
                tabIndex="0" type="button">
                <div className="dropdown-toggler-content-beMiJ4B">
                    <svg width="30" height="30" viewBox="0 0 30 30" className="icon">
                        <path fill-rule="evenodd"
                              d="M19.711 18.704c-.553-.97-1.85-1.717-3.462-1.977v-.45a2.49 2.49 0 001.25-2.152V13.5a2.5 2.5 0 10-5 0v.625c0 .923.506 1.72 1.25 2.153v.449c-1.61.26-2.908 1.008-3.46 1.977A5.963 5.963 0 018.998 15c0-3.308 2.692-6 6-6 3.31 0 6 2.692 6 6a5.968 5.968 0 01-1.288 3.704zM14.991 21h.018-.019zm.008-14A8 8 0 1015 23a8 8 0 000-16z"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</div>
const routes = <div className="routes"><a href="/dashboard">Insights</a><a
    href="/orders/awaiting-shipment">Orders</a><a href="/shipments/shipped-recent">Shipments</a><a
    href="/products">Products</a><a href="/customers">Customers</a><a href="/scan">Scan</a>
    <svg width="30" height="30" viewBox="0 0 30 30" className="icon">
        <path fill-rule="evenodd"
              d="M9.5 14h11V9h-11v5zm9 3h2v-1h-2v1zm0 2h2v-1h-2v1zm-3-2h2v-1h-2v1zm0 2h2v-1h-2v1zm0 2h5v-1h-5v1zm-3-4h2v-1h-2v1zm0 2h2v-1h-2v1zm0 2h2v-1h-2v1zm-3-4h2v-1h-2v1zm0 2h2v-1h-2v1zm0 2h2v-1h-2v1zm12-14h-13a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V8a1 1 0 00-1-1z"/>
    </svg>
</div>
const renderLeftNav = () => {
    const links = ['Automation', 'Shipping', 'Printing', 'Templates', 'Inventory Management', 'Integrations', 'Branded Customer Pages' ]
    return (
        <div className="left-nav">
            <div>
                <span><Icon icon="caret-right"/></span>Account
            </div>
            <div className="light-green">
                <span><Icon icon="caret-down"/></span>Selling Channels<span id="triangle-left"/>
            </div>
            <div className="white">
                <span><Icon icon="shopping-cart"/></span>Store Setup
            </div>
            {links.map(text => <div><span><Icon icon="caret-right"/></span>{text}</div>)}
        </div>
    )
}

function App() {
    const [checked, setChecked] = useState(false)
    return (
        <div id="app-main" className="app grid">
            <div className="logo header" >
                <img src="https://ship0.shipstation.com/images/sswhite.svg" />
            </div>
            <div className="header-content header">
                { routes }
                { menuItemContainer }
            </div>
            { renderLeftNav() }
            <div className="breadcrumbs">
                <span className="link-blue">Settings</span><span>»</span>Store Setup
            </div>
            <div className="main-content">
                <h1>Store Setup</h1>
                <InlineAlert minHeight="40px" paddingX="15px" paddingY="5px" backgroundColor="#F1FBFC"><span className="bold-text">Five Stores Connected. </span>Your current subscription support stores in unlimited marketplace(s).</InlineAlert>
                <div className="flex-row flex-space-between">
                    <Checkbox checked={checked} className="checkbox-custom" label="Show Inactive Stores" onChange={e => setChecked(e.target.checked)}></Checkbox>
                    <Button className="button-custom" >Connect a Store</Button>
                </div>
                <Table className="table-custom" />
            </div>
        </div>
    );
}

export default App;
