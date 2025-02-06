import React from "react";
import UserForm from "components/UserForm/UserForm.jsx";

function Login() {
  const handleLogin = (formData) => {};

  return (
    <div>
      <UserForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}

export default Login;
