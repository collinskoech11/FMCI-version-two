import React from 'react'
import "./iframe.css"

function Just() {
  return (
    <>
      <iframe onload={window.frames.scrollTo(0,300)} id="iframe" title="justfm radio stream" src="https://zeno.fm/radio/the-just-fm-radio/" scrolling="no" className="iframe"></iframe>
    </>
  )
}

export default Just