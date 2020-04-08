class LifeGame {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        //this.GenerationNumber=0;

        this.map = [];
        for (let i = 0; i < this.rows; i++) {
            const row = [];

            for (let i = 0; i < this.columns; i++) {
                row.push(0);
            }

            this.map.push(row);
        }

    }

    revivePixel(n = 1) {
        const freebie = [];
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                if (this.GetPixel(x, y)) {
                    freebie.push({x, y});
                }
            }
        }


        while (n > 0) {
            const randovpixel = Math.floor(Math.random() * freebie.length);
            const extractpixel = freebie.splice(randovpixel, 1)[0];
            this.SetPixel(extractpixel.x, extractpixel.y, 1);
            --n;
        }
        console.log(this.map);
    }

    DrawFreePixel(handler) {
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                if (this.map[x][y] === 1) {
                    handler(x, y);
                }
            }
        }
    }

    ChangeGeneration() {
        console.log(this.map);
        // const map = [];

        for (let x = 0; x < this.rows; x++) {
            // let state=0;
            // const row = [];

            for (let y = 0; y < this.columns; y++) {
                let neighbors = 0; //соседи
                // if(this.map[x][y]===1) {


                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        if (this.GetPixel(x + dx, y + dy))
                            if (dx !== 0 && dy !== 0)
                                if (this.map[x + dx][y + dy] === 1)//TODO решить проблему с поиском соседей
                                    neighbors++;//neighbors+=this.GetPixel(x+dx,y+dy);

                    }
                }

                if (this.map[x][y] === 1) {

                    if (neighbors === 2 || neighbors === 3) {
                        this.SetPixel(x, y, 1);
                    } else {
                        this.SetPixel(x, y, 0);
                    }
                } else {
                    if (neighbors === 3) {
                        this.SetPixel(x, y, 1);
                    }
                }


            }


        }
        console.log(this.map);
    }

    GetPixel(x, y) {
        return x <= this.rows && x >= 0 && y >= 0 && y <= this.columns;
    }

    SetPixel(x, y, value) {
        if (this.GetPixel(x, y))
            return this.map[y][x] = value;

        return false;
    }


}