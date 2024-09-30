StartupEvents.registry('item', event => {
    event.create('control_circuit').displayName('Control Circuit')
    event.create('microprocessor').displayName('Microprocessor')
    event.create('logic_processor').displayName('§dLogic Processor')
    event.create('tech_core').displayName('§dTechnology Core')
    event.create('gun_steel_ingot').displayName('Gun Steel')
    event.create('gun_barrel').displayName('Gun Barrel')
    event.create('gun_slide').displayName('Gun Slide')
    event.create('gun_core').displayName('§dGun Core')

    event.create('cigs').displayName("Marlboro Cigarettes").food(food => {
        food
        .hunger(1)
        .saturation(0.1)
        .effect("minecraft:speed", 6000, 2, 1)
        .effect("minecraft:nausea", 5*20, 2, 1)
        .alwaysEdible()
    })

    event.create('beer').displayName("Cerveza Cristal Beer").food(food => {
        food
        .hunger(1)
        .saturation(0.1)
        .effect("minecraft:strength", 6000, 1, 1)
        .effect("minecraft:nausea", 5*20, 2, 1)
        .alwaysEdible()
    })

    event.create('whiskey').displayName("Jack Daniels").food(food => {
        food
        .hunger(1)
        .saturation(0.1)
        .effect("minecraft:strength", 6000, 2, 1)
        .effect("minecraft:slowness", 20*20, 1, 1)
        .alwaysEdible()
    })
})