BlockEvents.rightClicked(event => {
    if (((event.hand.name() == "MAIN_HAND") ||
        (event.hand.name() == "OFF_HAND")) &&
        (event.item == Item.of('kubejs:psiknife', '{Damage:31}'))) {
        event.server.runCommandSilent(`tellraw @a "\u00a7c你的工具快没有魔源的支持了"`)
        event.cancel()
    }
})