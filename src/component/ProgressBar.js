import './ProgressBar.css'


const ProgressBar = (props) => {
  
    let {
      size = 223,
      progress = 0,
      trackWidth = 10,
      trackColor = `#CDD2FD`,
      indicatorWidth = 10,
      indicatorColor = `#2B365A`,
      indicatorCap = `round`,
      label = ` `,
      labelColor = `#2B365A`,
      spinnerMode = false,
      spinnerSpeed = 1,
    } = props

    const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)

    let hideLabel = size < 100 || !label.length || spinnerMode ? true : false

    return (
      <>
        <div
          className="svg-pi-wrapper text-3xl font-bold p-"
          style={{ width: size, height: size }}
        >
          <svg className="svg-pi" style={{ width: size, height: size }}>
            
            <circle
              className="svg-pi-track"
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={trackColor}
              strokeWidth={trackWidth}
            />
            <circle
              className={`svg-pi-indicator ${
                spinnerMode ? 'svg-pi-indicator--spinner' : ''
              }`}
              style={{ animationDuration: spinnerSpeed * 1000 }}
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={indicatorColor}
              strokeWidth={indicatorWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap={indicatorCap}
            />
          </svg>

          {!hideLabel && (
            <div className="svg-pi-label" style={{ color: labelColor }}>
              <span className="svg-pi-label__loading">{label}</span>

              {!spinnerMode && (
                <span className="svg-pi-label__progress">
                  {`${progress > 100 ? 100 : progress}%`}
                </span>
              )}
            </div>
          )}
        </div>
      </>
    )
}

export default ProgressBar