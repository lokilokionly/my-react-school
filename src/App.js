import { Routes, Route } from 'react-router-dom'
import 'tw-elements';
import './App.css';

// header & footer & page
import ProjectHeader from './page/header/header';
import RealSchool from './page/realschool/realschool';
import Education from './page/education/education'
import Childrenlove from './page/childrenlove/childrenlove';
import ComprasionSchool from './page/comparisonSchool/comparisonSchool';
import SchoolPrice from './page/SchoolPrice/SchoolPrice';
import Certificate from './page/сertificate/Certificate';
import ReviewsSchool from './page/reviewsSchool/reviewsSchool';
import Akardion from './page/akardion/akardion';

import ProjectFooter from './page/ProjectFooter/ProjectFooter'
// header & footer & page

function App() {
  return (
    <div className="App w-3/5  mx-auto">
      <ProjectHeader/>
      <RealSchool/>
      <Education/>
      <Childrenlove/>
      <ComprasionSchool/>
      <SchoolPrice/>
      <Certificate/>
      <ReviewsSchool/>
      <Akardion/>
      <ProjectFooter/>
      {/* <Routes>

        <Route></Route>
        <Route></Route>
        <Route></Route>

      </Routes> */}

    </div>
  );
}

export default App;
