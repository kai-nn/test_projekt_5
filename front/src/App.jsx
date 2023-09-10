import React, { useEffect, useState } from "react";
import "./styles.css";
import Cone from "./components/Cone/Cone";
import Menu from "./components/Menu/Menu";
import { useRequest } from "./api/useRequest/hooks/useRequest";



function App() {

    const [coneProperty, setConeProperty] = useState(
        {
            h: 4,
            r: 4,
            N: 10
        }
    )

    const [attribute, setAttribute] = useState(null)

    const {data, setRequestData} = useRequest()

    useEffect(() => {
        // console.log('coneProperty', coneProperty)
        setRequestData(
            {
                url: 'calculation',
                method: 'post',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: coneProperty
            }
        )
    }, [coneProperty])

    useEffect(() => {
        data && setAttribute(data)
    }, [data])



    return (
        <div className="App">
            <Menu
                coneProperty={coneProperty}
                setConeProperty={setConeProperty}
            />

            <Cone attribute={attribute} />

        </div>
    )
}


export default App