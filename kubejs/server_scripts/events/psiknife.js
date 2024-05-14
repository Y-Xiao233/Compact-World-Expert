BlockEvents.rightClicked(event => {
    const {hand , item, player} = event

    if (((hand.name() == "MAIN_HAND") ||
        (hand.name() == "OFF_HAND")) &&
        (item == Item.of('kubejs:psiknife', '{Damage:31}'))) {
        player.tell(Text.translate('tip.compact_world.psiknife'))
        event.cancel()
    }
})