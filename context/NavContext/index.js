import { createContext, useState, useContext } from 'react'

const NavPathContext = createContext()
const NavSetPath = createContext()
const NavStateContext = createContext()
const NavSetContext = createContext()

const NavProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('home')
  const [state, navSet] = useState({ isOpen: false })

  return (
    <NavPathContext.Provider value={currentPath}>
      <NavStateContext.Provider value={state}>
        <NavSetPath.Provider value={setCurrentPath}>
          <NavSetContext.Provider value={navSet}>
            {children}
          </NavSetContext.Provider>
        </NavSetPath.Provider>
      </NavStateContext.Provider>
    </NavPathContext.Provider>
  )
}

const usePathState = () => {
  const context = useContext(NavPathContext)
  if (context === undefined) {
    throw new Error('usePathState must be used within a NavProvider')
  }
  return context
}

const usePathSet = () => {
  const context = useContext(NavSetPath)
  if (context === undefined) {
    throw new Error('usePathSet must be used within a NavProvider')
  }
  return context
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

export {
  NavProvider, usePathState, usePathSet, useNavState, useNavSet,
}
