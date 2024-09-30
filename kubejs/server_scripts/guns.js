ServerEvents.recipes(event => {
    event.remove({output: Item.of("tacz:gun_smith_table")})

    event.recipes.create.mixing(Item.of("kubejs:gun_steel_ingot", 2), [Item.of("iron_ingot", 2), Item.of("netherite_scrap")]).superheated()
    event.recipes.create.mixing(Item.of("kubejs:gun_core"), [Item.of("kubejs:gun_steel_ingot", 20), Item.of("netherite_ingot"), Item.of("kubejs:tech_core")]).superheated()

    event.recipes.create.mixing(Item.of('tacz:ammo', 2, '{AmmoId:"tacz:50bmg"}'), [Item.of("kubejs:gun_steel_ingot", 2), Item.of("gunpowder"), Item.of("red_wool")]).superheated()
    event.recipes.create.mixing(Item.of('tacz:ammo', 7, '{AmmoId:"tacz:9mm"}'), [Item.of("kubejs:gun_steel_ingot", 2), Item.of("gunpowder"), Item.of("gray_wool")]).superheated()
    event.recipes.create.mixing(Item.of('tacz:ammo', 7, '{AmmoId:"tacz:45acp"}'), [Item.of("kubejs:gun_steel_ingot", 2), Item.of("gunpowder"), Item.of("white_wool")]).superheated()
    event.recipes.create.mixing(Item.of('tacz:ammo', 7, '{AmmoId:"tacz:556x45"}'), [Item.of("kubejs:gun_steel_ingot", 2), Item.of("gunpowder"), Item.of("yellow_wool")]).superheated()
    event.recipes.create.mixing(Item.of('tacz:ammo', 8, '{AmmoId:"tacz:50ae"}'), [Item.of("kubejs:gun_steel_ingot", 2), Item.of("gunpowder"), Item.of("orange_wool")]).superheated()
    event.recipes.create.mixing(Item.of('tacz:ammo', 6, '{AmmoId:"tacz:762x39"}'), [Item.of("kubejs:gun_steel_ingot", 2), Item.of("gunpowder"), Item.of("purple_wool")]).superheated()

    let scrap = Item.of("kubejs:gun_steel_ingot")

    event.recipes.create.sequenced_assembly(
        Item.of("kubejs:gun_barrel"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("netherite_ingot")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(1000),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:tech_core")]),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("netherite_ingot")

    event.recipes.create.sequenced_assembly(
        Item.of("kubejs:gun_slide"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_steel_ingot")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(1000),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    event.remove({output: Item.of("tacz:modern_kinetic_gun")})

    scrap = Item.of("brown_dye")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:35,GunFireMode:"AUTO",GunId:"tacz:rpk",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:tech_core")]),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("white_dye")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:19,GunFireMode:"AUTO",GunId:"tacz:vector45",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("black_dye")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:3,GunFireMode:"SEMI",GunId:"tacz:deagle",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("red_wool")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:13,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("yellow_wool")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:12,GunFireMode:"SEMI",GunId:"tacz:p320",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.pressing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("netherite_block")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:4,GunFireMode:"SEMI",GunId:"tacz:m95",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.vintageimprovements.vibrating(scrap, scrap),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.vintageimprovements.polishing(scrap, scrap),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("createbigcannons:cast_iron_block")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:26,GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
        ],
    ).transitionalItem(scrap).loops(1)

    scrap = Item.of("gray_wool")

    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:9,GunFireMode:"AUTO",GunId:"tacz:aug",HasBulletInBarrel:1b}'),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_core")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_barrel")]),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:gun_slide")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
        ],
    ).transitionalItem(scrap).loops(1)
})