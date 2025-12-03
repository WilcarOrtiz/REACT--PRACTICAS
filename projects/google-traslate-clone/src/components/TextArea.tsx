import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'
import type React from 'react'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}
const commondStyles = { border: 0, height: '200px' }

const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.from) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traduccion'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.from
      ? commondStyles
      : { ...commondStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <Form.Control
      autoFocus={type === SectionType.from}
      as="textarea" // que elemento quiero renderizar
      readOnly={type === SectionType.to}
      placeholder={getPlaceHolder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
