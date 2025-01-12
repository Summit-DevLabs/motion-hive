import Banner from '@/components/Banner'
import { Hero } from '@/components/Hero'
import ProjectSections from '@/components/ProjectSection'
import { Video } from '@/components/Video'
import { projects } from '@/data/projects'

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
