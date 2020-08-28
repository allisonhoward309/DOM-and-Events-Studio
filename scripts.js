// Write your JavaScript code here.
// Remember to pay attention to page loading!
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  

 window.addEventListener("load", function() {
    console.log('window loaded')
    let flightStatus = document.getElementById("flightStatus");
    let rocket = document.getElementById("rocket")


    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for lift off");
        if(confirm === true) {
        flightStatus.innerHTML = 'Shuttle in flight';
        let color = document.getElementById("shuttleBackground");
        color.style.backgroundColor = "blue";
        let height = document.getElementById("spaceShuttleHeight");
        height.innerHTML = '10,000';
        }
      });

      let landing = document.getElementById("landing");
      landing.addEventListener("click", function (event) {
          let alert = window.alert("The shuttle is landing. Landing gear engaged.");
          flightStatus.innerHTML = 'The shuttle has landed.';
          let returnColor = document.getElementById("shuttleBackground");
          returnColor.style.backgroundColor = "green";
          let land = document.getElementById("spaceShuttleHeight");
          land.innerHTML = '0';
        });

        let abort = document.getElementById("missionAbort");
        abort.addEventListener("click", function (event) {
            let abortConfrimation = window.confirm("Confirm that you want to abort the mission.");
            if(abortConfrimation === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            let abortColor = document.getElementById("shuttleBackground");
            abortColor.style.backgroundColor = "green";
            let abortHeight = document.getElementById("spaceShuttleHeight");
            abortHeight.innerHTML = formatNumber(0);
            }
          });

          let up = document.getElementById("up");
          window.addEventListener("click", function() {
            let rocket = document.getElementById("rocket");
               rocket.style.bottom 
            });

            let down = document.getElementById("down");
            down.addEventListener("click", function() {
              alert('dog')
              let rocket = document.getElementById("rocket");
              position = parseInt(rocket.style.bottom) - 10 + 'px';
              rocket.style.bottom = '0px'
              });

  });