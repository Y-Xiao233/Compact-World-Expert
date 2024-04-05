ItemEvents.rightClicked(event => {
    const {hand,item,player,server} = event
    const bottle = 'naturesaura:bottle_two_the_rebottling'
    if((player.mainHandItem == bottle)||(player.offHandItem == bottle)){
        player.tell("\u00a7c不能用原版方式获取瓶装阳光/鬼魂/物质/黑暗/真空,请使用魔改方法")
        event.cancel()
    }
})