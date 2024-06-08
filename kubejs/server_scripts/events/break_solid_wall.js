function breakSolidWall(event){
    const {block, item, level} = event
    if(item.id !== 'kubejs:rainbow_pickaxe') return
    if(block.id !== 'compactmachines:solid_wall') return
    if(level.dimension != "minecraft:overworld") return
    block.set('minecraft:air')
    let itemEntity = block.createEntity("item")
    itemEntity.item = 'compactmachines:solid_wall'
    itemEntity.x+=0.5
    itemEntity.y+=1
    itemEntity.z+=0.5
    itemEntity.spawn()
}

BlockEvents.leftClicked(event =>{
    breakSolidWall(event)
})


BlockEvents.rightClicked(event =>{
    breakSolidWall(event)
})