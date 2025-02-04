"use client" ;

import { useSections } from '@/context/SectionRefsContext';
import React from 'react';

const About = () => {
   const {aboutRef} = useSections()
  return (
    <section ref={aboutRef} className="h-screen bg-red-300">About</section>
  )
}

export default About