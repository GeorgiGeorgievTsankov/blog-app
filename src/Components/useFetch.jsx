import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setName] = useState(null);
    const [isPending, setIsPending] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                fetch(url)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('No data available')
                        }
                        return res.json();
                    })
                    .then(data => {
                        setName(data)
                        setIsPending(false);
                    })
                    .catch(err => {
                        alert(err.message);
                    })
            }, [1000])
        }, [url]);

        return {data,isPending}

}

export default useFetch