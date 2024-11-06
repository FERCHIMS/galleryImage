import { ReactLenis } from 'lenis/react'

const LenisScroll = ({children}) => {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      {children}
    </ReactLenis>
  )
}

export default LenisScroll