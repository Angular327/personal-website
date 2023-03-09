import CameraMovementComponent from './Assets/CameraMovementComponent';
import { CameraMovements1to2, CameraMovements2to3, CameraPositions } from '../Utils/CameraMovements';


function cameraComponent() {
    return <CameraMovementComponent CameraMovements={CameraPositions[0]}/>;
  }
  
export default cameraComponent;