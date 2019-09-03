import React, {useState} from 'react';
import styles from './Page.module.css'
import Form from '../Form/Form';
import fetchCall from '../ fetchCall';
import Rates from '../Rates/Rates'


const Page = () => {
  const [rates, setRates] = useState();
  const [loaded, setLoaded] = useState(false);
  const handleSubmit = (props) => {
    fetchCall(props)
      .then(res => {
        console.log(res)
        setRates(res.rates);
        setLoaded(true)
      })
  };
  return (
    <>
      <div className={styles.div}>
        <h2>
          Welcome to the Foreign Currency calculator
        </h2>
      </div>
      <Form onSubmit={handleSubmit} />
      <Rates rates={rates} loaded={loaded} />
    </>
  )
}


export default Page;