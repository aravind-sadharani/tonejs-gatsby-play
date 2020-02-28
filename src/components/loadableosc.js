import React from "react"
import Loadable from "@loadable/component"

const LoadableOsc = Loadable(() => import("./myosccontainer"))

const MyOsc = ({freq}) => (
  <LoadableOsc freq={freq} />
)

export default MyOsc
