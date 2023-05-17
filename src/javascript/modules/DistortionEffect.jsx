import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'

export default class DistortionEffect extends Component {
  constructor(props) {
    super(props)
  }

  handleValueChange = (property, value) => {
    const { instrumentName, handleValueChange } = this.props
    handleValueChange(instrumentName, property, value)
  }

  render() {
    const { title, instrumentName, settings } = this.props
    const { wet, distortion, oversample } = settings.distortion
    const oversampleTypes = ['none', '2x', '4x']

    return (
      <div className="DistortionEffect">
        <h1>{title}</h1>

        <SC_Slider
          name="Дивергенция"
          property="distortionWet"
          min={0}
          max={1}
          step={0.01}
          value={wet}
          handleChange={this.handleValueChange}
        />

        <SC_Slider
          name="Конвергенция"
          property="distortionDistortion"
          min={0}
          max={20}
          step={0.01}
          value={distortion}
          handleChange={this.handleValueChange}
        />

        <SC_ToggleButtonSet
          name="Передискретизация"
          property="distortionOversample"
          value={oversample}
          options={oversampleTypes}
          handleChange={this.handleValueChange}
        />
      </div>
    )
  }
}
