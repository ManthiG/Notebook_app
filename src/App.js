// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  // Keep your existing styles if needed
import Register from './components/Register';
import Login from './components/Login';
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';
import NoteForm from './components/NoteForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Notebook App</h1>
          <Routes>
            {/* Define Routes for different pages */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
            <Route path="/notes/new" element={<NoteForm />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
