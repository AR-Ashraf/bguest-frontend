
export function waitForm(ms)  {
    return new Promise( resolve => { setTimeout(resolve, ms); });
  }; 

export function OpenLink (props)  {
  window.location.assign(props);      
}
