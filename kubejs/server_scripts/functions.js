/**lychee函数
 * 目前支持的类型block_interacting;block_clicking;item_inside;item_burning;item_exploding;block_exploding,lightning_channeling
 * 目前支持的条件chance;execute
 * 适用于kjs6
 * 由Y_Xiao233所制作
*/


/**
 * @param {string} type -lychee合成类型,开头必须为lychee:,且该字符串必须在引号内,"block_interacting";"block_clicking";"item_inside";"item_burning";"item_exploding";"block_exploding","lightning_channeling"
 * @param {string} post -另一个函数,默认支持最多4个不同的输出
 * @param {string} item_in -输入的物品/手持的物品,若所选类型没有此项，请填入false
 * @param {string} block_in -所需要的方块,若所选类型没有此项，请填入false
 * @param {boolean} ghost -是否是假的合成,默认为false,若要调用请先将前面剩余没用到的post全填为false
 * @param {boolean} hide_in_player -是否隐藏于玩家,默认为false,若要调用请先将前面剩余没用到的post全填为false
*/

function lychee(type,item_in,block_in,post1,post2,post3,post4,ghost,hide_in_player){
    post2 = typeof post2 !="undefined"?post2:false
    post3 = typeof post3 !="undefined"?post3:false
    post4 = typeof post4 !="undefined"?post4:false
    ghost = typeof ghost !="undefined"?ghost:false
    hide_in_player = typeof hide_in_player !="undefined"?hide_in_player:false
    let post_key = "post"
    let posts = {}
    let block_in_key = {}
    let item_in_key = {}
    if(type == "lychee:block_interacting"||"lychee:block_clicking"||"lychee:item_inside"){
        block_in_key = "block_in",
        item_in_key = "item_in"
    }
    else if(type == "lychee:item_burning"||"lychee:item_exploding"){
        item_in_key = "item_in"
    }
    else if(type == "lychee:block_exploding"){
        block_in_key = "block_in"
    }

    if((post1 != false)&&(post2 == false)){
        posts = [post1]
    }
    else if((post2 != false)&&(post3 == false)){
        posts = [post1,post2]
    }
    else if((post3 != false)&&(post4 == false)){
        posts = [post1,post2,post3]
    }
    else if(post4 != false){
        posts = [post1,post2,post3,post4]
    }

    let lychee_function = {
        "type":type,
        "ghost":ghost,
        "hide_in_player":hide_in_player
    }

    Object.defineProperty(lychee_function,post_key,{value:posts,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(lychee_function,block_in_key,{value:block_in,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(lychee_function,item_in_key,{value:{"item":item_in},writable:true,enumerable:true,configurable:true})
    return lychee_function
}

/**
* @param {string} posts_type - 输出类型，可以是"drop_item"或"place"
* @param {string} output_item - 输出物品
* @param {number} output_count - 输出物品数量,当后面添加条件时不能为空,默认为1
* @param {string} contextual_type - 条件类型，可以是 "chance"、"execute" 或 false,默认为false
* @param {string|boolean} contextual - 具体条件，根据 contextual_type 的不同含义不同,默认为false
*/

function posts(posts_type,output_item,output_count,contextual_type,contextual){
    contextual_type = typeof contextual_type != "undefined"?contextual_type:false
    contextual = typeof contextual != "undefined"?contextual:false
    output_count = typeof output_count != "undefined"?output_count:1
    let contextual_types = {}
    let contextual_form_key = {}
    let post_form_key = {}

    if(contextual_type == "chance"){
        contextual_form_key = "contextual"
        contextual_types = [{"type":"chance","chance":contextual}]
    }
    else if(contextual_type == "execute"){
        contextual_form_key = "contextual"
        contextual_types = [{"type":"execute","command":contextual}]
    }
    else if(contextual_type == false){
    }

    if(posts_type =="drop_item"){
        post_form_key = "item"
    }else{
        post_form_key = "block"
    }

    let post = {
        "type":posts_type,
        "count":output_count
    }
    Object.defineProperty(post,contextual_form_key,{value:contextual_types,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(post,post_form_key,{value:output_item,writable:true ,enumerable:true,configurable:true})

    return post
}

/**
 //example
    ServerEvents.recipes(event =>{
        event.custom(
            lychee("lychee:block_interacting","minecraft:white_dye","minecraft:iron_block",
            posts("drop_item","minecraft:stone",1,"chance",0.8),
            posts("drop_item",'minecraft:granite',1,"chance",0.8)))

        event.custom(
            lychee("lychee:block_interacting","minecraft:red_dye","minecraft:iron_block",
            posts("place","minecraft:stone",1,"chance",0.8),
            posts("place","minecraft:stone",1)))

        event.custom(
            lychee("lychee:block_interacting","minecraft:yellow_dye","minecraft:iron_block",
            posts("place","minecraft:stone"),
            posts("place","minecraft:stone")))
    })
*/



function compactcrafting(recipesize,pattern1,pattern2,pattern3,pattern4,pattern5,pattern6,pattern7,pattern8,pattern9){
    recipesize = typeof recipesize != "undefined"?recipesize:1
    pattern1 = typeof pattern1 != "undefined"?pattern1:false
    pattern2 = typeof pattern2 != "undefined"?pattern2:false
    pattern3 = typeof pattern3 != "undefined"?pattern3:false
    pattern4 = typeof pattern4 != "undefined"?pattern4:false
    pattern5 = typeof pattern5 != "undefined"?pattern5:false
    pattern6 = typeof pattern6 != "undefined"?pattern6:false
    pattern7 = typeof pattern7 != "undefined"?pattern7:false
    pattern8 = typeof pattern8 != "undefined"?pattern8:false
    pattern9 = typeof pattern9 != "undefined"?pattern9:false
    let pattern = []
    if(recipesize == 1){
        pattern = [pattern1]
    }else if(recipesize == 2){
        pattern = [pattern1,pattern2]
    }else if(recipesize == 3){
        pattern = [pattern1,pattern2,pattern3]
    }else if(recipesize == 4){
        pattern = [pattern1,pattern2,pattern3,pattern4]
    }else if(recipesize == 5){
        pattern = [pattern1,pattern2,pattern3,pattern4,pattern5]
    }else if(recipesize == 6){
        pattern = [pattern1,pattern2,pattern3,pattern4,pattern5,pattern6]
    }else if(recipesize == 7){
        pattern = [pattern1,pattern2,pattern3,pattern4,pattern5,pattern6,pattern7]
    }else if(recipesize == 8){
        pattern = [pattern1,pattern2,pattern3,pattern4,pattern5,pattern6,pattern7,pattern8]
    }else if(recipesize == 9){
        pattern = [pattern1,pattern2,pattern3,pattern4,pattern5,pattern6,pattern7,pattern8,pattern9]
    }
    let compactcrafting_recipes = {
        "type":"compactcrafting:mixed",
        "pattern":pattern
    }
    return compactcrafting_recipes
}


function component(block){
    let components = {
        "type":"compactcrafting:block",
        "block":block
    }
    return components
}

function runes(consume,item,x,z){
    let runes = {
        "consume":consume,
        "rune":{
            "item":item
        },
        "x":x,
        "z":z
    }
    return runes
}

function items(item,count,nbt){
    count = typeof count != "undefined"?count:false
    nbt = typeof nbt != "undefined"?nbt:false

    let count_form_key = {}
    let nbt_form_key = {}
    let nbt_type_form_key = {}

    if(count != false){
        count_form_key = "count"
    }

    if(nbt != false){
        nbt_form_key = "nbt"
        nbt_type_form_key = "type"
    }

    let items = {
        "item":item
    }

    Object.defineProperty(items,count_form_key,{value:count,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(items,nbt_form_key,{value:nbt,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(items,nbt_type_form_key,{value:"forge:nbt",writable:true,enumerable:true,configurable:true})

    return items
}

function tags(tag,count,nbt){
    count = typeof count != "undefined"?count:false
    nbt = typeof nbt != "undefined"?nbt:false

    let count_form_key = {}
    let nbt_form_key = {}

    if(count != false){
        count_form_key = "count"
    }

    if(nbt != false){
        nbt_form_key = "nbt"
    }

    let tags = {
        "tag":tag
    }

    Object.defineProperty(tags,count_form_key,{value:count,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(tags,nbt_form_key,{value:nbt,writable:true,enumerable:true,configurable:true})

    return tags
}

function fluids(fluid,amount,nbt){
    amount = typeof amount != "undefined"?amount:1000
    nbt = typeof nbt != "undefined"?nbt:false

    let nbt_form_key = {}

    if(nbt != false){
        nbt_form_key = "nbt"
    }

    let fluids = {
        "fluid":fluid,
        "amount": amount
    }

    Object.defineProperty(fluids,nbt_form_key,{value:nbt,writable:true,enumerable:true,configurable:true})

    return fluids
}

function crops_outputs(item,chance,rolls1,rolls2){
    let output = Item.of(item).withChance(chance).withRolls(rolls1,rolls2)
    return output
}

function gases(gas,amount){
    amount = typeof amount != "undefined"?amount:1000

    let mekanism_gas = {
        "gas": gas,
        "amount": amount
    }

    return mekanism_gas
}