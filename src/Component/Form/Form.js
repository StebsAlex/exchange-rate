import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = ({onSubmit}
) => {
  const [date, setDate] = useState('');
  const [base, setBase] = useState('GBP');

  const addDetails = (e) => {
    e.preventDefault();
    onSubmit({date, base});
  }
  return (
    <div>
      <form>
        <div className={styles.container}>
          <div>

            <label htmlFor="start">Date: </label>
            <input type="date" id="start" name="trip-start"
              onChange={e => {setDate(e.target.value)}}
              className={styles.input}
              placeholder="2018-07-22"
              min="2012-01-01" max="2018-12-31"
              value={date} />
          </div>
          <div>
            <label htmlFor="baseValue"> Base: </label>
            <input type="text" id="baseValue" name="baseValue"
              className={styles.input}
              onChange={e => {setBase(e.target.value)}}
              placeholder="Base Currency"
              value={base} />
          </div>
        </div>
        <div>
          <button className={styles.submit}
            type="submit"
            onClick={(e) => addDetails(e)}
          > Calculate </button>
        </div>
      </form>
    </div>
  )
}
export default Form;