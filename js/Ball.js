WL.registerComponent('Ball', {
    param: {type: WL.Type.Float, default: 1.0},
}, {
    init: function() {
        this.startPosition = new Float32Array(3);
        this.tmpVec = new Float32Array(3);
    },
    start: function() {
       this.object.getTranslationWorld( this.startPosition );
       this.physx = this.object.getComponent('physx');
       this.target = this.object.getComponent('cursor-target');
       this.target.addHoverFunction(this.onHover.bind(this));
       this.target.addDownFunction(this.onDown.bind(this));
    },
    update: function(dt) {
        this.object.getTranslationWorld(this.tmpVec);
        if (this.tmpVec[1]< -10){
            this.physx.active = false;
            this.object.setTranslationWorld( this.startPosition );
        }
    },
    onHover: function( _, cursor ){
        console.log('Ball.onHover');
    },
    onDown: function( _, cursor){
        console.log('Ball.onDown');
        this.physx.active = true;
    }
});
