let myXPos = 250;
let myYPos = 450;
let myLeft, myRight, myTop, myBottom;
let bulletLeft, bulletRight, bulletTop, bulletBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let player;
let enemy = [];
let score = 0;
let temp;
let stage = 0;
let ricky;
let ricked;
let ad = 0;
let rocket;
let eRocket;
// bullet xPos
let bullet_XPos = true;
let shoot = false;
//sound
let bullet_sound;
let healthbar = 100;
let startTime = 0; // Timer variable
function preload() {
    rocket = loadImage("fun/rocket.png");
    bullet_sound = loadSound("fun/bullet.mp3");
    ricky = loadImage("fun/rickroll-roll.gif");
    ricked = loadSound("fun/ricked.MP3");
}
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    //Bullet creation
    temp = new Bullet(myXPos, myYPos, 255, 255, 255, 9, 10);
    //Enemy creation
    for (let j = 0; j < 15; j++) {
        let enemy1 = new enemyCraft(random(0, 500), 0, random(1, 255), random(1, 255), random(1, 255), 3)
        enemy.push(enemy1)
    }
}
function draw() {
    if (stage == 0) {
        background(0);
        // Start the timer when stage is 0
        if (!startTime) {
            startTime = millis();
        }
        // Check if the timer has exceeded 30 seconds
        if (millis() - startTime > 30000) {
            stage = 2;
            // Reset the start time to avoid continuous stage updates
            startTime = 0;
        }
        //healthbar
        fill(255, 0, 0);
        rect(440, 25, healthbar, 10);
        fill(255, 255, 255);
        textSize(15);
        text("Health left: " + healthbar, 390, 15)
        //Score key
        fill(255, 255, 255);
        textSize(20)
        text("Score " + String(score), 10, 20);
        //Player
        fill(255, 255, 255, 0);
        rect(myXPos, myYPos, 50, 60);
        imageMode(CENTER);
        image(rocket, myXPos, myYPos, 50, 60);
        imageMode(CORNER);
        //Player control
        if (keyIsDown(LEFT_ARROW)) {
            myXPos -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            myXPos += 5;
        }
        if (keyIsDown(UP_ARROW)) {
            myYPos -= 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            myYPos += 3;
        }
        //Borders
        if (myXPos > 525) {
            myXPos = -25;
        }
        if (myXPos < -25) {
            myXPos = 525;
        }
        if (myYPos > 475) {
            myYPos = 475;
        }
        if (myYPos < 25) {
            myYPos = 25;
        }
        //Player Hitbox
        myLeft = myXPos - 25;
        myRight = myXPos + 25;
        myTop = myYPos - 30;
        myBottom = myYPos + 30;
        //Bullet creation
        if (shoot == true) {
            fill(temp.redValue, temp.greenValue, temp.blueValue);
            rect(temp.xPos, temp.yPos, temp.sizeValue, temp.sizeValue);
            temp.yPos -= temp.speedValue;
            if (bullet_XPos == true) {
                temp.xPos = myXPos;
                bullet_sound.play();
            }
            bullet_XPos = false
            if (temp.yPos < 0) {
                temp.yPos = myYPos - 35;
                shoot = false;
                bullet_XPos = true;
            }
        }
        if (shoot == false) {
            temp.xPos = myXPos;
        }
        //Bullet Hitbox
        bulletLeft = temp.xPos - 5;
        bulletRight = temp.xPos + 5;
        bulletTop = temp.yPos - 5;
        bulletBottom = temp.yPos + 5;
        //Enemy Spawn
        for (let j = 0; j < 15; j++) {
            fill(enemy[j].redValue, enemy[j].greenValue, enemy[j].blueValue);
            rect(enemy[j].xPos, enemy[j].yPos, 25, 25);
            enemy[j].yPos += enemy[j].enemyCraft_speed;
            if (enemy[j].yPos >= 525) {
                enemy[j].yPos = 0;
                enemy[j].xPos = random(0, 500);
            }
            enemyLeft = enemy[j].xPos - 12.5;
            enemyRight = enemy[j].xPos + 12.5;
            enemyTop = enemy[j].yPos - 12.5;
            enemyBottom = enemy[j].yPos + 12.5;
            //If Enemy hits player
            if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
            }
            else {
                enemy[j].xPos = random(25, 475);
                enemy[j].yPos = 0;
                healthbar -= 5;
            }
            //If bullet hits enemy
            if (bulletLeft > enemyRight || bulletRight < enemyLeft || bulletTop > enemyBottom || bulletBottom < enemyTop) {
            }
            else {
                enemy[j].xPos = random(25, 475);
                enemy[j].yPos = 0;
                temp.xPos = myXPos;
                temp.yPos = myYPos - 35;
                score += 1
            }
        }
        // Check if healthbar is <= 0 and update stage to 1
        if (healthbar <= 0) {
            stage = 1;
        }
        // Check if score is 30 and update stage to 2
        if (score === 30) {
            stage = 2;
        }
        // Display the current time clock using p5.js default font
        let currentTime = getCurrentTime();
        fill(255);
        textSize(20);
        text("Time: " + currentTime, 180, height - 20);
    }
    else if (stage == 1) {
        background(0);
        image(ricky, 0, 0, 500, 500);
        ad += 1;
        if (ad > 300) {
            fill(0, 0, 0);
            rect(122, 18, 200, 20);
            fill(255, 255, 255);
            textSize(20);
            text("This is for real button!", 25, 25);
        }
        fill(random(0, 255), random(0, 255), random(0, 255));
        textSize(25)
        text("Click here to return to the game", 100, 450);
    }
    else if (stage == 2) {
        background(0);
        image(ricky, 0, 0, 500, 500);
        ad += 1;
        if (ad > 300) {
            fill(0, 0, 0);
            rect(122, 18, 200, 20);
            fill(255, 255, 255);
            textSize(20);
            text("This is not the button!", 25, 25);
        }
        fill(random(0, 255), random(0, 255), random(0, 255));
        textSize(25)
        text("Congrats you won, this is your prize", 50, 450);
    }
}
//Bullet class
class Bullet {
    constructor(x, y, r, g, b, speed, size) {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;
        this.sizeValue = size;
    }
}
// enemy class
class enemyCraft {
    constructor(x, y, r, g, b, speed) {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.enemyCraft_speed = speed
    }
}
// Function to get the current time in HH:MM:SS format
function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
function mouseClicked() {
    if (shoot == false) {
        shoot = true;
    }
    if (stage == 1) {
        if (mouseX > 100 && mouseX < 400 && mouseY > 425 && mouseY < 450) {
            ricked.play();
        }
        if (mouseX > 61 && mouseX < 261 && mouseY > 9 && mouseY < 29) {
            ricked.pause();
            stage = 0;
            healthbar = 100;
            score = 0;
            ad = 0;
        }
    }
    if (stage == 2) {
        if (mouseX > 100 && mouseX < 400 && mouseY > 425 && mouseY < 450) {
            ricked.play();
        }
        if (mouseX > 61 && mouseX < 261 && mouseY > 9 && mouseY < 29) {
            ricked.pause();
            stage = 0;
            healthbar = 100;
            score = 0;
            ad = 0;
        }
    }
 }