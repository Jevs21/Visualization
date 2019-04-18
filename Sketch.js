
let values = [];
let color_range = [];
let arr = [];


let i = 0;
let j = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(width);
    
    // Get color range and arr
    color_range = getSimpleColorRange();
    arr         = getRandArr(width, height);

    arr.sort();

    for(let i = 0; i < values.length; i++){

        let percent = i / values.length;
        let color_ind = Math.floor(color_range.length*percent);
        console.log(color_ind);

        values[i] = {
            'color' : color_range[color_ind],
            'num'   : arr[i]
        }
    }

    values = FischerShuffle(values);
}

function draw() {
    background(0);

    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            let a = values[j];
            let b = values[j + 1];
            if (a.num > b.num) {
                swap(values, j, j + 1);
            }
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        stroke(values[i].color);
        line(i, height, i, height - values[i].num);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function getRandArr(w, h){
    let arr  = new Array(w);

    for (let i = 0; i < w; i++) {
        let rand = Math.floor(Math.random() * h); 
        arr[i] = rand;
        //arr[i] = noise(i/100.0)*h;
    }

    return arr;
}

function getSimpleColorRange(len){
    let r = [];

    let red_v = 0;
    let green_v = 0;
    let blue_v = 0;

    for(let i = 0; i <= 255; i++){
        blue_v = i;
        r.push(color(red_v, green_v, blue_v));
    }

    return r;
}

function getColourRange(){
    let color_range = []

    let red_v   = 255;
    let green_v = 0;
    let blue_v  = 0;
 
    for (let i = 0; i < 255; i++){
        green_v += 1;
        color_range.push(color(red_v, green_v, blue_v));
    }
    for (let i = 0; i < 255; i++){
        red_v -= 1;
        color_range.push(color(red_v, green_v, blue_v));
    }
    for (let i = 0; i < 255; i++){
        blue_v += 1;
        color_range.push(color(red_v, green_v, blue_v));
    }
    for (let i = 0; i < 255; i++){
        green_v -= 1;
        color_range.push(color(red_v, green_v, blue_v));
    }

    return color_range;
}

function FischerShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function normalize(val, max, min){
    if(val <= max){
        return (val - min) / (max - min) * val;
    }
    else {

    }
    
}