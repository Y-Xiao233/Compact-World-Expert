Ponder.registry(event =>{
    event
        .create('cwe:dream_portal_core')
        .scene('dream_portal_core',"kubejs.ponder.dream_portal_core.header","kubejs:dream_portal_core",(scene,util) =>{
            for(let y = 0; y < 6; y++){
                for(let x = 0; x < 5; x++){
                    for(let z = 0; z < 2; z++){
                        scene.world.showSection([x,y,z],Facing.DOWN);
                        scene.idle(1);
                    }
                }
            }
            scene.idle(1);
            scene.text(100,"kubejs.ponder.dream_portal_core.text_1",[0,1.5,0])
            .placeNearTarget()
            .attachKeyFrame();
            scene.idle(10);
            scene.world.setBlock([4,1,0],'botania:fabulous_pool',true);
            scene.world.setBlock([0,1,0],'botania:fabulous_pool',true);
            scene.idle(30);
            scene.world.setBlock([4,1,0],'botania:diluted_pool',true);
            scene.world.setBlock([0,1,0],'botania:diluted_pool',true);
            scene.idle(30);
            scene.world.setBlock([4,1,0],'botania:mana_pool',true);
            scene.world.setBlock([0,1,0],'botania:mana_pool',true);
            scene.idle(30);
            scene.text(50,"kubejs.ponder.dream_portal_core.text_2",[2.5,1.5,1])
            .placeNearTarget()
            .attachKeyFrame();
            scene.showControls(50,[2,2,1],"right")
            .withItem('botania:twig_wand')
            .rightClick();
            scene.idle(10);
            scene.world.setBlocks([1,2,1,3,4,1],'kubejs:dream_portal');
            scene.idle(40);
            scene.text(30,"kubejs.ponder.dream_portal_core.text_3",[0,1.5,0]);
            scene.idle(40);
            scene.text(50,"kubejs.ponder.dream_portal_core.text_4",[0,1.5,0]);
            scene.idle(100);
        })
})