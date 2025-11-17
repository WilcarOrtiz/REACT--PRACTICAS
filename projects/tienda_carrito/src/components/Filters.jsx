import { useId } from 'react'
import './Filters.css'
import { useFilter } from '../hooks/useFilters'

export function Filters() {
  const { filters, setFilters } = useFilter()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all"> Todas</option>
          <option value="smartphones">smartphones</option>
        </select>
      </div>
    </section>
  )
}
