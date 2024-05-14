ItemEvents.rightClicked(event => {
    const {player} = event
    const bottle = 'naturesaura:bottle_two_the_rebottling'
    if(player.mainHandItem == bottle){
        player.tell(Text.translate('tip.compact_world.bottle_two_the_rebotting'))
        event.cancel()
    }else if(player.offHandItem == bottle){
        player.tell(Text.translate('tip.compact_world.bottle_two_the_rebotting'))
        event.cancel()
    }
})