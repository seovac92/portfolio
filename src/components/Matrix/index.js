import {useState} from 'react'
import Canvas from "../Canvas/index";

const MatrixBG = (props) => {//logic of drawing matrix is whole here!!!
    const [ctx, setCtx] = useState(null);
    const [canvasWidth, setCanvasWidth] = useState(null);

    //receiving context of canvas from Canvas component
    const establishContext = (context) => {
        setCtx(context);
    };
    //receiving width of canvas from Canvas component
    const establishCanvasWidth = (width) => {
        setCanvasWidth(width);
    };
    //charts for drawing
    const chars ="ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const letters = chars.split("");

    //font size of char
    const fontSize = 10;
    //vertical divison of canvas according to width of canvas and font size
    const columns = canvasWidth ? canvasWidth / fontSize : 10;
    //making X coordinate with Y=1; starting position(top of canvas)
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const draw = () => {//drawing canvas only if it's exists
            if(ctx){
                //every time calling this function, hides previous state of canvas with black but slightly transparent because of effect of trail
                ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                for (let i = 0; i < drops.length; i++) { //for every X coordinate chooses randomly char; set color; draw it
                    //first rendering wave from top to bottom 
                    const text = letters[Math.floor(Math.random() * letters.length)];
                    ctx.fillStyle = "rgba(34,180,85,0.3)";
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);//x,y coordinates for every char  
                    drops[i]++;//increment of Y coordinate
                    if (drops[i] * fontSize > ctx.canvas.height && Math.random() > 0.95) {//if wave comes to the bottom
                        drops[i] = 0;//randomly reset column which returns to the top again, but this time not all columns again but only one that meets the conditions
                    }
                }
            }
        }   
        return (
            <Canvas draw={draw} establishContext={establishContext} establishCanvasWidth={establishCanvasWidth} />
        )
}

export default MatrixBG