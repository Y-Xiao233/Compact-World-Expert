ItemEvents.modification((event) => {
    const mekansimstacksize = [
        'mekanism:upgrade_speed',
        'mekanism:upgrade_energy'
    ];

    event.modify(mekansimstacksize, (item) => {
        item.maxStackSize = 16;
    });
});
