import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import { SearchProvider } from './components/SearchContext';
import SearchByJuzsPage from './pages/SearchByJuzsPage';

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <SearchByJuzsPage />,
        path: "/search-by-juzs",
      },
      {
        element: <Home />,
        path: "/chapters",
      },
      {
        element: <Home />,
        path: "/verses",
      },
    ],
  },
]);

function App() {

  return (
    <>
    <SearchProvider>
      <RouterProvider router={routes}/>
    </SearchProvider>
    </>
  )
}

export default App
