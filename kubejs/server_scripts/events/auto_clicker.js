BlockEvents.rightClicked(event => {
    const {player, hand, item} = event
    if(player.level.getDimension() == "compactmachines:compact_world") return
    if(player.stages.has("clicker_tip")) return
    const clicker = 'clickmachine:auto_clicker'
    if(item.id != clicker) return
    if((hand.name() == "MAIN_HAND")||(hand.name() == "OFF_HAND")){
        player.tell(Text.translate('tip.compact_world.clicker_1'))
        player.tell(Text.translate('tip.compact_world.clicker_2').clickRunCommand("/kjs stages add @s clicker_tip"))
    }
})