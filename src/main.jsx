import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { App } from './App'
import { Hello } from './components/Hello/Hello';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { Technologies } from './components/Technologies/Technologies';
import { Contact } from './components/Contact/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Hello />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="technologies" element={<Technologies />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
  </BrowserRouter>
)
