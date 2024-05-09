function randomColor() {
    let color = '#';
    let hex = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
}