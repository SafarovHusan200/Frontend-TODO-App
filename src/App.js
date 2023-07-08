import Home from "./pages/Home";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-2 border rounded bg-white">
          <h2 className="text-center">Todo App</h2>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
