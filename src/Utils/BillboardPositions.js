import * as THREE from 'three';


export const BillBoards = [
    {
        rotation: new THREE.Euler().fromArray([90, 125, -90].map((angle) => THREE.MathUtils.degToRad(angle))),
        position: [-2, 16, -.48],
        width: 1 * 8,
        height: 1 * 8,
        id: "landing-page"
    },
    {
        rotation: new THREE.Euler().fromArray([0, 90, 0].map((angle) => THREE.MathUtils.degToRad(angle))),
        position: [1, 3.75, 3],
        width: 1 * 12.275,
        height: 1 * 12.275,
        id: "skills-experiences"
    },
    {
        rotation: new THREE.Euler().fromArray([0, 90, 0].map((angle) => THREE.MathUtils.degToRad(angle))),
        position: [1, 3.75, 3],
        width: 1 * 12.275,
        height: 1 * 12.275,
        id: "landing-page"
    }
]