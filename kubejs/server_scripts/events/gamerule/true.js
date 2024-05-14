LevelEvents.loaded(event =>{
    //keepInventory
    if(event.getLevel().getGameRules().get('keepInventory')==='false'){
      event.server.runCommandSilent(`gamerule keepInventory true`)
    }

    //doMobLoot
    if(event.getLevel().getGameRules().get('doMobLoot')==="false"){
      event.server.runCommandSilent(`gamerule doMobLoot true`)
    }
  })
  
  LevelEvents.tick(event =>{
      //keepInventory
    if(event.getLevel().getGameRules().get('keepInventory')==='false'){
      event.server.runCommandSilent(`gamerule keepInventory true`)
      event.server.tell(Text.translate('tip.compact_world.gamerule_true'))
      event.server.runCommandSilent(`tellraw @a "游戏规则keepInventory已被设为：true"`)
    }

    //doMobLoot
    if(event.getLevel().getGameRules().get('doMobLoot')==='false'){
      event.server.runCommandSilent(`gamerule doMobLoot true`)
      event.server.tell(Text.translate('tip.compact_world.gamerule_true'))
      event.server.runCommandSilent(`tellraw @a "游戏规则doMobLoot已被设为：true"`)
    }
  })