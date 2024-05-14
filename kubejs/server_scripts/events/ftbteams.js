const player_name = []

PlayerEvents.loggedIn(event =>{
    const {player, server} = event
    let name = player.displayName.getString()
    player_name.push(name)

    if(!player.stages.has('team')){
        //player.tell(player_name[0])
        //console.log(player_name[0])
        //server.runCommandSilent('gamerule sendCommandFeedback false')
        player.tell(Text.translate('tip.compact_world.ftbteams_1').clickRunCommand(`/kjs stages add ${name} create_team`))
        player.tell(Text.translate('tip.compact_world.ftbteams_2').clickRunCommand(`/kjs stages add ${name} choose_team`))
        player.tell(Text.translate('tip.compact_world.ftbteams_3').clickRunCommand(`/kjs stages add ${name} leave_team`))
        player.tell(Text.translate('tip.compact_world.ftbteams_4').clickRunCommand(`/kjs stages add ${name} team`))
        //server.runCommandSilent(`tellraw ${name} {"text":"\u00a7a[创建自己的队伍]","clickEvent":{"action":"run_command","value":"/kjs stages add ${name} create_team"}}`)
        //server.runCommandSilent(`tellraw ${name} {"text":"\u00a7a[加入别人的队伍]","clickEvent":{"action":"run_command","value":"/kjs stages add ${name} choose_team"}}`)
        //server.runCommandSilent(`tellraw ${name} {"text":"\u00a7a[离开当前所在的队伍]","clickEvent":{"action":"run_command","value":"/kjs stages add ${name} leave_team"}}`)
        //server.runCommandSilent(`tellraw ${name} {"text":"\u00a7c[点此以后不再提示]","clickEvent":{"action":"run_command","value":"/kjs stages add ${name} team"}}`)
    }
})


PlayerEvents.tick(event =>{
    const {player, server} = event
    const name = player.displayName.getString()

    if(player.stages.has('choose_team')){
        //server.runCommandSilent('gamerule sendCommandFeedback true')
        player.tell(Text.translate('tip.compact_world.ftbteams_5'))
        for(let i = 0; i < player_name.length; i++){
            if(player_name[i] != undefined){
                player.runCommandSilent(`tellraw ${name} {"text":"\u00a7a[${i+1}.${player_name[i]}]","clickEvent":{"action":"run_command","value":"/ftbteams party join ${player_name[i]}"}}`)
            }
        }
        player.stages.remove('choose_team')

    }
    if(player.stages.has('create_team')){
        //server.runCommandSilent('gamerule sendCommandFeedback true')
        player.runCommandSilent(`ftbteams party create ${name}`)
        player.runCommandSilent('ftbteams party settings ftbteams:free_to_join true')
        player.stages.remove('create_team')

    }
    if(player.stages.has('leave_team')){
        //server.runCommandSilent('gamerule sendCommandFeedback true')
        player.runCommandSilent('ftbteams party leave')
        player.stages.remove('leave_team')
    }
})