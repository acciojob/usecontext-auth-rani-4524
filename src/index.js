import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthProvider } from './component/AuthContext.jsx'



ReactDOM.render(<AuthProvider>
    <App/>
  </AuthProvider>, document.getElementById("root"));
