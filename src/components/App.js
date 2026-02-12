
import React from "react";
import './../styles/App.css';
import { useAuth } from './AuthContext'


const App = () => {
    const {isRobot , checked , unchecked}= useAuth();

  return (
    <div>
        {/* Do not remove the main div */}
    <h1>Click on the checkbox to get authenticated</h1>
<p className="authText">
        {isRobot
          ? "You are now authenticated, you can proceed"
          : "You are not authenticated"}
      </p>

     <label>
        <input
          type="checkbox"
          checked={isRobot}
          onChange={(e) => {
            if (e.target.checked) {
              checked();
            } else {
              unchecked();
            }
          }}
        />
        I'm not robot
     </label>
    </div>
  )
}

export default App
