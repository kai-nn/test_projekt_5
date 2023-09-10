import React, { useEffect, useState } from "react";
import "./styles.css";
import Cone from "./components/Cone/Cone";
import Menu from "./components/Menu/Menu";
import { useRequest } from "./api/useRequest/hooks/useRequest";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";



function App() {

    const [coneProperty, setConeProperty] = useState(
        {
            h: 8,
            r: 4,
            N: 10
        }
    )

    const [attribute, setAttribute] = useState(null)
    const [smoothPres, setSmoothPres] = useState(0)

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
                smoothPres={smoothPres}
                setSmoothPres={setSmoothPres}
            />

            <Canvas camera={{ fov: 90, position: [0, 0, 15] }}>
                <OrbitControls  />
                <ambientLight intensity={0.3} />
                <directionalLight position={[1, 1, 1]} intensity={0.8} />

                {data ? <Cone attribute={attribute} smoothPres={smoothPres} /> : ''}
            </Canvas>

        </div>
    )
}


export default App