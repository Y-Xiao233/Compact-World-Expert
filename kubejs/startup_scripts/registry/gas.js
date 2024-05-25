const $Gas = Java.loadClass("mekanism.api.chemical.gas.Gas");
const $GasBuilder = Java.loadClass("mekanism.api.chemical.gas.GasBuilder");

StartupEvents.registry("mekanism:gas", event =>{

    /**
    {
     id:,
     color:
    }
    */
   
    const gases = [
        {
            id:'soul_gas',
            color:0x0873A8
        },
        {
            id:'mana_gas',
            color:0x48E9F5
        },
        {
            id:'tainted_matter_gas',
            color:0xD5B224
        },
        {
            id:'pure_matter_gas',
            color:0x71CEF1
        },
        {
            id:'base_matter_gas',
            color:0xFFFFFF
        }]

    gases.forEach(gas =>{
        event.createCustom(gas.id, () => $Gas($GasBuilder.builder().color(gas.color)));
    })
})