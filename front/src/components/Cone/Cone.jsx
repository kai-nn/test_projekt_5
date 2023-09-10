import React, { memo, useMemo } from "react"
import * as THREE from "three"


const getGeometry = (vertices, normals, smoothPres) => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(vertices), 3)
    )
    smoothPres
        ? geometry.setAttribute(
            'normal',
            new THREE.BufferAttribute(new Float32Array(normals), 3)
        )
        : geometry.computeVertexNormals()
    return geometry
}


const Cone = ( props ) => {
    const { attribute, smoothPres } = props
    const geo = useMemo(
        () => getGeometry(attribute.vertices, attribute.normals, smoothPres),
        [attribute, smoothPres]
    );

    const mat = useMemo(
        () => new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide,
            color: new THREE.Color("rgb(135, 206, 235)")
        }),
        []
    )

    return (
        <mesh
            position={[-2, 0, 0]}
            rotation={[-0.5, 0, 0]}
            geometry={geo}
            material={mat}
        />
    )
}


export default memo(Cone)
