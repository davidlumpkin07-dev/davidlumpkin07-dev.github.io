$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 650, 100, 20);
createPlatform(300, 550, 100, 20);
createPlatform(400, 450, 100, 20);
createPlatform(500, 350, 100, 20);
createPlatform(600, 250, 100, 20);
    // TODO 3 - Create Collectables
createCollectable("steve", 600, 200, 0.5, 0.7);
createCollectable("steve", 400, 400, 0.5, 0.7);
createCollectable("steve", 200, 600, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
createCannon("right", 300, 3500);
createCannon("right", 500, 3000);
createCannon("right", 700, 2500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
