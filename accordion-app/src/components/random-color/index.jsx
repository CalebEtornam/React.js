import { useState } from "react"




export default function RandomColorChanger(){
    const [color, setColor] = useState("#000000")
    const [typeOfColor, setTypeOfColor] = useState('hex')

    function randomColorUtility(length){
            return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor(){
        let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#"

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGBColor(){
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }


    return(
        <div 
        style={{
            height: "100vh",
            width: "100vw",
            background: color
        }}>
            <button onClick={() => setTypeOfColor('rgb')}>RGB</button>
            <button onClick={() => setTypeOfColor('hex')}>HEX</button>
            <button onClick={ typeOfColor === 'hex' ?
                () => handleCreateRandomHexColor()
                :() => handleCreateRandomRGBColor()
            }>Change Color</button>

            <div>
                <h3>{typeOfColor === 'rgb'  ? 'RGB Color' : 'Hex Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}