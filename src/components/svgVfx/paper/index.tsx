export const PaperVfx = () => {
  return (
    <filter id="paper" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.9"
        numOctaves="8"
        result="noise"
      />
      <feDiffuseLighting
        in="noise"
        lightingColor="white"
        surfaceScale="1"
        result="diffLight"
      >
        <feDistantLight azimuth="45" elevation="35" />
      </feDiffuseLighting>
    </filter>
  )
}
