ItemEvents.modification((event) => {
    const increaseStackSize = [
        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
