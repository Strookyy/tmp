ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([Item.of("mekanism:raw_osmium").withChance(0.1), Item.of("mekanism:raw_tin").withChance(0.1), Item.of("mekanism:raw_lead").withChance(0.1), Item.of("mekanism:raw_uranium").withChance(0.05), Item.of("mekanism:fluorite_gem").withChance(0.1), Item.of("minecraft:string").withChance(0.7)], [Item.of("minecraft:red_sand"), Item.of("createsifter:advanced_brass_mesh")]) 

    event.recipes.vintageimprovements.laser_cutting(Item.of("minecraft:red_sand"), Item.of("sand")).maxChargeRate(250).energyCost(500)
})