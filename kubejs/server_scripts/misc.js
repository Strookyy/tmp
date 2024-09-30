ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.laser_cutting(Item.of("lime_dye"), Item.of("green_dye")).maxChargeRate(250).energyCost(500)

    event.recipes.minecraft.crafting_shaped(
        Item.of("create:crushing_wheel"),
        [
            "XXX",
            "XOX",
            "XXX"
        ],
        {
            X: Item.of("create:andesite_alloy"),
            O: Item.of("diamond")
        }
    )

    event.remove({ output: Item.of("create:mechanical_arm")})

    event.recipes.minecraft.crafting_shaped(
        Item.of("create:mechanical_arm"),
        [
            "BBA",
            "B  ",
            "PCL"
        ],
        {
            B: Item.of("create:brass_sheet"),
            A: Item.of("create:andesite_alloy_block"),
            P: Item.of("create:precision_mechanism"),
            C: Item.of("create:brass_casing"),
            L: Item.of("kubejs:logic_processor"),
        }
    )

    event.remove({output: Item.of("create:track_station")})

    event.recipes.minecraft.crafting_shaped(
        Item.of("create:track_station"),
        [
            "CL ",
            "   ",
            "   ",
        ],
        {
            C: Item.of("create:railway_casing"),
            L: Item.of("kubejs:control_circuit")
        }
    )

    event.recipes.vintageimprovements.laser_cutting(Item.of("ae2:certus_quartz_crystal"), Item.of("ae2:certus_quartz_dust"))
    event.recipes.vintageimprovements.laser_cutting(Item.of("gunpowder"), Item.of("sugar"))
    event.recipes.vintageimprovements.laser_cutting(Item.of("netherrack"), Item.of("cobblestone"))

    event.recipes.create.crushing(Item.of("ae2:certus_quartz_dust", 2), Item.of("ae2:certus_quartz_crystal"))

    event.remove({output: Item.of("create:rotation_speed_controller")})

    event.recipes.minecraft.crafting_shaped(
        Item.of("create:rotation_speed_controller"),
        [
            " P ",
            " C ",
            " L ",
        ],
        {
            P: Item.of("create:precision_mechanism"),
            C: Item.of("create:brass_casing"),
            C: Item.of("kubejs:control_circuit"),
        }
    )

    event.remove({output: Item.of("computercraft:computer_normal")})
    
    event.recipes.minecraft.crafting_shaped(
        Item.of("computercraft:computer_normal"),
        [
            "SSS",
            "CLM",
            "SRS",
        ],
        {
            S: Item.of("stone"),
            C: Item.of("kubejs:control_circuit"),
            L: Item.of("kubejs:logic_processor"),
            M: Item.of("kubejs:microprocessor"),
            R: Item.of("redstone_block"),
        }
    )

    event.remove({id: "computercraft:computer_advanced"})

    event.remove({output: Item.of("create:content_observer")})
    
    event.recipes.minecraft.crafting_shaped(
        Item.of("create:content_observer"),
        [
            " E ",
            "BOB",
            " L ",
        ],
        {
            E: Item.of("create:electron_tube"),
            B: Item.of("create:brass_sheet"),
            L: Item.of("kubejs:logic_processor"),
            O: Item.of("observer"),
        }
    )

    event.remove({output: Item.of("create:smart_chute")})
    
    event.recipes.minecraft.crafting_shaped(
        Item.of("create:smart_chute"),
        [
            " E ",
            "BOB",
            " L ",
        ],
        {
            E: Item.of("create:electron_tube"),
            B: Item.of("create:brass_sheet"),
            L: Item.of("kubejs:logic_processor"),
            O: Item.of("create:chute"),
        }
    )

    event.remove({output: Item.of("create:smart_fluid_pipe")})
    
    event.recipes.minecraft.crafting_shaped(
        Item.of("create:smart_fluid_pipe"),
        [
            " E ",
            "BOB",
            " L ",
        ],
        {
            E: Item.of("create:electron_tube"),
            B: Item.of("create:brass_sheet"),
            L: Item.of("kubejs:logic_processor"),
            O: Item.of("create:fluid_pipe"),
        }
    )

    event.remove({output: Item.of("refinedstorage:processor_binding")})

    event.recipes.create.mixing(Item.of("refinedstorage:processor_binding", 4), [Item.of("iron_ingot"), Item.of("quartz")]).heated()

    event.remove({output: Item.of("mekanismgenerators:control_rod_assembly")})

    event.recipes.create.mixing(Item.of("mekanismgenerators:control_rod_assembly"), [Item.of("netherite_scrap"), Item.of("mekanism:ultimate_control_circuit"), Item.of("kubejs:logic_processor")])
    event.recipes.create.mixing([Item.of("ender_pearl"), Item.of("diamond")], [Item.of("sugar"), Item.of("blue_dye"), Item.of("diamond")])

    event.remove({output: Item.of("mekanism:mekasuit_helmet")})
    event.remove({output: Item.of("mekanism:mekasuit_bodyarmor")})
    event.remove({output: Item.of("mekanism:mekasuit_pants")})
    event.remove({output: Item.of("mekanism:mekasuit_boots")})

    add_suit_recipe(event, Item.of("netherite_helmet"), Item.of("mekanism:mekasuit_helmet"))
    add_suit_recipe(event, Item.of("netherite_chestplate"), Item.of("mekanism:mekasuit_bodyarmor"))
    add_suit_recipe(event, Item.of("netherite_leggings"), Item.of("mekanism:mekasuit_pants"))
    add_suit_recipe(event, Item.of("netherite_boots"), Item.of("mekanism:mekasuit_boots"))

    event.recipes.create.mixing(Item.of("mekanism:salt", 4), Fluid.of("minecraft:water", 1000)).superheated()

    event.remove({output: Item.of("enderio:pulsating_alloy_ingot")})
    event.remove({output: Item.of("enderio:conductive_alloy_ingot")})
    event.remove({output: Item.of("enderio:energetic_alloy_ingot")})
    event.remove({output: Item.of("enderio:vibrant_alloy_ingot")})
    event.remove({output: Item.of("thermal:enderium_ingot")})

    event.recipes.create.mixing(Item.of("enderio:pulsating_alloy_ingot", 10), [Item.of("iron_ingot", 10), Item.of("ender_pearl")]).heated()
    event.recipes.create.mixing(Item.of("enderio:conductive_alloy_ingot", 10), [Item.of("iron_ingot", 10), Item.of("redstone")]).heated()
    event.recipes.create.mixing(Item.of("enderio:energetic_alloy_ingot", 10), [Item.of("gold_ingot", 10), Item.of("redstone")]).heated()
    event.recipes.create.mixing(Item.of("enderio:vibrant_alloy_ingot", 10), [Item.of("enderio:energetic_alloy_ingot", 10), Item.of("redstone")]).heated()
    event.recipes.create.mixing(Item.of("thermal:enderium_ingot", 10), [Item.of("iron_ingot", 10), Item.of("ender_pearl")]).heated()

    event.recipes.create.mixing(Item.of("enderio:advanced_item_filter", 2), [Item.of("iron_ingot", 5), Item.of("paper")]).heated()
    event.recipes.create.mixing(Item.of("reliquary:fertile_essence"), [Item.of("mekanism:bio_fuel", 5), Item.of("sugar")]).heated()
    event.recipes.create.mixing(Item.of("amythest_shard"), [Item.of("quartz"), Item.of("sugar")])
    event.recipes.create.mixing(Fluid.of("pneumaticcraft:etching_acid", 1000), [Item.of("iron_ingot", 5), Item.of("redstone"), Fluid.of("createdieselgenerators:plant_oil", 250)]).heated()

    event.remove({output: Fluid.of("createaddition:seed_oil")})
    event.remove({id: "createdieselgenerators:mixing/biodiesel"})

    let scrap = Item.of("iron_ingot")

    event.remove({output: Item.of("ad_astra:rocket_nose_cone")})

    event.recipes.create.sequenced_assembly(
        Item.of("ad_astra:rocket_nose_cone"),
        Item.of(scrap),

        [
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("iron_ingot")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:logic_processor")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:microprocessor")]),
            event.recipes.create.pressing(scrap, scrap),
            event.recipes.create.deploying(scrap, [scrap, Item.of("kubejs:tech_core")]),
            event.recipes.vintageimprovements.laser_cutting(scrap, scrap).energyCost(5000).maxChargeRate(500),
        ],
    ).transitionalItem(scrap).loops(1)

})

function add_suit_recipe(event, item, output) {
    event.recipes.create.sequenced_assembly(
        output,
        item,

        [
            event.recipes.create.pressing(item, item),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:pellet_antimatter")]),
            event.recipes.create.pressing(item, item),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:pellet_polonium")]),
            event.recipes.vintageimprovements.laser_cutting(item, item).energyCost(50000).maxChargeRate(500),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:pellet_polonium")]),
            event.recipes.vintageimprovements.laser_cutting(item, item).energyCost(50000).maxChargeRate(500),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:hdpe_sheet")]),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:hdpe_sheet")]),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:hdpe_sheet")]),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:hdpe_sheet")]),
            event.recipes.create.pressing(item, item),
            event.recipes.create.deploying(item, [item, Item.of("mekanism:ultimate_control_circuit")]),
            event.recipes.create.deploying(item, [item, Item.of("kubejs:tech_core")]),
            event.recipes.create.pressing(item, item),
        ],
    ).transitionalItem(item).loops(1)
}