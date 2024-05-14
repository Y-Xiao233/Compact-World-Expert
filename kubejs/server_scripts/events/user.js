BlockEvents.rightClicked(event => {
    const {player, hand, item} = event
    if(player.level.getDimension() != "compactmachines:compact_world") return
    const user = 'cyclic:user'
    if(item.id != user) return
    if((hand.name() == "MAIN_HAND")||(hand.name() == "OFF_HAND")){
        player.tell(Text.translate('tip.compact_world.user'))
        event.cancel()
    }
})