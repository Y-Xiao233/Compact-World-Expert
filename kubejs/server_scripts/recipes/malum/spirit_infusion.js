ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/malum/spirit_infusion/"

    /**
    {
     extra_items:[

     ],
     input:,
     output:,
     spirits:[

     ],
     id:
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