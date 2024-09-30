ServerEvents.recipes(event => {
    let scrap = Item.of("glass_bottle")

    event.recipes.create.sequenced_assembly(
        Item.of("kubejs:whiskey"),
        Item.of(scrap),

        [
            event.recipes.create.deploying(scrap, [scrap, Item.of("sugar")]),
            event.recipes.create.filling(scrap, [scrap, Fluid.of("water")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("sugar_cane")]),
            event.recipes.create.filling(scrap, [scrap, Fluid.of("water")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("wheat_seeds")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("netherite_scrap")]),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("glass_pane")

    event.recipes.create.sequenced_assembly(
        Item.of("kubejs:beer"),
        Item.of(scrap),

        [
            event.recipes.create.deploying(scrap, [scrap, Item.of("sugar")]),
            event.recipes.create.filling(scrap, [scrap, Fluid.of("water")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("sugar_cane")]),
            event.recipes.create.filling(scrap, [scrap, Fluid.of("water")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("wheat_seeds")]),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("paper")

    event.recipes.create.sequenced_assembly(
        Item.of("kubejs:cigs"),
        Item.of(scrap),

        [
            event.recipes.create.deploying(scrap, [scrap, Item.of("sugar")]),
            event.recipes.create.filling(scrap, [scrap, Fluid.of("water")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("gunpowder")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("gunpowder")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("netherite_scrap")]),
        ],
    ).transitionalItem(scrap).loops(1)
})