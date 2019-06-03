import React from 'react';

import Layout from '../components/layout';


import MainHero from '../sections/MainHero';
import AboutSection from '../sections/AboutSection';
import WorkSection from '../sections/WorkSection';
import SkillSection from '../sections/SkillSection';

const IndexPage = () => (
  <Layout>
    <MainHero />
    <AboutSection />
    <WorkSection />
    <SkillSection />
  </Layout>
)

export default IndexPage;
