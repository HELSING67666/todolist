import React from 'react'

function useLocalStorage (itemName, initialValues) {
  const localStorageItem = localStorage.getItem(itemName)
  let parseItems
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValues))
    parseItems = initialValues
  } else {
    parseItems = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parseItems)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export { useLocalStorage }
