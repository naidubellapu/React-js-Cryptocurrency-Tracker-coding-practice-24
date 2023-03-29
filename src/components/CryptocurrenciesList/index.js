// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    console.log(formattedData)
    this.setState({currencyList: formattedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {currencyList} = this.state
    return (
      <div className="currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-img"
        />
        <ul className="currency-item-card">
          <div className="coin-header">
            <li className="item">Coin Type</li>
            <div className="list-item">
              <li className="item">USD</li>
              <li className="item">EURO</li>
            </div>
          </div>
          {currencyList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} currencyData={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrenciesList
