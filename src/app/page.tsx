import Banner from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

import { projects } from '../../data';
import ProjectSections from '@/components/ProjectSection'

export default function Home() {
  return (
    <> 
      <Hero />
      <PrimaryFeatures />
      <Banner
        title="OUR FAVORITE VFX PROJECTS"
        description="Some of the work we are most proud of"
        backgroundColor="[#242423]"
        headerTextColor="white"
        descriptionTextColor="white"
      />
      <ProjectSections projects={projects} />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  )
} 
