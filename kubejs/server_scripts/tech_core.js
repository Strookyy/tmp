ServerEvents.recipes(event => {
    let scrap = Item.of("kubejs:logic_processor")

    event.recipes.create.sequenced_assembly(
        Item.of("kubejs:tech_core"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("iron_ingot")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:logic_processor")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(2000),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:logic_processor")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:control_circuit")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("netherite_ingot")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(2000),
        ],
    ).transitionalItem(scrap).loops(1)
})