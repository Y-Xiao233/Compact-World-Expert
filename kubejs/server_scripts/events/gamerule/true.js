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
      event.server.runCommandSilent(`tellraw @a "\u00a7c你不能关闭这个游戏规则"`)
      event.server.runCommandSilent(`tellraw @a "游戏规则keepInventory已被设为：true"`)
    }

    //doMobLoot
    if(event.getLevel().getGameRules().get('doMobLoot')==='false'){
      event.server.runCommandSilent(`gamerule doMobLoot true`)
      event.server.runCommandSilent(`tellraw @a "\u00a7c你不能打开这个游戏规则"`)
      event.server.runCommandSilent(`tellraw @a "游戏规则doMobLoot已被设为：true"`)
    }
  })