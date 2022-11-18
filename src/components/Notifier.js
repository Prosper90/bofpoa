import React from 'react';
import Toast from 'react-bootstrap/Toast';
import "./lockup.css"


export default function Notifier(props) {

  return (

    <Toast className='toast' show={props.show} onClick={props.toggleShowA} bg={props.bg} >
        <Toast.Body>{props.message}</Toast.Body>
    </Toast>

  )
}
