import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LoginSuccess from "./LoginSuccess";

function App() {
  const [Isformsubmitted, setIsformsubmitted] = useState(false);
  const submitForm = () => {
    setIsformsubmitted(true);
  };
  return (
    <div className="container">
      {Isformsubmitted ? (
        <LoginSuccess />
      ) : (
        <LoginForm submitForm={submitForm} />
      )}
    </div>
  );
}
export default App;
