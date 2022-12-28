import './index.css'

const CountriesList = props => {
  const {listOfCountries, onClickVisitButton} = props
  const {name, isVisited, id} = listOfCountries

  const onClickButton = () => {
    console.log('clicked')
    onClickVisitButton(id)
  }

  return (
    <li className="list-item" key={id}>
      <p className="item-name">{name}</p>
      {isVisited ? (
        <button type="button" className="button visited-button">
          <p>Visited</p>
        </button>
      ) : (
        <button
          type="button"
          onClick={onClickButton}
          className="button visit-button"
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
