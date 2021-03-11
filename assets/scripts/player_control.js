
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased,this);

        this.rigidbody = this.node.getComponent(cc.RigidBody);
        this.Direction = 0;
        this.Walk_Force = 15000;
        this.velocitymax = 400;
    },

    onKeyPressed(event){
        let keycode = event.keycode;

        switch(keycode){
            case cc.macro.KEY.left:
                this.Direction = -1;
                break;
            case cc.macro.KEY.right:
                this.Direction = 1;
                break;
        }
    },

    onKeyReleased(event){
        let keycode = event.keycode;

        switch(keycode){
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.Direction = 0;
                break;
        }
    },

    update (dt) {

        if((this.Direction >0 && this.rigidbody.linearVelocity.x < this.velocitymax) || 
        (this.Direction < 0 && this.rigidbody.linearVelocity.x > -this.velocitymax))
        {
            this.rigidbody.applyForceToCenter(cc.v2(this.Direction*this.Walk_Force,0), true);
        }
    },
});
