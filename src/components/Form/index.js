import React from 'react';
import '../../App.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            isAnswerTrue: '',
            comment: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
      
        event.preventDefault();
        console.log('Form Data:\n');
        for (const [key, value] of Object.entries(this.state)) {
            console.log(` ${key}: ${value}`);
          }
        
    }

    render() {

        const alphaRegex = '[A-Za-z]+';
        const alphaNumRegex = '[A-Za-z0-9_]*';

        return (
           <form className='Flex-container' onSubmit={this.handleSubmit}>
               <label>
                   First Name: 
                    <input
                      required
                      name='firstName'
                      type='text'
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      pattern={alphaRegex}
                       />   
               </label>
               <br />
               <label>
                   Last Name:
                      <input 
                        required
                        name='lastName'
                        type='text'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        pattern={alphaRegex}
                      />
               </label>
               <label>
                   Email:
                      <input
                        required
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                </label>
                <div>
                    Answer:
                      <input 
                          required
                          name='isAnswerTrue'
                          type='radio'
                          id='answer'
                          value='yes'
                           onChange={this.handleInputChange}
                      /> 
                      <label htmlFor='yes'>Yes</label> 
                      <input 
                      required
                          name='isAnswerTrue'
                          type='radio'
                          id='answer'
                          value='no' 
                          onChange={this.handleInputChange}
                      /> 
                      <label htmlFor='no'>No</label> 
                </div>
                <label>
                      Comment:
                      <textarea name='comment' value={this.state.comment} onChange={this.handleInputChange} pattern={alphaNumRegex}/>
                </label>   
                <input type='submit' value='Submit' />   
            </form>  
        )
    }
}

export default Form;