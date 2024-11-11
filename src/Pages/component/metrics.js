import React from 'react'
import '../css/metrics.css'

function metrics() {
  return (
      <section className="feat-metrics">
    <div className="cont">
      <div className="feat-wrapper">
        <div className="feat-block">
          <div className="feat-title">500<span className="feat-title-small">+</span></div>
          <div>Enrolled Students </div>
        </div>
        <div className="feat-block">
          <div className="feat-title">90<span className="feat-title-small">%</span></div>
          <div>success Rate </div>
        </div>
        <div className="feat-block">
          <div className="feat-title">20+</div>
          <div>Course Offered</div>
        </div>
        <div className="feat-block">
          <div className="feat-title">2k<span className="feat-title-small">+</span></div>
          <div>Followers</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default metrics