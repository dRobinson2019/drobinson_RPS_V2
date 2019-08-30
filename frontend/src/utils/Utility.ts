export const getCookie = (cname: string) =>  {
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

// @ts-ignore
export const mergeState = (initialState, newState) => {
  return ({ ...initialState, ...newState})
}

export const convertToReadableDate = (timestamp: number ) => {
  const timeInNumbers = Number(timestamp)
  const date = new Date(timeInNumbers)
  return `${date.toDateString()} ${date.toLocaleTimeString()}`
}