Ponder.registry((event) => {
    event
        .create('botania:mana_pool')
        .scene("mana_pool","kubejs.ponder.mana_pool.header","kubejs:mana_pool", (scene,util) => {
            for(let x = 0; x < 5;x++){
                for(let z = 0; z < 5; z++){
                    scene.world.showSection([x,0,z],Facing.DOWN);
                }
                scene.idle(1);
            };
            scene.idle(3);
            scene.world.showSection([2,1,2],Facing.DOWN);
            scene.showControls(25,[2,1.5,2],"right")
                 .rightClick()
                 .whileSneaking();
            scene.text(20,"kubejs.ponder.mana_pool.text_1",[2,1.5,2]);
            scene.idle(15);
            scene.particles.dust(2, "#FF0000", [0,1.5,0]).density(5).motion([0, 0, -0.1]).area([0,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,0]).density(5).motion([0, 0, -0.1]).area([4,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [0,1.5,4]).density(5).motion([0, 0, -0.1]).area([0,1.5,4]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,4]).density(5).motion([0, 0, -0.1]).area([4,1.5,4]).roll(2);

            scene.particles.dust(2, "#00FF11", [0,2.5,0]).density(5).motion([0, 0, -0.1]).area([0,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,0]).density(5).motion([0, 0, -0.1]).area([4,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [0,2.5,4]).density(5).motion([0, 0, -0.1]).area([0,2.5,4]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,4]).density(5).motion([0, 0, -0.1]).area([4,2.5,4]).roll(2);

            scene.idle(20);
            scene.text(25,"kubejs.ponder.mana_pool.text_2",[0,1.5,4]);
            scene.idle(25);

            scene.world.showSection([0,1,0],Facing.DOWN);
            scene.world.showSection([4,1,0],Facing.DOWN);
            scene.world.showSection([0,1,4],Facing.DOWN);
            scene.world.showSection([4,1,4],Facing.DOWN);
            scene.idle(25);

            scene.text(25,"kubejs.ponder.mana_pool.text_3",[4,2.5,0]);
            scene.particles.dust(2, "#00FF11", [0,2.5,0]).density(5).motion([0, 0, -0.1]).area([0,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,0]).density(5).motion([0, 0, -0.1]).area([4,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [0,2.5,4]).density(5).motion([0, 0, -0.1]).area([0,2.5,4]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,4]).density(5).motion([0, 0, -0.1]).area([4,2.5,4]).roll(2);
            scene.idle(20);

            scene.world.showSection([0,2,0],Facing.DOWN);
            scene.world.showSection([4,2,0],Facing.DOWN);
            scene.world.showSection([0,2,4],Facing.DOWN);
            scene.world.showSection([4,2,4],Facing.DOWN);

            scene.idle(35);

            scene.text(20,"kubejs.ponder.mana_pool.text_4",[0,1.5,4]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_5",[4,2.5,4]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_6",[2,2,2]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_7",[2,2,2]);
            scene.showControls(20,[2,2,2],"right")
            .withItem('minecraft:diamond')
            .rightClick();
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_8",[2,1.5,2]);
            scene.idle(10);
            scene.world.createItemEntity(
                Vec3(2,2,2),
                Vec3(0,0,0),'botania:mana_diamond');
        })


        event
        .create('cwe:fake_mana_pool')
        .scene("mana_pool","kubejs.ponder.mana_pool.header","kubejs:mana_pool", (scene,util) => {
            for(let x = 0; x < 5;x++){
                for(let z = 0; z < 5; z++){
                    scene.world.showSection([x,0,z],Facing.DOWN);
                }
                scene.idle(1);
            };
            scene.idle(3);
            scene.world.showSection([2,1,2],Facing.DOWN);
            scene.showControls(25,[2,1.5,2],"right")
                 .rightClick()
                 .whileSneaking();
            scene.text(20,"kubejs.ponder.mana_pool.text_1",[2,1.5,2]);
            scene.idle(15);
            scene.particles.dust(2, "#FF0000", [0,1.5,0]).density(5).motion([0, 0, -0.1]).area([0,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,0]).density(5).motion([0, 0, -0.1]).area([4,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [0,1.5,4]).density(5).motion([0, 0, -0.1]).area([0,1.5,4]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,4]).density(5).motion([0, 0, -0.1]).area([4,1.5,4]).roll(2);

            scene.particles.dust(2, "#00FF11", [0,2.5,0]).density(5).motion([0, 0, -0.1]).area([0,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,0]).density(5).motion([0, 0, -0.1]).area([4,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [0,2.5,4]).density(5).motion([0, 0, -0.1]).area([0,2.5,4]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,4]).density(5).motion([0, 0, -0.1]).area([4,2.5,4]).roll(2);

            scene.idle(20);
            scene.text(25,"kubejs.ponder.mana_pool.text_2",[0,1.5,4]);
            scene.idle(25);

            scene.world.showSection([0,1,0],Facing.DOWN);
            scene.world.showSection([4,1,0],Facing.DOWN);
            scene.world.showSection([0,1,4],Facing.DOWN);
            scene.world.showSection([4,1,4],Facing.DOWN);
            scene.idle(25);

            scene.text(25,"kubejs.ponder.mana_pool.text_3",[4,2.5,0]);
            scene.particles.dust(2, "#00FF11", [0,2.5,0]).density(5).motion([0, 0, -0.1]).area([0,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,0]).density(5).motion([0, 0, -0.1]).area([4,2.5,0]).roll(2);
            scene.particles.dust(2, "#00FF11", [0,2.5,4]).density(5).motion([0, 0, -0.1]).area([0,2.5,4]).roll(2);
            scene.particles.dust(2, "#00FF11", [4,2.5,4]).density(5).motion([0, 0, -0.1]).area([4,2.5,4]).roll(2);
            scene.idle(20);

            scene.world.showSection([0,2,0],Facing.DOWN);
            scene.world.showSection([4,2,0],Facing.DOWN);
            scene.world.showSection([0,2,4],Facing.DOWN);
            scene.world.showSection([4,2,4],Facing.DOWN);

            scene.idle(35);

            scene.text(20,"kubejs.ponder.mana_pool.text_4",[0,1.5,4]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_5",[4,2.5,4]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_6",[2,2,2]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_7",[2,2,2]);
            scene.showControls(20,[2,2,2],"right")
            .withItem('minecraft:diamond')
            .rightClick();
            scene.idle(35);
            scene.text(20,"kubejs.ponder.mana_pool.text_8",[2,1.5,2]);
            scene.idle(10);
            scene.world.createItemEntity(
                Vec3(2,2,2),
                Vec3(0,0,0),'botania:mana_diamond');
        })
})