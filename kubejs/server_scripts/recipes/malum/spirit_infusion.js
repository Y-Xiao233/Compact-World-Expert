ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/malum/spirit_infusion/"

    /**
    {
     extra_items:[

     ],
     input:items(),
     output:items(),
     spirits:[
        spirits()
     ],
     id:''
    }
    */

    const reicpes = [
        {
            extra_items:[],
            input:items('malum:runewood_leaves',4),
            output:items('malum:infernal_spirit',16),
            spirits:[
                spirits('aerial',16)
            ],
            id:'infernal_spirit'
        },
        {
            extra_items:[
                items('botania:mana_diamond',4),
                items('thermal:apatite',4)
            ],
            input:items('compactmachines:wall',16),
            output:items('compactmachines:machine_giant'),
            spirits:[
                spirits('aerial',16),
                spirits('infernal',16)
            ],
            id:'machine_giant'
        },
        {
            extra_items:[
                tags('create:sandpaper'),
                tags('create:sandpaper'),
                tags('create:sandpaper'),
                tags('create:sandpaper')
            ],
            input:items('create:belt_connector'),
            output:items('vintageimprovements:grinder_belt'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'grinder_belt'
        },
        {
            extra_items:[
                items('botania:rune_water'),
                items('botania:rune_earth'),
                items('botania:rune_mana')
            ],
            input:items('minecraft:lapis_block',8),
            output:items('botania:terra_plate',2),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'terra_plate'
        },
        {
            extra_items:[
                items('industrialforegoing:efficiency_addon_2')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_efficiency'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'pylon_efficiency'
        },
        {
            extra_items:[
                items('minecraft:diamond_helmet')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_beheading'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'plyon_beheading'
        },
        {
            extra_items:[
                items('botania:terrasteel_block')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_looting'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'pylon_looting'
        },
        {
            extra_items:[
                items('industrialforegoing:speed_addon_2')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_speed'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'pylon_speed'
        },
        {
            extra_items:[
                items('minecraft:nether_star')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_recursive'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'pylon_recursive'
        },
        {
            extra_items:[
                items('elementalcraft:pristine_fire_gem')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_flame'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'pylon_flame'
        },
        {
            extra_items:[
                items('ars_nouveau:greater_experience_gem')
            ],
            input:items('vitalize:pylon_base'),
            output:items('vitalize:pylon_experience'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'pylon_experience'
        },
        {
            extra_items:[
                items('minecraft:bone_block',8),
                items('minecraft:bone_block',8),
                items('minecraft:bone_block',8),
                items('minecraft:bone_block',8)
            ],
            input:items('spirit:soul_crystal'),
            output:items('spirit:soul_crystal',1,'{StoredEntity:{Souls:64,Type:"mekanismadditions:baby_skeleton"}}'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'soul_crystal/baby_skeleton'
        },
        {
            extra_items:[
                items('create:copper_casing',4),
                items('minecraft:lapis_lazuli',32)
            ],
            input:items('industrialforegoing:machine_frame_pity',2),
            output:items('industrialforegoing:machine_frame_simple',2),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'machine_frame_simple'
        },
        {
            extra_items:[
                items('create:large_cogwheel'),
                items('create:fluid_tank',2)
            ],
            input:items('create:copper_casing'),
            output:items('estrogen:centrifuge'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'centrifuge'
        },
        {
            extra_items:[
                items('hexerei:mindful_trance_blend',4),
                items('mekanism:ingot_steel',4)
            ],
            input:items('kubejs:soul_steel_casing'),
            output:items('mekanism:steel_casing'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'steel_casing'
        },
        {
            extra_items:[
                items('powah:capacitor_hardened')
            ],
            input:items('powah:energizing_rod_basic'),
            output:items('powah:energizing_rod_hardened'),
            spirits:[
                spirits('arcane',4),
                spirits('aerial',4),
                spirits('infernal',4)
            ],
            id:'capacitor_hardened'
        },
        {
            extra_items:[],
            input:items('quark:purple_rune',4),
            output:items('malum:eldritch_spirit',16),
            spirits:[
               spirits('arcane',16)
            ],
            id:'eldritch_spirit'
        },
        {
            extra_items:[
                items('mekanism:ultimate_control_circuit',64)
            ],
            input:items('kubejs:rainbow_nugget',8),
            output:items('kubejs:rainbow_ingot'),
            spirits:[
               spirits('aqueous',64),spirits('eldritch',64),
               spirits('arcane',64),spirits('aerial',64),
               spirits('infernal',64)
            ],
            id:'rainbow_ingot'
        }]

    reicpes.forEach(reicpe =>{
        event.custom({
            "type": "malum:spirit_infusion",
            "extra_items":reicpe.extra_items,
            "input":reicpe.input,
            "output":reicpe.output,
            "spirits":reicpe.spirits
        }).id(`${id_prefix}${reicpe.id}`)
    })
})