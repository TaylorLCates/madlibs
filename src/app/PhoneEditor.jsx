import React from 'react'; 
import {Phone} from '../Models/'


export class PhoneEditor extends React.Component { 
phoneTypeOption = [ 'home', 'work', 'mobile', 'fax'];

    state = {
        type: '', 
        number:''

    };

    render() {
        return <>
            <div className="row mt-4 mb-4">
                <div className="col-3">
                    <select
                        name="newPhone_type"
                        id="newPhone_type"
                        className="form-control" 
                        value ={this.state.type} 
                        onChange={e => this.setState({ type: e.target.value})}>
                        <option></option> 
                        {
                            this.phoneTypeOption.map(x => <option key={x}>{x}</option>)
                        }
                    </select>
                </div>
                <div className="col-6">
                    <input
                        type="text"
                        name="newPhone_number"
                        id="newPhone_number"
                        className="form-control" 
                        value ={this.state.number} 
                        onChange={e => this.setState({ number: e.target.value})}>
                        </input>
                </div>
                <div className="col-3">
                    <button
                        type="button"
                        className="btn btn-success btn-block" 
                        onClick={e => this.onSubmit() }>
                        Add
                    </button>
                </div>
            </div>
        </>
    } 

    onSubmit() {
        this.props.onPhoneAdded(new Phone(this.state.number, this.state.type)) 
        this.setState({type: '', number: ''})
    }
}