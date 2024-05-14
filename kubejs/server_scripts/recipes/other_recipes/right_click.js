BlockEvents.rightClicked(event => {
    /**
    {
     block_in:,
     hand_item:,
     output:,
     chance:
    }
    */
    const right_clicked_recipes = [
        {
            block_in:'compactmachines:solid_wall',
            hand_item:'kubejs:magical_stick',
            output:'kubejs:compact_dust',
            chance:false
        },
        {
            block_in:'kubejs:compact_block',
            hand_item:'kubejs:magical_stick',
            output:'kubejs:compact_dust',
            chance:false
        },
        {
            block_in:'minecraft:grass_block',
            hand_item:'minecraft:air',
            output:'kubejs:water_droplet',
            chance:0.02
        }]
    
    right_clicked_recipes.forEach(recipe =>{
        if(recipe.chance == false){
            const { block, hand, item, world, player } = event
            if (hand.name() != "MAIN_HAND") return

            if (event.block.id == recipe.block_in && event.item.id == recipe.hand_item && (player.isCrouching() || player.isFake())) {
                let itemEntity = event.block.createEntity("item")
                itemEntity.item = recipe.output
                itemEntity.x+=0.5
                itemEntity.y+=1
                itemEntity.z+=0.5
                itemEntity.spawn()
            }
        }else{
            const { block, hand, item, world, player } = event
            if (hand.name() != "MAIN_HAND") return 

            if (event.block.id == recipe.block_in && event.item.id == recipe.hand_item && (player.isCrouching() || player.isFake())) {
                let itemEntity = event.block.createEntity("item")
                itemEntity.item = recipe.output
                itemEntity.x+=0.5
                itemEntity.y+=1
                itemEntity.z+=0.5
                if(Math.random() < recipe.chance){
                itemEntity.spawn()
                }
            }
        }
    })
})

BlockEvents.rightClicked(event =>{
    const {block, hand, item} = event
    if (hand.name() != "MAIN_HAND") return 

    if (block.id == 'minecraft:andesite' && item.id == 'botania:twig_wand') {
        block.set('minecraft:polished_andesite')
    }
})

BlockEvents.rightClicked(event =>{
    const {block, player} = event

    if (block.id == 'ars_nouveau:mob_jar' && player.mainHandItem == 'elementalcraft:drenched_iron_block' && player.offHandItem == 'naturesaura:token_euphoria') {
        player.give(Item.of('ars_nouveau:mob_jar','{BlockEntityTag:{entityId:"botania:doppleganger",entityTag:{id:"botania:doppleganger"}}}'))
    }

    if (block.id == 'ars_nouveau:mob_jar' && player.mainHandItem == 'elementalcraft:elementpipe_creative' && player.offHandItem == 'botania:gaia_ingot') {
        player.give(Item.of('ars_nouveau:mob_jar','{BlockEntityTag:{entityId:"minecraft:wither",entityTag:{id:"minecraft:wither"}}}'))
    }
})