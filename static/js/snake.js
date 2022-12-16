class Snake
{
    run()
    {
        // Get the canvas object
        const canvas = document.getElementById("snake-box");
        const g = canvas.getContext("2d");

        g.beginPath();
        g.fillStyle = "red";
        g.lineTo(20, 20);
        g.closePath();
        g.stroke();
    }
}

const snake = new Snake();
snake.run();