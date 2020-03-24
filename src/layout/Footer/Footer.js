import React from 'react'
import { Icon } from '../../components'

export function Footer() {
  return (
    <footer className="Footer">
      <span>
        Made with <Icon className="Footer__icon--hearth" name="heart-solid" />{' '}
        by{' '}
        <a className="Footer__link" href="https://ttrmz.netlify.com/">
          Tristan Ramirez
        </a>
      </span>
      <span>
        <b>#StayAtHome</b>{' '}
        <Icon className="Footer__icon--home" name="home-solid" />
      </span>
    </footer>
  )
}
