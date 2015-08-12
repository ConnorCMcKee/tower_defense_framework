/* ACTOR VARIABLES
-------------------------------------------------- */
actors = [  new Monster( 'monster', 580, 0, 10 ),
            new Monster( 'monster', 700, 80, 10 ),
            new Monster( 'monster', 640, 160, 10 ),
            new Monster( 'monster', 800, 240, 10 ),
            new Monster( 'monster', 700, 320, 10 ),
            new Turret( 'turret', 0, 0, 240, 200, 12 ),
            new Turret( 'turret', 0, 80, 240, 200, 112 ),
            new Turret( 'turret', 0, 160, 240, 200, 67 ),
            new Turret( 'turret', 0, 240, 240, 200, 167 ),
            new Turret( 'turret', 0, 320, 240, 200, 200 )]



/* DRAW METHODS
-------------------------------------------------- */

// Draw Actors
var drawActors = function( context ) {
    for( var i = 0; i < actors.length; i++ ) {
        actors[i].draw( context );
    }
}


/* UPDATE METHODS
-------------------------------------------------- */

// Update Actors
var updateActors = function( modifier, steps ) {
    for( var i = 0; i < actors.length; i++ ) {
        actors[i].update( modifier, steps );
    }
}