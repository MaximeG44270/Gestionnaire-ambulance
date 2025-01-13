import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Composant/Auth/login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Composant/Auth/ProtectedRoute";
import { UserProvider } from "./Contexts/UserContext";
import PharmacieInterne from "./Pages/PharmacieInterne";
import ListUtilisateurs from "./Pages/Utilisateur/ListUtilisateurs";
import AjouterUtilisateurs from "./Pages/Utilisateur/AjouterUtilisateurs";
import ResultatsAmbulance from "./Pages/ResultatsDesinfection/ResultatsDesinfectionAmbulance";
import ResultatsVsl from "./Pages/ResultatsDesinfection/ResultatsDesinfectionVsl";
import ResultatsTaxis from "./Pages/ResultatsDesinfection/ResultatsDesinfectionTaxis";
import Parametres from "./Pages/Parametre";
import VslAll from "./Pages/VslTaxis";
import AmbulanceAll from "./Pages/Ambulance";
import AjoutBDD from "./Pages/AjoutBDDProduct";
import AjoutBDDAmbulance from "./Pages/AjoutBDDAmbulance";


const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Route par défaut */}
          <Route path="/" element={<Navigate to="/auth/login" />} />
          
          {/* Page de login */}
          <Route path="/auth/login" element={<Login />} />

          {/* Routes protégées */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pharmacie-interne"
            element={
              <ProtectedRoute>
                <PharmacieInterne />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ambulance"
            element={
              <ProtectedRoute>
                <AmbulanceAll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vsltaxis"
            element={
              <ProtectedRoute>
                <VslAll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utilisateurs/liste"
            element={
              <ProtectedRoute>
                <ListUtilisateurs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utilisateurs/ajouter"
            element={
              <ProtectedRoute>
                <AjouterUtilisateurs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resultats-desinfection/ambulance"
            element={
              <ProtectedRoute>
                <ResultatsAmbulance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resultats-desinfection/vsl"
            element={
              <ProtectedRoute>
                <ResultatsVsl />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resultats-desinfection/taxis"
            element={
              <ProtectedRoute>
                <ResultatsTaxis />
              </ProtectedRoute>
            }
          />
          <Route
            path="/parametres"
            element={
              <ProtectedRoute>
                <Parametres />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ajoutBDD"
            element={
              <ProtectedRoute>
                <AjoutBDD />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ajoutBDDAmbulance"
            element={
              <ProtectedRoute>
                <AjoutBDDAmbulance />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;