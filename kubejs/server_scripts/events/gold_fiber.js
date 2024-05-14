BlockEvents.rightClicked(event => {
    const {hand , item, player, block} = event

    if (((hand.name() == "MAIN_HAND")||(hand.name() == "OFF_HAND"))&&
        (item.id == 'naturesaura:gold_fiber')&&
        (block.hasTag('minecraft:leaves'))){
        player.tell(Text.translate('tip.compact_world.gold_fiber'))
        event.cancel()
    }
})