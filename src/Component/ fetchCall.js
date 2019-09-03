const fetchCall = ({date, base}) => {
  debugger
  if (!base && !date) {
    return fetch('https://api.exchangeratesapi.io/latest', {mode: 'cors'})
      .then(response => {
        return response.json()
      })
  }

  if (!date && base) {
    return fetch(`https://api.exchangeratesapi.io/latest?base=${base}`, {mode: 'cors'})
      .then(response => {
        return response.json();
      });
  }

  if (!base && date || base && date) {
    return fetch(`https://api.exchangeratesapi.io/${date}`, {mode: 'cors'})
      .then(response => {

        return response.json()
      })
  }
}
export default fetchCall;