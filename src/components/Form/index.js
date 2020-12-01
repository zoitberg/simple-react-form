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
        return (
           <form className='Flex-container' onSubmit={this.handleSubmit}>
               <label>
                   First Name: 
                    <input
                      name='firstName'
                      type='text'
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                       />   
               </label>
               <br />
               <label>
                   Last Name:
                      <input 
                        name='lastName'
                        type='text'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                      />
               </label>
               <label>
                   Email:
                      <input
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                </label>
                <div>
                    Answer:
                      <input 
                          name='isAnswerTrue'
                          type='radio'
                          id='yes'
                          value='yes'
                           onChange={this.handleInputChange}
                      /> 
                      <label htmlFor='yes'>Yes</label> 
                      <input 
                          name='isAnswerTrue'
                          type='radio'
                          id='no'
                          value='no' 
                          onChange={this.handleInputChange}
                      /> 
                      <label htmlFor='no'>No</label> 
                </div>
                <label>
                      Comment:
                      <textarea name='comment' value={this.state.comment} onChange={this.handleInputChange}/>
                </label>   
                <input type='submit' value='Submit' />   
            </form>  
        )
    }
}

export default Form;