import React from 'react'

export default function Experience(props) {
    return (
        <div>
            <h1 className="h1 blockqoute">{props.company}</h1>
            <h3 className="blockqoute">{props.startdate} to {props.enddate}</h3>
            <h5 className="blockqoute">Worked as: {props.workedas}</h5>
            <p className="blockqoute flex-wrap font-italic text-success" >My responsibilities: {props.responsibilities}.</p>
        </div>
    )
}
