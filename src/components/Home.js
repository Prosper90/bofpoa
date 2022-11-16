import React from 'react';
import Sectionone from './homesections/Sectionone';
import Sectiontwo from './homesections/Sectiontwo';
import Sectionthree from './homesections/Sectionthree';
import Sectionfour from './homesections/Sectionfour';
import Sectionfive from './homesections/Sectionfive';
import Sectionsix from './homesections/Sectionsix';
import Sectionseven from './homesections/Sectionseven';
import Sectioneight from './homesections/Sectioneight';
import Sectionnine from './homesections/Sectionnine';
import Header from './header/Header';

export default function Home() {
  return (
    <div className='container-banner full-width' >
        <Sectionone />
        <Sectiontwo />
        <Sectionthree />
        <Sectionfour />
        <Sectionfive />
        <Sectionsix />
        <Sectionseven />
        <Sectioneight />
        <Sectionnine />
    </div>
  )
}
