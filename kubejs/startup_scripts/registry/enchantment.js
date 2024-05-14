Platform.getInfo('kubejs').name = 'Compact World: Expert'

StartupEvents.registry('enchantment', (event) => {
    event.create('other_sequenced_assembly').displayName(Text.translate('enchantment.kubejs.other_sequenced_assembly'))
    event.create('world_crafting').displayName(Text.translate('enchantment.kubejs.world_crafting'))
})