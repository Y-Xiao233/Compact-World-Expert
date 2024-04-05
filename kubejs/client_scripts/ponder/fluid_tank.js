Ponder.registry((event) => {
    event
        .create('cwe:fake_fluid_tank')
        .scene("fluid_tank","世界合成","kubejs:fluid_tank", (scene,util) => {
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
            scene.text(20,"空手+shift对着流体罐(并非伪造流体罐)右键",[2,1.5,2]);
            scene.idle(15);
            scene.particles.dust(2, "#FF0000", [2,1.5,0]).density(5).motion([0, 0, -0.1]).area([2,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,2]).density(5).motion([0, 0, -0.1]).area([4,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [0,1.5,2]).density(5).motion([0, 0, -0.1]).area([0,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [2,1.5,4]).density(5).motion([0, 0, -0.1]).area([2,1.5,4]).roll(2);
            scene.idle(20);
            scene.text(25,"在这些冒红色粒子效果的地方放置物台",[2,1.5,2]);
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
            scene.text(20,"拿着对应物品右键置物台把物品放上去",[0,1,2]);
            scene.idle(35);
            scene.text(20,"然后在中间的流体储罐内倒入对应流体",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('minecraft:water_bucket')
            .rightClick();
            scene.idle(35);
            scene.text(20,"最后拿着对应的物品右键流体储罐",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('createaddition:iron_rod')
            .rightClick();
            scene.text(20,"开始合成后会有粒子效果出现，等待粒子效果结束就合成完毕了",[2,1.5,2]);
            scene.idle(10);
            scene.world.createItemEntity(
                Vec3(2,2,2),
                Vec3(0,0,0),'minecraft:stick');
        })

        event
        .create('create:fluid_tank')
        .scene("fluid_tank","世界合成","kubejs:fluid_tank", (scene,util) => {
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
            scene.text(20,"空手+shift对着流体罐(并非伪造流体罐)右键",[2,1.5,2]);
            scene.idle(15);
            scene.particles.dust(2, "#FF0000", [2,1.5,0]).density(5).motion([0, 0, -0.1]).area([2,1.5,0]).roll(2);
            scene.particles.dust(2, "#FF0000", [4,1.5,2]).density(5).motion([0, 0, -0.1]).area([4,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [0,1.5,2]).density(5).motion([0, 0, -0.1]).area([0,1.5,2]).roll(2);
            scene.particles.dust(2, "#FF0000", [2,1.5,4]).density(5).motion([0, 0, -0.1]).area([2,1.5,4]).roll(2);
            scene.idle(20);
            scene.text(25,"在这些冒红色粒子效果的地方放置物台",[2,1.5,2]);
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
            scene.text(20,"拿着对应物品右键置物台把物品放上去",[0,1,2]);
            scene.idle(35);
            scene.text(20,"然后在中间的流体储罐内倒入对应流体",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('minecraft:water_bucket')
            .rightClick();
            scene.idle(35);
            scene.text(20,"最后拿着对应的物品右键流体储罐",[2,1.5,2]);
            scene.showControls(20,[2,1.5,2],"right")
            .withItem('createaddition:iron_rod')
            .rightClick();
            scene.text(20,"开始合成后会有粒子效果出现，等待粒子效果结束就合成完毕了",[2,1.5,2]);
            scene.idle(10);
            scene.world.createItemEntity(
                Vec3(2,2,2),
                Vec3(0,0,0),'minecraft:stick');
        })
})