import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from './final/page/AuthContext';
import Homepage from "./Homepage";
import LoginPage from './final/page/Login';
function App() {
  const { token } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        {/* Route de connexion */}
        <Route path="/final/page/Login" element={<LoginPage />} />

        {/* Route protégée - Affichez la page d'accueil si l'utilisateur est authentifié */}
        {token ? (
          <Route path="/" element={<Homepage />} />
        ) : (
          <Route path="/" element={<LoginPage/>} />
        )}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
