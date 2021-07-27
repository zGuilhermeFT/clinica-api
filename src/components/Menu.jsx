import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

class Menu extends Component {

    render() {
        return (
            <div>
                <Navbar
                    alignLinks="right"
                    brand={<div>Logo</div>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                    <li>
                        <Link to='/pedrinho'>
                            Pedrinho
                        </Link>
                    </li>
                    <li>
                        <Link to='/joaozinho'>
                            Getting started
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                </Navbar>
            </div>
        );
    }
}

export default Menu;