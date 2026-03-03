import React, { useRef, useEffect, useState, useCallback } from "react"
import "./index.css"

const Canvas = (props) => {
  //spliting logic of drawing the matrix background

  //Canvas component is establishing HTML canvas with his size and send info to the MatrixBG;
  const {
    draw,
    fps = 30,
    establishContext,
    establishCanvasWidth,
    width = "100%",
    height = "100%",
    backgroundColor = "#000",
    ...rest
  } = props
  const canvasRef = useRef(null)
  const [context, setContext] = useState(null)

  //establishing size of canvas
  const resizeCanvas = useCallback(
    (ctx) => {
      const canvas = ctx.canvas
      const rect = canvas.getBoundingClientRect()
      const cssWidth = rect.width
      const cssHeight = rect.height

      const ratio = window.devicePixelRatio || 1
      const nextWidth = Math.round(cssWidth * ratio)
      const nextHeight = Math.round(cssHeight * ratio)

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth
        canvas.height = nextHeight

        // reset transform so scaling doesn't accumulate
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(ratio, ratio)

        if (establishCanvasWidth) establishCanvasWidth(canvas.width)
        return true
      }

      return false
    },
    [establishCanvasWidth],
  )

  //on first render establishing context of canvas and also sent info to the MatrixBG component
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    setContext(ctx)
    resizeCanvas(ctx)
    if (establishContext) establishContext(ctx)
  }, [establishContext, resizeCanvas])

  useEffect(() => {
    if (!context) return

    let animationFrameId
    const fpsInterval = 1000 / fps
    let then = performance.now()

    const render = (now) => {
      animationFrameId = window.requestAnimationFrame(render)

      const elapsed = now - then
      if (elapsed >= fpsInterval) {
        then = now - (elapsed % fpsInterval)
        draw()
      }
    }

    animationFrameId = window.requestAnimationFrame(render)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [draw, context, fps])

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      {...rest}
      style={{ width, height, backgroundColor }}
    />
  )
}

export default Canvas
