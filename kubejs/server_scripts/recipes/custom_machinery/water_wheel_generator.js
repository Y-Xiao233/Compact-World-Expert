ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/water_wheel_generator/'

    event.recipes.custommachinery.custom_machine('cwe:water_wheel_generator',1)
    .requireFunctionOnStart(ctx =>{
        const {machine} = ctx
        let wheel = machine.getItemStored("input1")
        let count = wheel.count
        if(count >= 2 && count < 3){
            return ctx.success()
        }else if(count >= 3){
            machine.addEnergy((count - 2) * 30,false)
            return ctx.success()
        }else{
            return ctx.error(Text.translatable('tip.compact_world.water_wheel_generator.no_wheel'))
        }
    })
    .requireFluid(Fluid.of('minecraft:water',10))
    .produceEnergy(60)
    .id(`${id_prefix}produce_energy`)
})