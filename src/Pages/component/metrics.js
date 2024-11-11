import React from 'react'
import '../css/metrics.css'

function metrics() {
  return (
      <section className="features-metrics">
    <div className="container">
      <div className="features-wrapper">
        <div className="features-block">
          <div className="features-title">500<span className="features-title-small">+</span></div>
          <div>Enrolled Students </div>
        </div>
        <div className="features-block">
          <div className="features-title">90<span className="features-title-small">%</span></div>
          <div>success Rate </div>
        </div>
        <div className="features-block">
          <div className="features-title">20+</div>
          <div>Course Offered</div>
        </div>
        <div className="features-block">
          <div className="features-title">2k<span className="features-title-small">+</span></div>
          <div>Followers</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default metrics