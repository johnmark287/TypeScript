type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}


const color1 = getRandomColor()
const color2 = getRandomColor()
const color3 = getRandomColor()

console.log(color1, color2, color3);

