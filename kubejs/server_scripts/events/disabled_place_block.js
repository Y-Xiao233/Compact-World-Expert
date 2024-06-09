BlockEvents.rightClicked(event =>{
    const {block, player, item} = event


    var fluid_storage = /functionalstorage:fluid_.*/
    if(!fluid_storage.exec(item.id)) return
    
    for(let x = -1; x < 2; x++){
        for(let y = -1; y < 2; y++){
            for(let z = -1; z < 2; z++){
                if(block.offset(x,y,z).id == 'estrogen:centrifuge'){
                    player.tell(Text.translate('tip.compact_worldcentrifuge.disabled_place_block'))
                    event.cancel()
                }
            }
        }
    }
})