const padZero = (str: string, len: number) => {
  var zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}

export const invertColor = (hexCode: string, useOnlyBlackWhite?: boolean) => {
  let tmpHex = hexCode

  if (tmpHex.indexOf('#') === 0) {
    tmpHex = tmpHex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (tmpHex.length === 3) {
    tmpHex =
      tmpHex[0] + tmpHex[0] + tmpHex[1] + tmpHex[1] + tmpHex[2] + tmpHex[2]
  }
  if (tmpHex.length !== 6) {
    return '#FFFFFF'
  }
  var rNum = parseInt(tmpHex.slice(0, 2), 16),
    gNum = parseInt(tmpHex.slice(2, 4), 16),
    bNum = parseInt(tmpHex.slice(4, 6), 16)
  if (useOnlyBlackWhite) {
    // https://stackoverflow.com/a/3943023/112731
    return rNum * 0.299 + gNum * 0.587 + bNum * 0.114 > 186
      ? '#000000'
      : '#FFFFFF'
  }
  // invert color components
  const r = (255 - rNum).toString(16)
  const g = (255 - gNum).toString(16)
  const b = (255 - bNum).toString(16)
  // pad each with zeros and return
  return '#' + padZero(r, 2) + padZero(g, 2) + padZero(b, 2)
}
