import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Test extends Component {
    
    constructor(props){
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
    }

    state = {
        input: "This is text",
        textarea: "this is textarea",
        select: 1
    };

    
    changeHandler = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((state,props) => ({
            [name]: value
        }));

    }

    submitHandler(event){

        console.log(this.state);
        event.preventDefault();
        return false;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" value={this.state.input} onChange={this.changeHandler} name="input" id="" placeholder=""/>
                      <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="form-group">
                      <label></label>
                      <textarea className="form-control" name="textarea" value={this.state.textarea}  id="" onChange={this.changeHandler} rows="3"/>
                    </div>
                    <div className="form-group">
                      <label >Select</label>
                      <select className="form-control" name="select" value={this.state.select} onChange={this.changeHandler} id="">
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <input name="" id="" className="btn btn-primary" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
