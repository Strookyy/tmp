ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:control_circuit'),
        Item.of("create:sturdy_sheet"),

        [
            event.recipes.vintageimprovements.laser_cutting([Item.of('create:sturdy_sheet')], [Item.of('create:sturdy_sheet')]).energyCost(2000).maxChargeRate(250),
            event.recipes.vintageimprovements.polishing(Item.of("create:sturdy_sheet"), Item.of("create:sturdy_sheet")).processingTime(50),
            event.recipes.create.pressing(Item.of("create:sturdy_sheet"), Item.of("create:sturdy_sheet")),
            event.recipes.create.deploying(Item.of("create:sturdy_sheet"), [Item.of("create:sturdy_sheet"), Item.of("mekanism:dust_diamond")]),
            event.recipes.create.deploying(Item.of("create:sturdy_sheet"), [Item.of("create:sturdy_sheet"), Item.of("create:precision_mechanism")]),
        ],
    ).transitionalItem("create:sturdy_sheet").loops(1)

    let ing = Item.of("mekanism:enriched_carbon")

    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:microprocessor'),
        Item.of(ing),

        [
            event.recipes.vintageimprovements.laser_cutting(ing, ing).energyCost(500).maxChargeRate(100),
            event.recipes.create.pressing(ing, ing),
            event.recipes.create.deploying(ing, [ing, Item.of("mekanism:dust_steel")]),
        ],
    ).transitionalItem(ing).loops(1)

    let cc = Item.of("kubejs:control_circuit")

    event.recipes.create.sequenced_assembly(
        Item.of('kubejs:logic_processor'),
        Item.of(cc),

        [
            event.recipes.vintageimprovements.laser_cutting(cc, cc).energyCost(5000).maxChargeRate(1500),
            event.recipes.create.pressing(cc, cc),
            event.recipes.create.deploying(cc, [cc, Item.of("kubejs:microprocessor")]),
            event.recipes.vintageimprovements.vibrating(cc, cc),
            event.recipes.create.deploying(cc, [cc, Item.of("kubejs:microprocessor")]),
            event.recipes.vintageimprovements.laser_cutting(cc, cc).energyCost(5000).maxChargeRate(1500),
        ],
    ).transitionalItem(cc).loops(1)

    event.remove({output: Item.of("mekanism:elite_control_circuit")})

    event.recipes.create.sequenced_assembly(
        Item.of("mekanism:elite_control_circuit"),
        Item.of(cc),

        [
            event.recipes.create.pressing(cc, cc),
            event.recipes.create.deploying(cc, [cc, Item.of("kubejs:logic_processor")]),
            event.recipes.vintageimprovements.laser_cutting(cc, cc).energyCost(5000).maxChargeRate(1500),
        ],
    ).transitionalItem(cc).loops(1)

    let scrap = Item.of("diamond")

    event.recipes.create.sequenced_assembly(
        Item.of("netherite_scrap"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("iron_ingot")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("mekanism:ingot_osmium")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(1500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("diamond")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("diamond")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(1500),
        ],
    ).transitionalItem(scrap).loops(1)
})