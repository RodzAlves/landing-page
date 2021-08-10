export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Concept = {
  id: string
  title: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string

  image: {
    url: string
    alternativeText: string
  }

  button: {
    label: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string

  image: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
