export type Button = {
  label: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Image = {
  alternativeText: string
  url: string
}

export type Concept = {
  title: string
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string

  image: Image

  button: Button
}

export type SectionAboutProjectProps = {
  title: string
  description: string

  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Button
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  description: string
  socialLinks: SocialLink[]
  photo: Image
}

export type Review = {
  name: string
  text: string
  photo: Image
}

export type SectionAuthorsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAuthors: SectionAuthorsProps
  sectionReviews: SectionReviewsProps
}
