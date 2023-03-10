/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf --transform
Author: Przemek Gesicki - DigitWorlds (https://sketchfab.com/DigitWorlds)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/reebok-shoe-by-digitworldscom-70d77395535746ed87240c9127945325
Title: Reebok Shoe by DigitWorlds.com
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/shoe-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.test}
        position={[-0.14, -3, 17.84]}
        rotation={[1.86, -0.03, 0.02]}
      />
    </group>
  );
}

useGLTF.preload("/shoe-transformed.glb");
