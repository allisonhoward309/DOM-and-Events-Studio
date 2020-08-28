// Write your JavaScript code here.
// Remember to pay attention to page loading!
function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

 window.addEventListener("load", function() {
    console.log('window loaded');
    let flightStatus = document.getElementById("flightStatus");
    let rocket = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");
    rocket.style.position = 'absolute';
    rocket.style.bottom = '0';
    rocket.style.left = '0';



    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for lift off");
        if(confirm === true) {
        flightStatus.innerHTML = 'Shuttle in flight';
        let color = document.getElementById("shuttleBackground");
        color.style.backgroundColor = "blue";
        height.innerHTML = '10000';
        rocket.style.bottom = '100px';
        }
      });

      let landing = document.getElementById("landing");
      landing.addEventListener("click", function (event) {
          let alert = window.alert("The shuttle is landing. Landing gear engaged.");
          flightStatus.innerHTML = 'The shuttle has landed.';
          let returnColor = document.getElementById("shuttleBackground");
          returnColor.style.backgroundColor = "green";
          height.innerHTML = '0';
          rocket.style.bottom = '0';      
          });

        let abort = document.getElementById("missionAbort");
        abort.addEventListener("click", function (event) {
            let abortConfrimation = window.confirm("Confirm that you want to abort the mission.");
            if(abortConfrimation === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            let abortColor = document.getElementById("shuttleBackground");
            abortColor.style.backgroundColor = "green";
            height.innerHTML = '0';
            rocket.style.bottom = '0';
            rocket.style.left = '0';
            }
          });

         
          let up = document.getElementById("up");
          up.addEventListener("click", function() {
            let topPosition = document.getElementById("shuttleBackground");
               rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
               height.innerHTML = Number(height.innerHTML) + 1000;
            });

            let down = document.getElementById("down");
            down.addEventListener("click", function() {
              if (rocket.style.bottom <= '0px') {
                 rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
                 height.innerHTML = Number(height.innerHTML) - 1000;
              }
              });
            
              let left = document.getElementById("left");
              left.addEventListener("click", function() {
                   rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
                });
                let right = document.getElementById("right");
                right.addEventListener("click", function() {
                rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
                  });


  height.innerHTML = formatNumber(height.innerHTML);
  });