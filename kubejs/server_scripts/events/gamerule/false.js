LevelEvents.loaded(event =>{
  //doTraderSpawning
  if(event.getLevel().getGameRules().get('doTraderSpawning')==="true"){
    event.server.runCommandSilent(`gamerule doTraderSpawning false`)
  }

  //doMobSpawning
  if(event.getLevel().getGameRules().get('doMobSpawning')==="true"){
    event.server.runCommandSilent(`gamerule doMobSpawning false`)
  }

  //mobGriefing
  if(event.getLevel().getGameRules().get('mobGriefing')==='true'){
    event.server.runCommandSilent(`gamerule mobGriefing false`)
  }

  //doWeatherCycle
  if(event.getLevel().getGameRules().get('doWeatherCycle')==='true'){
    event.server.runCommandSilent(`gamerule doWeatherCycle false`)
  }
  event.server.runCommandSilent(`weather clear`)
})

LevelEvents.tick(event =>{
  //doTraderSpawning
  if(event.getLevel().getGameRules().get('doTraderSpawning')==='true'){
    event.server.runCommandSilent(`gamerule doTraderSpawning false`)
    event.server.tell(Text.translate('tip.compact_world.gamerule_false'))
    event.server.runCommandSilent(`tellraw @a "游戏规则doTraderSpawning已被设为：false"`)
  }

  //doMobSpawning
  if(event.getLevel().getGameRules().get('doMobSpawning')==='true'){
    event.server.runCommandSilent(`gamerule doMobSpawning false`)
    event.server.tell(Text.translate('tip.compact_world.gamerule_false'))
    event.server.runCommandSilent(`tellraw @a "游戏规则doMobSpawning已被设为：false"`)
  }

  //mobGriefing
  if(event.getLevel().getGameRules().get('mobGriefing')==='true'){
    event.server.runCommandSilent(`gamerule mobGriefing false`)
    event.server.tell(Text.translate('tip.compact_world.gamerule_false'))
    event.server.runCommandSilent(`tellraw @a "游戏规则mobGriefing已被设为：false"`)
  }

  //doWeatherCycle
  if(event.getLevel().getGameRules().get('doWeatherCycle')==='true'){
    event.server.runCommandSilent(`gamerule doWeatherCycle false`)
    event.server.tell(Text.translate('tip.compact_world.gamerule_false'))
    event.server.runCommandSilent(`tellraw @a "游戏规则doWeatherCycle已被设为：false"`)
  }
})