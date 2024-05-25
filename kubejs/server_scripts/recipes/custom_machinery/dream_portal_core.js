
function facing(facing){
    return `Block{cwe:dream_portal_core}[facing=${facing}]`
}

BlockEvents.broken(event =>{
    const {block, server} = event
    const blockstate = block.getBlockState()

    if(block.id == "cwe:dream_portal_core"){
        if(blockstate == facing('north')){
            server.runCommandSilent(`fill ${block.x - 1} ${block.y + 1} ${block.z} ${block.x + 1} ${block.y + 3} ${block.z} minecraft:air replace kubejs:dream_portal`)
        }else if(blockstate == facing('south')){
            server.runCommandSilent(`fill ${block.x - 1} ${block.y + 1} ${block.z} ${block.x + 1} ${block.y + 3} ${block.z} minecraft:air replace kubejs:dream_portal`)
        }else if(blockstate == facing('west')){
            server.runCommandSilent(`fill ${block.x} ${block.y + 1} ${block.z - 1} ${block.x} ${block.y + 3} ${block.z + 1} minecraft:air replace kubejs:dream_portal`)
        }else if(blockstate == facing('east')){
            server.runCommandSilent(`fill ${block.x} ${block.y + 1} ${block.z - 1} ${block.x} ${block.y + 3} ${block.z + 1} minecraft:air replace kubejs:dream_portal`)
        }
    }

})

BlockEvents.rightClicked(event =>{
    const {block, server, item, player} = event
    const blockstate = block.getBlockState()

    if(block.id == "cwe:dream_portal_core" && item.hasTag('cwe:twig_wand')){
        if(blockstate == facing('north')){
            if(!(block.offset(2,0,-1).hasTag('cwe:mana_pool') && block.offset(-2,0,-1).hasTag('cwe:mana_pool'))){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_mana_pool"))
                return
            }
            if(!(block.offset(2,0,-1).getEntityData()["mana"] >= 10000 && block.offset(-2,0,-1).getEntityData()["mana"] >= 10000)){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_enough_mana"))
                return
            }
            server.runCommandSilent(`fill ${block.x - 1} ${block.y + 1} ${block.z} ${block.x + 1} ${block.y + 3} ${block.z} kubejs:dream_portal[facing=north] replace minecraft:air`)
        }else if(blockstate == facing('south')){
            if(!(block.offset(2,0,1).hasTag('cwe:mana_pool') && block.offset(-2,0,1).hasTag('cwe:mana_pool'))){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_mana_pool"))
                return
            }
            if(!(block.offset(2,0,1).getEntityData()["mana"] >= 10000 && block.offset(-2,0,1).getEntityData()["mana"] >= 10000)){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_enough_mana"))
                return
            }
            server.runCommandSilent(`fill ${block.x - 1} ${block.y + 1} ${block.z} ${block.x + 1} ${block.y + 3} ${block.z} kubejs:dream_portal[facing=south] replace minecraft:air`)
        }else if(blockstate == facing('west')){
            if(!(block.offset(-1,0,-2).hasTag('cwe:mana_pool') && block.offset(-1,0,2).hasTag('cwe:mana_pool'))){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_mana_pool"))
                return
            }
            if(!(block.offset(-1,0,-2).getEntityData()["mana"] >= 10000 && block.offset(-1,0,2).getEntityData()["mana"] >= 10000)){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_enough_mana"))
                return
            }
            server.runCommandSilent(`fill ${block.x} ${block.y + 1} ${block.z - 1} ${block.x} ${block.y + 3} ${block.z + 1} kubejs:dream_portal[facing=west] replace minecraft:air`)
        }else if(blockstate == facing('east')){
            if(!(block.offset(1,0,-2).hasTag('cwe:mana_pool') && block.offset(1,0,2).hasTag('cwe:mana_pool'))){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_mana_pool"))
                return
            }
            if(!(block.offset(1,0,-2).getEntityData()["mana"] >= 10000 && block.offset(1,0,2).getEntityData()["mana"] >= 10000)){
                player.tell(Text.translate("tip.compact_world.dream_portal_core.not_enough_mana"))
                return
            }
            server.runCommandSilent(`fill ${block.x} ${block.y + 1} ${block.z - 1} ${block.x} ${block.y + 3} ${block.z + 1} kubejs:dream_portal[facing=east] replace minecraft:air`)
        }
    }

})


BlockEvents.rightClicked(event =>{
    const {block, player, item} = event
    if(block.id != 'botania:mana_pool') return
    if(item.id != 'kubejs:archwood_stick') return
    player.tell(block.getEntityData()["mana"])
})

ServerEvents.recipes(event =>{
    const {custom_machine} = event.recipes.custommachinery
    const id_prefix = 'compact_world:recipes/custom_machinery/dream_portal_core/'


    function dream_portal_core_recipes(input1,input2,output,output_chance,time,id){
        custom_machine('cwe:dream_portal_core',time).id(`${id_prefix}${id}`)
        .requireFunctionOnStart(ctx =>{
            const {machine, block} = ctx
            const blockstate = block.getBlockState()
            if(blockstate == facing('north')){
                let mana_pool_1 = block.offset(2,0,-1)
                let mana_pool_2 = block.offset(-2,0,-1)
                if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
                    let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
                    let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
                    if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
                        mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
                        mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
                        return ctx.success()
                    }else{
                        return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
                    }
                }else{
                    return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
                }
            }else if(blockstate == facing('south')){
                let mana_pool_1 = block.offset(2,0,1)
                let mana_pool_2 = block.offset(-2,0,1)
                if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
                    let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
                    let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
                    if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
                        mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
                        mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
                        return ctx.success()
                    }else{
                        return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
                    }
                }else{
                    return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
                }
            }else if(blockstate == facing("west")){
                let mana_pool_1 = block.offset(-1,0,-2)
                let mana_pool_2 = block.offset(-1,0,2)
                if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
                    let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
                    let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
                    if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
                        mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
                        mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
                        return ctx.success()
                    }else{
                        return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
                    }
                }else{
                    return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
                }
            }else if(blockstate == facing('east')){
                let mana_pool_1 = block.offset(1,0,-2)
                let mana_pool_2 = block.offset(1,0,2)
                if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
                    let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
                    let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
                    if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
                        mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
                        mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
                        return ctx.success()
                    }else{
                        return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
                    }
                }else{
                    return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
                }
            }else{
                return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
            }
        })
        .requireStructure(
            [
                [" ama ","b   b"],
                ["aggga","c   c"],
                ["dgggd","     "],
                ["aggga","     "],
                [" efe ","     "]
            ],
            {
                "a":"botania:dreamwood",
                "b":"cwe:mana_pool",
                "c":"mythicbotany:alfsteel_pylon",
                "d":"botania:glimmering_dreamwood",
                "e":"botania:dreamwood",
                "f":"botania:glimmering_dreamwood",
                "g":"kubejs:dream_portal"
            }
        )
        .produceItem(output).chance(output_chance)
        .requireItem(input1)
        .requireItem(input2)
    }

    dream_portal_core_recipes('powah:steel_energized','minecraft:orange_dye','4x minecraft:copper_ingot',1,20,'copper_ingot')
    dream_portal_core_recipes('spirit:soul_glass','elementalcraft:source','kubejs:tin_source',0.1,20,'tin_source')
})



// custom_machine('cwe:dream_portal_core',20).id(`${id_prefix}copper_ingot`)
//         .requireFunctionOnStart(ctx =>{
//             const {machine, block} = ctx
//             const blockstate = block.getBlockState()
//             if(blockstate == facing('north')){
//                 let mana_pool_1 = block.offset(2,0,-1)
//                 let mana_pool_2 = block.offset(-2,0,-1)
//                 if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
//                     let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
//                     let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
//                     if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
//                         mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
//                         mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
//                         return ctx.success()
//                     }else{
//                         return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
//                     }
//                 }else{
//                     return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
//                 }
//             }else if(blockstate == facing('south')){
//                 let mana_pool_1 = block.offset(2,0,1)
//                 let mana_pool_2 = block.offset(-2,0,1)
//                 if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
//                     let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
//                     let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
//                     if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
//                         mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
//                         mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
//                         return ctx.success()
//                     }else{
//                         return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
//                     }
//                 }else{
//                     return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
//                 }
//             }else if(blockstate == facing("west")){
//                 let mana_pool_1 = block.offset(-1,0,-2)
//                 let mana_pool_2 = block.offset(-1,0,2)
//                 if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
//                     let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
//                     let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
//                     if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
//                         mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
//                         mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
//                         return ctx.success()
//                     }else{
//                         return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
//                     }
//                 }else{
//                     return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
//                 }
//             }else if(blockstate == facing('east')){
//                 let mana_pool_1 = block.offset(1,0,-2)
//                 let mana_pool_2 = block.offset(1,0,2)
//                 if(mana_pool_1.hasTag('cwe:mana_pool') && mana_pool_2.hasTag('cwe:mana_pool')){
//                     let mana_pool_1_count = mana_pool_1.getEntityData()["mana"]
//                     let mana_pool_2_count = mana_pool_2.getEntityData()["mana"]
//                     if(mana_pool_1_count >= 1000 && mana_pool_2_count >= 1000){
//                         mana_pool_1.mergeEntityData(`{mana:${mana_pool_1_count - 1000}}`)
//                         mana_pool_2.mergeEntityData(`{mana:${mana_pool_2_count - 1000}}`)
//                         return ctx.success()
//                     }else{
//                         return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_enough_mana"))
//                     }
//                 }else{
//                     return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
//                 }
//             }else{
//                 return ctx.error(Text.translate("tip.compact_world.dream_portal_core.error.not_mana_pool"))
//             }
//         })
//         .requireStructure(
//             [
//                 [" ama ","b   b"],
//                 ["aggga","c   c"],
//                 ["dgggd","     "],
//                 ["aggga","     "],
//                 [" efe ","     "]
//             ],
//             {
//                 "a":"botania:dreamwood",
//                 "b":"cwe:mana_pool",
//                 "c":"mythicbotany:alfsteel_pylon",
//                 "d":"botania:glimmering_dreamwood",
//                 "e":"botania:dreamwood",
//                 "f":"botania:glimmering_dreamwood",
//                 "g":"kubejs:dream_portal"
//             }
//         )
//         .produceItem('4x minecraft:copper_ingot')
//         .requireItem('powah:steel_energized')
//         .requireItem('minecraft:orange_dye')
//     }