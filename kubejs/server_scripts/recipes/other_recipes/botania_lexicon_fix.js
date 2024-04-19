ServerEvents.recipes(event =>{

    event.recipes.minecraft.crafting_shaped(
        Item.of('botania:terrasteel_ingot',3,{display:{Name:'{"text":"\u00a7c这个配方仅仅是为了修复删除这个配方所导致无法打开植物魔法词典而存在"}'}}),
        [
            "AAA",
            "   ",
            "   "
        ],
        {
            "A":'botania:terrasteel_ingot'
        }).id('mythicbotany:mythicbotany_infusion/terrasteel_ingot')
})