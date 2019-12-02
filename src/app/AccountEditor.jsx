import React from 'react'; 
import { Department, Phone } from '../Models';
import { PhoneList } from './PhoneList';
import { PhoneEditor } from './PhoneEditor'; 
import { AccountsRepository } from '../api'; 
import { Link } from 'react-router-dom'; 
import { Redirect } from 'react-router-dom';

export class AccountEditor extends React.Component { 

    accountsRepository = new AccountsRepository();

    departments = [
        new Department(1, 'Recruiting'), 
        new Department(2, 'Marketing'), 
        new Department(3, 'Sales'), 
        new Department(4, 'Accounting'),
    ]


    state = {
        name: '', 
        email: '',
        isEmployee: false,
        departmentId: 0, 
        phoneNumbers : []
    };


    render () {

        return <>  
        { this.state.redirect && <Redirect to="/"/>}

       <form className="container">
           <h1>Account Editor</h1> 
           <div className="form-group">
               <label htmlFor="name"> Name </label> 
               <input type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={ this.state.name } 
                      onChange={ e => this.setState( { name: e.target.value } ) } />
           </div> 

           <div className="form-group">
               <label htmlFor="email"> Email </label> 
               <input type="text"
                      id="email"
                      name="email"
                      className="form-control" 
                      value={ this.state.email } 
                      onChange={ e => this.setState( { email: e.target.value } ) }/>
           </div>  

           <div className="form-group">
               <label htmlFor="isEmployee"> 
               <input type="checkbox"
                      id="isEmployee"
                      name="isEmployee"
                      checked={ this.state.isEmployee } 
                      onChange={ e => this.setState( { isEmployee: e.target.checked } ) } />  Is Employee </label>
           </div> 

           <div className="form-group" 
                style={{ "display" : this.state.isEmployee ? "block" : "none"}}>
               <label htmlFor="departmentId"> Department </label> 
               <select
                      id="departmentId"
                      name="departmentId"
                      className="form-control" 
                      value={ this.state.departmentId } 
                      onChange={ e => this.setState( { departmentId: e.target.value } ) }>  
                      <option> </option>
                      { 
                          this.departments.map(x => <option key={x.id} value={x.id} >{ x.name }</option>)
                      } 
                      </select>
           </div>    
            <PhoneList phoneNumbers = { this.state.phoneNumbers} /> 
            <PhoneEditor onPhoneAdded={x => this.onPhoneAdded(x) }/> 
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={ e => this.onSubmit() }>
                    Save
                </button> 
                <Link to="/"
                className="btn btn-secondary btn-block">
                    Return to List
                </Link>
            </div>
       </form>
    </>
    }  

    componentDidMount() {
        let accountId = this.props.match.params.accountId;
        if (accountId) {
        this.accountsRepository.getAccountById(accountId)
        .then(account => this.setState(account)); 
        }
    }

    onPhoneAdded(phone) {
        this.setState(prevState => {  
            
            prevState.phoneNumbers.push(phone); 
            return prevState;
        });
    } 

    onSubmit() {
        var onSaveComplete = () => this.setState({redirect:true});

        
        if (this.state.id) {
            this.accountsRepository.updateAccount(this.state.id, this.state) 
            .then(onSaveComplete); 
        } else {
            this.accountsRepository 
            .addAccount (this.state).then(onSaveComplete)
        }
    }
}