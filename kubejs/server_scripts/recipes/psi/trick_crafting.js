ServerEvents.recipes(event =>{
  const id_prefix = 'compact_world:recipes/psi/tirck_crafting/'
  /**
  {
    cad:,
    input:,
    output:,
    id:`${id_prefix}`,
    trick:
  }
  */
  const recipes = [
    {
      cad:'psi:cad_assembly_iron',
      input:'kubejs:compact_dust',
      output:'psi:psidust',
      id:`${id_prefix}psidust`,
      trick:false
    },
    {
      cad:'psi:cad_assembly_iron',
      input:'kubejs:highly_rough_psimetal',
      output:'psi:programmer',
      id:`${id_prefix}programmer`,
      trick:false
    },
    {
      cad:'psi:cad_assembly_iron',
      input:'compactmachines:wall',
      output:'minecraft:grass_block',
      id:`${id_prefix}trick_infusion/grass_block`,
      trick:'psi:trick_infusion'
    },
    {
      cad:'psi:cad_assembly_iron',
      input:'ars_nouveau:source_gem',
      output:'kubejs:source_dust',
      id:`${id_prefix}source_dust`,
      trick:false
    },
    {
      cad:'psi:cad_assembly_iron',
      input:'ars_nouveau:source_gem',
      output:'kubejs:source_psicoal',
      id:`${id_prefix}source_psicoal`,
      trick:'psi:trick_infusion'
    },
    {
      cad:'psi:cad_assembly_iron',
      input:'psi:psidust',
      output:'kubejs:compact_ingot',
      id:`${id_prefix}compact_ingot`,
      trick:false
    },
    {
      cad:'psi:cad_assembly_psimetal',
      input:'kubejs:source_fiber',
      output:'naturesaura:gold_fiber',
      id:`${id_prefix}gold_fiber`,
      trick:'psi:trick_greater_infusion'
    },
    {
      cad:'psi:cad_assembly_psimetal',
      input:'compactmachines:wall',
      output:'hexerei:mixing_cauldron',
      id:`${id_prefix}mixing_cauldron`,
      trick:'psi:trick_greater_infusion'
    }]
    
  recipes.forEach(recipe =>{
    if(recipe.trick == false){
      event.custom({
        "type": "psi:trick_crafting",
        "cad": {"item": recipe.cad},
        "input": {"item": recipe.input},
        "output": {"item": recipe.output}
      }).id(recipe.id)
    }else{
      event.custom({
        "type": "psi:trick_crafting",
        "cad": {"item": recipe.cad},
        "input": {"item": recipe.input},
        "output": {"item": recipe.output},
        "trick": recipe.trick
      }).id(recipe.id)
    }
  })
})