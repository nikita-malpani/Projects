import React, { Component } from 'react';
import { Router } from 'react-router';
import './home.css'
import LoginComponent from './login'
class HomeComponent extends Component {

    render() {
        return (
            <div className="row" id="cointainer">
                <div className="columns small-12 large-centered" id="containerdiv">
                    <LoginComponent/>
                    {/*<ul class="tabs" data-tabs id="example-tabs">
                        <li class="tabs-title is-active small-6"><a href="#panel1" aria-selected="true">Tab 1</a></li>
                        <li class="tabs-title small-6"><a data-tabs-target="panel2" href="#panel2">Tab 2</a></li>
                    </ul>

                    <div class="tabs-content" data-tabs-content="example-tabs">
                        <div class="tabs-panel is-active" id="panel1">
                            login
                        </div>
                        <div class="tabs-panel" id="panel2">
                            signup
                        </div>
                    </div>*/}

                </div>
            </div>
        );
    }
}

export default HomeComponent;
