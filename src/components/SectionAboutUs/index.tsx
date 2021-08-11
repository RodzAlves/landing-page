import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAuthorsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAuthorsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ name, description, role, socialLinks, photo }, index) => (
        <ProfileCard
          key={index}
          name={name}
          role={role}
          photo={photo}
          socialLinks={socialLinks}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
