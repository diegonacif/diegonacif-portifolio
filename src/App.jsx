import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './styles/App.css';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
