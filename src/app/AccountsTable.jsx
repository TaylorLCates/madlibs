import React from 'react';  
import { Link } from 'react-router-dom'


export const AccountsTable = props => {
    if (!props.accounts) {
        return <div>Loading....</div>; 
    }
              if (!props.accounts.length) {
                  return <div className="alert alert-info"> 
                  No records found.</div>;
              }
            
              return <>
              <div className="container">
            <table className="table table-striped table-condensed"> 
                <thead>
                    <tr> 
                        <th scope="col">Name</th> 
                        <th scope="col">E-mail</th> 
                        <th scope="col">Employee?</th> 
                        <th scope="col">Department</th>
                    </tr> 
                </thead> 
                <tbody> 
                { props.accounts.map( (account, index) => 
           
            <tr key={ index }> 
        
              <td><Link to={`/edit/` + account.id}>{account.name }</Link> </td>
              <td>{ account.email }</td>
              <td>{ String(account.isEmployee)}</td>
              <td>{ account.departmentId }</td> 
              <td> <button className=" btn btn-small btn-danger" 
              onClick={e => props.onDelete(account.id)}>Delete</button></td>
            </tr>  )
           }
                </tbody>
            </table>

        </div> 
              </>}
              
