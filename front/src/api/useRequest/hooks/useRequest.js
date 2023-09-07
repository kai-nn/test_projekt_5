import { useEffect, useState } from "react";


export const useRequest = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [statusText, setStatusText] = useState(null)
    const [requestData, setRequestData] = useState(null)

    const fetching = async () => {
        // console.log('requestData', requestData)
        if(requestData){
            const response = await fetch(
                requestData.url,
                {
                    method: requestData.method,
                    body: JSON.stringify(requestData.body),
                    headers: requestData.headers
                }
            )

            if(response.ok){
                const data = await response.json()
                setData(data)
                setIsLoading(true)
                setStatusText(response.statusText)
            } else {
                setData('error')
                setIsLoading(true)
                setStatusText(response.statusText)
            }
        }

    }

    useEffect(() => {
        fetching().then()
    }, [requestData])

    return { data, isLoading, statusText, setRequestData }
}

