import React from 'react';
import styles from './Rates.module.css';

const Rates = ({rates, loaded}) => {
  if (!loaded) {
    return <div> </div>
  } else {
    return (
      <div>
        {!rates
          ? <div> Loading...</div>
          : Object.keys(rates).map(currency => (
            <div key={currency}>
              <div className={styles.container}>
                <p className={styles.paragraph}>{currency}</p>
                <p className={styles.paragraph}>{rates[currency]}</p>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default Rates;