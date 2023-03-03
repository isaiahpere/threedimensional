/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 computer.gltf --transform
Author: FimK models (https://sketchfab.com/SCDU)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dirty-computer-c505e6caf44345428fbbeffad3482a66
Title: Dirty Computer.
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/computer-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.cube_ao}
            position={[0, 150, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={60}
          >
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.cube_ao}
            position={[0, 150, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={60}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");