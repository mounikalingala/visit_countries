import './index.css'

const VisitedCountriesList = props => {
  const {visitedCountries, OnClickRemoveItem} = props
  const {name, imageUrl, id} = visitedCountries
  const onClickRemove = () => {
    OnClickRemoveItem(id)
  }
  return (
    <li className="country-item" key={id}>
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-button-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountriesList
