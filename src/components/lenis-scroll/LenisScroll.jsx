import { ReactLenis } from 'lenis/react'

const LenisScroll = ({children}) => {
  return (
    <ReactLenis root options={{ 
      autoRaf: true, 
      lerp: 0.08
      }}>
      {children}
    </ReactLenis>
  )
}

export default LenisScroll