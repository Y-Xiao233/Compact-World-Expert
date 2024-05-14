BlockEvents.rightClicked(event => {
    if (((event.hand.name() == "MAIN_HAND")||(event.hand.name() == "OFF_HAND"))&&
        (event.item.id == 'minecraft:blaze_spawn_egg')&&
        (event.block.id != 'ars_nouveau:mob_jar')){
        event.player.tell(Text.translate('tip.compact_world.blaze_spawn_egg_1'))
        event.player.tell(Text.translate('tip.compact_world.blaze_spawn_egg_2'))
        event.cancel()
    }

})