import React from 'react'
import { Slider, Handles } from 'react-compound-slider'
import styled from 'styled-components'

const MySliderContainer = styled(Slider)`
  position: relative;
  width: 100%;
  height: 80px;
  border: 1px solid #c2c2c2;
`

const MyRail = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  margin-top: 35px;
  border-radius: 5px;
  background-color: #c2c2c2;
`

const MyHandleContainer = styled.div`
`

const MyHandleStyle = styled.div`
  left: ${props => `${props.percent}%`};
  position: absolute;
  margin-left: -15px;
  margin-top: 25px;
  z-index: 2;
  width: 30px;
  height: 30px;
  border: 0;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #424242;
  color: #333;
`

const MyValueStyle = styled.div`
  margin: -20px 0 0;
  font-size: 0.75em;
`

const MyHandle = ({
  handle: { id, value, percent },
  getHandleProps
}) => (
  <MyHandleStyle
    percent = {percent}
    {...getHandleProps(id)}
  >
    <MyValueStyle>
      {value.toFixed(1)}
    </MyValueStyle>
  </MyHandleStyle>
)

const MySlider = ({left,val,right,onUpdate}) => {
  return (<MySliderContainer
    domain={[Number(left), Number(right)]}
    step={0.1}
    mode={2}
    values={[Number(val)]}
    onUpdate={onUpdate}
  >
    <MyRail />
    <Handles>
      {({ handles, getHandleProps }) => (
        <MyHandleContainer>
          {handles.map(handle => (
            <MyHandle
              key={handle.id}
              handle={handle}
              getHandleProps={getHandleProps}
            />
          ))}
        </MyHandleContainer>
      )}
    </Handles>
  </MySliderContainer>
)}

export {MySlider}
