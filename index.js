// Chemical data with all the chemicals
const chemicals = [
    // A. ACIDS
    {
        id: 1,
        name: "Hydrochloric Acid",
        formula: "HCl",
        type: "acid",
        description: "A strong acid that's clear and smells strong. Used for cleaning metals and in stomach acid too.",
        details: {
            physicalState: "Clear liquid, sometimes has fumes",
            composition: "Hydrogen and chlorine mixed together",
            function: "Strong acid for cleaning, making other chemicals, and in our stomachs",
            origin: "Made in factories mostly",
            toxicity: "Very dangerous - can burn skin and eyes bad",
            flammability: "Not flammable but makes bad fumes when hot",
            reactivity: "Reacts with many things like metals and bases",
            acidity: "Very strong acid - pH around 1",
            biologicalEffect: "Bad for living things but our stomach has a little bit",
            usage: "Cleaning metals, making chemicals, in some foods",
            handlingPrecautions: "Wear gloves and goggles. Use in places with good air flow",
            storageConditions: "Keep in strong bottles away from other chemicals",
            firstAidMeasures: "Wash with lots of water if touched. Get help if swallowed",
            disposalMethod: "Mix with something basic before throwing away"
        }
    },
    {
        id: 2,
        name: "Sulfuric Acid",
        formula: "H₂SO₄",
        type: "acid",
        description: "A very strong acid that's thick and oily. Used in car batteries and making fertilizers.",
        details: {
            physicalState: "Thick oily liquid, clear to yellow",
            composition: "Hydrogen, sulfur and oxygen together",
            function: "Strong acid, takes water out of things, helps other reactions",
            origin: "Made in big factories",
            toxicity: "Very dangerous - burns badly and can blind you",
            flammability: "Not flammable but can make other things burn",
            reactivity: "Reacts with water strongly, and with many other things",
            acidity: "Super strong acid - pH almost 0",
            biologicalEffect: "Very bad for living things - destroys tissue",
            usage: "Car batteries, fertilizers, cleaning metals",
            handlingPrecautions: "Wear full protection - gloves, goggles, apron. Never add water to it",
            storageConditions: "Keep in special bottles away from water and other chemicals",
            firstAidMeasures: "Wash with lots of water for long time. Get medical help fast",
            disposalMethod: "Mix carefully with basic stuff before disposal"
        }
    },
    {
        id: 3,
        name: "Nitric Acid",
        formula: "HNO₃",
        type: "acid",
        description: "A strong acid that can make things burn faster. Used for making explosives and fertilizers.",
        details: {
            physicalState: "Clear or yellow liquid with strong smell",
            composition: "Hydrogen, nitrogen and oxygen mixed",
            function: "Strong acid that helps other things burn",
            origin: "Made in chemical factories",
            toxicity: "Very dangerous - burns skin and bad to breathe",
            flammability: "Not flammable but makes other things burn",
            reactivity: "Very reactive - can explode with some things",
            acidity: "Strong acid - pH around 1",
            biologicalEffect: "Bad for living things - burns and poisons",
            usage: "Making explosives, fertilizers, cleaning metals",
            handlingPrecautions: "Wear full protection. Keep away from other chemicals",
            storageConditions: "Store in dark bottles away from light and heat",
            firstAidMeasures: "Wash with water. Don't make vomit if swallowed. Get help",
            disposalMethod: "Mix with basic chemicals before throwing away"
        }
    },
    {
        id: 4,
        name: "Acetic Acid",
        formula: "CH₃COOH",
        type: "acid",
        description: "The acid in vinegar. Weak acid with strong smell. Used in foods and making plastics.",
        details: {
            physicalState: "Clear liquid with strong vinegar smell",
            composition: "Carbon, hydrogen and oxygen atoms",
            function: "Weak acid for food, making chemicals, cleaning",
            origin: "From vinegar or made in factories",
            toxicity: "Can burn but not as bad as strong acids",
            flammability: "Can catch fire easily",
            reactivity: "Reacts with strong chemicals and some metals",
            acidity: "Weak acid - pH around 3-4",
            biologicalEffect: "Vinegar is safe to eat but pure form can burn",
            usage: "Food preservative, making plastics, cleaning",
            handlingPrecautions: "Wear gloves and goggles. Use in good air flow",
            storageConditions: "Keep in closed bottles away from heat",
            firstAidMeasures: "Wash with soap and water. Drink water if swallowed",
            disposalMethod: "Can be mixed with basic stuff or diluted"
        }
    },
    {
        id: 5,
        name: "Oxalic Acid",
        formula: "H₂C₂O₄",
        type: "acid",
        description: "A strong acid found in some plants. Used for cleaning and removing rust.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Carbon, hydrogen and oxygen in special arrangement",
            function: "Cleaning metal, bleaching, removing rust",
            origin: "From plants like rhubarb or made in lab",
            toxicity: "Poisonous if eaten - can damage kidneys",
            flammability: "Not very flammable",
            reactivity: "Reacts with metals and strong chemicals",
            acidity: "Strong for an organic acid",
            biologicalEffect: "Bad if eaten - forms crystals in kidneys",
            usage: "Cleaning metals, bleaching wood, in some cleaners",
            handlingPrecautions: "Wear gloves and mask. Don't breathe dust",
            storageConditions: "Keep in dry place in closed container",
            firstAidMeasures: "Wash if touched. Don't make vomit if eaten. Get help",
            disposalMethod: "Mix with basic solution before disposal"
        }
    },
    {
        id: 6,
        name: "Boric Acid",
        formula: "H₃BO₃",
        type: "acid",
        description: "A weak acid used as antiseptic and insect killer. Also in eye washes.",
        details: {
            physicalState: "White powder or crystals",
            composition: "Boron, hydrogen and oxygen atoms",
            function: "Weak acid, antiseptic, insect killer, flame retardant",
            origin: "From minerals or made chemically",
            toxicity: "Low toxicity but bad if eaten in large amounts",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Very weak acid",
            biologicalEffect: "Safe in small amounts, used in eye care",
            usage: "Antiseptic, insect control, eye washes, preserving wood",
            handlingPrecautions: "Wear gloves and mask to avoid dust",
            storageConditions: "Keep in dry place in closed container",
            firstAidMeasures: "Wash if on skin. Drink water if eaten in small amount",
            disposalMethod: "Can be disposed with regular waste in small amounts"
        }
    },
    {
        id: 7,
        name: "Carbonic Acid",
        formula: "H₂CO₃",
        type: "acid",
        description: "The acid in fizzy drinks. Very weak and doesn't last long.",
        details: {
            physicalState: "Exists only in water solution",
            composition: "Carbon, hydrogen and oxygen - from CO2 in water",
            function: "Gives fizz to drinks, helps control pH",
            origin: "Forms when CO2 dissolves in water",
            toxicity: "Not toxic - we drink it in sodas",
            flammability: "Not flammable",
            reactivity: "Breaks down easily to CO2 and water",
            acidity: "Very weak acid",
            biologicalEffect: "Safe - in our blood and drinks",
            usage: "Fizzy drinks, blood buffer, some chemical processes",
            handlingPrecautions: "Normal care - no special protection needed",
            storageConditions: "Can't be stored - breaks down quickly",
            firstAidMeasures: "No special measures needed",
            disposalMethod: "Can go down drain safely"
        }
    },
    {
        id: 8,
        name: "Phosphoric Acid",
        formula: "H₃PO₄",
        type: "acid",
        description: "A medium strength acid used in cola drinks and fertilizers.",
        details: {
            physicalState: "Thick clear liquid or crystals",
            composition: "Phosphorus, hydrogen and oxygen",
            function: "Acid for food, fertilizers, rust removal",
            origin: "From rocks or made chemically",
            toxicity: "Can burn in concentrated form",
            flammability: "Not flammable",
            reactivity: "Reacts with metals and bases",
            acidity: "Medium strength acid",
            biologicalEffect: "In cola drinks - safe in small amounts",
            usage: "Soft drinks, fertilizers, dental cement, cleaning",
            handlingPrecautions: "Wear gloves and goggles with concentrated form",
            storageConditions: "Keep in closed containers",
            firstAidMeasures: "Wash with water if touched. Dilute if swallowed",
            disposalMethod: "Neutralize before disposal"
        }
    },
    {
        id: 9,
        name: "Tartaric Acid",
        formula: "C₄H₆O₆",
        type: "acid",
        description: "Natural acid from grapes. Used in baking powder and gives sour taste to foods.",
        details: {
            physicalState: "White crystals",
            composition: "Carbon, hydrogen and oxygen from plants",
            function: "Food acid, baking powder, gives sour taste",
            origin: "From grapes and other fruits",
            toxicity: "Low toxicity - used in foods",
            flammability: "Can burn but not easily",
            reactivity: "Reacts with bases",
            acidity: "Weak organic acid",
            biologicalEffect: "Safe - in many foods we eat",
            usage: "Baking powder, candies, wines, some medicines",
            handlingPrecautions: "Normal care - wash hands after use",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash with water if in eyes. Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 10,
        name: "Citric Acid",
        formula: "C₆H₈O₇",
        type: "acid",
        description: "The acid in citrus fruits like lemons and oranges. Used in foods and cleaners.",
        details: {
            physicalState: "White crystals",
            composition: "Carbon, hydrogen and oxygen from fruits",
            function: "Food preservative, cleaner, gives sour taste",
            origin: "From citrus fruits or made by fermentation",
            toxicity: "Very low - we eat it in foods",
            flammability: "Can burn but not easily",
            reactivity: "Reacts with bases, removes scale",
            acidity: "Weak organic acid",
            biologicalEffect: "Safe - in our body metabolism",
            usage: "Foods, drinks, cleaning products, cosmetics",
            handlingPrecautions: "Normal care - can irritate eyes",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash with water if irritation. Generally safe",
            disposalMethod: "Can go down drain"
        }
    },

    // B. BASES
    {
        id: 11,
        name: "Sodium Hydroxide",
        formula: "NaOH",
        type: "base",
        description: "Strong base also called lye or caustic soda. Used for making soap and cleaning.",
        details: {
            physicalState: "White solid - pellets, flakes or solution",
            composition: "Sodium, oxygen and hydrogen",
            function: "Strong base for making soap, cleaning, pH control",
            origin: "Made by electricity from salt water",
            toxicity: "Very dangerous - burns skin and eyes badly",
            flammability: "Not flammable but gets hot with water",
            reactivity: "Very reactive with acids and many things",
            acidity: "Very strong base - pH around 14",
            biologicalEffect: "Very corrosive - destroys living tissue",
            usage: "Making soap, paper, cleaning drains, water treatment",
            handlingPrecautions: "Wear full protection - can cause bad burns",
            storageConditions: "Keep dry in airtight container",
            firstAidMeasures: "Wash with lots of water. Get medical help",
            disposalMethod: "Neutralize with acid before disposal"
        }
    },
    {
        id: 12,
        name: "Potassium Hydroxide",
        formula: "KOH",
        type: "base",
        description: "Strong base like sodium hydroxide but makes liquid soap. Also called caustic potash.",
        details: {
            physicalState: "White solid that absorbs water from air",
            composition: "Potassium, oxygen and hydrogen",
            function: "Strong base for liquid soap, batteries, chemicals",
            origin: "Made from potassium chloride",
            toxicity: "Very dangerous - burns like sodium hydroxide",
            flammability: "Not flammable but gets hot with water",
            reactivity: "Very reactive with acids",
            acidity: "Very strong base - pH around 14",
            biologicalEffect: "Very corrosive to living things",
            usage: "Liquid soap, fertilizers, biodiesel, chemicals",
            handlingPrecautions: "Same as sodium hydroxide - full protection",
            storageConditions: "Keep very dry in sealed container",
            firstAidMeasures: "Wash with lots of water. Get medical help",
            disposalMethod: "Neutralize with acid before disposal"
        }
    },
    {
        id: 13,
        name: "Ammonium Hydroxide",
        formula: "NH₄OH",
        type: "base",
        description: "Ammonia dissolved in water. Strong smell used for cleaning and in fertilizers.",
        details: {
            physicalState: "Clear liquid with very strong smell",
            composition: "Ammonia gas dissolved in water",
            function: "Weak base for cleaning, fertilizers, chemicals",
            origin: "Ammonia gas dissolved in water",
            toxicity: "Dangerous - bad to breathe and can burn",
            flammability: "Not flammable but fumes can burn",
            reactivity: "Reacts with acids and some metals",
            acidity: "Weak base - pH around 11-12",
            biologicalEffect: "Bad to breathe - irritates lungs and eyes",
            usage: "Household cleaner, fertilizers, making other chemicals",
            handlingPrecautions: "Use in good air flow. Don't breathe fumes",
            storageConditions: "Keep in cool place with lid tight",
            firstAidMeasures: "Fresh air if breathed. Wash if on skin",
            disposalMethod: "Can be diluted and disposed"
        }
    },
    {
        id: 14,
        name: "Calcium Hydroxide",
        formula: "Ca(OH)₂",
        type: "base",
        description: "Also called slaked lime or lime water. Used in cement and to make soil less acidic.",
        details: {
            physicalState: "White powder or cloudy water solution",
            composition: "Calcium, oxygen and hydrogen",
            function: "Base for construction, agriculture, water treatment",
            origin: "From limestone treated with water",
            toxicity: "Can irritate but not as bad as strong bases",
            flammability: "Not flammable",
            reactivity: "Reacts with acids",
            acidity: "Strong base but not as strong as NaOH",
            biologicalEffect: "Can irritate eyes and lungs",
            usage: "Cement, making soil less acidic, water treatment",
            handlingPrecautions: "Wear mask to avoid dust",
            storageConditions: "Keep dry",
            firstAidMeasures: "Wash with water if irritation",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 15,
        name: "Magnesium Hydroxide",
        formula: "Mg(OH)₂",
        type: "base",
        description: "Weak base used in medicine for upset stomach and as fire retardant.",
        details: {
            physicalState: "White powder or suspension in water",
            composition: "Magnesium, oxygen and hydrogen",
            function: "Weak base, medicine for stomach, fire retardant",
            origin: "From minerals or made chemically",
            toxicity: "Very low - used in medicines",
            flammability: "Not flammable",
            reactivity: "Reacts with acids",
            acidity: "Weak base",
            biologicalEffect: "Safe - in milk of magnesia for stomach",
            usage: "Medicine for acid stomach, fire retardant, wastewater treatment",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe - wash if in eyes",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 16,
        name: "Barium Hydroxide",
        formula: "Ba(OH)₂",
        type: "base",
        description: "Strong base that's poisonous. Used in labs and for making other barium compounds.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Barium, oxygen and hydrogen",
            function: "Strong base for labs, making other chemicals",
            origin: "Made from barium compounds",
            toxicity: "Poisonous if eaten",
            flammability: "Not flammable",
            reactivity: "Reacts with acids and CO2 from air",
            acidity: "Strong base",
            biologicalEffect: "Poisonous - affects muscles and heart",
            usage: "Laboratory reagent, making other barium compounds",
            handlingPrecautions: "Wear gloves and mask. Don't eat or breathe",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Don't make vomit if eaten. Get medical help fast",
            disposalMethod: "Special disposal as toxic waste"
        }
    },

    // C. SALTS
    {
        id: 17,
        name: "Sodium Chloride",
        formula: "NaCl",
        type: "salt",
        description: "Common table salt. Essential for life, used in food and many chemical processes.",
        details: {
            physicalState: "White crystals",
            composition: "Sodium and chlorine",
            function: "Food seasoning, preserving, chemical processes",
            origin: "From sea water or salt mines",
            toxicity: "Low - we eat it every day",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Neutral - pH around 7",
            biologicalEffect: "Essential for life - in our blood and cells",
            usage: "Food, chemical industry, water softening, de-icing",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep dry",
            firstAidMeasures: "Drink water if too much eaten",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 18,
        name: "Potassium Chloride",
        formula: "KCl",
        type: "salt",
        description: "Salt used in fertilizers and as salt substitute for people who can't have sodium.",
        details: {
            physicalState: "White crystals",
            composition: "Potassium and chlorine",
            function: "Fertilizer, salt substitute, medicine",
            origin: "From minerals or made chemically",
            toxicity: "Low - used in food and medicine",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Neutral salt",
            biologicalEffect: "Essential mineral - for nerves and muscles",
            usage: "Fertilizers, low-sodium salt, medicine",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep dry",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 19,
        name: "Ammonium Chloride",
        formula: "NH₄Cl",
        type: "salt",
        description: "Salt used in fertilizers and in some types of batteries. Also called sal ammoniac.",
        details: {
            physicalState: "White crystals",
            composition: "Ammonium and chlorine",
            function: "Fertilizer, in batteries, cough medicine",
            origin: "Made from ammonia and hydrochloric acid",
            toxicity: "Low to moderate - can irritate",
            flammability: "Not flammable",
            reactivity: "Releases ammonia when heated",
            acidity: "Slightly acidic salt",
            biologicalEffect: "Used in some medicines",
            usage: "Fertilizers, dry cell batteries, medicine, welding",
            handlingPrecautions: "Wear mask to avoid dust",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash if irritation. Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 20,
        name: "Copper Sulfate",
        formula: "CuSO₄·5H₂O",
        type: "salt",
        description: "Blue crystals used to kill algae in ponds and in school chemistry experiments.",
        details: {
            physicalState: "Blue crystals when wet, white when dry",
            composition: "Copper, sulfur, oxygen and water",
            function: "Fungicide, algicide, in electroplating, lab reagent",
            origin: "From copper ore or made chemically",
            toxicity: "Poisonous if eaten - especially to fish",
            flammability: "Not flammable",
            reactivity: "Reacts with iron and other metals",
            acidity: "Acidic solution",
            biologicalEffect: "Toxic to plants and animals in high amounts",
            usage: "Killing algae, fungicide, electroplating, school labs",
            handlingPrecautions: "Wear gloves. Don't eat or breathe dust",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Don't make vomit if eaten. Get medical help",
            disposalMethod: "Special disposal as toxic waste"
        }
    },
    {
        id: 21,
        name: "Zinc Sulfate",
        formula: "ZnSO₄",
        type: "salt",
        description: "White salt used in fertilizers and as dietary supplement for zinc.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Zinc, sulfur and oxygen",
            function: "Fertilizer, medicine, wood preservative",
            origin: "From zinc ore or made chemically",
            toxicity: "Low to moderate - can cause stomach upset",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Acidic solution",
            biologicalEffect: "Zinc is essential nutrient but too much is bad",
            usage: "Fertilizers, medicine for zinc deficiency, preserving wood",
            handlingPrecautions: "Wear gloves and mask",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash if on skin. Drink water if eaten",
            disposalMethod: "Can be disposed with care"
        }
    },
    {
        id: 22,
        name: "Iron(II) Sulfate",
        formula: "FeSO₄",
        type: "salt",
        description: "Green salt used to treat iron deficiency in plants and people. Also called green vitriol.",
        details: {
            physicalState: "Blue-green crystals",
            composition: "Iron, sulfur and oxygen",
            function: "Iron supplement, water treatment, ink making",
            origin: "From iron or made as byproduct",
            toxicity: "Low - used in medicines",
            flammability: "Not flammable",
            reactivity: "Turns brown when exposed to air",
            acidity: "Acidic solution",
            biologicalEffect: "Iron is essential for blood",
            usage: "Medicine for anemia, fertilizer, water treatment",
            handlingPrecautions: "Normal care - can stain",
            storageConditions: "Keep in dry sealed container",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 23,
        name: "Iron(III) Chloride",
        formula: "FeCl₃",
        type: "salt",
        description: "Yellow-brown salt used for etching circuit boards and treating wastewater.",
        details: {
            physicalState: "Yellow-brown crystals or solution",
            composition: "Iron and chlorine",
            function: "Etching metals, water treatment, catalyst",
            origin: "Made from iron and chlorine",
            toxicity: "Corrosive - can burn skin",
            flammability: "Not flammable",
            reactivity: "Reacts with metals",
            acidity: "Acidic solution",
            biologicalEffect: "Corrosive to skin and tissues",
            usage: "Etching circuit boards, water treatment, dyeing",
            handlingPrecautions: "Wear gloves and goggles - can burn",
            storageConditions: "Keep in dry sealed container",
            firstAidMeasures: "Wash with lots of water if touched",
            disposalMethod: "Neutralize before disposal"
        }
    },
    {
        id: 24,
        name: "Lead Nitrate",
        formula: "Pb(NO₃)₂",
        type: "salt",
        description: "White crystals that are very poisonous. Used in making other lead compounds.",
        details: {
            physicalState: "White crystals",
            composition: "Lead, nitrogen and oxygen",
            function: "Making other lead compounds, dyeing, matches",
            origin: "Made from lead and nitric acid",
            toxicity: "Very poisonous - affects brain and nerves",
            flammability: "Not flammable but helps other things burn",
            reactivity: "Reacts with other chemicals",
            acidity: "Neutral solution",
            biologicalEffect: "Very toxic - accumulates in body",
            usage: "Making other lead compounds, fireworks, dyeing",
            handlingPrecautions: "Wear gloves and mask. Don't eat or breathe",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Get medical help immediately if eaten",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 25,
        name: "Silver Nitrate",
        formula: "AgNO₃",
        type: "salt",
        description: "Colorless crystals that stain skin black. Used in photography and as antiseptic.",
        details: {
            physicalState: "Colorless crystals that turn gray in light",
            composition: "Silver, nitrogen and oxygen",
            function: "Photography, antiseptic, analytical chemistry",
            origin: "Made from silver and nitric acid",
            toxicity: "Can burn skin and is poisonous",
            flammability: "Not flammable",
            reactivity: "Reacts with light and chlorine",
            acidity: "Neutral solution",
            biologicalEffect: "Stains skin black, can damage eyes",
            usage: "Photography, antiseptic, mirrors, hair dyes",
            handlingPrecautions: "Wear gloves - stains skin black",
            storageConditions: "Keep in dark bottle away from light",
            firstAidMeasures: "Wash with lots of water if touched",
            disposalMethod: "Recover silver if possible"
        }
    },
    {
        id: 26,
        name: "Sodium Nitrate",
        formula: "NaNO₃",
        type: "salt",
        description: "White salt used in fertilizers and to preserve meats like bacon.",
        details: {
            physicalState: "White crystals",
            composition: "Sodium, nitrogen and oxygen",
            function: "Fertilizer, food preservative, in explosives",
            origin: "From mineral deposits or made chemically",
            toxicity: "Low - used in foods",
            flammability: "Not flammable but helps other things burn",
            reactivity: "Reacts at high temperatures",
            acidity: "Neutral solution",
            biologicalEffect: "Safe in small amounts in food",
            usage: "Fertilizers, preserving meats, fireworks, glass",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 27,
        name: "Potassium Nitrate",
        formula: "KNO₃",
        type: "salt",
        description: "Also called saltpeter. Used in fertilizers, food preservation, and gunpowder.",
        details: {
            physicalState: "White crystals",
            composition: "Potassium, nitrogen and oxygen",
            function: "Fertilizer, food preservative, in gunpowder",
            origin: "From natural deposits or made chemically",
            toxicity: "Low - used in some foods",
            flammability: "Not flammable but makes things burn better",
            reactivity: "Reacts at high temperatures",
            acidity: "Neutral solution",
            biologicalEffect: "Safe in small amounts",
            usage: "Fertilizers, preserving meats, gunpowder, toothpaste",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place away from fuels",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be dissolved in water"
        }
    },
    {
        id: 28,
        name: "Calcium Carbonate",
        formula: "CaCO₃",
        type: "salt",
        description: "The main part of limestone, marble, and chalk. Also in antacids and toothpaste.",
        details: {
            physicalState: "White powder or crystals",
            composition: "Calcium, carbon and oxygen",
            function: "Construction material, antacid, filler in products",
            origin: "From rocks, shells, or made chemically",
            toxicity: "Very low - we eat it in foods",
            flammability: "Not flammable",
            reactivity: "Reacts with acids to make fizz",
            acidity: "Basic solution",
            biologicalEffect: "Safe - in our bones and shells",
            usage: "Construction, antacids, toothpaste, paper, paints",
            handlingPrecautions: "Wear mask to avoid dust",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 29,
        name: "Magnesium Carbonate",
        formula: "MgCO₃",
        type: "salt",
        description: "White powder used in gymnastics to keep hands dry and as antacid.",
        details: {
            physicalState: "White powder",
            composition: "Magnesium, carbon and oxygen",
            function: "Drying agent, antacid, filler",
            origin: "From minerals or made chemically",
            toxicity: "Very low - used in medicines",
            flammability: "Not flammable",
            reactivity: "Reacts with acids",
            acidity: "Basic solution",
            biologicalEffect: "Safe - used in medicines",
            usage: "Gymnastics chalk, antacids, cosmetics, food additive",
            handlingPrecautions: "Wear mask to avoid dust",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 30,
        name: "Sodium Carbonate",
        formula: "Na₂CO₃",
        type: "salt",
        description: "Also called washing soda or soda ash. Used for cleaning and making glass.",
        details: {
            physicalState: "White powder or crystals",
            composition: "Sodium, carbon and oxygen",
            function: "Cleaning, making glass, water softening",
            origin: "From natural deposits or made chemically",
            toxicity: "Low - can irritate skin",
            flammability: "Not flammable",
            reactivity: "Reacts with acids",
            acidity: "Basic solution",
            biologicalEffect: "Can irritate skin and eyes",
            usage: "Cleaning, glass making, water treatment, chemicals",
            handlingPrecautions: "Wear gloves - can dry skin",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash with water if irritation",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 31,
        name: "Sodium Bicarbonate",
        formula: "NaHCO₃",
        type: "salt",
        description: "Baking soda - used in cooking, cleaning, and as mild antacid.",
        details: {
            physicalState: "White powder",
            composition: "Sodium, hydrogen, carbon and oxygen",
            function: "Cooking, cleaning, mild antacid, fire extinguisher",
            origin: "From natural deposits or made chemically",
            toxicity: "Very low - we eat it in foods",
            flammability: "Not flammable",
            reactivity: "Reacts with acids to make bubbles",
            acidity: "Slightly basic",
            biologicalEffect: "Safe - used in foods and medicines",
            usage: "Baking, cleaning, antacid, fire extinguishers",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 32,
        name: "Potassium Permanganate",
        formula: "KMnO₄",
        type: "salt",
        description: "Purple crystals that stain everything. Strong oxidizing agent used for disinfecting.",
        details: {
            physicalState: "Dark purple crystals",
            composition: "Potassium, manganese and oxygen",
            function: "Disinfectant, oxidizing agent, water treatment",
            origin: "Made from manganese compounds",
            toxicity: "Moderate - can burn skin",
            flammability: "Not flammable but can make fires worse",
            reactivity: "Strong oxidizer - reacts with many things",
            acidity: "Neutral solution",
            biologicalEffect: "Can stain and burn skin",
            usage: "Disinfecting, water treatment, chemistry labs",
            handlingPrecautions: "Wear gloves - stains badly",
            storageConditions: "Keep in sealed container away from other chemicals",
            firstAidMeasures: "Wash with lots of water if touched",
            disposalMethod: "Reduce before disposal"
        }
    },
    {
        id: 33,
        name: "Sodium Thiosulfate",
        formula: "Na₂S₂O₃",
        type: "salt",
        description: "Also called hypo. Used in photography to fix images and as antidote for some poisons.",
        details: {
            physicalState: "White crystals",
            composition: "Sodium, sulfur and oxygen",
            function: "Photography, antidote for cyanide, chlorine removal",
            origin: "Made from sulfur compounds",
            toxicity: "Low - used in medicines",
            flammability: "Not flammable",
            reactivity: "Reacts with acids to make sulfur smell",
            acidity: "Neutral solution",
            biologicalEffect: "Safe - used as medicine",
            usage: "Photography, medicine, water treatment, tanning",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 34,
        name: "Ferric Sulfate",
        formula: "Fe₂(SO₄)₃",
        type: "salt",
        description: "Yellow salt used for water treatment and as coagulant.",
        details: {
            physicalState: "Yellow crystals or powder",
            composition: "Iron, sulfur and oxygen",
            function: "Water treatment, dyeing, soil amendment",
            origin: "Made from iron and sulfuric acid",
            toxicity: "Low to moderate",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Acidic solution",
            biologicalEffect: "Iron is essential but too much is bad",
            usage: "Water treatment, pigments, soil treatment",
            handlingPrecautions: "Wear gloves and mask",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash with water if on skin",
            disposalMethod: "Can be disposed with care"
        }
    },
    {
        id: 35,
        name: "Barium Chloride",
        formula: "BaCl₂",
        type: "salt",
        description: "White crystals that are very poisonous. Used to test for sulfate ions.",
        details: {
            physicalState: "White crystals",
            composition: "Barium and chlorine",
            function: "Testing for sulfate, making other barium compounds",
            origin: "Made from barium compounds",
            toxicity: "Very poisonous if eaten",
            flammability: "Not flammable",
            reactivity: "Reacts with sulfates to make white solid",
            acidity: "Neutral solution",
            biologicalEffect: "Very toxic - affects heart and muscles",
            usage: "Chemical tests, fireworks, rat poison",
            handlingPrecautions: "Wear gloves and mask. Don't eat",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Get medical help immediately if eaten",
            disposalMethod: "Special disposal as toxic waste"
        }
    },
    {
        id: 36,
        name: "Magnesium Sulfate",
        formula: "MgSO₄",
        type: "salt",
        description: "Also called Epsom salt. Used in bath salts and as medicine for constipation.",
        details: {
            physicalState: "White crystals",
            composition: "Magnesium, sulfur and oxygen",
            function: "Medicine, bath salts, fertilizer",
            origin: "From minerals or made chemically",
            toxicity: "Low - used in medicines and baths",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Neutral solution",
            biologicalEffect: "Safe - used in medicines and baths",
            usage: "Bath salts, medicine for constipation, fertilizer",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 37,
        name: "Aluminum Sulfate",
        formula: "Al₂(SO₄)₃",
        type: "salt",
        description: "Also called alum. Used for water purification and in paper making.",
        details: {
            physicalState: "White crystals",
            composition: "Aluminum, sulfur and oxygen",
            function: "Water treatment, paper making, dyeing",
            origin: "From aluminum and sulfuric acid",
            toxicity: "Low - can irritate skin",
            flammability: "Not flammable",
            reactivity: "Reacts with bases",
            acidity: "Acidic solution",
            biologicalEffect: "Can irritate skin and eyes",
            usage: "Water treatment, paper making, fire extinguishers",
            handlingPrecautions: "Wear gloves - can irritate",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Wash with water if irritation",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 38,
        name: "Sodium Acetate",
        formula: "CH₃COONa",
        type: "salt",
        description: "Used in hot packs that get warm when clicked. Also as food preservative.",
        details: {
            physicalState: "White crystals",
            composition: "Carbon, hydrogen, oxygen and sodium",
            function: "Hot packs, food preservative, buffer",
            origin: "Made from acetic acid and sodium",
            toxicity: "Low - used in foods",
            flammability: "Can burn but not easily",
            reactivity: "Crystallizes when triggered",
            acidity: "Basic solution",
            biologicalEffect: "Safe - used in foods",
            usage: "Hot packs, food preservative, concrete treatment",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 39,
        name: "Potassium Dichromate",
        formula: "K₂Cr₂O₇",
        type: "salt",
        description: "Orange-red crystals that are toxic and carcinogenic. Strong oxidizing agent.",
        details: {
            physicalState: "Orange-red crystals",
            composition: "Potassium, chromium and oxygen",
            function: "Oxidizing agent, in cleaning solutions, tanning",
            origin: "Made from chromium compounds",
            toxicity: "Toxic and cancer causing",
            flammability: "Not flammable but makes fires worse",
            reactivity: "Strong oxidizer",
            acidity: "Acidic solution",
            biologicalEffect: "Toxic and carcinogenic",
            usage: "Cleaning glass, tanning leather, photography",
            handlingPrecautions: "Wear full protection - toxic",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Wash immediately if touched. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 40,
        name: "Potassium Ferrocyanide",
        formula: "K₄[Fe(CN)₆]",
        type: "salt",
        description: "Yellow crystals used in making pigments and as anti-caking agent in salt.",
        details: {
            physicalState: "Yellow crystals",
            composition: "Potassium, iron, carbon and nitrogen",
            function: "Pigments, anti-caking agent, chemistry",
            origin: "Made from iron and cyanide compounds",
            toxicity: "Low - used in table salt",
            flammability: "Not flammable",
            reactivity: "Releases toxic gas with strong acids",
            acidity: "Neutral solution",
            biologicalEffect: "Safe in small amounts",
            usage: "Pigments, anti-caking in salt, photography",
            handlingPrecautions: "Don't mix with strong acids",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 41,
        name: "Potassium Ferricyanide",
        formula: "K₃[Fe(CN)₆]",
        type: "salt",
        description: "Red crystals used in blueprints and photography.",
        details: {
            physicalState: "Red crystals",
            composition: "Potassium, iron, carbon and nitrogen",
            function: "Blueprints, photography, chemistry",
            origin: "Made by oxidizing ferrocyanide",
            toxicity: "Low",
            flammability: "Not flammable",
            reactivity: "Releases toxic gas with strong acids",
            acidity: "Neutral solution",
            biologicalEffect: "Safe in small amounts",
            usage: "Blueprints, photography, electroplating",
            handlingPrecautions: "Don't mix with strong acids",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },

    // D. INDICATORS
    {
        id: 42,
        name: "Phenolphthalein",
        formula: "C₂₀H₁₄O₄",
        type: "indicator",
        description: "Common pH indicator that turns pink in basic solutions. Colorless in acid.",
        details: {
            physicalState: "White powder",
            composition: "Carbon, hydrogen and oxygen organic compound",
            function: "pH indicator for acids and bases",
            origin: "Made synthetically in lab",
            toxicity: "Low - was used in medicines",
            flammability: "Can burn",
            reactivity: "Changes color with pH",
            acidity: "Itself is neutral",
            biologicalEffect: "Was used as laxative",
            usage: "pH indicator in labs, was in laxatives",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry dark place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 43,
        name: "Methyl Orange",
        formula: "C₁₄H₁₄N₃SO₃",
        type: "indicator",
        description: "pH indicator that turns red in acid and yellow in base. Used in titrations.",
        details: {
            physicalState: "Orange powder",
            composition: "Carbon, hydrogen, nitrogen, sulfur and oxygen",
            function: "pH indicator for strong acid-strong base titrations",
            origin: "Made synthetically",
            toxicity: "Low",
            flammability: "Can burn",
            reactivity: "Changes color with pH",
            acidity: "Itself is neutral",
            biologicalEffect: "Low toxicity",
            usage: "pH indicator in chemistry labs",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 44,
        name: "Methyl Red",
        formula: "C₁₅H₁₅N₃O₂",
        type: "indicator",
        description: "pH indicator that turns red in acid and yellow in base. Different range than methyl orange.",
        details: {
            physicalState: "Red crystals",
            composition: "Carbon, hydrogen, nitrogen and oxygen",
            function: "pH indicator for microbiology and chemistry",
            origin: "Made synthetically",
            toxicity: "Low",
            flammability: "Can burn",
            reactivity: "Changes color with pH",
            acidity: "Itself is neutral",
            biologicalEffect: "Low toxicity",
            usage: "pH indicator in microbiology tests and chemistry",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 45,
        name: "Bromothymol Blue",
        formula: "C₂₇H₂₈Br₂O₅S",
        type: "indicator",
        description: "pH indicator that turns yellow in acid, blue in base, and green in neutral.",
        details: {
            physicalState: "Powder that makes blue solution",
            composition: "Carbon, hydrogen, bromine, oxygen and sulfur",
            function: "pH indicator especially for neutral range",
            origin: "Made synthetically",
            toxicity: "Low",
            flammability: "Can burn",
            reactivity: "Changes color with pH",
            acidity: "Itself is neutral",
            biologicalEffect: "Low toxicity",
            usage: "pH indicator for testing CO2 in breath",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 46,
        name: "Litmus Solution",
        formula: "Natural Dye Mixture",
        type: "indicator",
        description: "Natural indicator from lichens. Turns red in acid and blue in base.",
        details: {
            physicalState: "Blue or red solution",
            composition: "Natural dyes from lichens",
            function: "Simple pH indicator - red for acid, blue for base",
            origin: "Extracted from lichens",
            toxicity: "Very low",
            flammability: "Not flammable - mostly water",
            reactivity: "Changes color with pH",
            acidity: "Itself is neutral",
            biologicalEffect: "Very safe",
            usage: "Basic pH testing in schools and labs",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in bottle",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 47,
        name: "Universal Indicator",
        formula: "Dye Mixture",
        type: "indicator",
        description: "Mixture of indicators that shows different colors for different pH values.",
        details: {
            physicalState: "Solution that shows rainbow colors",
            composition: "Mixture of several pH indicators",
            function: "Shows approximate pH with color changes",
            origin: "Made by mixing several indicators",
            toxicity: "Low",
            flammability: "Not flammable - mostly water or alcohol",
            reactivity: "Changes color with pH",
            acidity: "Itself is neutral",
            biologicalEffect: "Low toxicity",
            usage: "Approximate pH measurement in labs",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in bottle",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 48,
        name: "Starch Solution",
        formula: "(C₆H₁₀O₅)ₙ",
        type: "indicator",
        description: "Used as indicator for iodine tests. Turns blue-black with iodine.",
        details: {
            physicalState: "White suspension in water",
            composition: "Long chains of glucose molecules",
            function: "Indicator for iodine, thickener",
            origin: "From corn, potato, or other plants",
            toxicity: "Very low - we eat starch",
            flammability: "Can burn when dry",
            reactivity: "Turns blue with iodine",
            acidity: "Neutral",
            biologicalEffect: "Safe - we eat it as food",
            usage: "Iodine test indicator, food thickener",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in refrigerator - can spoil",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 49,
        name: "Ferric Alum",
        formula: "NH₄Fe(SO₄)₂·12H₂O",
        type: "indicator",
        description: "Double salt used as indicator in some titrations and for water purification.",
        details: {
            physicalState: "Violet crystals",
            composition: "Ammonium, iron, sulfur, oxygen and water",
            function: "Indicator in redox titrations, water treatment",
            origin: "Made from iron and ammonium compounds",
            toxicity: "Low",
            flammability: "Not flammable",
            reactivity: "Used in chemical analysis",
            acidity: "Acidic solution",
            biologicalEffect: "Low toxicity",
            usage: "Chemical indicator, water treatment, dyeing",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 50,
        name: "Mohr's Salt",
        formula: "FeSO₄·(NH₄)₂SO₄·6H₂O",
        type: "indicator",
        description: "Double salt used as primary standard in titrations and as iron supplement.",
        details: {
            physicalState: "Light green crystals",
            composition: "Iron, ammonium, sulfur, oxygen and water",
            function: "Primary standard in titrations, iron source",
            origin: "Made from iron and ammonium sulfates",
            toxicity: "Low",
            flammability: "Not flammable",
            reactivity: "Used in volumetric analysis",
            acidity: "Acidic solution",
            biologicalEffect: "Safe - provides iron",
            usage: "Chemical standard, medicine for anemia",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry sealed container",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },

    // E. ORGANIC CHEMICALS
    {
        id: 51,
        name: "Ethanol",
        formula: "C₂H₅OH",
        type: "organic",
        description: "Drinking alcohol. Used as solvent, fuel, and in alcoholic beverages.",
        details: {
            physicalState: "Clear liquid with characteristic smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent, fuel, disinfectant, in drinks",
            origin: "From fermentation of sugars or synthetically",
            toxicity: "Moderate - intoxicating in large amounts",
            flammability: "Highly flammable",
            reactivity: "Reacts with oxidizers, burns easily",
            acidity: "Very weak acid",
            biologicalEffect: "Depresses nervous system, disinfectant",
            usage: "Alcoholic drinks, solvent, fuel, hand sanitizer",
            handlingPrecautions: "Use away from fire. Good ventilation",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if dizzy. Don't drive",
            disposalMethod: "Can evaporate or dispose as solvent"
        }
    },
    {
        id: 52,
        name: "Methanol",
        formula: "CH₃OH",
        type: "organic",
        description: "Wood alcohol - very poisonous. Used as solvent and antifreeze.",
        details: {
            physicalState: "Clear liquid similar to ethanol",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent, antifreeze, fuel",
            origin: "From wood distillation or synthetically",
            toxicity: "Very poisonous - can cause blindness and death",
            flammability: "Highly flammable",
            reactivity: "Reacts with oxidizers",
            acidity: "Very weak acid",
            biologicalEffect: "Very toxic - affects eyes and nervous system",
            usage: "Solvent, antifreeze, biodiesel, formaldehyde production",
            handlingPrecautions: "Use in fume hood. Don't breathe fumes",
            storageConditions: "Keep away from flames in sealed container",
            firstAidMeasures: "Get medical help immediately if swallowed",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 53,
        name: "Propanol",
        formula: "C₃H₇OH",
        type: "organic",
        description: "Alcohol with three carbons. Used as solvent and in cosmetics.",
        details: {
            physicalState: "Clear liquid",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent, disinfectant, in cosmetics",
            origin: "Synthetic production",
            toxicity: "Moderate - less toxic than methanol",
            flammability: "Flammable",
            reactivity: "Reacts with oxidizers",
            acidity: "Very weak acid",
            biologicalEffect: "Can irritate and cause intoxication",
            usage: "Solvent, hand sanitizers, cosmetics",
            handlingPrecautions: "Use with ventilation away from fire",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if dizzy. Wash if on skin",
            disposalMethod: "Evaporate or dispose as solvent"
        }
    },
    {
        id: 54,
        name: "Butanol",
        formula: "C₄H₉OH",
        type: "organic",
        description: "Alcohol with four carbons. Used as solvent and in plastics.",
        details: {
            physicalState: "Clear liquid",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent, in plastics, fuel",
            origin: "Synthetic production or fermentation",
            toxicity: "Moderate - can irritate",
            flammability: "Flammable",
            reactivity: "Reacts with oxidizers",
            acidity: "Very weak acid",
            biologicalEffect: "Can irritate eyes and respiratory system",
            usage: "Solvent, plastics, paints, brake fluid",
            handlingPrecautions: "Use with ventilation away from fire",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if effects. Wash if on skin",
            disposalMethod: "Evaporate or dispose as solvent"
        }
    },
    {
        id: 55,
        name: "Acetone",
        formula: "(CH₃)₂CO",
        type: "organic",
        description: "Common solvent used in nail polish remover and as cleaner.",
        details: {
            physicalState: "Clear liquid with sweet smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent, nail polish remover, cleaner",
            origin: "Synthetic or from fermentation",
            toxicity: "Low to moderate - can cause dizziness",
            flammability: "Highly flammable",
            reactivity: "Reacts with oxidizers, can form peroxides",
            acidity: "Very weak acid",
            biologicalEffect: "Can depress nervous system, irritant",
            usage: "Nail polish remover, solvent, cleaner, plastics",
            handlingPrecautions: "Use away from fire with good ventilation",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if dizzy. Wash if on skin",
            disposalMethod: "Evaporate in fume hood or solvent waste"
        }
    },
    {
        id: 56,
        name: "Formaldehyde",
        formula: "CH₂O",
        type: "organic",
        description: "Gas with strong smell used for preserving biological specimens. Carcinogenic.",
        details: {
            physicalState: "Gas with strong pungent smell, usually as solution",
            composition: "Carbon, hydrogen and oxygen",
            function: "Preservative, disinfectant, in plastics",
            origin: "Synthetic production",
            toxicity: "Toxic and cancer causing",
            flammability: "Flammable gas",
            reactivity: "Reacts easily, polymerizes",
            acidity: "Neutral",
            biologicalEffect: "Toxic, carcinogenic, irritant",
            usage: "Preserving specimens, disinfectant, plastics, glue",
            handlingPrecautions: "Use in fume hood. Avoid all exposure",
            storageConditions: "Keep in sealed container in cool place",
            firstAidMeasures: "Fresh air immediately. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 57,
        name: "Acetaldehyde",
        formula: "CH₃CHO",
        type: "organic",
        description: "Chemical that gives hangover symptoms. Used in making other chemicals.",
        details: {
            physicalState: "Colorless liquid with fruity smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Chemical intermediate, in perfumes",
            origin: "From ethanol oxidation or synthetic",
            toxicity: "Moderate - suspected carcinogen",
            flammability: "Highly flammable",
            reactivity: "Reactive aldehyde",
            acidity: "Not acidic",
            biologicalEffect: "Carcinogenic, causes hangover symptoms",
            usage: "Making other chemicals, perfumes, plastics",
            handlingPrecautions: "Use in fume hood away from fire",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if effects. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 58,
        name: "Benzaldehyde",
        formula: "C₆H₅CHO",
        type: "organic",
        description: "Chemical with almond smell. Used in flavorings and making other chemicals.",
        details: {
            physicalState: "Colorless liquid with almond smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Flavoring, perfume, chemical intermediate",
            origin: "From bitter almonds or synthetic",
            toxicity: "Moderate",
            flammability: "Combustible",
            reactivity: "Reactive aldehyde",
            acidity: "Not acidic",
            biologicalEffect: "Can be toxic in large amounts",
            usage: "Almond flavoring, perfumes, dyes, pharmaceuticals",
            handlingPrecautions: "Use with good ventilation",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Fresh air if effects. Wash if on skin",
            disposalMethod: "Dispose as organic waste"
        }
    },
    {
        id: 59,
        name: "Benzoic Acid",
        formula: "C₆H₅COOH",
        type: "organic",
        description: "White crystals used as food preservative. Found naturally in berries.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Carbon, hydrogen and oxygen",
            function: "Food preservative, antifungal, in medicines",
            origin: "From natural sources or synthetic",
            toxicity: "Low - used in foods",
            flammability: "Combustible",
            reactivity: "Weak organic acid",
            acidity: "Weak acid",
            biologicalEffect: "Safe in small amounts in food",
            usage: "Food preservative, medicine, plasticizer",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 60,
        name: "Aniline",
        formula: "C₆H₅NH₂",
        type: "organic",
        description: "Oily liquid used in making dyes. Toxic and can affect blood.",
        details: {
            physicalState: "Oily liquid with characteristic smell",
            composition: "Carbon, hydrogen and nitrogen",
            function: "Making dyes, drugs, rubber",
            origin: "Synthetic production",
            toxicity: "Toxic - affects blood and is carcinogenic",
            flammability: "Combustible",
            reactivity: "Reactive amine",
            acidity: "Weak base",
            biologicalEffect: "Toxic, affects hemoglobin, carcinogenic",
            usage: "Dyes, drugs, rubber, pesticides",
            handlingPrecautions: "Use in fume hood with full protection",
            storageConditions: "Keep in dark sealed container",
            firstAidMeasures: "Fresh air immediately. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 61,
        name: "Phenol",
        formula: "C₆H₅OH",
        type: "organic",
        description: "White crystals that burn skin. Used as disinfectant and in plastics.",
        details: {
            physicalState: "White crystals that turn pink, with medicinal smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Disinfectant, in plastics, drugs",
            origin: "From coal tar or synthetic",
            toxicity: "Toxic and corrosive",
            flammability: "Combustible",
            reactivity: "Weak acid, corrosive",
            acidity: "Weak acid",
            biologicalEffect: "Corrosive, toxic, affects nervous system",
            usage: "Disinfectant, plastics, drugs, wood preservative",
            handlingPrecautions: "Wear full protection - can burn skin",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Wash with lots of water if touched. Get help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 62,
        name: "Chloroform",
        formula: "CHCl₃",
        type: "organic",
        description: "Sweet-smelling liquid that was used as anesthetic. Now known to be toxic.",
        details: {
            physicalState: "Clear heavy liquid with sweet smell",
            composition: "Carbon, hydrogen and chlorine",
            function: "Former anesthetic, solvent, refrigerant",
            origin: "Synthetic production",
            toxicity: "Toxic - affects liver and is carcinogenic",
            flammability: "Not flammable",
            reactivity: "Can form phosgene when exposed to light",
            acidity: "Not acidic",
            biologicalEffect: "Toxic, carcinogenic, former anesthetic",
            usage: "Former anesthetic, solvent, chemical intermediate",
            handlingPrecautions: "Use in fume hood. Avoid all exposure",
            storageConditions: "Keep in dark sealed container",
            firstAidMeasures: "Fresh air immediately. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 63,
        name: "Carbon Tetrachloride",
        formula: "CCl₄",
        type: "organic",
        description: "Former solvent and fire extinguisher. Very toxic to liver and banned now.",
        details: {
            physicalState: "Clear heavy liquid with sweet smell",
            composition: "Carbon and chlorine",
            function: "Former solvent, fire extinguisher",
            origin: "Synthetic production",
            toxicity: "Very toxic - damages liver and kidneys",
            flammability: "Not flammable",
            reactivity: "Can form phosgene when hot",
            acidity: "Not acidic",
            biologicalEffect: "Very toxic to liver, carcinogenic",
            usage: "Former solvent and dry cleaner, now banned",
            handlingPrecautions: "Avoid completely - very dangerous",
            storageConditions: "Should not be stored - dispose properly",
            firstAidMeasures: "Fresh air immediately. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 64,
        name: "Ether",
        formula: "(C₂H₅)₂O",
        type: "organic",
        description: "Highly flammable liquid used as former anesthetic and solvent.",
        details: {
            physicalState: "Clear liquid with characteristic smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent, former anesthetic",
            origin: "Synthetic production",
            toxicity: "Moderate - narcotic in high concentrations",
            flammability: "Extremely flammable - forms explosive vapors",
            reactivity: "Forms explosive peroxides with air",
            acidity: "Not acidic",
            biologicalEffect: "Narcotic, former general anesthetic",
            usage: "Solvent, former anesthetic, chemical synthesis",
            handlingPrecautions: "Use away from all ignition sources",
            storageConditions: "Keep in cool place away from light and air",
            firstAidMeasures: "Fresh air if effects. No flames nearby",
            disposalMethod: "Special disposal as flammable hazardous waste"
        }
    },
    {
        id: 65,
        name: "Urea",
        formula: "CH₄N₂O",
        type: "organic",
        description: "Nitrogen compound found in urine. Used in fertilizers and plastics.",
        details: {
            physicalState: "White crystals",
            composition: "Carbon, hydrogen, nitrogen and oxygen",
            function: "Fertilizer, in plastics, medicine",
            origin: "Synthetic or from urine",
            toxicity: "Low - in our blood and urine",
            flammability: "Not flammable",
            reactivity: "Decomposes when heated",
            acidity: "Neutral",
            biologicalEffect: "Natural waste product, safe",
            usage: "Fertilizers, plastics, medicine, animal feed",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 66,
        name: "Glucose",
        formula: "C₆H₁₂O₆",
        type: "organic",
        description: "Simple sugar that gives energy to living things. Used in food and medicine.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Carbon, hydrogen and oxygen",
            function: "Energy source, sweetener, in IV fluids",
            origin: "From plants or made from starch",
            toxicity: "Very low - we eat it as sugar",
            flammability: "Can burn",
            reactivity: "Undergoes fermentation",
            acidity: "Neutral",
            biologicalEffect: "Essential energy source for cells",
            usage: "Food, medicine for low blood sugar, fermentation",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 67,
        name: "Glycerol",
        formula: "C₃H₈O₃",
        type: "organic",
        description: "Sweet, thick liquid used in foods, medicines, and cosmetics.",
        details: {
            physicalState: "Thick clear liquid, sweet taste",
            composition: "Carbon, hydrogen and oxygen",
            function: "Humectant, sweetener, in cosmetics and drugs",
            origin: "From fats and oils or synthetic",
            toxicity: "Very low - used in foods and medicines",
            flammability: "Combustible but not easily",
            reactivity: "Not very reactive",
            acidity: "Neutral",
            biologicalEffect: "Safe - in many foods and body",
            usage: "Foods, medicines, cosmetics, explosives",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },

    // F. OXIDIZING/REDUCING AGENTS
    {
        id: 68,
        name: "Hydrogen Peroxide",
        formula: "H₂O₂",
        type: "organic",
        description: "Bleaching and disinfecting agent. Breaks down to water and oxygen.",
        details: {
            physicalState: "Clear liquid - various concentrations",
            composition: "Hydrogen and oxygen",
            function: "Disinfectant, bleach, oxidizer, rocket fuel",
            origin: "Synthetic production",
            toxicity: "Low in dilute form, corrosive when concentrated",
            flammability: "Not flammable but makes fires worse",
            reactivity: "Strong oxidizer, decomposes to water and oxygen",
            acidity: "Weak acid",
            biologicalEffect: "Disinfectant, bleaching agent",
            usage: "Disinfectant, hair bleach, rocket fuel, paper bleaching",
            handlingPrecautions: "Wear gloves - can bleach skin and clothes",
            storageConditions: "Keep in dark cool place - decomposes in light",
            firstAidMeasures: "Wash with water if on skin. Don't drink concentrated",
            disposalMethod: "Can be diluted and disposed"
        }
    },
    {
        id: 69,
        name: "Sodium Nitrite",
        formula: "NaNO₂",
        type: "salt",
        description: "Used to preserve meats and as antidote for cyanide poisoning.",
        details: {
            physicalState: "White or yellowish crystals",
            composition: "Sodium, nitrogen and oxygen",
            function: "Food preservative, antidote, corrosion inhibitor",
            origin: "Synthetic production",
            toxicity: "Moderate - can be toxic in large amounts",
            flammability: "Not flammable but helps combustion",
            reactivity: "Oxidizer, reacts with acids",
            acidity: "Basic solution",
            biologicalEffect: "Can cause methemoglobinemia in high doses",
            usage: "Meat preservation, cyanide antidote, rubber industry",
            handlingPrecautions: "Wear gloves, don't eat",
            storageConditions: "Keep in dry place away from acids",
            firstAidMeasures: "Get medical help if large amount eaten",
            disposalMethod: "Can be disposed with care"
        }
    },
    {
        id: 70,
        name: "Sodium Sulfite",
        formula: "Na₂SO₃",
        type: "salt",
        description: "Reducing agent used in photography and as food preservative.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Sodium, sulfur and oxygen",
            function: "Reducing agent, food preservative, in photography",
            origin: "Synthetic production",
            toxicity: "Low - used in foods",
            flammability: "Not flammable",
            reactivity: "Reducing agent, reacts with acids to release SO2",
            acidity: "Basic solution",
            biologicalEffect: "Safe in small amounts, can cause allergies",
            usage: "Food preservative, photography, water treatment",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry sealed container",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 71,
        name: "Sodium Bisulfite",
        formula: "NaHSO₃",
        type: "salt",
        description: "Reducing agent similar to sulfite. Used in food and photography.",
        details: {
            physicalState: "White crystals or powder",
            composition: "Sodium, hydrogen, sulfur and oxygen",
            function: "Reducing agent, food preservative, antioxidant",
            origin: "Synthetic production",
            toxicity: "Low - used in foods",
            flammability: "Not flammable",
            reactivity: "Reducing agent, releases SO2 with acid",
            acidity: "Acidic solution",
            biologicalEffect: "Safe in small amounts, can cause allergies",
            usage: "Food preservative, photography, bleach neutralizer",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry sealed container",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 72,
        name: "Sodium Borohydride",
        formula: "NaBH₄",
        type: "salt",
        description: "Strong reducing agent used in organic chemistry and for bleaching.",
        details: {
            physicalState: "White powder",
            composition: "Sodium, boron and hydrogen",
            function: "Strong reducing agent, bleaching agent",
            origin: "Synthetic production",
            toxicity: "Moderate - reacts with water to release hydrogen",
            flammability: "Flammable when wet - releases hydrogen",
            reactivity: "Strong reducing agent, reacts with water",
            acidity: "Basic solution",
            biologicalEffect: "Corrosive, releases flammable gas",
            usage: "Organic synthesis, bleaching, hydrogen storage",
            handlingPrecautions: "Use in dry conditions, away from water",
            storageConditions: "Keep in dry sealed container",
            firstAidMeasures: "Wash with water if on skin. No water if fire",
            disposalMethod: "Special disposal - reacts with water"
        }
    },
    {
        id: 73,
        name: "Chromium Trioxide",
        formula: "CrO₃",
        type: "salt",
        description: "Strong oxidizing agent that's toxic and carcinogenic. Used for cleaning glass.",
        details: {
            physicalState: "Dark red crystals",
            composition: "Chromium and oxygen",
            function: "Strong oxidizing agent, for cleaning glass",
            origin: "Synthetic production",
            toxicity: "Toxic, corrosive, carcinogenic",
            flammability: "Not flammable but can cause fires",
            reactivity: "Strong oxidizer, reacts with organics",
            acidity: "Acidic when wet",
            biologicalEffect: "Toxic, carcinogenic, corrosive",
            usage: "Cleaning glass, chromium plating, organic synthesis",
            handlingPrecautions: "Wear full protection - very dangerous",
            storageConditions: "Keep in sealed container away from organics",
            firstAidMeasures: "Wash immediately if touched. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },

    // G. GASES
    {
        id: 74,
        name: "Hydrogen Gas",
        formula: "H₂",
        type: "gas",
        description: "Lightest gas, highly flammable. Used in balloons and as fuel.",
        details: {
            physicalState: "Colorless, odorless gas",
            composition: "Two hydrogen atoms",
            function: "Fuel, reducing agent, in balloons",
            origin: "From water or natural gas",
            toxicity: "Not toxic but can suffocate",
            flammability: "Extremely flammable - explosive with air",
            reactivity: "Reducing agent, reacts with oxygen",
            acidity: "Neutral",
            biologicalEffect: "Not toxic but displaces oxygen",
            usage: "Fuel, hydrogenation of oils, balloons, welding",
            handlingPrecautions: "Use away from all ignition sources",
            storageConditions: "Store in pressurized cylinders",
            firstAidMeasures: "Fresh air if suffocating. No sparks if leak",
            disposalMethod: "Burn carefully or vent safely"
        }
    },
    {
        id: 75,
        name: "Oxygen",
        formula: "O₂",
        type: "gas",
        description: "Gas essential for life. Supports combustion and breathing.",
        details: {
            physicalState: "Colorless, odorless gas",
            composition: "Two oxygen atoms",
            function: "Supports life and combustion",
            origin: "From air or water",
            toxicity: "Not toxic but pure oxygen can be dangerous",
            flammability: "Not flammable but makes fires worse",
            reactivity: "Supports combustion, oxidizing agent",
            acidity: "Neutral",
            biologicalEffect: "Essential for life",
            usage: "Medical oxygen, welding, rocketry, water treatment",
            handlingPrecautions: "Keep away from oils and fuels",
            storageConditions: "Store in pressurized cylinders",
            firstAidMeasures: "Normal air if too much oxygen",
            disposalMethod: "Release to atmosphere"
        }
    },
    {
        id: 76,
        name: "Carbon Dioxide",
        formula: "CO₂",
        type: "gas",
        description: "Gas we breathe out. Used in fizzy drinks and fire extinguishers.",
        details: {
            physicalState: "Colorless gas, solid as dry ice",
            composition: "Carbon and oxygen",
            function: "Fizzy drinks, fire extinguisher, refrigerant",
            origin: "From combustion or fermentation",
            toxicity: "Not toxic but can suffocate in high concentrations",
            flammability: "Not flammable",
            reactivity: "Weak acid when dissolved",
            acidity: "Forms weak acid in water",
            biologicalEffect: "We breathe it out, plants use it",
            usage: "Fizzy drinks, fire extinguishers, dry ice, welding",
            handlingPrecautions: "Use in well-ventilated areas",
            storageConditions: "Store as compressed gas or dry ice",
            firstAidMeasures: "Fresh air if suffocating",
            disposalMethod: "Release to atmosphere"
        }
    },
    {
        id: 77,
        name: "Ammonia Gas",
        formula: "NH₃",
        type: "gas",
        description: "Gas with strong smell used in fertilizers and cleaners.",
        details: {
            physicalState: "Colorless gas with strong pungent smell",
            composition: "Nitrogen and hydrogen",
            function: "Fertilizers, cleaner, refrigerant",
            origin: "Synthetic production",
            toxicity: "Toxic - irritates eyes and respiratory system",
            flammability: "Flammable in certain concentrations",
            reactivity: "Base, reacts with acids",
            acidity: "Basic",
            biologicalEffect: "Irritant, toxic in high concentrations",
            usage: "Fertilizers, cleaners, refrigeration, chemicals",
            handlingPrecautions: "Use in fume hood or good ventilation",
            storageConditions: "Store as compressed gas",
            firstAidMeasures: "Fresh air immediately. Wash eyes if exposed",
            disposalMethod: "Absorb in acid or vent with care"
        }
    },
    {
        id: 78,
        name: "Sulfur Dioxide",
        formula: "SO₂",
        type: "gas",
        description: "Gas with sharp smell that causes acid rain. Used as preservative and bleach.",
        details: {
            physicalState: "Colorless gas with sharp, choking smell",
            composition: "Sulfur and oxygen",
            function: "Preservative, bleach, refrigerant",
            origin: "Burning sulfur or sulfide ores",
            toxicity: "Toxic - irritates respiratory system",
            flammability: "Not flammable",
            reactivity: "Forms acid in water, reducing agent",
            acidity: "Forms acid in water",
            biologicalEffect: "Respiratory irritant, causes acid rain",
            usage: "Food preservative, bleach, wine making, refrigeration",
            handlingPrecautions: "Use in fume hood with good ventilation",
            storageConditions: "Store as compressed gas or liquid",
            firstAidMeasures: "Fresh air immediately. Get medical help",
            disposalMethod: "Absorb in base or vent with care"
        }
    },
    {
        id: 79,
        name: "Chlorine Gas",
        formula: "Cl₂",
        type: "gas",
        description: "Greenish-yellow gas with choking smell. Used for water treatment and bleach.",
        details: {
            physicalState: "Greenish-yellow gas with choking smell",
            composition: "Two chlorine atoms",
            function: "Water disinfectant, bleach, chemical production",
            origin: "Electrolysis of salt water",
            toxicity: "Very toxic - used as chemical weapon in WWI",
            flammability: "Not flammable but supports combustion",
            reactivity: "Strong oxidizer, bleaches",
            acidity: "Neutral",
            biologicalEffect: "Very toxic - damages lungs",
            usage: "Water treatment, bleach, plastics, chemicals",
            handlingPrecautions: "Use in fume hood with full protection",
            storageConditions: "Store as compressed gas",
            firstAidMeasures: "Fresh air immediately. Get medical help",
            disposalMethod: "Absorb in base or vent with extreme care"
        }
    },

    // H. SOLVENTS
    {
        id: 80,
        name: "Distilled Water",
        formula: "H₂O",
        type: "solvent",
        description: "Pure water with no minerals. Used as solvent and for making solutions.",
        details: {
            physicalState: "Clear liquid",
            composition: "Hydrogen and oxygen",
            function: "Universal solvent, for making solutions",
            origin: "Distillation of tap water",
            toxicity: "Not toxic",
            flammability: "Not flammable",
            reactivity: "Not reactive",
            acidity: "Neutral - pH 7",
            biologicalEffect: "Essential for life",
            usage: "Making solutions, rinsing glassware, reactions",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in clean container",
            firstAidMeasures: "Not needed",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 81,
        name: "Ethyl Acetate",
        formula: "CH₃COOC₂H₅",
        type: "solvent",
        description: "Solvent with fruity smell used in nail polish remover and extractions.",
        details: {
            physicalState: "Clear liquid with fruity smell",
            composition: "Carbon, hydrogen and oxygen",
            function: "Solvent for extractions, nail polish, flavors",
            origin: "Synthetic production",
            toxicity: "Low - used in foods as flavor",
            flammability: "Highly flammable",
            reactivity: "Ester, hydrolyzes",
            acidity: "Neutral",
            biologicalEffect: "Low toxicity, narcotic in high doses",
            usage: "Nail polish remover, extractions, flavors, plastics",
            handlingPrecautions: "Use away from fire with ventilation",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if effects. Wash if on skin",
            disposalMethod: "Evaporate or solvent waste"
        }
    },
    {
        id: 82,
        name: "Toluene",
        formula: "C₆H₅CH₃",
        type: "solvent",
        description: "Solvent similar to benzene but less toxic. Used in paints and glue.",
        details: {
            physicalState: "Clear liquid with characteristic smell",
            composition: "Carbon and hydrogen",
            function: "Solvent for paints, glue, chemicals",
            origin: "From petroleum",
            toxicity: "Moderate - less toxic than benzene",
            flammability: "Highly flammable",
            reactivity: "Similar to benzene but less reactive",
            acidity: "Not acidic",
            biologicalEffect: "Narcotic, affects nervous system",
            usage: "Paints, glue, chemicals, gasoline",
            handlingPrecautions: "Use in fume hood away from fire",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if effects. Get medical help if swallowed",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 83,
        name: "Petroleum Ether",
        formula: "Mixture of hydrocarbons",
        type: "solvent",
        description: "Light petroleum fraction used as non-polar solvent. Highly flammable.",
        details: {
            physicalState: "Clear liquid with petroleum smell",
            composition: "Mixture of light hydrocarbons",
            function: "Non-polar solvent for extractions",
            origin: "From petroleum distillation",
            toxicity: "Low to moderate - narcotic",
            flammability: "Extremely flammable",
            reactivity: "Not very reactive",
            acidity: "Neutral",
            biologicalEffect: "Narcotic, affects nervous system",
            usage: "Extractions, cleaning, as solvent",
            handlingPrecautions: "Use away from all ignition sources",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if effects. No sparks if leak",
            disposalMethod: "Special disposal as flammable waste"
        }
    },
    {
        id: 84,
        name: "Dimethylformamide",
        formula: "HCON(CH₃)₂",
        type: "solvent",
        description: "Polar solvent used for difficult-to-dissolve compounds. Toxic to liver.",
        details: {
            physicalState: "Clear liquid with faint amine smell",
            composition: "Carbon, hydrogen, nitrogen and oxygen",
            function: "Polar solvent for difficult compounds",
            origin: "Synthetic production",
            toxicity: "Toxic - affects liver",
            flammability: "Combustible",
            reactivity: "Polar solvent",
            acidity: "Neutral",
            biologicalEffect: "Toxic to liver, can penetrate skin",
            usage: "Solvent for polymers, pharmaceuticals, pesticides",
            handlingPrecautions: "Use in fume hood with gloves",
            storageConditions: "Keep in sealed container",
            firstAidMeasures: "Wash immediately if touched. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 85,
        name: "Hexane",
        formula: "C₆H₁₄",
        type: "solvent",
        description: "Non-polar solvent used for oil extraction. Highly flammable and toxic to nerves.",
        details: {
            physicalState: "Clear liquid with faint petroleum smell",
            composition: "Carbon and hydrogen",
            function: "Non-polar solvent for oils and fats",
            origin: "From petroleum",
            toxicity: "Toxic - affects peripheral nerves",
            flammability: "Highly flammable",
            reactivity: "Not very reactive",
            acidity: "Neutral",
            biologicalEffect: "Neurotoxic, affects hands and feet",
            usage: "Oil extraction, glue, rubber cement, cleaning",
            handlingPrecautions: "Use in fume hood away from fire",
            storageConditions: "Keep in cool place away from flames",
            firstAidMeasures: "Fresh air if effects. Get medical help",
            disposalMethod: "Special disposal as hazardous waste"
        }
    },
    {
        id: 86,
        name: "Water + Buffer Solutions",
        formula: "H₂O + salts",
        type: "solvent",
        description: "Water with added salts to maintain constant pH. Used in biochemical experiments.",
        details: {
            physicalState: "Clear liquid",
            composition: "Water with pH controlling salts",
            function: "Maintains constant pH for reactions",
            origin: "Made in lab by adding salts to water",
            toxicity: "Low - depends on buffer used",
            flammability: "Not flammable",
            reactivity: "Maintains pH",
            acidity: "Various pH values",
            biologicalEffect: "Safe for biological systems",
            usage: "Biochemical experiments, cell cultures, enzymes",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in clean container",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },

    // I. MISCELLANEOUS
    {
        id: 87,
        name: "Iodine Solution",
        formula: "I₂ in KI solution",
        type: "indicator",
        description: "Brown solution used to test for starch and as disinfectant.",
        details: {
            physicalState: "Brown solution",
            composition: "Iodine dissolved in potassium iodide solution",
            function: "Starch test, disinfectant",
            origin: "Iodine crystals dissolved in KI solution",
            toxicity: "Low - used as disinfectant",
            flammability: "Not flammable",
            reactivity: "Oxidizing agent, reacts with starch",
            acidity: "Neutral",
            biologicalEffect: "Disinfectant, essential nutrient",
            usage: "Starch test, disinfectant, Gram staining",
            handlingPrecautions: "Wear gloves - stains skin brown",
            storageConditions: "Keep in dark bottle",
            firstAidMeasures: "Wash with water if on skin",
            disposalMethod: "Can be disposed with care"
        }
    },
    {
        id: 88,
        name: "Benedict's Reagent",
        formula: "CuSO₄ + sodium citrate + Na₂CO₃",
        type: "indicator",
        description: "Blue solution used to test for reducing sugars. Turns orange-red with positive test.",
        details: {
            physicalState: "Blue solution",
            composition: "Copper sulfate with citrate and carbonate",
            function: "Test for reducing sugars",
            origin: "Made by mixing copper sulfate with citrate",
            toxicity: "Low - contains copper",
            flammability: "Not flammable",
            reactivity: "Reduced by sugars to red copper oxide",
            acidity: "Basic",
            biologicalEffect: "Low toxicity",
            usage: "Testing for diabetes, food analysis",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in bottle",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 89,
        name: "Fehling's A & B Solutions",
        formula: "A: CuSO₄, B: NaOH + potassium tartrate",
        type: "indicator",
        description: "Two solutions mixed to test for reducing sugars. Similar to Benedict's test.",
        details: {
            physicalState: "A: Blue solution, B: colorless solution",
            composition: "Copper sulfate and alkaline tartrate",
            function: "Test for reducing sugars",
            origin: "Made by mixing two solutions",
            toxicity: "Low - contains copper and strong base",
            flammability: "Not flammable",
            reactivity: "Reduced by sugars to red copper oxide",
            acidity: "Basic when mixed",
            biologicalEffect: "Solution B is corrosive",
            usage: "Testing for sugars in food and urine",
            handlingPrecautions: "Wear gloves - solution B is corrosive",
            storageConditions: "Keep separate in bottles",
            firstAidMeasures: "Wash with water if solution B touches skin",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 90,
        name: "Lime Water",
        formula: "Ca(OH)₂ solution",
        type: "base",
        description: "Calcium hydroxide solution used to test for carbon dioxide. Turns milky with CO2.",
        details: {
            physicalState: "Clear solution that turns milky with CO2",
            composition: "Calcium hydroxide in water",
            function: "Test for carbon dioxide, mild base",
            origin: "Calcium hydroxide dissolved in water",
            toxicity: "Low",
            flammability: "Not flammable",
            reactivity: "Reacts with CO2 to form calcium carbonate",
            acidity: "Basic",
            biologicalEffect: "Low toxicity",
            usage: "Testing for CO2, mild alkali",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in sealed container - absorbs CO2",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go down drain"
        }
    },
    {
        id: 91,
        name: "Concentrated Sulfuric Acid",
        formula: "H₂SO₄",
        type: "acid",
        description: "Very strong acid that takes water out of things. Handle with extreme care.",
        details: {
            physicalState: "Thick oily liquid",
            composition: "Hydrogen, sulfur and oxygen",
            function: "Strong acid, dehydrating agent, catalyst",
            origin: "Contact process",
            toxicity: "Extremely corrosive and toxic",
            flammability: "Not flammable but can cause fires",
            reactivity: "Very reactive, dehydrates organics",
            acidity: "Very strong acid",
            biologicalEffect: "Extremely corrosive - destroys tissue",
            usage: "Chemical synthesis, batteries, cleaning, catalyst",
            handlingPrecautions: "Full protection - face shield, gloves, apron",
            storageConditions: "Keep in special bottles away from water",
            firstAidMeasures: "Wash with lots of water. Get medical help immediately",
            disposalMethod: "Neutralize carefully with base"
        }
    },
    {
        id: 92,
        name: "Concentrated Nitric Acid",
        formula: "HNO₃",
        type: "acid",
        description: "Strong oxidizing acid that can cause severe burns. Turns skin yellow.",
        details: {
            physicalState: "Colorless to yellow liquid with choking fumes",
            composition: "Hydrogen, nitrogen and oxygen",
            function: "Strong acid and oxidizer, for nitrations",
            origin: "Ostwald process",
            toxicity: "Extremely corrosive and toxic",
            flammability: "Not flammable but strong oxidizer",
            reactivity: "Very reactive, oxidizes and nitrates",
            acidity: "Very strong acid",
            biologicalEffect: "Extremely corrosive, stains skin yellow",
            usage: "Making explosives, fertilizers, etching, cleaning",
            handlingPrecautions: "Full protection in fume hood",
            storageConditions: "Keep in dark bottles away from organics",
            firstAidMeasures: "Wash with lots of water. Get medical help immediately",
            disposalMethod: "Neutralize carefully with base"
        }
    },
    {
        id: 93,
        name: "Potassium Iodide",
        formula: "KI",
        type: "salt",
        description: "Salt used to dissolve iodine and as source of iodine in table salt.",
        details: {
            physicalState: "White crystals",
            composition: "Potassium and iodine",
            function: "Source of iodine, dissolves iodine, expectorant",
            origin: "Synthetic production",
            toxicity: "Low - used in medicines and food",
            flammability: "Not flammable",
            reactivity: "Releases iodine with oxidizers",
            acidity: "Neutral",
            biologicalEffect: "Source of essential iodine",
            usage: "Iodized salt, medicine, photography, chemical reagent",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 94,
        name: "Sodium Iodide",
        formula: "NaI",
        type: "salt",
        description: "Similar to potassium iodide. Used in medicine and as iodine source.",
        details: {
            physicalState: "White crystals",
            composition: "Sodium and iodine",
            function: "Source of iodine, in medicines",
            origin: "Synthetic production",
            toxicity: "Low - used in medicines",
            flammability: "Not flammable",
            reactivity: "Releases iodine with oxidizers",
            acidity: "Neutral",
            biologicalEffect: "Source of essential iodine",
            usage: "Medicine, photography, chemical reagent",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 95,
        name: "Sodium Bromide",
        formula: "NaBr",
        type: "salt",
        description: "Salt used in medicine as sedative and in photography.",
        details: {
            physicalState: "White crystals",
            composition: "Sodium and bromine",
            function: "Medicine, photography, drilling fluids",
            origin: "Synthetic production",
            toxicity: "Low to moderate - was used as sedative",
            flammability: "Not flammable",
            reactivity: "Not very reactive",
            acidity: "Neutral",
            biologicalEffect: "Was used as sedative, now limited use",
            usage: "Medicine, photography, oil drilling",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 96,
        name: "Calcium Chloride",
        formula: "CaCl₂",
        type: "salt",
        description: "Salt that absorbs water from air. Used as drying agent and de-icer.",
        details: {
            physicalState: "White crystals or pellets",
            composition: "Calcium and chlorine",
            function: "Drying agent, de-icer, food additive",
            origin: "From limestone or as byproduct",
            toxicity: "Low - used in foods",
            flammability: "Not flammable",
            reactivity: "Absorbs water, gets hot when dissolved",
            acidity: "Neutral",
            biologicalEffect: "Safe in small amounts",
            usage: "Drying agent, de-icing roads, food additive, concrete",
            handlingPrecautions: "Wear gloves - gets hot with water",
            storageConditions: "Keep in sealed container - absorbs water",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 97,
        name: "Charcoal Powder",
        formula: "C",
        type: "element",
        description: "Fine carbon powder used for decolorizing and as fuel.",
        details: {
            physicalState: "Black powder",
            composition: "Carbon",
            function: "Decolorizing, filtering, fuel, medicine",
            origin: "From wood or other organic material",
            toxicity: "Low",
            flammability: "Combustible",
            reactivity: "Adsorbs impurities",
            acidity: "Neutral",
            biologicalEffect: "Used in medicine for poisoning",
            usage: "Decolorizing solutions, water filters, fuel, medicine",
            handlingPrecautions: "Wear mask - messy powder",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 98,
        name: "Gelatin",
        formula: "Protein mixture",
        type: "organic",
        description: "Protein from animal bones used to make jelly and in microbiology.",
        details: {
            physicalState: "Yellowish powder or sheets",
            composition: "Proteins from collagen",
            function: "Gelling agent, in food, microbiology",
            origin: "From animal bones and skin",
            toxicity: "Very low - we eat it",
            flammability: "Can burn",
            reactivity: "Forms gel with water",
            acidity: "Neutral",
            biologicalEffect: "Safe - in foods",
            usage: "Foods, microbiology media, capsules, photography",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can go with regular waste"
        }
    },
    {
        id: 99,
        name: "Alum",
        formula: "KAl(SO₄)₂·12H₂O",
        type: "salt",
        description: "Double salt used for water purification and as astringent.",
        details: {
            physicalState: "White crystals",
            composition: "Potassium, aluminum, sulfur, oxygen and water",
            function: "Water purification, astringent, baking powder",
            origin: "From minerals or made chemically",
            toxicity: "Low - used in medicines and food",
            flammability: "Not flammable",
            reactivity: "Forms aluminum hydroxide in water",
            acidity: "Acidic solution",
            biologicalEffect: "Astringent, used in styptic pencils",
            usage: "Water treatment, medicine, baking powder, tanning",
            handlingPrecautions: "Normal care",
            storageConditions: "Keep in dry place",
            firstAidMeasures: "Generally safe",
            disposalMethod: "Can be disposed normally"
        }
    },
    {
        id: 100,
        name: "Ammonium Hydroxide",
        formula: "NH₄OH",
        type: "base",
        description: "Ammonia solution used for cleaning and in chemical tests.",
        details: {
            physicalState: "Clear liquid with strong smell",
            composition: "Ammonia gas in water",
            function: "Cleaning, chemical reagent, pH adjustment",
            origin: "Ammonia dissolved in water",
            toxicity: "Corrosive and toxic fumes",
            flammability: "Not flammable but fumes can burn",
            reactivity: "Base, reacts with acids",
            acidity: "Basic",
            biologicalEffect: "Irritant, toxic fumes",
            usage: "Cleaning, chemical synthesis, photography",
            handlingPrecautions: "Use in ventilation, don't breathe fumes",
            storageConditions: "Keep in cool place with tight lid",
            firstAidMeasures: "Fresh air if fumes breathed. Wash if on skin",
            disposalMethod: "Dilute and dispose or neutralize with acid"
        }
    }
];

// DOM Elements
const header = document.getElementById('mainHeader');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const chemicalsGrid = document.getElementById('chemicalsGrid');
const chemicalModal = document.getElementById('chemicalModal');
const modalClose = document.getElementById('modalClose');
const modalChemicalName = document.getElementById('modalChemicalName');
const modalChemicalFormula = document.getElementById('modalChemicalFormula');
const modalBody = document.getElementById('modalBody');
const footer = document.getElementById('mainFooter');
const themeToggle = document.getElementById('themeToggle');
const classificationFilter = document.getElementById('classificationFilter');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Render chemical cards
    renderChemicalCards(chemicals);
    
    // Set up event listeners
    setupEventListeners();
});

// Set theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// Toggle theme
function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Render chemical cards
function renderChemicalCards(chemicalsArray, type = 'all') {
    chemicalsGrid.innerHTML = '';
    
    let filteredChemicals = chemicalsArray;
    if (type !== 'all') {
        filteredChemicals = chemicalsArray.filter(chemical => chemical.type === type);
    }
    
    filteredChemicals.forEach(chemical => {
        const card = document.createElement('div');
        card.className = 'chemical-card';
        card.innerHTML = `
            <div class="chemical-number">${chemical.id}</div>
            <h3 class="chemical-name">${chemical.name} <span class="chemical-type type-${chemical.type}">${chemical.type}</span></h3>
            <p class="chemical-formula">${chemical.formula}</p>
            <p class="chemical-description">${chemical.description}</p>
            <a href="#" class="chemical-details-btn" data-id="${chemical.id}">See Details</a>
        `;
        chemicalsGrid.appendChild(card);
    });
    
    // Add event listeners to detail buttons
    document.querySelectorAll('.chemical-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const chemicalId = parseInt(this.getAttribute('data-id'));
            const chemical = chemicals.find(c => c.id === chemicalId);
            if (chemical) {
                openChemicalModal(chemical);
            }
        });
    });
}

// Open chemical modal
function openChemicalModal(chemical) {
    modalChemicalName.textContent = chemical.name;
    modalChemicalFormula.textContent = chemical.formula;
    
    // Build modal content
    let modalContent = `
        <p class="chemical-description">${chemical.description}</p>
        <ul class="classification-list">
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-vial"></i>
                    <span>What It Looks Like</span>
                </div>
                <div class="classification-content">${chemical.details.physicalState}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-atom"></i>
                    <span>What It's Made Of</span>
                </div>
                <div class="classification-content">${chemical.details.composition}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-flask"></i>
                    <span>What It Does</span>
                </div>
                <div class="classification-content">${chemical.details.function}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-seedling"></i>
                    <span>Where It Comes From</span>
                </div>
                <div class="classification-content">${chemical.details.origin}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-skull-crossbones"></i>
                    <span>How Dangerous It Is</span>
                </div>
                <div class="classification-content">${chemical.details.toxicity}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-fire"></i>
                    <span>Can It Burn</span>
                </div>
                <div class="classification-content">${chemical.details.flammability}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-bolt"></i>
                    <span>How It Reacts</span>
                </div>
                <div class="classification-content">${chemical.details.reactivity}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-tint"></i>
                    <span>Acid or Base</span>
                </div>
                <div class="classification-content">${chemical.details.acidity}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-dna"></i>
                    <span>Effect on Living Things</span>
                </div>
                <div class="classification-content">${chemical.details.biologicalEffect}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-industry"></i>
                    <span>Where It's Used</span>
                </div>
                <div class="classification-content">${chemical.details.usage}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>How to Handle Safely</span>
                </div>
                <div class="classification-content">${chemical.details.handlingPrecautions}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-warehouse"></i>
                    <span>How to Store It</span>
                </div>
                <div class="classification-content">${chemical.details.storageConditions}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-first-aid"></i>
                    <span>First Aid</span>
                </div>
                <div class="classification-content">${chemical.details.firstAidMeasures}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-trash-alt"></i>
                    <span>How to Throw Away</span>
                </div>
                <div class="classification-content">${chemical.details.disposalMethod}</div>
            </li>
        </ul>
    `;
    
    modalBody.innerHTML = modalContent;
    chemicalModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Hide footer when modal is open
    footer.classList.add('hidden');
}

// Close chemical modal
function closeChemicalModal() {
    chemicalModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Show footer when modal is closed
    footer.classList.remove('hidden');
}

// Search chemicals
function searchChemicals() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-type');
        renderChemicalCards(chemicals, activeFilter);
        return;
    }
    
    const filteredChemicals = chemicals.filter(chemical => 
        chemical.name.toLowerCase().includes(searchTerm) || 
        chemical.formula.toLowerCase().includes(searchTerm) ||
        chemical.description.toLowerCase().includes(searchTerm)
    );
    
    renderChemicalCards(filteredChemicals);
}

// Filter chemicals by type
function filterChemicals(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderChemicalCards(chemicals, type);
}

// Set up event listeners
function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Search functionality
    searchInput.addEventListener('input', searchChemicals);
    searchBtn.addEventListener('click', searchChemicals);

    // Modal close
    modalClose.addEventListener('click', closeChemicalModal);
    
    // Close modal when clicking outside
    chemicalModal.addEventListener('click', (e) => {
        if (e.target === chemicalModal) {
            closeChemicalModal();
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Classification filter
    classificationFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            const type = e.target.getAttribute('data-type');
            filterChemicals(type);
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Site Warning Functions
let countdownTimer;
let totalSeconds = 20;
let secondsLeft = totalSeconds;

function hideWarning() {
    document.getElementById('siteWarning').style.display = 'none';
    document.body.style.overflow = 'auto';
    clearInterval(countdownTimer);
}

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const progressBar = document.getElementById('loadingProgress');
    countdownElement.textContent = secondsLeft;
    progressBar.style.width = '0%';
    
    countdownTimer = setInterval(function() {
        secondsLeft--;
        countdownElement.textContent = secondsLeft;
        
        // Update progress bar
        const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;
        progressBar.style.width = progress + '%';
        
        if (secondsLeft <= 0) {
            hideWarning();
        }
    }, 1000);
}

// Show warning immediately and start countdown
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
    startCountdown();
    
    // Close button functionality
    document.getElementById('closeButton').addEventListener('click', hideWarning);
});

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    // Small delay to allow orientation to complete
    setTimeout(function() {
        document.getElementById('siteWarning').style.display = 'flex';
    }, 100);
});