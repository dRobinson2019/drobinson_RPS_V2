export const getCookie = (cname) =>  {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export const mergeState = (initialState, newState) => {
  return ({ ...initialState, ...newState})
}

export const convertToReadableDate = (timestamp) => {
  const timeInNumbers = Number(timestamp)
  const date = new Date(timeInNumbers)

  console.log('timestamp ', timestamp)
  console.log('number timestamp ', timeInNumbers)
  console.log('data ', date)
  return `${date.toDateString()} ${date.toLocaleTimeString()}`
}