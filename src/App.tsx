import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuPrepScreen from './screens/MenuPrepScreen';
import CriteriaScreen from './screens/CriteriaScreen';
import ResultsScreen from './screens/ResultsScreen';
import NutritionScreen from './screens/NutritionScreen';
import HistoryScreen from './screens/HistoryScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/menu-prep" element={<MenuPrepScreen />} />
      <Route path="/criteria" element={<CriteriaScreen />} />
      <Route path="/results" element={<ResultsScreen />} />
      <Route path="/nutrition" element={<NutritionScreen />} />
      <Route path="/history" element={<HistoryScreen />} />
    </Routes>
  );
}
