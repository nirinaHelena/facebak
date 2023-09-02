import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function SignupPage() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = () => {
    const { email, username, password, confirmPassword } = formData;
    signup(email, username, password, confirmPassword);
  };

  return (
    <div>
      <h2>Inscription</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Nom d'utilisateur"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmer le mot de passe"
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
      <button onClick={handleSignup}>S'inscrire</button>
    </div>
  );
}

export default SignupPage;
