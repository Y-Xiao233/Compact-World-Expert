Platform.getInfo('kubejs').name = 'Compact World: Expert'

StartupEvents.registry('enchantment', (event) => {
    event.create('other_sequenced_assembly').displayName('其他序列组装')
    event.create('world_crafting').displayName('世界合成配方')
})