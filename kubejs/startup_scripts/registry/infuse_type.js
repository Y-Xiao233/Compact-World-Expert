const $InfuseType = Java.loadClass("mekanism.api.chemical.infuse.InfuseType")
const $InfuseTypeBuilder = Java.loadClass("mekanism.api.chemical.infuse.InfuseTypeBuilder")

StartupEvents.registry("mekanism:infuse_type", (event) => {
    /**
    {
     id:,
     color:
    } 
    */
    const infuse = [
        {
            id:'soul',
            color:0x446994
        },
        {
            id:'terra',
            color:0x24E845
        }]

    infuse.forEach(infuses =>{
        event.createCustom(infuses.id, () => $InfuseType($InfuseTypeBuilder.builder().color(infuses.color)))
    })
})