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

export type SectionAboutProject = {
  title: string
  description: string

  image: {
    url: string
    alternativeText: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProject
}
