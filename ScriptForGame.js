const Pixel_Size = 50;
const Columns_Number = 4;
const Rows_Number = 10;
const Generation_Time=1000;

const Canvas = document.querySelector('canvas');
const Context = Canvas.getContext('2d');

const GenerationLife = new LifeGame(Rows_Number, Columns_Number);



function StartGame() {
    Canvas.width = Pixel_Size * Columns_Number;
    Canvas.height = Pixel_Size * Rows_Number;

    GenerationLife.revivePixel(Columns_Number*Rows_Number/2);
    Restart();
    GenerationLife.DrawFreePixel((x,y) => DrawPixel(x,y,"green"));
    //requestAnimationFrame(tick);
    console.log("Game is start");
    for(let i=0;i<20;i++)
    {
        GenerationLife.ChangeGeneration();
        GenerationLife.DrawFreePixel((x,y) => DrawPixel(x,y,"green"));
    }

}
function tick(timestamp) {
    Restart();
    if(timestamp> GenerationLife.GenerationNumber*Generation_Time)
        {
            GenerationLife.ChangeGeneration();
        }
    GenerationLife.DrawFreePixel((x,y) => DrawPixel(x,y,"green"));

    requestAnimationFrame(tick);
}

function Restart() {
    Context.fillStyle = 'gray';
    Context.beginPath();
    Context.rect(0, 0, Canvas.width, Canvas.height);
    Context.fill();
}

function DrawPixel(x, y, color) {
    Context.fillStyle = color;
    Context.beginPath();
    Context.rect(x*Pixel_Size, y*Pixel_Size, Pixel_Size, Pixel_Size);
    Context.fill();
}

function StopGame() {
    console.log("Game is Stop");
}

StartGame();