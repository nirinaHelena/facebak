import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Créez un contexte d'authentification
const AuthContext = createContext();

// Créez un composant AuthProvider pour envelopper votre application avec le contexte
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fonction de connexion
  const login = async (email, password) => {
    try {
      const response = await axios.post('localhost:8080/login', {
        email,
        password,
      });

      // Récupérez le token depuis la réponse de l'API
      const username = response.data.username;
      const token = response.data.token;

      // Stockez le token dans le localStorage
      localStorage.setItem("authToken", token);

      setUser({
        ...response.data.user,
        token: token,
      });
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  const signup = async (email, username, password, confirmPassword) => {
    try {
      // Vérifiez que les mots de passe correspondent
      if (password !== confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas');
      }
  
      const response = await axios.post('localhost:8080/signup', {
        email,
        username,
        password
      });
  
      setUser(response.data.user);
    } catch (error) {
      console.error('Erreur d\'inscription :', error);
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    // Supprimez le token du localStorage lors de la déconnexion
    localStorage.removeItem("authToken");
    // Déconnectez l'utilisateur en supprimant l'utilisateur de l'état local
    setUser(null);
  };

  // Fournissez les fonctions de connexion et de déconnexion ainsi que l'utilisateur actuel
  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Créez un hook personnalisé pour accéder au contexte d'authentification
export const useAuth = () => useContext(AuthContext);
