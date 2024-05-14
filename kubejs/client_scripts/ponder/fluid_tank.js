Ponder.registry((event) => {
    event
        .create('cwe:fake_fluid_tank')
        .scene("fluid_tank","kubejs.ponder.fluid_tank.header","kubejs:fluid_tank", (scene,util) => {
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
            scene.text(20,"kubejs.ponder.fluid_tank.text_1",[2,1.5,2]);
            scene.idle(15);
            scene.particles.dust(2, "#FF0000", [2,1.5,0]).density(5).motion([0, 0, -0.1]).area([2,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,2]).density(5).motion([0, 0, -0.1]).area([4,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [0,1.5,2]).density(5).motion([0, 0, -0.1]).area([0,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [2,1.5,4]).density(5).motion([0, 0, -0.1]).area([2,1.5,4]).roll(2);
            scene.idle(20);
            scene.text(25,"kubejs.ponder.fluid_tank.text_2",[2,1.5,2]);
            scene.idle(10);
            scene.world.showSection([2,1,0],Facing.DOWN);
            scene.world.showSection([4,1,2],Facing.DOWN);
            scene.world.showSection([0,1,2],Facing.DOWN);
            scene.world.showSection([2,1,4],Facing.DOWN);
            scene.idle(35);
            scene.showControls(20,[2,1.5,0],"right")
            .rightClick();
            scene.showControls(20,[4,1.5,2],"right")
            .rightClick();
            scene.showControls(20,[0,1.5,2],"left")
            .rightClick();
            scene.showControls(20,[2,1.5,4],"left")
            .rightClick();
            scene.text(20,"kubejs.ponder.fluid_tank.text_3",[0,1,2]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.fluid_tank.text_4",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('minecraft:water_bucket')
            .rightClick();
            scene.idle(35);
            scene.text(20,"kubejs.ponder.fluid_tank.text_5",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('createaddition:iron_rod')
            .rightClick();
            scene.text(20,"kubejs.ponder.fluid_tank.text_6",[2,1.5,2]);
            scene.idle(10);
            scene.world.createItemEntity(
                Vec3(2,2,2),
                Vec3(0,0,0),'minecraft:stick');
        })

        event
        .create('create:fluid_tank')
        .scene("fluid_tank","kubejs.ponder.fluid_tank.header","kubejs:fluid_tank", (scene,util) => {
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
            scene.text(20,"kubejs.ponder.fluid_tank.text_1",[2,1.5,2]);
            scene.idle(15);
            scene.particles.dust(2, "#FF0000", [2,1.5,0]).density(5).motion([0, 0, -0.1]).area([2,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,2]).density(5).motion([0, 0, -0.1]).area([4,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [0,1.5,2]).density(5).motion([0, 0, -0.1]).area([0,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [2,1.5,4]).density(5).motion([0, 0, -0.1]).area([2,1.5,4]).roll(2);
            scene.idle(20);
            scene.text(25,"kubejs.ponder.fluid_tank.text_2",[2,1.5,2]);
            scene.idle(10);
            scene.world.showSection([2,1,0],Facing.DOWN);
            scene.world.showSection([4,1,2],Facing.DOWN);
            scene.world.showSection([0,1,2],Facing.DOWN);
            scene.world.showSection([2,1,4],Facing.DOWN);
            scene.idle(35);
            scene.showControls(20,[2,1.5,0],"right")
            .rightClick();
            scene.showControls(20,[4,1.5,2],"right")
            .rightClick();
            scene.showControls(20,[0,1.5,2],"left")
            .rightClick();
            scene.showControls(20,[2,1.5,4],"left")
            .rightClick();
            scene.text(20,"kubejs.ponder.fluid_tank.text_3",[0,1,2]);
            scene.idle(35);
            scene.text(20,"kubejs.ponder.fluid_tank.text_4",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('minecraft:water_bucket')
            .rightClick();
            scene.idle(35);
            scene.text(20,"kubejs.ponder.fluid_tank.text_5",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('createaddition:iron_rod')
            .rightClick();
            scene.text(20,"kubejs.ponder.fluid_tank.text_6",[2,1.5,2]);
            scene.idle(10);
            scene.world.createItemEntity(
                Vec3(2,2,2),
                Vec3(0,0,0),'minecraft:stick');
        })
})