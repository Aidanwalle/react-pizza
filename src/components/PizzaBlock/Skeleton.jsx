import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={500}
    viewBox="0 0 240 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="120" r="120" /> 
    <rect x="0" y="257" rx="10" ry="10" width="240" height="30" /> 
    <rect x="0" y="305" rx="10" ry="10" width="240" height="88" /> 
    <rect x="0" y="405" rx="10" ry="10" width="95" height="30" /> 
    <rect x="110" y="405" rx="20" ry="20" width="130" height="45" />
  </ContentLoader>
)

export default Skeleton

