let original_rgb;
startGame();

function startGame(){
    original_rgb = generateRandomRGB();
    const other_rgb_colors = generateRandomRGBs(5);
    const all_rgbs = [original_rgb, ...other_rgb_colors];
    console.log(all_rgbs);
    displayRGBCode(original_rgb);
    generateColorBlocks(all_rgbs);
    addColorToColorBlocks(all_rgbs);
}

function generateRandomRGB(){
    const red = randomNumber(255);
    const green = randomNumber(255);
    const blue = randomNumber(255);
    const random_rgb = `rgb(${red}, ${green}, ${blue})`
    return random_rgb;
}

function generateRandomRGBs(number){
    let random_rgbs = [];    
    for(index = 0; index < number; index++){
        random_rgbs.push(generateRandomRGB());
    }
    return random_rgbs;
}


function randomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

function generateColorBlocks(rgbs){
    const pick_color_area = document.querySelector(".pick-color-area");
    rgbs_length = rgbs.length;
    for(index = 0; index < rgbs_length; index++){
        pick_color_area.innerHTML += `<div class="color-block" id="${index}" onclick="checkResult(this.getAttribute('id'))"></div>`;
    }
}

function addColorToColorBlocks(all_rgbs){
    shuffleArray(all_rgbs);
    let blocks = document.getElementsByClassName("color-block");
    console.log(blocks);
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = all_rgbs[i];
        console.log("test");
     }
}

function checkResult(id){
    const color = document.getElementById(id).style.backgroundColor;
    console.log(color);
    console.log(original_rgb);
    if(color == original_rgb){
        if(window.confirm("Gewonnen! Nochmal?")){
            location.reload();
        }
    } else {
        if(window.confirm("Verloren! Nochmal?")){
            location.reload();
        }
    }
}

function displayRGBCode(rgb){
    document.querySelector("header").innerHTML = rgb;
}

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}