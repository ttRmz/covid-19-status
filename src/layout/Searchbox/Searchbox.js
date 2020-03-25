import React from 'react'
import { useTranslation } from 'react-i18next'

export function Searchbox({ value, onChange }) {
  const { t } = useTranslation()

  return (
    <nav className="Searchbox">
      <input
        placeholder={t('search')}
        className="Searchbox__input"
        value={value}
        onChange={onChange}
      />
    </nav>
  )
}
