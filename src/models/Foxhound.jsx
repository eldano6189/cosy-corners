/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 foxhound.glb -s 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Foxhound(props) {
  const { nodes, materials } = useGLTF("/foxhound.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foxhound_1_64_one_piece_Foxhound_1_64_v1.geometry}
        material={nodes.Foxhound_1_64_one_piece_Foxhound_1_64_v1.material}
        position={[0, -3.18, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/foxhound.glb");
