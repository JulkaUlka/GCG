import React from "react";
import UserForm from "components/UserForm/UserForm.jsx";

function Register() {
  const handleRegister = (formData) => {
   
  };

  return (
    <div>
      <UserForm onSubmit={handleRegister} />
    </div>
  );
}

export default Register;
