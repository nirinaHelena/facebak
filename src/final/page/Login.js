import React, { useState } from 'react';
import { useAuth } from '../page/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuth(); // Accédez à la fonction login à partir du contexte d'authentification
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      // Appelez la fonction login avec les valeurs de l'email et du mot de passe
      await login(formData.email, formData.password);
      navigate('/Homepage')
    } catch (error) {
      // Gérer les erreurs de connexion ici
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
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
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default LoginPage;
