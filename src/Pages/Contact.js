import React, { Component } from 'react'
import mainpic from '../Images/ball.jfif'
import '../styles/styles.css'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            fullname:"",
            message:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    }

    handleChange(event){
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }

    sendMessage(event){
        event.preventDefault();
        //send message using emailjs
        console.log(this.state)
        alert('Thank you for the message. Will get back to you as soon as possible')
        
    }

    render() {
        return (
            <div className="contactmain">
                <div className="container">
                <h1 className="text-center text-white">Talk to me</h1>
                <form onSubmit={this.sendMessage}>
                    <div className="form-group">
                        <label for="message" className="text-white">Message</label>
                        <textarea className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Hello my name is ........." rows="8"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="name" className="text-white">Full Name</label>
                        <input type="text" className="form-control" id="fullname" name="fullname" value={this.state.fullname} onChange={this.handleChange} placeholder="Enter Full Name"/>
                        
                    </div>
                    <div class="form-group">
                        <label for="email" className="text-white">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
                        
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg">Send</button>
                </form>
            </div>
            </div>
        )
    }
}

