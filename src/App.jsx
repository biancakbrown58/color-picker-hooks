import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * (359 - 1) + 1))
  const [saturation, setSaturation] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )
  const [lightness, setLightness] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * (100 - 1) + 1))

  function handleButtonClick(event) {
    setHue(Math.floor(Math.random() * (359 - 1) + 1))
    setSaturation(Math.floor(Math.random() * (100 - 1) + 1))
    setLightness(Math.floor(Math.random() * (100 - 1) + 1))
    setAlpha(Math.floor(Math.random() * (100 - 1) + 1))
  }

  function handleHueChange(event) {
    setHue(event.target.value)
  }

  function handleSaturationChange(event) {
    setSaturation(event.target.value)
  }

  function handleLightnessChange(event) {
    setLightness(event.target.value)
  }
  function handleAlphaChange(event) {
    setAlpha(event.target.value)
  }

  const newBackgroundColor = `hsl(${hue},${saturation}%,${lightness}%,${alpha}%)`

  const newStyle = { backgroundColor: newBackgroundColor }
  return (
    <div>
      <div className="color-bar" style={newStyle}></div>
      <h1>{`hsla(${hue},${saturation}%,${lightness}%,${alpha}%)`}</h1>
      <button style={newStyle} onClick={handleButtonClick}>
        Get a Random Color
      </button>
      <p>Hue: {hue}</p>
      <input
        type="range"
        min="0"
        max="359"
        className="hue slider"
        value={hue}
        onChange={handleHueChange}
      ></input>

      <p>Saturation: {saturation}</p>
      <input
        type="range"
        min="0"
        max="100"
        className="saturation slider"
        value={saturation}
        onChange={handleSaturationChange}
      ></input>

      <p>Lightness: {lightness}</p>
      <input
        type="range"
        min="0"
        max="100"
        className="lightness slider"
        value={lightness}
        onChange={handleLightnessChange}
      ></input>

      <p>Alpha: {alpha}</p>
      <input
        type="range"
        min="0"
        max="100"
        className="alpha slider"
        value={alpha}
        onChange={handleAlphaChange}
      ></input>
    </div>
  )
}
