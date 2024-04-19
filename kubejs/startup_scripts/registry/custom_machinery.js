Platform.getInfo('cwe').name = 'Compact World: Expert'

StartupEvents.registry("block", (event) => {
    const custom_machinerys = [
        'cwe:mana_crush_machine',
        'cwe:element_motor',
        'cwe:mana_sourcelink',
        'cwe:source_craftingtable',
        'cwe:mana_booster',
        'cwe:fake_fluid_tank',
        'cwe:fake_mana_pool'
    ]

    custom_machinerys.forEach(custom_machinery =>{
        event.create(custom_machinery,"custommachinery")
    })
})