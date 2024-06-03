PlayerEvents.loggedIn(event =>{
    const {player, server} = event
    server.runCommandSilent(`spawnpoint ${player.displayName.getString()} 0 0 0`)
})