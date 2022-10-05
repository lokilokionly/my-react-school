import { Routes, Route } from 'react-router-dom'

import './App.css';

// header & footer & page
import ProjectHeader from './page/header/header';
import RealSchool from './page/realschool/realschool';
import Education from './page/education/education'
import Childrenlove from './page/childrenlove/childrenlove';
import ComprasionSchool from './page/comparisonSchool/comparisonSchool';
import SchoolPrice from './page/SchoolPrice/SchoolPrice';
// header & footer & page

function App() {
  return (
    <div className="App w-[1140px] mx-auto">
      <ProjectHeader/>
      <RealSchool/>
      <Education/>
      <Childrenlove/>
      <ComprasionSchool/>
      <SchoolPrice/>
      <Routes>

        <Route></Route>
        <Route></Route>
        <Route></Route>

      </Routes>

    </div>
  );
}

export default App;
