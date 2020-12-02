// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {

    let rocketObj = document.getElementById("rocket");
    rocketObj.style.position = 'absolute';
    rocketObj.style.left = '0px';
    rocketObj.style.bottom = '0px';
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let currentHeight = 0;


    let right = document.getElementById('right');
    right.addEventListener("click", function(){
        let goRight = parseInt(rocketObj.style.left) + 10 + 'px';
        rocketObj.style.left = goRight;
    });
    
    let left = document.getElementById('left');
    left.addEventListener("click", function(){
        let goLeft = parseInt(rocketObj.style.left) - 10 + 'px';
        rocketObj.style.left = goLeft;
    });
    
    let up = document.getElementById('up');
    up.addEventListener("click", function(){
        let goUp = parseInt(rocketObj.style.bottom) + 10 + 'px';
        rocketObj.style.bottom = goUp;
        currentHeight += 10000;
        shuttleHeight.textContent = currentHeight;
    });
    
    let down = document.getElementById('down');
    down.addEventListener("click", function(){
        let goDown = parseInt(rocketObj.style.bottom) - 10 + 'px';
        rocketObj.style.bottom = goDown;
        currentHeight -= 10000;
        shuttleHeight.textContent = currentHeight;
    });

    let takeoffBtn = document.getElementById('takeoff');
    takeoffBtn.addEventListener('click', () => {
        let confirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        
        if(confirmation) {

            document.getElementById('flightStatus').textContent = "Shuttle in flight.";

            document.getElementById('shuttleBackground').style.backgroundColor = "blue";

            shuttleHeight.textContent = 10000;
        };
    });

    let landingBtn = document.getElementById('landing');
    landingBtn.addEventListener('click', () => {

        let confirmation = window.confirm('The shuttle is landing. Landing gear engaged.');

        if(confirmation) {
            document.getElementById('flightStatus').textContent = "The shuttle has landed.";

            document.getElementById('shuttleBackground').style.backgroundColor = "green";

            shuttleHeight.textContent = 0;
        };
    });

    let abortBtn = document.getElementById('missionAbort');
    abortBtn.addEventListener('click', () => {
        let confirmation = window.confirm('Confirm that you want to abort the mission.');

        if(confirmation) {
            document.getElementById('flightStatus').textContent = "Mission aborted.";

            document.getElementById('shuttleBackground').style.backgroundColor = "green";

            shuttleHeight.textContent = 0;
        };
    });
});