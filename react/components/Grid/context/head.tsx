import React, { useContext, createContext, PropsWithChildren } from 'react'

// import useTableSort from '../hooks/useTableSort'

export interface HeadProps {
  stickyHeader: boolean
  //sorting?: ReturnType<typeof useTableSort>
}

const HeadContext = createContext<HeadProps>(null)

export function useHeadContext() {
  const context = useContext(HeadContext)
  if (!context) {
    throw new Error('Do not use head components outside of the HeadContext')
  }
  return context
}

export function HeadProvider({
  children,
  ...value
}: PropsWithChildren<HeadProps>) {
  return <HeadContext.Provider value={value}>{children}</HeadContext.Provider>
}
