import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'

export default class BitCrusherEffect extends Component {
  constructor(props) {
    super(props)
  }

  handleValueChange = (property, value) => {
    const { instrumentName, handleValueChange } = this.props
    handleValueChange(instrumentName, property, value)
  }

  render() {
    const { title, instrumentName, settings } = this.props
    const { wet, bits } = settings.bitCrusher

    return (
      <div className="BitCrusherEffect">
        <h1>{title}</h1>

        <SC_Slider
          name="аутопоэзис"
          property="bitCrusherWet"
          min={0}
          max={1}
          step={0.01}
          value={wet}
          handleChange={this.handleValueChange}
        />

        <SC_Slider
          name="фракталы"
          property="bitCrusherBits"
          min={0}
          max={16}
          step={4}
          value={bits}
          handleChange={this.handleValueChange}
        />
      </div>
    )
  }
}
