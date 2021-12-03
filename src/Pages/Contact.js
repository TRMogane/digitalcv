import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            fullname:'',
            message:''
        }
    }


    render() {
        return (
            <div className="container">
                <h1 className="text-center ">Talk to me</h1>
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" name="email"  aria-describedby="emailHelp" placeholder="Enter email"/>
                        
                    </div>

                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Enter Full Name"/>
                        
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="8"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg">Send</button>
                </form>
            </div>
        )
    }
}

