
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let phyics_manager = cc.director.getPhysicsManager();
        phyics_manager.enabled = true;
        phyics_manager.gravity = cc.v2(0,-2000);
    },

    start () {

    },

    // update (dt) {},
});
