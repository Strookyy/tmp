ServerEvents.recipes(event => {
    event.remove({output: Item.of("createbigcannons:steel_sliding_breech")})
    event.remove({output: Item.of("createbigcannons:steel_screw_breach")})
    event.remove({output: Item.of("createbigcannons:steel_quickfiring_breech")})
    event.remove({output: Item.of("createbigcannons:steel_cannon_chamber")})
    event.remove({output: Item.of("createbigcannons:steel_cannon_barrel")})

    make_cannon_recipe(event, Item.of("iron_block"), Item.of("createbigcannons:steel_sliding_breech"))
    make_cannon_recipe(event, Item.of("thermal:steel_block"), Item.of("createbigcannons:steel_screw_breech"))
    make_cannon_recipe(event, Item.of("create:industrial_iron_block"), Item.of("createbigcannons:steel_quickfiring_breech"))
    make_cannon_recipe(event, Item.of("iron_ingot"), Item.of("createbigcannons:steel_cannon_chamber"))
    make_cannon_recipe(event, Item.of("thermal:steel_ingot"), Item.of("createbigcannons:steel_cannon_barrel"))
})

function make_cannon_recipe(event, start, output) {
    let scrap = start

    event.recipes.create.sequenced_assembly(
        Item.of(output),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("iron_ingot")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("thermal:steel_block")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:logic_processor")]),
        ],
    ).transitionalItem(scrap).loops(1)
}