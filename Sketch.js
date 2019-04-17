var arr;
var lines = [];

function setup() {
    createCanvas(400, 400);
    arr = [3,5,9,2,6,8,7,1,4,10];
    
    for(let i = 0; i < arr.length; i++){
        lines.push(new Line_Obj(arr[i], i));
    }
}

function draw() {
  background(51);
  
  stroke(255);
  bubblesort(lines);
  //branch(100);

}

function bubblesort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            var left = arr[j].value;
            var right = arr[j+1].value;

            if(left > right){
                var temp = arr[j].position;
                arr[j].position = arr[j+1].position;
                arr[j+1].position = temp;

            }
        }
        for(l in arr){
            l.show();
        }
    }
    
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}

function Line_Obj(val, pos){
    this.value = val;
    this.height = val * 10;
    this.position = pos;
    this.speed = 1;

    this.x = this.position;
    this.y = 0;

    this.move = function() {
        
    }

    this.show = function() {
        line(this.x, 0, this.x, -this.height);
    }

    
} 