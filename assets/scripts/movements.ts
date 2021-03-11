
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    Direction: number;
    walkforce: number;
    maxVelocity: number;
    rigidbody: cc.RigidBody;
    // keycode: any;



    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN , this.keypressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyreleased, this );

        this.Direction = 0;
        this.walkforce = 15000;

        this.maxVelocity = 400;
        this.rigidbody = this.node.getComponent(cc.RigidBody);
        console.log("on load acivated======");

    }

    start () {

    }

    keypressed(event){
        let keycode = event.keyCode;
        console.log("pressed======");
        
        switch (keycode) {
            case cc.macro.KEY.left:
                this.Direction = -1;
                console.log("left======");
                break;

            case cc.macro.KEY.right:
                this.Direction = 1;
                console.log("right======");
                break;
        
            default:
                break;
        }

        
    }

    keyreleased(event){
        let keycode = event.keyCode;

        switch(keycode){
            case cc.macro.KEY.left:

            case cc.macro.KEY.right:
                this.Direction = 0;
                break;
        }
    }


    update (dt) {

        if((this.Direction > 0 && this.rigidbody.linearVelocity.x < this.maxVelocity) || 
        (this.Direction < 0 && this.rigidbody.linearVelocity.x > -this.maxVelocity) )
        {
            this.rigidbody.applyForceToCenter(cc.v2(this.Direction*this.walkforce,0),true);
            console.log("movement");
        }
    }
}
