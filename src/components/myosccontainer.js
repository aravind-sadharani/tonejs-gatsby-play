import React, {useState, useRef, useEffect} from "react"
import {Oscillator} from "tone"
import {MySlider} from "../components/sliders"

const MyOscContainer = ({freq}) => {
  const [isPlaying, setPlaying] = useState(false)

  let variance = 2/10000

  const MyOsc1 = useRef(new Oscillator(Number(freq*(1+variance)),"sine"))

  const MyOsc2 = useRef(new Oscillator(Number(freq*(1-variance)),"sine"))

  const stop = () => {
    MyOsc1.current.toMaster().stop()
    MyOsc2.current.toMaster().stop()
  }

  useEffect(() => {
    MyOsc1.current.volume.value = -30
    MyOsc1.current.partials = [...Array(16).keys()].map(x => 0.5**x)
    MyOsc2.current.volume.value = -30
    MyOsc2.current.partials = [...Array(16).keys()].map(x => 0.5**x)
    return stop
  },[MyOsc1, MyOsc2])

  const play = () => {
    isPlaying ? MyOsc1.current.toMaster().stop() : MyOsc1.current.toMaster().start()
    isPlaying ? MyOsc2.current.toMaster().stop() : MyOsc2.current.toMaster().start()
    setPlaying(!(isPlaying))
  }

  const setFreq = (freq) => {
    MyOsc1.current.frequency.value = Number(freq*(1+variance))
    MyOsc2.current.frequency.value = Number(freq*(1-variance))
  }

  const ButtonText = () => isPlaying ? "Stop" : "Start"

  return (
    <div>
      <MySlider left={freq/1.2} val={freq} right={freq*1.2} onUpdate={setFreq} />
      <button onClick={play}>
        <ButtonText />
      </button>
    </div>
  )
}

export default MyOscContainer
