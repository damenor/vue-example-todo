const existLocalStorage = () => window.localStorage !== null

export const setLocalStorage = (key, value) => existLocalStorage() ? localStorage.setItem(key, JSON.stringify(value)) : false
export const getLocalStorage = key => existLocalStorage() ? JSON.parse(localStorage.getItem(key)) : null
export const removeLocalStorage = key => existLocalStorage() ? localStorage.removeItem(key) : false
export const removeAllLocalStorage = () => existLocalStorage() ? localStorage.clear() : false
