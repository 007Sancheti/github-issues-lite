import React, {useState} from 'react'
import {withRouter} from 'react-router-dom';

import './not-found.scss'

const NotFound = ({history}) => {
    setTimeout(
        () => {
            history.push("/rails/rails/issues");
        },
        3000
    )
    const [counter, setCounter] = useState(3);
    setInterval(() => {
        setCounter(counter - 1);
    }, 1000)
    return (
        <div className="fallback__content">
            <h1>Error 404 Not found</h1>
            <p>Redirecting to default page in {counter}</p>
        </div>
    )
}

export default withRouter(NotFound);
