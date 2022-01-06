import React, { Component } from "react";

export class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        license: false,
    };

    handleChange = event => {
        const {name, value} = event.currentTarget;
    
        this.setState({[name]: value}); 
      };
    
    handleSubmit = event => {
         event.preventDefault();
    
         this.props.onSubmit(this.state);

         this.resetForm();
    };

    handleCheckboxChange = event => {
          this.setState({license: event.currentTarget.checked})
    };

    resetForm = () => {
          this.setState({name: '', tag: '' })
      };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                 Name 
                    <input 
                        type="text"
                        name='name'
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                 Tag 
                    <input 
                        type="text"
                        name='tag' 
                        value={this.state.tag} 
                        onChange={this.handleChange}
                    />
                </label>

                <p>Experience</p>

                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'junior'}/> 
                        Junior
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'middle'}/> 
                        Middle
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'}/> 
                        Senior
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="license"
                        checked={this.state.license}
                        onChange={this.handleCheckboxChange}/>
                        I Agree
                </label>
                <button type="submit" disabled={!this.state.license}>Send</button>
          </form>
        );
    };
};