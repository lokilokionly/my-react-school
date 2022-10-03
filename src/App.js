import { Routes, Route } from 'react-router-dom'

import './App.css';

// header & footer & page
import ProjectHeader from './page/header/header';
import RealSchool from './page/realschool/realschool';
// header & footer & page

function App() {
  return (
    <div className="App w-[1140px] mx-auto">
      <ProjectHeader/>
      <RealSchool/>
      <Routes>

        <Route></Route>
        <Route></Route>
        <Route></Route>

      </Routes>

    </div>
  );
}

export default App;
