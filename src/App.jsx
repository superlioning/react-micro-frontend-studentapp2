import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const StudentForm = React.lazy(() => import("StudentApp1/StudentForm"));

  return (
    <div className="container">
      <React.Suspense fallback={<div>Loading Form from StudentApp1...</div>}>
        <h5 class="d-flex justify-content-center">StudentApp 2</h5>
        <p class="d-flex justify-content-center">
          This application is using the StudentForm from StudentApp1.
        </p>
        <StudentForm />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
