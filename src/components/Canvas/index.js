import React, { useRef, useEffect, useState } from "react";
import './index.css'

const Canvas = (props) =>{//spliting logic of drawing the matrix background

    //Canvas component is establishing HTML canvas with his size and send info to the MatrixBG;
    const {draw, fps=30, establishContext, establishCanvasWidth, width = '100%', height= '100%', backgroundColor= '#000', ...rest } = props;
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);

    //establishing size of canvas
    const resizeCanvas = (context) => {
		const canvas = context.canvas;
		const { width, height } = canvas.getBoundingClientRect();

		if (canvas.width !== width || canvas.height !== height) {
			const { devicePixelRatio: ratio = 1 } = window;
			canvas.width = width * ratio;
			canvas.height = height * ratio;
            if (establishCanvasWidth) {
                establishCanvasWidth(canvas.width);
            }
			context.scale(ratio, ratio);
			return true;
		}
		return false;
	};

    //on first render establishing context of canvas and also sent info to the MatrixBG component
    useEffect(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            resizeCanvas(ctx);
            if (establishContext) {
                establishContext(ctx);
            }
        }
    },[])

    useEffect(() => {//second useEffect that depends on draw and context
        
        let animationFrameId, fpsInterval, now, then, elapsed;

        if (context) {//if context exists
            const render = () => {
                animationFrameId = window.requestAnimationFrame(render);//save id out of scope that will be use to stop loop on unmount this Component
                now = Date.now()//time of current render
                elapsed = now-then//time elapsed since start of rendering
                if(elapsed>fpsInterval){//if its greater then 50 fps
                    then = now - (elapsed % fpsInterval)//reduces the difference to less then 50 again and start a draw function
                    draw()
                }
            };
            const startRendering = (fps)=>{//---II---fps===30
                fpsInterval = 1500/fps//50
                then = Date.now()//time of start rendering
                render()//calling render that will work in loop
            }
            startRendering(fps)//---I--- First call after component mount if first useEffect establish context
        }
        return () => {//cleanup function stoping the animation frame after unmount this component
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, context]);

    return (
        <canvas id="canvas" ref={canvasRef} {...rest} style={{ width, height, backgroundColor }}/>
    )
}


export default Canvas