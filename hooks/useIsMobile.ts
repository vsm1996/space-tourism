import { useEffect, useState } from 'react'

const useIsMobile = (gridBreakpointUp = '768px'): readonly [boolean] => {
  const gridBreakpointUpMatch = typeof window !== 'undefined' && window.matchMedia(`(min-width: ${gridBreakpointUp})`)
  const [isMobile, setIsMobile] = useState(false)
  // Update component client-side after render to avoid server/client mismatch
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  useEffect(() => {
    setIsMobile(gridBreakpointUpMatch && !gridBreakpointUpMatch.matches)
    setIsComponentMounted(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (gridBreakpointUpMatch) {
    const onBreakpointChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
    }
    // addListener is deprecated but older browsers (e.g., Safari < 14) don't support addEventListener
    // So we support both
    if (gridBreakpointUpMatch.addEventListener) {
      gridBreakpointUpMatch.addEventListener('change', onBreakpointChange)
    } else if (gridBreakpointUpMatch.addListener) {
      gridBreakpointUpMatch.addListener(onBreakpointChange)
    }
  }

  return [
    isMobile,
  ] as const
}

export default useIsMobile
