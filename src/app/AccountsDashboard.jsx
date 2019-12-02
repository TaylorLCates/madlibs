import React from 'react';  
import { AccountsRepository } from '../api'; 
import { AccountsTable } from './AccountsTable'; 
import { Link } from 'react-router-dom'


export class AccountsDashboard extends React.Component { 
    constructor(props) {
        super(props); 
        this.state = {
            accounts: []
        }
    }

accountsRepository = new AccountsRepository();

    render () {
        return <>  
        <div className="container">  
        <Link to="/new" className="btn btn-sm btn-success float-right">
            New Account
        </Link>
        <h1>Accounts</h1>
        <div className="clearfix"></div>
        <AccountsTable accounts={ this.state.accounts } 
         onDelete={x => this.onDelete(x)} />
        </div>

    </>
    } 
    componentDidMount() {
        this.accountsRepository.getAccounts()
        .then(accounts => this.setState({'accounts' : accounts}));
    } 

    onDelete(id) {
   
        if (window.confirm("Are you sure?")) {
            this.accountsRepository.deleteAccount(id) 
            .then(this.setState(prevState => {
                prevState.accounts = prevState.accounts.filter(x => x.id!==id) 
                return prevState;
            })); 
        }
    }
    }
