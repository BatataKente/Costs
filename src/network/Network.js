import {useEffect, useState} from 'react'

export default function (link, method) {
    const[data, setData] = useState([])
    useEffect(
        () => {
            fetch(
                link,
                {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((response) => (response.json()))
            .then((data) => (setData(data)))
            .catch((error) => (console.log(error)));
        }, []
    )
    return data
}