Platform.getInfo('kubejs').name = 'Compact World: Expert'

StartupEvents.registry('item', (event) => {
    const sequenced_assembly_item = [
        'incomplete_craftpurecrystal',
        'incomplete_crystal_blazing'
    ]

    sequenced_assembly_item.forEach(items =>{
        event.create(items,'create:sequenced_assembly')
    })
})