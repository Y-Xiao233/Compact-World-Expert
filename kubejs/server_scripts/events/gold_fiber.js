BlockEvents.rightClicked(event => {
    if (((event.hand.name() == "MAIN_HAND")||(event.hand.name() == "OFF_HAND"))&&
        (event.item.id == 'naturesaura:gold_fiber')&&
        (event.block.hasTag('minecraft:leaves'))){
        event.server.runCommandSilent(`tellraw @a "\u00a7c不能用原版方式获取黄金叶,请使用魔改方法"`)
        event.cancel()
    }
})