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
import werner from '@/images/logos/werner.svg'
import ladder from '@/images/Wood_X5_Framing_Modes3_Maya.jpg'
import scrubber from '@/images/8-Volt Handheld Scrubber Multi-Pack.png'
import ProjectSections from '@/components/ProjectSection'
import weatherGuard from '@/images/logos/weather-guard.svg'
import weatherGuardTruck from '@/images/weather-guard-truck.png'
import krispyKreme from '@/images/logos/krispy-kreme.svg'
import krispyKremeBox from '@/images/krispy-kreme-box.png'
import { Video } from '@/components/Video'

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
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'Werner',
    description:
      'Anim cillum labore id eiusmod proident ullamco ut laborum velit commodo elit consequat. Sunt minim adipisicing amet duis labore. Reprehenderit mollit esse qui. Excepteur proident exercitation laborum aliqua occaecat.',
    logoImageSrc: werner.src,
    mainImageSrc: ladder.src,
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Weather Guard',
    description:
      ' Sunt minim adipisicing amet duis labore',
    logoImageSrc: weatherGuard.src,
    mainImageSrc: weatherGuardTruck.src,
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'Krispy Kreme',
    description:
      'Anim cillum labore id eiusmod proident ullamco ut laborum velit commodo elit consequat. Sunt minim adipisicing amet duis labore. Reprehenderit mollit esse qui. Excepteur proident exercitation laborum aliqua occaecat.',
    logoImageSrc: krispyKreme.src,
    mainImageSrc: krispyKremeBox.src,
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]



export default function Home() {
  return (
    <> 
      <Hero />
      <Video />
      <Banner
        title="OUR FAVORITE VFX PROJECTS"
        description="Some of the work we are most proud of"
        backgroundColor="primary"
        headerTextColor="white"
        descriptionTextColor="white"
      />
      <ProjectSections projects={projects} />
    </>
  )
} 
