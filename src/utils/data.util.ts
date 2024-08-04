export interface Hero {
  name: string;
  imgSource: string;
}

export interface HeroEquipmentGroup {
  name: string;
  imgSource: string;
  equipment: Equipment[];
}
export interface HeroPets {
  name: string;
  imgSource: string;
  unlockBuilding: string;
}

export interface Equipment {
  name: string;
  imgSource: string;
}

export interface Troop {
  name: string;
  imgSource: string;
  unlockBuilding?: string;
}
export interface Spells {
  name: string;
  imgSource: string;
}

export interface HeroBuilderBase {
  name: string;
  imgSource: string;
}

export interface TroopBuilderBase {
  name: string;
  imgSource: string;
}

export interface TroopsCategory {
  homeVillage: {
    heroes: Hero[];
    heroEquipmentGroups: HeroEquipmentGroup[];
    heroPets: HeroPets[];
    Troops: {
      elixirTroops: Troop[];
      darkElixirTroops: Troop[];
      superTroops: Troop[];
    };
    Spells: {
      elixirSpells: Spells[];
      darkElixirSpells: Spells[];
    };
  };
  builderBaseVillage: {
    heroes: HeroBuilderBase[];
    troops: TroopBuilderBase[];
  };
}

export const TROOPS: TroopsCategory = {
  homeVillage: {
    heroes: [
      {
        name: "Barbarian King",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/BarbarianKing.webp",
      },
      {
        name: "Archer Queen",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/ArcherQueen.png",
      },
      {
        name: "Grand Warden",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/GrandWarden.png",
      },
      {
        name: "Royal Champion",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/RoyalChampion.png",
      },
    ],
    heroEquipmentGroups: [
      {
        name: "Archer Queen",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/ArcherQueen.png",
        equipment: [
          {
            name: "Archer Puppet",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/ArcherQueen/ArcherPuppet.png",
          },
          {
            name: "Frozen Arrow",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/ArcherQueen/FrozenArrow.png",
          },
          {
            name: "Giant Arrow",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/ArcherQueen/GiantArrow.png",
          },
          {
            name: "Healer Puppet",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/ArcherQueen/HealerPuppet.png",
          },
          {
            name: "Invisibility Vial",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/ArcherQueen/InvisibilityVial.png",
          },
        ],
      },
      {
        name: "Barbarian King",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/BarbarianKing.webp",
        equipment: [
          {
            name: "Barbarian Puppet",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/BarbarianKing/BarbarianPuppet.png",
          },
          {
            name: "Earthquake Boots",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/BarbarianKing/EarthquakeBoots.png",
          },
          {
            name: "Giant Gauntlet",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/BarbarianKing/GiantGauntlet.png",
          },
          {
            name: "Rage Vial",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/BarbarianKing/RageVial.webp",
          },
          {
            name: "Spiky Ball",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/BarbarianKing/SpikyBall.webp",
          },
          {
            name: "Vampstache",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/BarbarianKing/Vampstache.png",
          },
        ],
      },
      {
        name: "Grand Warden",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/GrandWarden.png",
        equipment: [
          {
            name: "Eternal Tome",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/GrandWarden/EternalTome.png",
          },
          {
            name: "Fire Ball",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/GrandWarden/FireBall.png",
          },
          {
            name: "Healing Tome",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/GrandWarden/HealingTome.png",
          },
          {
            name: "Life Gem",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/GrandWarden/LifeGem.png",
          },
          {
            name: "Rage Gem",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/GrandWarden/RageGem.png",
          },
        ],
      },
      {
        name: "Royal Champion",
        imgSource: "/img/Army/HomeVillageArmy/Heroes/RoyalChampion.png",
        equipment: [
          {
            name: "Haste Vial",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/RoyalChampion/HasteVial.png",
          },
          {
            name: "Hog Rider Puppet",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/RoyalChampion/HogRiderPuppet.png",
          },
          {
            name: "Rocket Spear",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/RoyalChampion/RocketSpear.webp",
          },
          {
            name: "Royal Gem",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/RoyalChampion/RoyalGem.png",
          },
          {
            name: "Seeking Shield",
            imgSource:
              "/img/Army/HomeVillageArmy/Heroes/HeroesEquipment/RoyalChampion/SeekingShield.png",
          },
        ],
      },
    ],
    heroPets: [
      {
        name: "L.A.S.S.I",
        imgSource: "/img/Army/HomeVillageArmy/Pets/Lassi.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Electro Owl",
        imgSource: "/img/Army/HomeVillageArmy/Pets/ElectroOwl.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Mighty Yak",
        imgSource: "/img/Army/HomeVillageArmy/Pets/MightyYak.png",
        unlockBuilding: "Pet House",
      },
      {
        name: "Unicorn",
        imgSource: "/img/Army/HomeVillageArmy/Pets/Unicorn.png",
        unlockBuilding: "Pet House",
      },
      {
        name: "Frosty",
        imgSource: "/img/Army/HomeVillageArmy/Pets/Frosty.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Diggy",
        imgSource: "/img/Army/HomeVillageArmy/Pets/Diggy.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Poison Lizard",
        imgSource: "/img/Army/HomeVillageArmy/Pets/PoisonLizard.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Phoenix",
        imgSource: "/img/Army/HomeVillageArmy/Pets/Phoenix.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Spirit Fox",
        imgSource: "/img/Army/HomeVillageArmy/Pets/SpiritFox.webp",
        unlockBuilding: "Pet House",
      },
      {
        name: "Angry Jelly",
        imgSource: "/img/Army/HomeVillageArmy/Pets/AngryJelly.png",
        unlockBuilding: "Pet House",
      },
    ],
    Troops: {
      elixirTroops: [
        {
          name: "Barbarian",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Barbarian.webp",
          unlockBuilding: "Barracks",
        },
        {
          name: "Archer",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Archer.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Giant",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Giant.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Goblin",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Goblin.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Wall Breaker",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/WallBreaker.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Balloon",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Balloon.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Wizard",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Wizard.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Healer",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Healer.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Dragon",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Dragon.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "P.E.K.K.A",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Pekka.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Baby Dragon",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/BabyDragon.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Miner",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Miner.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Electro Dragon",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/ElectroDragon.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Yeti",
          imgSource: "/img/Army/HomeVillageArmy/Troops/ElixirTroops/Yeti.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Dragon Rider",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/DragonRider.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Electro Titan",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/ElectroTitan.png",
          unlockBuilding: "Barracks",
        },
        {
          name: "Root Rider",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/ElixirTroops/RootRider.png",
          unlockBuilding: "Barracks",
        },
      ],
      darkElixirTroops: [
        {
          name: "Minion",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/Minion.png",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Hog Rider",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/HogRider.png",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Valkyrie",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/Valkyrie.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Golem",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/Golem.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Witch",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/Witch.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Lava Hound",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/LavaHound.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Bowler",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/Bowler.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Ice Golem",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/IceGolem.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Headhunter",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/HeadHunter.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Apprentice Warden",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/ApprenticeWarden.webp",
          unlockBuilding: "Dark Barracks",
        },
        {
          name: "Druid",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/DarkElixirTroops/Druid.png",
          unlockBuilding: "Dark Barracks",
        },
      ],
      superTroops: [
        {
          name: "Super Barbarian",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperBarbarian.png",
        },
        {
          name: "Super Archer",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperArcher.webp",
        },
        {
          name: "Super Giant",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperGiant.png",
        },
        {
          name: "Sneaky Goblin",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SneakyGoblin.png",
        },
        {
          name: "Super Wall Breaker",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperWallBreaker.png",
        },
        {
          name: "Rocket Balloon",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/RocketBalloon.png",
        },
        {
          name: "Super Wizard",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperWizard.png",
        },
        {
          name: "Super Dragon",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperDragon.webp",
        },
        {
          name: "Inferno Dragon",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/InfernoDragon.webp",
        },
        {
          name: "Super Minion",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperMinion.png",
        },
        {
          name: "Super Valkyrie",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperValkyrie.png",
        },
        {
          name: "Super Witch",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperWitch.png",
        },
        {
          name: "Ice Hound",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/IceHound.webp",
        },
        {
          name: "Super Bowler",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperBowler.webp",
        },
        {
          name: "Super Miner",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperMiner.webp",
        },
        {
          name: "Super Hog Rider",
          imgSource:
            "/img/Army/HomeVillageArmy/Troops/SuperTroops/SuperHogRider.webp",
        },
      ],
    },
    Spells: {
      elixirSpells: [
        {
          name: "Lightning Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/LightningSpell.webp",
        },
        {
          name: "Healing Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/HealingSpell.png",
        },
        {
          name: "Rage Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/RageSpell.png",
        },
        {
          name: "Jump Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/JumpSpell.png",
        },
        {
          name: "Freeze Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/FreezeSpell.png",
        },
        {
          name: "Clone Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/CloneSpell.png",
        },
        {
          name: "Invisibility Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/InvisibilitySpell.png",
        },
        {
          name: "Recall Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/ElixirSpells/RecallSpell.png",
        },
      ],
      darkElixirSpells: [
        {
          name: "Poison Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/DarkElixirSpells/PoisonSpell.png",
        },
        {
          name: "Earthquake Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/DarkElixirSpells/EarthQuakeSpell.png",
        },
        {
          name: "Haste Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/DarkElixirSpells/HasteSpell.png",
        },
        {
          name: "Bat Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/DarkElixirSpells/BatSpell.png",
        },
        {
          name: "Overgrowth Spell",
          imgSource:
            "/img/Army/HomeVillageArmy/Spells/DarkElixirSpells/OverGrowthSpell.png",
        },
      ],
    },
  },
  builderBaseVillage: {
    heroes: [
      {
        name: "Battle Copter",
        imgSource: "/img/Army/BuilderBaseArmy/Heroes/BattleCopter.webp",
      },
      {
        name: "Battle Machine",
        imgSource: "/img/Army/BuilderBaseArmy/Heroes/BattleMachine.webp",
      },
    ],
    troops: [
      {
        name: "Raged Barbarian",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/RagedBarbarian.webp",
      },
      {
        name: "Sneaky Archer",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/SnekayArcher.png",
      },
      {
        name: "Boxer Giant",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/BoxerGiant.png",
      },
      {
        name: "Beta Minion",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/BetaMinion.png",
      },
      {
        name: "Bomber",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/Bomber.png",
      },
      {
        name: "Baby Dragon",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/BabyDragon.webp",
      },
      {
        name: "Cannon Cart",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/CannonCart.png",
      },
      {
        name: "Night Witch",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/NightWith.webp",
      },
      {
        name: "Drop Ship",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/DropShip.webp",
      },
      {
        name: "Power P.E.K.K.A",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/PowerPekka.png",
      },
      {
        name: "Hog Glider",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/HogGlider.webp",
      },
      {
        name: "Electrofire Wizard",
        imgSource: "/img/Army/BuilderBaseArmy/Troops/ElectrofiteWizard.png",
      },
    ],
  },
};
