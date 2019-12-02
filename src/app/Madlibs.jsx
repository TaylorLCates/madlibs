import React from 'react';  
import { Redirect } from 'react-router-dom'; 
import {Words} from '../Models/'

export class Madlibs extends React.Component { 

    state = {
        noun: '', 
        adverb: '', 
        verb:'', 
        adjective: '', 
        number: 0, 
        words: [], 
        entered: false
    }

    render() {
        return <> 
        { this.state.redirect && <Redirect to="/madlibs"/>}

<form className="container">
           <h1>Welcome to Taylor's Madlibs!</h1> 
           <div className="form-group">
               <label htmlFor="noun"> Please enter a plural noun </label> 
               <input type="text"
                      id="noun"
                      name="noun"
                      className="form-control"
                      value={ this.state.noun } 
                      onChange={ e => this.setState( { noun: e.target.value } ) } />
           </div>  

           <div className="form-group">
               <label htmlFor="adverb"> Please enter an adverb </label> 
               <input type="text"
                      id="adverb"
                      name="adverb"
                      className="form-control"
                      value={ this.state.adverb } 
                      onChange={ e => this.setState( { adverb: e.target.value } ) } />
           </div>  

           <div className="form-group">
               <label htmlFor="verb"> Please enter a verb </label> 
               <input type="text"
                      id="verb"
                      name="verb"
                      className="form-control"
                      value={ this.state.verb } 
                      onChange={ e => this.setState( { verb: e.target.value } ) } />
           </div>  

           <div className="form-group">
               <label htmlFor="adjective"> Please enter an adjective </label> 
               <input type="text"
                      id="adjective"
                      name="adjective"
                      className="form-control"
                      value={ this.state.adjective } 
                      onChange={ e => this.setState( { adjective: e.target.value } ) } />
           </div>  

           <div className="form-group">
               <label htmlFor="number"> Please enter a number </label> 
               <input type="text"
                      id="number"
                      name="number"
                      className="form-control"
                      value={ this.state.number } 
                      onChange={ e => this.setState( { number: e.target.value } ) } />
           </div>  
           <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={ e => this.onSubmit() }>
                    Show me them madlibs!
                </button> 
            </div>
           </form>  
           
           { this.state.words.map( (word, index) => 

            <div key={index}
            style={{ "display" : this.state.entered ? "block" : "none"}}>
                <p> 
                    Tim has once told me that he was exceptionally afraid of {word.noun}. He often times will {word.verb} to deal with anxiety when he 
                    is around {word.noun}. He says the thing that freaks him out the most is how {word.adverb} they walk. He also really dislikes {word.adjective} {word.noun}. 
                    Ever since that one day {word.number} years ago, he will refuse to talk to you if you have been around {word.noun} within the past 30 minutes.
                </p>
           </div> )
    }
        </>
    } 

    onWordsAdded(word) {
        this.setState(prevState => {  
            
            prevState.words.push(word); 
            return prevState;
        });
    }

    onSubmit() {
        this.onWordsAdded(new Words(this.state.noun, this.state.adverb, this.state.verb, this.state.adjective, this.state.number)) 
        this.setState({noun: '', adverb: '', verb:'', adjective: '', number: 0, entered: true})
    } 


}
