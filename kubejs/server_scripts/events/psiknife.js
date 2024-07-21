BlockEvents.rightClicked(event => {
    const {hand , item, player, block} = event
    if(block.id !== 'farmersdelight:cutting_board') return

    if (((hand.name() == "MAIN_HAND") ||
        (hand.name() == "OFF_HAND")) &&
        (item == Item.of('kubejs:psiknife', '{Damage:63}'))) {
        player.tell(Text.translate('tip.compact_world.psiknife'))
        event.cancel()
    }
})