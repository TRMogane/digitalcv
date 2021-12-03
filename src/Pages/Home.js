import React from 'react'
import pic1 from '../Images/pic1.jpeg'
import {Link} from 'react-router-dom'
import '../styles/styles.css'

export default function Home() {
    return (
        <div className="container">
            <h1 className="text-center text-capitalize">Welcome to my world</h1>
            <div className="row my-5">
                <div className="col-3">
                    <img src={pic1} alt='profile' className="img-thumbnail mx-auto d-block rounded-5 image" width={210} height={300}/>
                </div>
                <div className="col-7 card">
                    <p className="text-center justify-content-center align-center my-2 h5 blackquote card-body par">
                    My name is Thabang Reneilwe Mogane. I am a full-time student at North West University currently in my final semester for the BSc Information Technology (Software Engineering stream).
                    I have an interest in Functional consulting and System Analysis and would like to further my growth in those branches.
                    . My Passion for System analysis has grown due to projects I have worked on during my school career. I have played a role of Analyst in four projects and I now have a deeper appreciation
                     and an understanding of all the Business requirements that needs to be met and documented before a system is developed (coded).

                    </p>
                    <div className="card-footer">
                    <Link to='about' className="btn btn-outline-info btn-sm">More about me</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
