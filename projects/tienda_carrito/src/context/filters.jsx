/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'

//1. Esto es loq ue tenemos que consumir
export const FiltersContext = createContext()

//2. este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
