/* MONSTER
-------------------------------------------------- */
var Monster = Class.create({
    initialize: function(resource, startX, startY, speed ){
        this.resource = resource;
        this.x = startX;
        this.y = startY;
        this.speed = speed;
        this.health = 3;
    },
    draw: function( context ) {
        if (resourceReady(this.resource)) {
            context.drawImage(resourceImage(this.resource), this.x, this.y);
        }
    },
    update: function( modifier, steps ) {
        if ( this.health == 0 ) {
            this.speed = 0;
        } else {
            this.x -= this.speed * modifier;
        }
    }
});


/* TURRET
-------------------------------------------------- */
var Turret = Class.create({
    initialize: function(resource, startX, startY, rateOfFire, projectileSpeed, startPoint){
        this.resource = resource;
        this.x = startX;
        this.y = startY;
        this.rof = rateOfFire;
        this.projectileSpeed = 200;
        this.stagger = startPoint % rateOfFire;
    },
    draw: function( context ) {
        if (resourceReady(this.resource)) {
            context.drawImage(resourceImage(this.resource), this.x, this.y);
        }
    },
    update: function( modifier, steps ) {
        if ( steps % this.rof == this.stagger ) {
            actors.push( new Projectile( 'projectile', this.x, this.y, this.projectileSpeed ) );
        }
    }
});


/* PROJECTILE
-------------------------------------------------- */
var Projectile = Class.create({
    initialize: function(resource, startX, startY, speed){
        this.resource = resource;
        this.x = startX;
        this.y = startY;
        this.speed = speed;
    },
    draw: function( context ) {
        if (resourceReady(this.resource)) {
            context.drawImage(resourceImage(this.resource), this.x, this.y);
        }
    },
    update: function( modifier, steps ) {
        var startX = this.x;
        this.x += this.speed * modifier;
        for ( var i = 0; i < actors.length; i++ ) {
            if( actors[i].resource == 'monster' && actors[i].y == this.y && actors[i].x > startX && actors[i].x <= this.x ) {
                actors[i].health --;
            }
        }
    }
});