import Banner from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import hoover from '@/images/logos/hoover.svg'
import SWPetXL from '@/images/SWPetXL GrayTech Boost Mode.jpg'
import dirtDevil from '@/images/logos/dirt-devil.svg'
import scrubber from '@/images/8-Volt Handheld Scrubber Multi-Pack.png'
import ProjectSections from '@/components/ProjectSection'

export const projects = [
  {
    name: 'Hoover',
    description:
      'Anim cillum labore id eiusmod proident ullamco ut laborum velit commodo elit consequat. Sunt minim adipisicing amet duis labore. Reprehenderit mollit esse qui. Excepteur proident exercitation laborum aliqua occaecat.',
    logoImageSrc: hoover.src,
    mainImageSrc: SWPetXL.src,
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather z/bg-honeycomb.webp',
  },
  {
    name: 'Dirt Devil',
    description:
      'Anim cillum labore id eiusmod proident ullamco ut laborum velit commodo elit consequat. Sunt minim adipisicing amet duis labore. Reprehenderit mollit esse qui. Excepteur proident exercitation laborum aliqua occaecat.',
    logoImageSrc: dirtDevil.src,
    mainImageSrc: scrubber.src,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'Project 3',
    description:
      'Anim cillum labore id eiusmod proident ullamco ut laborum velit commodo elit consequat. Sunt minim adipisicing amet duis labore. Reprehenderit mollit esse qui. Excepteur proident exercitation laborum aliqua occaecat.',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Project 4',
    description:
      ' Sunt minim adipisicing amet duis labore',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]



export default function Home() {
  return (
    <> 
      <Hero />
      <PrimaryFeatures />
      <Banner
        title="OUR FAVORITE VFX PROJECTS"
        description="Some of the work we are most proud of"
        backgroundColor="primary"
        headerTextColor="white"
        descriptionTextColor="white"
      />
      <ProjectSections projects={projects} />
      {/* <SecondaryFeatures /> */}
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  )
} 
