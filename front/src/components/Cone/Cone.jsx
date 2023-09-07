import React from "react";
import { DoubleSide } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const Cone = ( { attribute } ) => {
    if(attribute === null) return

    let vertexes = new Float32Array(attribute.vertexes)
    let indices = new Uint16Array(attribute.indices)
    let normals = new Float32Array(attribute.normals)

    const colors = new Float32Array([1, 2, 3])

    // indices = new Uint16Array([
    //     0, 1, 2,
    //     0, 2, 3,
    //     0, 3, 4,
    //     0, 4, 5,
    //     0, 5, 6,
    //     0, 6, 7,
    //     0, 7, 8,
    //     0, 8, 9,
    //     0, 9, 10,
    //     0, 10, 11,
    //     0, 11, 12,
    //     0, 12, 13,
    //     0, 13, 14,
    //     0, 14, 15,
    //     0, 15, 16,
    // ])

  return (

      <Canvas camera={{ fov: 90, position: [0, 0, 3] }}>
            <OrbitControls  />
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={0.8} />

            <mesh>
                <bufferGeometry>
                    <bufferAttribute
                        attach='attributes-position'
                        array={vertexes}
                        count={vertexes.length / 3}
                        itemSize={3}
                    />

                    <bufferAttribute
                        attach='attributes-color'
                        array={colors}
                        count={colors.length / 3}
                        itemSize={3}
                    />

                    <bufferAttribute
                        attach='attributes-normal'
                        array={normals}
                        count={normals.length / 3}
                        itemSize={3}
                    />

                    <bufferAttribute
                        attach="index"
                        array={indices}
                        count={indices.length}
                        itemSize={1}
                    />
                </bufferGeometry>

                <meshStandardMaterial
                    vertexColors
                    side={DoubleSide}
                />
            </mesh>
    </Canvas>

  );
};

export default Cone;
