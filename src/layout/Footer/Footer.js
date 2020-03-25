import React from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '../../components'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="Footer">
      <span>
        {t('footer.made')}{' '}
        <Icon className="Footer__icon--hearth" name="heart-solid" />{' '}
        {t('footer.by')}{' '}
        <a className="Footer__link" href="https://ttrmz.netlify.com/">
          Tristan Ramirez
        </a>
      </span>

      <span>
        <b>{t('footer.tag')}</b>{' '}
        <Icon className="Footer__icon--home" name="home-solid" />
      </span>
    </footer>
  )
}
