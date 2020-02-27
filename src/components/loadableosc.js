import React from "react"
import Loadable from "@loadable/component"

const LoadableOsc = Loadable(() => import("./myosccontainer"))

const MyOsc = ({freq}) => (
  <div>
    <LoadableOsc freq={freq} />
  </div>
)

export default MyOsc
