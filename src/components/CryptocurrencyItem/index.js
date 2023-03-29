// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyData

  return (
    <li className="list-items">
      <div className="currency-logo-type">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
