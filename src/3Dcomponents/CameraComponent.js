import CameraMovementComponent from './Assets/CameraMovementComponent';
import { CameraMovements1to2, CameraMovements2to3 } from '../Utils/CameraMovements';


function cameraComponent() {
    return <CameraMovementComponent CameraMovements={CameraMovements1to2}/>;
  }
  
export default cameraComponent;