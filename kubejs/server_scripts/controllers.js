ServerEvents.recipes(event => {
    let scrap = Item.of("refinedstorage:machine_casing")

    event.remove({output: Item.of("refinedstorage:controller")})

    event.recipes.create.sequenced_assembly(
        Item.of("refinedstorage:controller"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("refinedstorage:advanced_processor")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("refinedstorage:advanced_processor")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:tech_core")]),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("refinedstorage:machine_casing")

    event.remove({output: Item.of("ae2:controller")})

    event.recipes.create.sequenced_assembly(
        Item.of("ae2:controller"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("ae2:engineering_processor")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("ae2:engineering_processor")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("netherite_ingot")]),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)
})