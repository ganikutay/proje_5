import React, { Component } from 'react';

import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";

export default class Render4 extends Component {

    render(loggedIn) {
        return (
            <div> 
                {/* { loggedIn && <AdminPanel /> }  true donerse, && yi gecer ve sagdaki <AdminPanel /> kodu calisir
                { !loggedIn && <LoginForm /> } asagidakiyle ayni*/}
                { loggedIn === true && <AdminPanel /> } {/* bunu gormuyor anlayamadim */}
                { loggedIn != false && <LoginForm /> }
            </div>
        );
    }
}