import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            isAnswerYes: '',
            isAnswerNo: '',
            comment: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
           <form>
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
                          name='answer'
                          type='radio'
                          id='yes'
                          value='yes'
                          checked 
                          onChange={this.handleInputChange}
                      /> 
                      <label for='yes'>Yes</label> 
                      <input 
                          name='answer'
                          type='radio'
                          id='no'
                          value='no'
                          checked 
                          onChange={this.handleInputChange}
                      /> 
                      <label for='no'>No</label> 
                </div>
                <label>
                      Comment:
                      <textarea value={this.state.comment} onChange={this.handleChange} />
                </label>      
            </form>  
        )
    }
}

export default Form;