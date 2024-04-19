BlockEvents.rightClicked(event => {
    if (((event.hand.name() == "MAIN_HAND")||(event.hand.name() == "OFF_HAND"))&&
        (event.item.id == 'minecraft:blaze_spawn_egg')&&
        (event.block.id != 'ars_nouveau:mob_jar')){
        event.player.tell('\u00a7c不能在世界中使用\u00a7a烈焰人刷怪蛋生成烈焰人')
        event.player.tell('\u00a7d若想获得烈焰人燃烧室请使用工作台合成方式')
        event.cancel()
    }

})