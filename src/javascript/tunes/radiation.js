const channel = {
  volume: 0,
  mute: true
}

const synth = {
  volume: 20,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'triangle',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

const tremolo = {
  wet: 0.2,
  frequency: 10,
  type: 'square',
  depth: 1,
  spread: 360
}

const distortion = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}

const bitCrusher = {
  wet: 0,
  bits: 4
}

const sequence = {
  steps1: [
    {
      time: '0:0:0',
      noteName: 'G5',
      duration: '4n',
      velocity: 0.1
    },
    {
      time: '0:0:2',
      noteName: 'G5',
      duration: '1n',
      velocity: 0.1
    },
    {
      time: '0:1:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '0:2:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '0:2:1',
      noteName: 'F5',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '0:3:0',
      noteName: 'G5',
      duration: '4n',
      velocity: 0.1
    },
    {
      time: '1:0:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:1:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:2:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:2:1',
      noteName: 'F5',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:3:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:3:3',
      noteName: 'G4',
      duration: '4n',
      velocity: 0.4
    }
  ],
  steps2: [
    {
      time: '0:0:0',
      noteName: 'F6',
      duration: '4n',
      velocity: 0.1
    },
    {
      time: '0:0:2',
      noteName: 'F6',
      duration: '1n',
      velocity: 0.1
    },
    {
      time: '0:1:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '0:2:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '0:2:1',
      noteName: 'G6',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '0:3:0',
      noteName: 'F6',
      duration: '4n',
      velocity: 0.1
    },
    {
      time: '1:0:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:1:0',
      noteName: 'F4',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:2:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:2:1',
      noteName: 'G6',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:3:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '1:3:3',
      noteName: 'F5',
      duration: '4n',
      velocity: 0.4
    }
  ],
  duration: '1m',
  loop: true,
  current: 'steps1'
}

export {
  channel,
  synth,
  chorus,
  pingPongDelay,
  tremolo,
  distortion,
  bitCrusher,
  sequence
}
