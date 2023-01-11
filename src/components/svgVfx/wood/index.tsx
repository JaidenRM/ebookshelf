export const WoodVfx = () => {
  return (
    <filter id="wood" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".005 1
      
      "
      />
      <feColorMatrix
        values="
            0 0 0 .11 .29
            0 0 0 .09 .18
            0 0 0 .08 .14
            0 0 0 0 1"
      />
    </filter>
  )
}
