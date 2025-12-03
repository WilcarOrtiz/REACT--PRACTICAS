import Form from 'react-bootstrap/Form'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGE } from '../constants'
import React, { type FC } from 'react'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
  | {
      type: SectionType.from
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | {
      type: SectionType.to
      value: Language
      onChange: (language: Language) => void
    }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select
      aria-label="Seleccione el idioma"
      onChange={handleChange}
      value={value}
    >
      {type === SectionType.from && (
        <option value={AUTO_LANGUAGE}>Detectar Idioma</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGE).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
