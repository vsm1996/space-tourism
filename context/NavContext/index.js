import { createContext, useState, useContext } from 'react'

const NavStateContext = createContext()
const NavSetContext = createContext()
const NavElementContext = createContext()
const NavSetElement = createContext()

const NavProvider = ({ children }) => {
  const [state, navSet] = useState({ isOpen: false })
  const [navElement, setNavElement] = useState(null)

  return (
    <NavStateContext.Provider value={state}>
      <NavElementContext.Provider value={navElement}>
        <NavSetContext.Provider value={navSet}>
          <NavSetElement.Provider value={setNavElement}>
            {children}
          </NavSetElement.Provider>
        </NavSetContext.Provider>
      </NavElementContext.Provider>
    </NavStateContext.Provider>
  )
}

const useNavState = () => {
  const context = useContext(NavStateContext)
  if (context === undefined) {
    throw new Error('useNavState must be used within a NavProvider')
  }
  return context
}

const useNavSet = () => {
  const context = useContext(NavSetContext)
  if (context === undefined) {
    throw new Error('useNavSet must be used within a NavProvider')
  }
  return context
}

const useNavElement = () => {
  const context = useContext(NavElementContext)
  if (context === undefined) {
    throw new Error('useNavElement must be used within a NavProvider')
  }
  return context
}

const useElementSet = () => {
  const context = useContext(NavSetElement)
  if (context === undefined) {
    throw new Error('useNavElement must be used within a NavProvider')
  }
  return context
}

export {
  NavProvider, useNavState, useNavSet, useNavElement, useElementSet,
}
