import React, { Component } from 'react';

import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";
import SuperAdminPanel from "./SuperAdminPanel";

export default class Render6 extends Component {

    render() {
        
        let { loggedIn, userRole } = this.props;

        return (
            <div> 
                <p>Hoşgeldiniz...</p>
                {
                    loggedIn ? [  // Eger loggedIn true ise
                        userRole ? // Eger userRole true iseve eger userRole a"super_admin" degeri gelmisse <SuperAdminPanel /> gelmemisse <AdminPanel /> ve giris ekrani 
                            userRole === "super_admin" ? <SuperAdminPanel /> /* : userRole === "gani" ? <SuperAdminPanel /> */ : <AdminPanel />
                        : null                                                  // eger gani yazarsamda <SuperAdminPanel />  e girer
                     ] : (
                        <LoginForm/>
                    )
                }
            </div>
        );
    }
}