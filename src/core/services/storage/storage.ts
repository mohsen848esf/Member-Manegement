
const setItem = (key:string, value:any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key:string) => {
  return JSON.parse(localStorage.getItem(key) || "")
}

const removeItem = (key:string) => {
  if (getItem(key) === false) return false
  localStorage.removeItem(key)
}

const clearStorage = () => {
  localStorage.clear()
}
export {setItem , getItem , removeItem , clearStorage}