ServerEvents.recipes(event =>{

    event.recipes.minecraft.crafting_shaped(
        Item.of('botania:terrasteel_nugget',2,{display:{Name:'{"text":"\u00a7c这个配方仅仅是为了修复删除这个配方所导致无法打开植物魔法词典而存在"}'}}),
        [
            "AA ",
            "   ",
            "   "
        ],
        {
            "A":'botania:terrasteel_nugget'
        }).id('mythicbotany:mythicbotany_infusion/terrasteel_ingot')

    event.recipes.minecraft.crafting_shaped(
        Item.of('botania:terrasteel_nugget',3,{display:{Name:'{"text":"\u00a7c这个配方仅仅是为了修复删除这个配方所导致无法打开植物魔法词典而存在"}'}}),
        [
            "AAA",
            "   ",
            "   "
        ],
        {
            "A":'botania:terrasteel_nugget'
        }).id('mythicbotany:mythicbotany_infusion/alfsteel_ingot')
})