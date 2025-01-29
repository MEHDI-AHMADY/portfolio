import { SectionProps } from '@/app/types/shared';
import React from 'react';

const About:React.FC<SectionProps> = ({sectionRef}) => {
  return (
    <section ref={sectionRef} className="h-screen bg-red-300">About</section>
  )
}

export default About