import SWPetXL from '@/images/SWPetXL GrayTech Boost Mode.jpg'
import scrubber from '@/images/8-Volt Handheld Scrubber Multi-Pack.png'
import ladder from '@/images/Wood_X5_Framing_Modes3_Maya.jpg'
import weatherGuardTruck from '@/images/weather-guard-truck.png'
import krispyKremeBox from '@/images/krispy-kreme-box.png'

export interface CaseStudy {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Hoover Pet XL Visualization",
    description: "Creating photorealistic 3D renderings of the Hoover Pet XL vacuum with detailed attention to materials and lighting.",
    image: SWPetXL.src,
    category: "CG Product Rendering"
  },
  {
    id: 2,
    title: "Dirt Devil Scrubber Campaign",
    description: "Capturing the essence of the Dirt Devil handheld scrubber through compelling product photography.",
    image: scrubber.src,
    category: "Product Lifestyle Imagery"
  },
  {
    id: 3,
    title: "Werner Ladder Technical Documentation",
    description: "Developing detailed technical renderings for Werner&apos;s professional ladder line.",
    image: ladder.src,
    category: "Technical Rendering"
  },
  {
    id: 4,
    title: "Weather Guard Truck Showcase",
    description: "Creating compelling visualizations for Weather Guard&apos;s truck storage solutions.",
    image: weatherGuardTruck.src,
    category: "CG Product Rendering"
  },
  {
    id: 5,
    title: "Krispy Kreme Box Design",
    description: "Designing and rendering premium packaging for Krispy Kreme&apos;s product line.",
    image: krispyKremeBox.src,
    category: "Product Lifestyle Imagery"
  }
] 