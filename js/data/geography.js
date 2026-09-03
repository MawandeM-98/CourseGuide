// ============================================================
// GEOGRAPHY — 200 Questions
// ============================================================

const GEOGRAPHY_QUESTIONS = [
    // ============================================================
    // SECTION A: Mid-latitude Cyclones (1-20)
    // ============================================================
    {
        question: "A mid-latitude cyclone generally develops along a boundary where:",
        options: ["two warm air masses meet", "warm and cold air masses meet", "two cold air masses meet", "descending air dominates"],
        correct: 1,
        explanation: "Mid-latitude cyclones develop along a polar front where contrasting warm and cold air masses interact."
    },
    {
        question: "Which condition is most directly associated with the formation of a mid-latitude cyclone?",
        options: ["Strong temperature contrast between air masses", "Uniform surface temperatures", "Persistent descending air", "Absence of upper-air movement"],
        correct: 0,
        explanation: "A strong temperature gradient provides the energy necessary for the development of frontal disturbances."
    },
    {
        question: "During the mature stage of a mid-latitude cyclone, the cold front:",
        options: ["moves ahead of the warm front and eventually catches it", "remains stationary permanently", "disappears before reaching the warm front", "develops only after the cyclone has dissipated"],
        correct: 0,
        explanation: "The cold front generally moves faster and eventually catches the warm front, producing occlusion."
    },
    {
        question: "Which cloud type is most strongly associated with intense rainfall along a cold front?",
        options: ["Cirrus", "Stratus", "Cumulonimbus", "Altostratus"],
        correct: 2,
        explanation: "Rapid uplift along a steep cold front can produce cumulonimbus clouds and heavy rainfall."
    },
    {
        question: "A city lies immediately ahead of a warm front. Which sequence is most likely?",
        options: [
            "Clear skies → thunderstorms → falling temperature",
            "Increasing cloud cover → prolonged rainfall → temperature rise",
            "Heavy snowfall → clear skies → temperature fall",
            "Strong convection → no cloud development → temperature unchanged"
        ],
        correct: 1,
        explanation: "Warm fronts typically produce increasing layered cloud and more gradual, prolonged rainfall before warmer air arrives."
    },
    {
        question: "The pressure gradient around a mature cyclone is particularly important because it determines:",
        options: ["wind speed", "cloud colour", "humidity only", "ocean salinity"],
        correct: 0,
        explanation: "Closely spaced isobars indicate a steep pressure gradient and therefore stronger winds."
    },
    {
        question: "A weather station records the following conditions as a cyclone approaches: 06:00 - 1018 hPa, 12 km/h, 0 mm; 12:00 - 1008 hPa, 32 km/h, 4 mm; 18:00 - 998 hPa, 58 km/h, 18 mm; 00:00 - 1005 hPa, 35 km/h, 9 mm. Which observation most strongly indicates the cyclone was approaching its mature stage?",
        options: ["Increasing pressure", "Falling pressure and increasing wind speed", "Falling rainfall only", "Increasing temperature only"],
        correct: 1,
        explanation: "Falling pressure accompanied by rapidly increasing winds is characteristic of an intensifying low-pressure system."
    },
    {
        question: "Between 06:00 and 18:00, the pressure changed by:",
        options: ["10 hPa", "15 hPa", "20 hPa", "30 hPa"],
        correct: 2,
        explanation: "1018 − 998 = 20 hPa."
    },
    {
        question: "The strongest winds would most likely occur where:",
        options: ["isobars are widely spaced", "isobars are closely spaced", "pressure is constant", "rainfall is zero"],
        correct: 1,
        explanation: "Closely spaced isobars represent a steep pressure gradient and stronger winds."
    },
    {
        question: "The pressure increase after 18:00 most likely indicates that:",
        options: ["the low-pressure system is weakening or moving away", "the cyclone is intensifying indefinitely", "a tropical cyclone is forming", "evaporation has stopped"],
        correct: 0,
        explanation: "Rising pressure commonly indicates the influence of the low-pressure system is decreasing."
    },
    {
        question: "An occluded front develops when:",
        options: ["the warm front catches the cold front", "the cold front catches the warm front", "two anticyclones merge", "a high-pressure cell replaces the cyclone"],
        correct: 1,
        explanation: "The faster-moving cold front overtakes the warm front, lifting warm air from the surface."
    },
    {
        question: "Which weather condition is most likely immediately behind a cold front?",
        options: ["Warmer temperatures and falling pressure", "Cooler temperatures and rising pressure", "Increasing humidity with no wind", "Persistent warming and falling pressure"],
        correct: 1,
        explanation: "Cold air replaces warm air behind the front, while pressure generally rises after frontal passage."
    },
    {
        question: "Which factor can influence the movement of mid-latitude cyclones over southern Africa?",
        options: ["South Atlantic and South Indian Highs", "Only the Kalahari High", "Equatorial rainfall only", "Ocean tides"],
        correct: 0,
        explanation: "The subtropical high-pressure cells influence atmospheric circulation and the movement of weather systems."
    },
    {
        question: "A farmer receives warning that a cold front will cross the region during harvest. Which strategy is most appropriate?",
        options: ["Ignore the forecast", "Harvest vulnerable crops early where possible", "Increase irrigation immediately", "Remove all drainage channels"],
        correct: 1,
        explanation: "Early harvesting can reduce losses from strong winds and heavy rainfall."
    },
    {
        question: "Why can mid-latitude cyclones have significant economic impacts?",
        options: ["They eliminate all rainfall", "They can disrupt transport, agriculture and infrastructure", "They occur only over oceans", "They always produce drought"],
        correct: 1,
        explanation: "Strong winds, heavy rainfall and flooding can disrupt transport, agriculture, businesses and infrastructure."
    },
    {
        question: "On a synoptic chart, a line marked with triangles is most likely a:",
        options: ["warm front", "cold front", "stationary front", "ridge"],
        correct: 1,
        explanation: "Triangles are used to represent cold fronts on standard weather charts."
    },
    {
        question: "On a synoptic chart, semicircles generally represent a:",
        options: ["warm front", "cold front", "high-pressure centre", "trough"],
        correct: 0,
        explanation: "Semicircles are the conventional symbol for warm fronts."
    },
    {
        question: "Why is rainfall generally more intense along a cold front than a warm front?",
        options: ["Cold fronts have stronger uplift and steeper frontal slopes", "Warm fronts have no moisture", "Cold fronts always occur over oceans", "Warm air cannot rise"],
        correct: 0,
        explanation: "Cold air rapidly undercuts warm air, causing strong uplift and often cumulonimbus development."
    },
    {
        question: "A steep pressure gradient would most likely result in:",
        options: ["calm conditions", "strong winds", "no air movement", "reduced pressure differences"],
        correct: 1,
        explanation: "A larger pressure difference over a short distance produces stronger pressure-gradient force."
    },
    {
        question: "Which statement best describes the life cycle of a mid-latitude cyclone?",
        options: ["Formation → development → occlusion → decay", "Occlusion → formation → development → decay", "Decay → formation → occlusion → development", "Formation → decay → development → occlusion"],
        correct: 0,
        explanation: "The typical sequence progresses from initial development through maturity and occlusion to eventual weakening."
    },

    // ============================================================
    // SECTION B: Tropical Cyclones (21-40)
    // ============================================================
    {
        question: "Tropical cyclones generally require sea-surface temperatures of approximately:",
        options: ["5°C or more", "15°C or more", "26.5°C or more", "40°C or more"],
        correct: 2,
        explanation: "Warm tropical oceans, generally around 26.5°C or higher, provide the heat and moisture required."
    },
    {
        question: "Tropical cyclones generally form:",
        options: ["directly over the equator", "between approximately 5° and 30° latitude", "only at the poles", "only over continents"],
        correct: 1,
        explanation: "Sufficient Coriolis force is required, so tropical cyclones generally form away from the equator."
    },
    {
        question: "Why do tropical cyclones rarely form directly on the equator?",
        options: ["Ocean temperatures are too low", "Coriolis force is too weak", "Atmospheric pressure is always high", "There is no evaporation"],
        correct: 1,
        explanation: "Coriolis force approaches zero at the equator, making organised rotation difficult."
    },
    {
        question: "The calm central region of a mature tropical cyclone is called the:",
        options: ["eyewall", "eye", "trough", "ridge"],
        correct: 1,
        explanation: "The eye is the relatively calm centre surrounded by the intense eyewall."
    },
    {
        question: "The strongest winds in a tropical cyclone generally occur in the:",
        options: ["eye", "eyewall", "outermost cloud bands only", "centre of the ocean"],
        correct: 1,
        explanation: "The eyewall contains the strongest convection, uplift and winds."
    },
    {
        question: "Which factor would most likely weaken a tropical cyclone?",
        options: ["Movement over very warm ocean water", "Increased moisture supply", "Movement over land", "Strong upper-air support"],
        correct: 2,
        explanation: "Crossing land cuts off the cyclone's warm, moist energy source and increases friction."
    },
    {
        question: "A tropical cyclone moves toward a densely populated coastal region. Forecast data indicate: central pressure: 945 hPa, sustained winds: 185 km/h, rainfall: 300 mm in 24 hours, storm surge: 2.8 m. Which hazard is most directly associated with the unusually low central pressure and strong winds?",
        options: ["Drought", "Destructive winds", "Frost", "Radiation fog"],
        correct: 1,
        explanation: "A very low central pressure creates a strong pressure gradient, producing destructive winds."
    },
    {
        question: "The 300 mm rainfall figure creates the greatest immediate risk of:",
        options: ["flooding", "frost", "desertification", "snowfall"],
        correct: 0,
        explanation: "Extremely heavy rainfall can rapidly exceed drainage capacity and cause flooding."
    },
    {
        question: "The 2.8 m storm surge is especially dangerous because it can:",
        options: ["lower sea level", "push seawater onto coastal land", "stop all evaporation", "prevent rainfall"],
        correct: 1,
        explanation: "Storm surge is an abnormal rise in sea level caused mainly by strong winds and low atmospheric pressure."
    },
    {
        question: "Which community would face the greatest direct storm-surge risk?",
        options: ["A high inland plateau", "A low-lying coastal settlement", "A mountain summit", "A desert settlement far inland"],
        correct: 1,
        explanation: "Low-lying coastal areas are directly exposed to rising seawater."
    },
    {
        question: "Which measure would best reduce deaths before a severe tropical cyclone reaches land?",
        options: ["Early warning and evacuation", "Increasing population density", "Removing emergency shelters", "Building homes on floodplains"],
        correct: 0,
        explanation: "Early warnings allow people to evacuate dangerous areas before conditions deteriorate."
    },
    {
        question: "A tropical cyclone is observed to have increasingly organised cloud bands and falling central pressure. This suggests:",
        options: ["weakening", "intensification", "dissipation", "complete absence of convection"],
        correct: 1,
        explanation: "Falling pressure and increasing organisation are indicators of intensification."
    },
    {
        question: "Which economic activity is particularly vulnerable to tropical cyclone damage?",
        options: ["Agriculture", "Deep underground mining only", "Astronomy", "Desert tourism only"],
        correct: 0,
        explanation: "Crops, livestock, irrigation infrastructure and agricultural facilities can be damaged by wind and flooding."
    },
    {
        question: "Which combination provides the strongest evidence that a tropical cyclone is dangerous?",
        options: ["High pressure, light winds, no rainfall", "Low pressure, strong winds, heavy rainfall", "High pressure, low humidity, calm conditions", "Rising pressure, no clouds, weak winds"],
        correct: 1,
        explanation: "These are major characteristics associated with severe tropical cyclone conditions."
    },
    {
        question: "Why does warm ocean water support tropical cyclone development?",
        options: ["It increases evaporation and supplies latent heat", "It removes moisture", "It prevents convection", "It increases surface pressure"],
        correct: 0,
        explanation: "Warm water promotes evaporation; condensation releases latent heat that fuels convection."
    },
    {
        question: "Which statement about tropical cyclone rotation in the Southern Hemisphere is correct?",
        options: ["It is clockwise", "It is anticlockwise", "It has no rotation", "It always rotates vertically"],
        correct: 0,
        explanation: "The Coriolis effect causes tropical cyclones to rotate clockwise in the Southern Hemisphere."
    },
    {
        question: "A tropical cyclone reaches a mountainous coastline. Which additional hazard may increase?",
        options: ["Orographic rainfall and flooding", "Frost only", "Reduced rainfall everywhere", "Permanent drought"],
        correct: 0,
        explanation: "Rising moist air over mountains can enhance rainfall, increasing flooding and landslide risk."
    },
    {
        question: "Which warning system is most useful for monitoring a tropical cyclone before landfall?",
        options: ["Satellite imagery", "Soil colour alone", "Population census", "Road signs only"],
        correct: 0,
        explanation: "Satellite imagery allows meteorologists to monitor cloud structure, movement and development."
    },
    {
        question: "Which statement best explains why tropical cyclones are less common close to the equator?",
        options: ["Sea temperatures are always too low", "Coriolis force is insufficient to organise rotation", "There is no atmospheric moisture", "Pressure is always extremely low"],
        correct: 1,
        explanation: "Adequate Coriolis force is necessary for rotational organisation."
    },
    {
        question: "A government wants to reduce cyclone losses over the long term. Which strategy is most sustainable?",
        options: ["Ignore warnings", "Improve building standards, zoning and early-warning systems", "Increase settlement in flood-prone areas", "Remove evacuation routes"],
        correct: 1,
        explanation: "Risk reduction combines planning, resilient infrastructure and effective warning systems."
    },

    // ============================================================
    // SECTION C: Subtropical Anticyclones (41-60)
    // ============================================================
    {
        question: "A subtropical anticyclone is associated primarily with:",
        options: ["rising air and low pressure", "descending air and high pressure", "strong convection", "frontal uplift"],
        correct: 1,
        explanation: "Anticyclones are high-pressure systems characterised by subsiding air."
    },
    {
        question: "Which high-pressure cell is located west of South Africa?",
        options: ["South Indian High", "Kalahari High", "South Atlantic High", "Mascarene Low"],
        correct: 2,
        explanation: "The South Atlantic High lies to the west of southern Africa."
    },
    {
        question: "Which high-pressure cell lies east of South Africa?",
        options: ["South Indian High", "South Atlantic High", "Kalahari Low", "Polar High"],
        correct: 0,
        explanation: "The South Indian High lies over the southwestern Indian Ocean."
    },
    {
        question: "The Kalahari High is primarily associated with:",
        options: ["a continental high-pressure system", "an oceanic tropical cyclone", "a coastal low", "a cold front"],
        correct: 0,
        explanation: "The Kalahari High develops over the interior of southern Africa under suitable conditions."
    },
    {
        question: "Descending air associated with a high-pressure cell generally causes:",
        options: ["stable conditions", "intense convection", "continuous frontal rainfall", "rising humidity everywhere"],
        correct: 0,
        explanation: "Subsiding air suppresses cloud development and convection."
    },
    {
        question: "A winter weather station in the interior of South Africa records: clear skies, very cold nights, weak winds, low humidity, strong temperature inversion. Which atmospheric condition most likely produced these observations?",
        options: ["Dominant high pressure", "Tropical cyclone", "Cold front", "Coastal low"],
        correct: 0,
        explanation: "High-pressure systems produce subsiding, stable air and clear conditions."
    },
    {
        question: "A temperature inversion occurs when:",
        options: ["temperature decreases unusually rapidly with height", "warmer air lies above cooler air near the surface", "pressure becomes zero", "all air becomes saturated"],
        correct: 1,
        explanation: "In an inversion, the normal decrease of temperature with height is reversed."
    },
    {
        question: "Why can an inversion contribute to air pollution?",
        options: ["It allows pollutants to disperse rapidly upward", "It traps pollutants near the surface", "It removes all pollutants chemically", "It causes strong convection"],
        correct: 1,
        explanation: "Stable air limits vertical mixing, allowing pollutants to accumulate near the ground."
    },
    {
        question: "A berg wind is generally associated with:",
        options: ["hot, dry offshore winds", "cold, moist onshore winds", "tropical cyclone formation", "persistent fog only"],
        correct: 0,
        explanation: "Air descending from the interior is compressed and warmed, producing hot, dry offshore winds."
    },
    {
        question: "A berg wind can increase wildfire risk because it:",
        options: ["increases humidity", "is hot and dry", "produces continuous rainfall", "reduces evaporation"],
        correct: 1,
        explanation: "Hot, dry conditions rapidly remove moisture from vegetation."
    },
    {
        question: "A coastal low generally forms:",
        options: ["along the coastline under suitable pressure conditions", "only over the Antarctic interior", "inside a tropical cyclone", "only at mountain summits"],
        correct: 0,
        explanation: "Coastal lows are low-pressure disturbances that develop near South Africa's coastline."
    },
    {
        question: "Line thunderstorms are commonly associated with:",
        options: ["a moisture front", "a permanent anticyclone", "a frost pocket", "a cold ocean current only"],
        correct: 0,
        explanation: "A moisture front can produce convergence and uplift, triggering a line of thunderstorms."
    },
    {
        question: "Which condition most favours thunderstorm development?",
        options: ["Strong uplift and atmospheric instability", "Strong subsidence only", "Completely dry air", "No temperature differences"],
        correct: 0,
        explanation: "Thunderstorms require instability, moisture and uplift."
    },
    {
        question: "Which activity is particularly vulnerable to severe thunderstorms?",
        options: ["Agriculture", "Deep-sea navigation only", "Underground museums", "Desert astronomy only"],
        correct: 0,
        explanation: "Hail, lightning, strong winds and heavy rain can damage crops and infrastructure."
    },
    {
        question: "The South Atlantic High can influence South Africa by:",
        options: ["contributing to stable atmospheric conditions", "eliminating all wind", "producing tropical cyclones over Johannesburg", "creating permanent snowfall"],
        correct: 0,
        explanation: "High-pressure circulation contributes to stable atmospheric conditions and influences moisture movement."
    },
    {
        question: "In winter, the subtropical high-pressure belt generally shifts:",
        options: ["northward", "southward", "directly onto the equator only", "permanently over Antarctica"],
        correct: 0,
        explanation: "The subtropical high-pressure belt shifts seasonally, influencing South Africa's winter weather."
    },
    {
        question: "If a synoptic chart shows widely spaced isobars around a high-pressure cell, conditions are likely to include:",
        options: ["lighter winds", "hurricane-force winds", "extremely steep pressure gradients", "severe frontal uplift"],
        correct: 0,
        explanation: "Widely spaced isobars indicate a weak pressure gradient and generally lighter winds."
    },
    {
        question: "Why can high-pressure systems contribute to drought?",
        options: ["They promote persistent cloud formation", "Subsiding air suppresses rainfall", "They always produce cyclones", "They increase frontal activity"],
        correct: 1,
        explanation: "Persistent high pressure suppresses convection and rainfall."
    },
    {
        question: "Which combination is most likely during a winter anticyclonic interior weather pattern?",
        options: ["Clear skies, cold nights and stable air", "Heavy convection and tropical cyclone conditions", "Continuous frontal rainfall", "Strong upward motion"],
        correct: 0,
        explanation: "Winter anticyclonic conditions commonly produce clear, dry and stable weather."
    },
    {
        question: "Which weather system is most directly associated with prolonged frontal rainfall over the southern Cape?",
        options: ["Mid-latitude cyclone", "Kalahari High", "Berg wind", "Coastal anticyclone"],
        correct: 0,
        explanation: "Mid-latitude cyclones and their fronts bring winter rainfall to the southern Cape."
    },

    // ============================================================
    // SECTION D: Valley and Urban Climates (61-75)
    // ============================================================
    {
        question: "Slope aspect refers to:",
        options: ["steepness of a slope", "direction a slope faces", "elevation of a river", "depth of a valley"],
        correct: 1,
        explanation: "Aspect describes the compass direction toward which a slope faces."
    },
    {
        question: "In the Southern Hemisphere, a north-facing slope generally receives:",
        options: ["more direct solar radiation", "less solar radiation than every other slope", "no sunlight", "only reflected radiation"],
        correct: 0,
        explanation: "North-facing slopes receive more direct sunlight in the Southern Hemisphere."
    },
    {
        question: "Anabatic winds generally occur:",
        options: ["during daytime as slopes warm", "only at midnight", "when slopes cool rapidly", "only during tropical cyclones"],
        correct: 0,
        explanation: "Heated air rises upslope during the day, creating anabatic winds."
    },
    {
        question: "Katabatic winds generally move:",
        options: ["upslope during the day", "downslope as air cools and becomes denser", "vertically upward only", "from the ocean to the mountain summit"],
        correct: 1,
        explanation: "Cold dense air flows downslope, particularly at night."
    },
    {
        question: "A frost pocket is most likely to develop:",
        options: ["on a high exposed ridge", "in a low-lying valley", "on a tropical ocean", "at the top of a mountain"],
        correct: 1,
        explanation: "Cold dense air drains into low areas and accumulates there."
    },
    {
        question: "A thermal belt is generally:",
        options: ["a relatively warmer zone on a valley slope above the valley floor", "the coldest point in a valley", "an ocean current", "a type of cyclone"],
        correct: 0,
        explanation: "Thermal belts occur above the cold-air pool associated with a valley inversion."
    },
    {
        question: "Radiation fog forms most readily when:",
        options: ["skies are clear and winds are light", "winds are extremely strong", "cloud cover is continuous", "temperatures rise rapidly"],
        correct: 0,
        explanation: "Clear skies allow strong nocturnal radiation cooling, while light winds limit mixing."
    },
    {
        question: "A farmer should avoid planting frost-sensitive crops in a valley-bottom frost pocket because:",
        options: ["cold air accumulates there", "rainfall is impossible there", "sunlight never reaches valleys", "air pressure is zero"],
        correct: 0,
        explanation: "Cold dense air drains downslope and accumulates in valley bottoms."
    },
    {
        question: "Urban areas are generally warmer than surrounding rural areas because of:",
        options: ["urban heat island effects", "lower building density", "greater vegetation cover", "complete absence of energy use"],
        correct: 0,
        explanation: "Built surfaces absorb and store heat, while human activities also release additional heat."
    },
    {
        question: "Which urban surface contributes strongly to heat storage?",
        options: ["Concrete and asphalt", "Natural wetlands", "Forest canopy", "Moist agricultural soil"],
        correct: 0,
        explanation: "Dense built materials absorb and retain solar energy."
    },
    {
        question: "Which strategy would most effectively reduce the urban heat island effect?",
        options: ["Increasing vegetation and green spaces", "Increasing dark paved surfaces", "Removing trees", "Increasing building density everywhere"],
        correct: 0,
        explanation: "Vegetation provides shade and cooling through evapotranspiration."
    },
    {
        question: "A pollution dome develops when:",
        options: ["pollutants accumulate over an urban area under stable atmospheric conditions", "rainfall removes all pollutants", "strong convection rapidly disperses pollutants", "cities have no emissions"],
        correct: 0,
        explanation: "Stable air can trap pollutants over an urban area."
    },
    {
        question: "Which condition would most strongly favour a pollution dome?",
        options: ["Strong vertical mixing", "Temperature inversion", "Heavy convection", "Strong winds"],
        correct: 1,
        explanation: "Inversions suppress vertical mixing and trap pollutants near the surface."
    },
    {
        question: "Which urban strategy can reduce pollution concentrations?",
        options: ["Improving public transport", "Increasing private-car dependence", "Removing vegetation", "Increasing industrial emissions"],
        correct: 0,
        explanation: "Efficient public transport can reduce the number of vehicles and associated emissions."
    },
    {
        question: "Which statement best explains why urban climates differ from rural climates?",
        options: ["Cities alter surface materials, heat storage, airflow and atmospheric composition", "Rural areas receive no solar radiation", "Cities have no evaporation", "Rural areas have no vegetation"],
        correct: 0,
        explanation: "Urbanisation changes the physical surface and energy balance of an area."
    },

    // ============================================================
    // SECTION E: Drainage Basins (76-100)
    // ============================================================
    {
        question: "The area drained by a river and all its tributaries is called a:",
        options: ["watershed", "drainage basin", "floodplain", "delta"],
        correct: 1,
        explanation: "A drainage basin is the area from which water drains into a river system."
    },
    {
        question: "The boundary separating two drainage basins is called the:",
        options: ["confluence", "watershed", "source", "mouth"],
        correct: 1,
        explanation: "A watershed separates adjacent drainage basins."
    },
    {
        question: "A smaller river flowing into a larger river is a:",
        options: ["tributary", "watershed", "delta", "interfluve"],
        correct: 0,
        explanation: "Tributaries feed water into the main river channel."
    },
    {
        question: "The point where two rivers meet is called a:",
        options: ["source", "confluence", "watershed", "mouth"],
        correct: 1,
        explanation: "A confluence is where two or more channels join."
    },
    {
        question: "Infiltration refers to:",
        options: ["water flowing over the surface", "water entering the soil", "water evaporating from oceans", "sediment being deposited"],
        correct: 1,
        explanation: "Infiltration occurs when water enters the soil from the surface."
    },
    {
        question: "High soil permeability generally results in:",
        options: ["greater infiltration", "zero infiltration", "greater surface runoff", "no groundwater recharge"],
        correct: 0,
        explanation: "Permeable materials allow water to pass through more easily."
    },
    {
        question: "Which combination would most likely produce high surface runoff?",
        options: ["Dense vegetation, permeable soil and gentle slopes", "Impermeable surfaces, steep slopes and intense rainfall", "Deep porous soil and low rainfall", "Dense forest and flat terrain"],
        correct: 1,
        explanation: "Steep slopes, intense rainfall and impermeable surfaces reduce infiltration and increase runoff."
    },
    {
        question: "Which factor tends to reduce drainage density?",
        options: ["Dense vegetation", "Impermeable rock", "Steep slopes", "High rainfall intensity"],
        correct: 0,
        explanation: "Vegetation increases interception and infiltration, reducing surface runoff and channel development."
    },
    {
        question: "A drainage pattern controlled by alternating resistant and less-resistant rock layers is most likely:",
        options: ["trellis", "radial", "centripetal", "dendritic"],
        correct: 0,
        explanation: "Trellis drainage commonly develops where resistant and less-resistant rock bands occur."
    },
    {
        question: "A river network spreading outward from a central high point is:",
        options: ["radial", "centripetal", "rectangular", "deranged"],
        correct: 0,
        explanation: "Radial drainage flows outward from a central elevated area."
    },
    {
        question: "A drainage pattern in which streams flow toward a central depression is:",
        options: ["radial", "centripetal", "parallel", "dendritic"],
        correct: 1,
        explanation: "Centripetal drainage converges toward a central low area."
    },
    {
        question: "Dendritic drainage commonly develops where:",
        options: ["underlying rock has relatively uniform resistance", "strong faulting dominates", "parallel ridges control flow", "a volcanic cone is present"],
        correct: 0,
        explanation: "Uniform rock resistance allows branching streams to develop in a dendritic pattern."
    },
    {
        question: "Rectangular drainage is strongly associated with:",
        options: ["joints and faults", "uniform unconsolidated sediment", "volcanic cones only", "perfectly flat terrain"],
        correct: 0,
        explanation: "Streams exploit weaknesses such as joints and faults, producing angular channels."
    },
    {
        question: "A permanent river is one that:",
        options: ["flows only after storms", "flows throughout the year", "flows only during winter", "exists only underground"],
        correct: 1,
        explanation: "Permanent rivers maintain flow throughout the year."
    },
    {
        question: "An episodic river generally flows:",
        options: ["throughout the year", "only after exceptional rainfall events", "only when snow melts", "only underground"],
        correct: 1,
        explanation: "Episodic rivers flow only after major rainfall events."
    },
    {
        question: "An exotic river is one that:",
        options: ["receives water from a source region outside the area through which it flows", "has no tributaries", "flows only underground", "has no source"],
        correct: 0,
        explanation: "Exotic rivers receive substantial water from wetter source regions and may cross otherwise dry environments."
    },
    {
        question: "Stream order is used to:",
        options: ["classify channels within a drainage network", "measure rainfall only", "calculate temperature", "identify cloud types"],
        correct: 0,
        explanation: "Stream ordering provides a systematic way of classifying tributary channels."
    },
    {
        question: "Discharge refers to:",
        options: ["the amount of sediment in a river", "the volume of water passing a point per unit time", "the depth of the valley", "the width of a floodplain"],
        correct: 1,
        explanation: "River discharge is commonly measured in cubic metres per second."
    },
    {
        question: "If a river carries 120 m³ of water past a point in 10 seconds, its discharge is:",
        options: ["10 m³/s", "12 m³/s", "120 m³/s", "1 200 m³/s"],
        correct: 1,
        explanation: "Discharge = volume ÷ time = 120 ÷ 10 = 12 m³/s."
    },
    {
        question: "Laminar flow occurs when water:",
        options: ["moves in relatively smooth parallel layers", "moves chaotically in all directions", "stops moving", "flows only underground"],
        correct: 0,
        explanation: "Laminar flow consists of relatively orderly layers of movement."
    },
    {
        question: "Turbulent flow is most likely where:",
        options: ["velocity is high and the channel is irregular", "velocity is zero", "the channel is perfectly smooth", "the river is frozen"],
        correct: 0,
        explanation: "High velocity and irregular channel conditions increase turbulence."
    },
    {
        question: "In the upper course of a river, the dominant process is generally:",
        options: ["vertical erosion", "deposition", "delta formation", "lateral deposition"],
        correct: 0,
        explanation: "Steep gradients favour vertical erosion and valley deepening."
    },
    {
        question: "The lower course of a river is generally characterised by:",
        options: ["gentle gradient and greater deposition", "extreme vertical erosion only", "waterfalls everywhere", "narrow V-shaped valleys only"],
        correct: 0,
        explanation: "Reduced gradient and high sediment load encourage deposition."
    },
    {
        question: "The outside bend of a meander is generally characterised by:",
        options: ["deposition only", "faster flow and erosion", "no water movement", "groundwater recharge only"],
        correct: 1,
        explanation: "Faster flow on the outer bend produces hydraulic action and abrasion, forming an undercut slope."
    },
    {
        question: "The inside bend of a meander generally contains a:",
        options: ["slip-off slope", "waterfall", "gorge", "knickpoint"],
        correct: 0,
        explanation: "Slower flow on the inside bend encourages deposition and forms a slip-off slope."
    },

    // ============================================================
    // SECTION F: Fluvial Landforms (101-125)
    // ============================================================
    {
        question: "An oxbow lake forms when:",
        options: ["a meander loop is cut off from the main channel", "a waterfall migrates upstream", "a river captures another river", "a delta is eroded completely"],
        correct: 0,
        explanation: "Erosion at the meander neck can eventually isolate the loop."
    },
    {
        question: "A floodplain is mainly formed through:",
        options: ["deposition during repeated flooding", "volcanic eruption", "glacial erosion only", "tectonic uplift alone"],
        correct: 0,
        explanation: "Floodwaters deposit sediment across the valley floor, gradually building a floodplain."
    },
    {
        question: "Natural levees develop when:",
        options: ["sediment is deposited near river banks during floods", "rivers erode their sources", "groundwater evaporates", "waterfalls form"],
        correct: 0,
        explanation: "Coarser sediment is deposited close to the channel as floodwater loses velocity."
    },
    {
        question: "A delta is most likely to form where:",
        options: ["a river enters a standing body of water and loses velocity", "a river enters a steep mountain valley", "vertical erosion dominates", "the river gradient increases sharply"],
        correct: 0,
        explanation: "Reduced velocity causes sediment deposition at the river mouth."
    },
    {
        question: "A waterfall often develops where:",
        options: ["resistant and less-resistant rocks occur together", "there is no difference in rock resistance", "the valley is completely flat", "deposition dominates everywhere"],
        correct: 0,
        explanation: "Differential erosion can create a step over resistant rock."
    },
    {
        question: "River rejuvenation occurs when:",
        options: ["the river gains renewed erosive energy", "deposition completely stops", "rainfall permanently disappears", "a river becomes shorter"],
        correct: 0,
        explanation: "A rejuvenated river gains energy and begins renewed vertical erosion."
    },
    {
        question: "Which event could cause river rejuvenation?",
        options: ["Land uplift", "Reduced gradient", "Increased base level", "Reduced discharge only"],
        correct: 0,
        explanation: "Uplift increases the river's potential energy and encourages renewed incision."
    },
    {
        question: "A knickpoint is:",
        options: ["a sudden break in the longitudinal profile", "a river mouth", "a floodplain deposit", "a tributary"],
        correct: 0,
        explanation: "A knickpoint represents a sudden change in river gradient."
    },
    {
        question: "River terraces are evidence of:",
        options: ["renewed vertical erosion", "complete absence of erosion", "only coastal erosion", "tropical cyclone formation"],
        correct: 0,
        explanation: "Former floodplain surfaces can be left above the present channel when a river incises."
    },
    {
        question: "An incised meander indicates:",
        options: ["strong vertical erosion", "no erosion", "purely depositional conditions", "coastal sedimentation"],
        correct: 0,
        explanation: "Rejuvenation can cause a meandering river to cut deeply into its valley."
    },
    {
        question: "River capture occurs when:",
        options: ["one river diverts the headwaters of another", "two deltas merge", "a river freezes", "rainfall stops"],
        correct: 0,
        explanation: "River capture, or stream piracy, occurs when a more aggressive river intercepts another drainage system."
    },
    {
        question: "Headward erosion contributes to river capture because it:",
        options: ["extends a river basin toward the source", "decreases channel length", "increases deposition at the mouth", "prevents erosion"],
        correct: 0,
        explanation: "Upstream erosion allows one river to extend toward and eventually intercept another river."
    },
    {
        question: "The river that diverts another river is the:",
        options: ["captured stream", "captor stream", "misfit stream", "antecedent stream"],
        correct: 1,
        explanation: "The captor stream captures water from the neighbouring drainage system."
    },
    {
        question: "The former channel left with reduced flow after capture may become a:",
        options: ["misfit stream", "delta", "waterfall", "natural levee"],
        correct: 0,
        explanation: "A misfit stream is too small for the valley in which it flows, often following river capture."
    },
    {
        question: "A sharp bend marking the former direction of the captured stream is called an:",
        options: ["elbow of capture", "interfluve", "oxbow", "thermal belt"],
        correct: 0,
        explanation: "The elbow of capture indicates where the drainage direction changed."
    },
    {
        question: "A wind gap is evidence commonly associated with:",
        options: ["river capture", "tropical cyclone formation", "urbanisation", "delta formation"],
        correct: 0,
        explanation: "A wind gap may represent an abandoned former river route following capture."
    },
    {
        question: "Which factor would increase the likelihood of river capture?",
        options: ["Resistant rock preventing headward erosion", "Rapid headward erosion of one stream", "Completely flat terrain", "Absence of tributaries"],
        correct: 1,
        explanation: "Aggressive headward erosion increases the likelihood of intercepting a neighbouring drainage system."
    },
    {
        question: "A graded river has:",
        options: ["a balanced profile where erosion and deposition are broadly adjusted", "no sediment", "only waterfalls", "an infinitely steep gradient"],
        correct: 0,
        explanation: "A graded river has adjusted its profile and sediment load to prevailing conditions."
    },
    {
        question: "The ultimate base level of erosion is:",
        options: ["sea level", "the watershed", "the river source", "the floodplain"],
        correct: 0,
        explanation: "Sea level is regarded as the permanent base level for most rivers."
    },
    {
        question: "A temporary base level could be:",
        options: ["a resistant rock layer creating a waterfall", "the ocean", "the atmosphere", "the watershed"],
        correct: 0,
        explanation: "Resistant features can temporarily interrupt downward erosion."
    },
    {
        question: "Which landform is strongly associated with river rejuvenation?",
        options: ["River terrace", "Delta only", "Beach ridge", "Coral reef"],
        correct: 0,
        explanation: "River terraces are remnants of former valley floors left above the rejuvenated channel."
    },
    {
        question: "If land uplift occurs downstream, a river may:",
        options: ["increase its vertical erosion", "immediately stop flowing", "become a tropical cyclone", "lose all sediment"],
        correct: 0,
        explanation: "Uplift increases the gradient and encourages renewed incision."
    },
    {
        question: "A river that has captured another drainage basin will most likely cause the captor stream to experience:",
        options: ["increased discharge", "zero discharge", "reduced catchment area", "complete evaporation"],
        correct: 0,
        explanation: "The captor stream receives additional water from the captured drainage system."
    },
    {
        question: "Which human activity could be affected by river capture?",
        options: ["Agriculture and water availability", "Only astronomy", "Only ocean fishing", "None"],
        correct: 0,
        explanation: "Changes in drainage can alter water supply, irrigation, ecosystems and settlement patterns."
    },
    {
        question: "Which statement best distinguishes river capture from river rejuvenation?",
        options: ["Capture changes drainage connections; rejuvenation increases erosive energy", "Capture only affects oceans", "Rejuvenation occurs only during cyclones", "They are identical processes"],
        correct: 0,
        explanation: "River capture concerns drainage diversion, while rejuvenation concerns renewed river erosion."
    },

    // ============================================================
    // SECTION G: Catchment Management (126-140)
    // ============================================================
    {
        question: "Deforestation in a catchment is likely to:",
        options: ["increase interception", "increase runoff and erosion", "eliminate flooding", "increase infiltration everywhere"],
        correct: 1,
        explanation: "Removing vegetation reduces interception and root binding, increasing runoff and erosion."
    },
    {
        question: "Overgrazing can increase soil erosion because:",
        options: ["vegetation cover is reduced", "soil becomes permanently frozen", "infiltration always increases", "rainfall decreases"],
        correct: 0,
        explanation: "Reduced vegetation leaves soil exposed to runoff and erosion."
    },
    {
        question: "Eutrophication is commonly caused by excessive:",
        options: ["nutrients entering water bodies", "oxygen entering rivers", "sand entering deserts", "sunlight entering forests"],
        correct: 0,
        explanation: "Excess nutrients such as nitrates and phosphates stimulate algal growth and can reduce dissolved oxygen."
    },
    {
        question: "Which activity can contribute to eutrophication?",
        options: ["Agricultural fertiliser runoff", "Tree planting", "Wetland restoration", "Soil conservation"],
        correct: 0,
        explanation: "Fertilisers can introduce excessive nutrients into rivers and dams."
    },
    {
        question: "Wetlands are important in catchment management because they can:",
        options: ["store water and reduce flood peaks", "eliminate all evaporation", "increase erosion", "prevent groundwater recharge"],
        correct: 0,
        explanation: "Wetlands can retain water, reduce flood peaks and improve water quality."
    },
    {
        question: "Which strategy would best reduce soil erosion on steep agricultural slopes?",
        options: ["Contour farming", "Removing vegetation", "Overgrazing", "Increasing bare soil"],
        correct: 0,
        explanation: "Contour farming slows runoff by following contour lines."
    },
    {
        question: "Planting vegetation along riverbanks can:",
        options: ["stabilise banks", "increase bank erosion", "eliminate infiltration", "prevent all rainfall"],
        correct: 0,
        explanation: "Roots bind soil and vegetation slows runoff."
    },
    {
        question: "Urbanisation increases flood risk because:",
        options: ["impermeable surfaces reduce infiltration", "vegetation always increases", "runoff decreases", "drainage becomes unnecessary"],
        correct: 0,
        explanation: "Roads, roofs and paving prevent water from infiltrating into the soil."
    },
    {
        question: "A catchment-management approach should consider:",
        options: ["the drainage basin as an interconnected system", "only the river mouth", "only individual farms", "only urban areas"],
        correct: 0,
        explanation: "Actions upstream can affect downstream water quantity and quality."
    },
    {
        question: "Which is the most sustainable approach to river pollution?",
        options: ["Treat wastewater before discharge", "Increase untreated discharge", "Remove wetlands", "Increase dumping"],
        correct: 0,
        explanation: "Treating wastewater reduces pollutants entering natural water systems."
    },
    {
        question: "A dam may alter downstream river conditions by:",
        options: ["changing discharge and sediment movement", "eliminating evaporation", "increasing every flood", "creating a watershed automatically"],
        correct: 0,
        explanation: "Dams regulate flow and trap sediment, altering downstream processes."
    },
    {
        question: "Which factor most directly increases infiltration?",
        options: ["Permeable soil", "Concrete", "Asphalt", "Compacted soil"],
        correct: 0,
        explanation: "Permeable soil allows water to enter and move through the ground."
    },
    {
        question: "Which combination best represents integrated catchment management?",
        options: ["Soil conservation + pollution control + vegetation restoration", "Deforestation + overgrazing + dumping", "Urban expansion into wetlands", "Removing riparian vegetation"],
        correct: 0,
        explanation: "Integrated management addresses several interconnected causes of catchment degradation."
    },
    {
        question: "A city wants to reduce stormwater runoff. Which strategy is most appropriate?",
        options: ["Increase permeable surfaces and green infrastructure", "Concrete every open space", "Remove wetlands", "Increase road paving"],
        correct: 0,
        explanation: "Permeable surfaces and green infrastructure allow greater infiltration and temporary water storage."
    },
    {
        question: "Why is catchment management particularly important in South Africa?",
        options: ["Water resources are unevenly distributed and vulnerable to human pressure", "South Africa has unlimited water", "Rivers are unaffected by human activities", "All rainfall is evenly distributed"],
        correct: 0,
        explanation: "Water scarcity, variable rainfall and human impacts make effective catchment management essential."
    },

    // ============================================================
    // SECTION H: Mapwork and GIS (141-170)
    // ============================================================
    {
        question: "A 1:50 000 map scale means 1 cm on the map represents:",
        options: ["50 m", "500 m", "5 km", "50 km"],
        correct: 1,
        explanation: "50 000 cm = 500 m."
    },
    {
        question: "On a 1:50 000 map, two points are 6 cm apart. Their straight-line distance is:",
        options: ["300 m", "3 km", "30 km", "0.3 km"],
        correct: 1,
        explanation: "6 × 500 m = 3 000 m = 3 km."
    },
    {
        question: "A map distance of 8 cm on a 1:50 000 map represents:",
        options: ["2 km", "4 km", "8 km", "40 km"],
        correct: 1,
        explanation: "8 × 500 m = 4 km."
    },
    {
        question: "A slope rises 150 m over a horizontal distance of 3 km. The average gradient is:",
        options: ["1:5", "1:10", "1:20", "1:50"],
        correct: 2,
        explanation: "3 km = 3 000 m. Gradient = 3 000 ÷ 150 = 1:20."
    },
    {
        question: "A gradient of 1:10 compared with 1:50 indicates that the 1:10 slope is:",
        options: ["gentler", "steeper", "flat", "horizontal"],
        correct: 1,
        explanation: "A smaller horizontal distance per unit vertical rise indicates a steeper slope."
    },
    {
        question: "Contour lines that are very close together indicate:",
        options: ["a gentle slope", "a steep slope", "flat terrain", "a river valley only"],
        correct: 1,
        explanation: "Closely spaced contours represent rapid elevation change over a short horizontal distance."
    },
    {
        question: "Widely spaced contour lines indicate:",
        options: ["steep terrain", "gentle terrain", "vertical cliffs", "waterfalls only"],
        correct: 1,
        explanation: "Elevation changes slowly over horizontal distance."
    },
    {
        question: "A contour interval of 20 m means consecutive contour lines differ in elevation by:",
        options: ["2 m", "10 m", "20 m", "200 m"],
        correct: 2,
        explanation: "The contour interval is the vertical difference between adjacent contours."
    },
    {
        question: "If a topographic map has contours of 1 000 m and 1 100 m with four equal intervals between them, the contour interval is:",
        options: ["10 m", "20 m", "25 m", "50 m"],
        correct: 1,
        explanation: "100 m divided by 5 contour intervals = 20 m."
    },
    {
        question: "A true bearing is measured:",
        options: ["clockwise from north", "anticlockwise from south", "from east only", "from west only"],
        correct: 0,
        explanation: "Bearings are measured clockwise from true north."
    },
    {
        question: "A bearing of 090° indicates:",
        options: ["north", "east", "south", "west"],
        correct: 1,
        explanation: "090° is due east."
    },
    {
        question: "A bearing of 180° indicates:",
        options: ["north", "east", "south", "west"],
        correct: 2,
        explanation: "180° is due south."
    },
    {
        question: "If magnetic declination is 12° west, a true bearing of 100° would require a magnetic bearing of approximately:",
        options: ["88°", "100°", "112°", "120°"],
        correct: 2,
        explanation: "With west declination, the magnetic bearing is approximately 12° greater: 100° + 12° = 112°."
    },
    {
        question: "Which feature is most easily identified from a set of concentric contours with increasing elevation toward the centre?",
        options: ["Depression", "Hill", "Valley", "Saddle"],
        correct: 1,
        explanation: "Closed contours with increasing elevation inward indicate a hill."
    },
    {
        question: "Contour lines forming a V-shape that points upstream generally indicate:",
        options: ["a valley", "a ridge", "a hilltop", "a flat plain"],
        correct: 0,
        explanation: "V-shaped contours point toward higher elevation/upstream in valleys."
    },
    {
        question: "A cross-section is primarily used to show:",
        options: ["relief along a selected line", "population only", "rainfall only", "political boundaries only"],
        correct: 0,
        explanation: "A cross-section represents changes in elevation along a line."
    },
    {
        question: "Vertical exaggeration is calculated using:",
        options: ["horizontal scale ÷ vertical scale", "vertical scale ÷ horizontal scale", "vertical distance × rainfall", "gradient ÷ distance"],
        correct: 1,
        explanation: "Vertical exaggeration compares the vertical scale to the horizontal scale."
    },
    {
        question: "If the horizontal scale is 1:50 000 and the vertical scale is 1:10 000, the vertical exaggeration is:",
        options: ["0.2", "2", "5", "10"],
        correct: 2,
        explanation: "VE = 50 000 ÷ 10 000 = 5."
    },
    {
        question: "Intervisibility asks whether:",
        options: ["two locations can see one another without relief obstruction", "two rivers have the same discharge", "two settlements have the same population", "two clouds have the same temperature"],
        correct: 0,
        explanation: "Intervisibility determines whether terrain blocks the line of sight between two points."
    },
    {
        question: "A straight-line distance differs from route distance because:",
        options: ["route distance follows the actual path", "straight-line distance follows every road", "route distance is always shorter", "straight-line distance includes every curve"],
        correct: 0,
        explanation: "Straight-line distance is the direct distance, whereas route distance follows the actual route."
    },
    {
        question: "GIS stands for:",
        options: ["Geographic Information System", "General Information Survey", "Geographic Integration Scale", "Global Imaging Structure"],
        correct: 0,
        explanation: "GIS is a system used to capture, store, analyse and display geographically referenced information."
    },
    {
        question: "Which is an example of spatial data?",
        options: ["The location of a school", "The school's principal's name only", "The school's phone number only", "The school timetable only"],
        correct: 0,
        explanation: "Spatial data describes the location or geometry of features."
    },
    {
        question: "Which is an example of attribute data?",
        options: ["A road's geographic coordinates", "A road's name and surface type", "A river's position", "A building's polygon"],
        correct: 1,
        explanation: "Attribute data provides descriptive information about spatial features."
    },
    {
        question: "A school represented as a single location on a GIS map is best represented by a:",
        options: ["point", "line", "polygon", "raster cell only"],
        correct: 0,
        explanation: "A point is suitable for discrete locations such as schools."
    },
    {
        question: "A road network is best represented using:",
        options: ["points only", "lines", "polygons only", "pixels only"],
        correct: 1,
        explanation: "Linear features such as roads and rivers are commonly represented by lines."
    },
    {
        question: "A municipal boundary is best represented as a:",
        options: ["point", "line", "polygon", "pixel only"],
        correct: 2,
        explanation: "Areas with boundaries are represented as polygons."
    },
    {
        question: "Raster data consists primarily of:",
        options: ["a grid of cells or pixels", "only points", "only lines", "only written descriptions"],
        correct: 0,
        explanation: "Raster datasets represent space as a grid of cells."
    },
    {
        question: "A GIS buffer around a hospital could be used to:",
        options: ["identify areas within a specified distance", "delete all roads", "measure cloud temperature", "change population age"],
        correct: 0,
        explanation: "Buffering creates zones around spatial features based on distance."
    },
    {
        question: "A GIS query is used to:",
        options: ["select data according to specified conditions", "physically move a river", "change the weather", "increase rainfall"],
        correct: 0,
        explanation: "Queries allow users to retrieve features that meet specified criteria."
    },
    {
        question: "Which GIS operation would best identify all schools within 5 km of a proposed hospital?",
        options: ["Buffering and spatial querying", "Random sampling only", "Contour drawing only", "Weather forecasting"],
        correct: 0,
        explanation: "A 5 km buffer can be created around the hospital, followed by a spatial query for schools inside it."
    },

    // ============================================================
    // SECTION I: Rural Settlements (171-185)
    // ============================================================
    {
        question: "The site of a settlement refers to:",
        options: ["its relationship with surrounding settlements", "the actual physical location on which it is built", "its sphere of influence", "its population size"],
        correct: 1,
        explanation: "Site refers to the physical characteristics of the actual location."
    },
    {
        question: "Situation refers to:",
        options: ["the physical ground directly beneath a settlement", "the settlement's relative location in relation to other places", "only the climate", "only the geology"],
        correct: 1,
        explanation: "Situation describes the settlement's relationship to surrounding physical and human features."
    },
    {
        question: "A rural settlement developing along a road is most likely:",
        options: ["round", "linear", "dispersed only", "radial"],
        correct: 1,
        explanation: "Linear settlements commonly develop along roads, rivers or other transport routes."
    },
    {
        question: "A settlement located at the intersection of two major roads is likely to have:",
        options: ["crossroad shape", "circular shape only", "random shape only", "isolated shape"],
        correct: 0,
        explanation: "Crossroad settlements develop where transport routes intersect."
    },
    {
        question: "Which factor would most strongly encourage a rural settlement near a river?",
        options: ["Reliable water supply", "Lack of water", "Permanent flooding", "Absence of agricultural land"],
        correct: 0,
        explanation: "Rivers can provide water for domestic use, livestock and agriculture."
    },
    {
        question: "A dispersed rural settlement pattern is most likely where:",
        options: ["farms are widely separated", "houses are concentrated around a central point", "all residents live along one road", "buildings form a dense CBD"],
        correct: 0,
        explanation: "Dispersed settlements have homes separated across the landscape."
    },
    {
        question: "Rural-urban migration refers to:",
        options: ["movement from urban to rural areas only", "movement of people from rural areas to urban areas", "movement between countries only", "movement of goods between cities"],
        correct: 1,
        explanation: "Rural-urban migration is movement from rural areas toward urban centres."
    },
    {
        question: "Which is a rural push factor?",
        options: ["Limited employment opportunities", "Better urban universities", "More urban entertainment", "Greater urban healthcare"],
        correct: 0,
        explanation: "Poor employment opportunities can push people out of rural areas."
    },
    {
        question: "Which is an urban pull factor?",
        options: ["Higher perceived employment opportunities", "Rural drought", "Rural land degradation", "Rural unemployment"],
        correct: 0,
        explanation: "Employment opportunities in cities can attract migrants."
    },
    {
        question: "Rural depopulation may lead to:",
        options: ["reduced labour availability", "automatic economic growth", "increased rural population", "increased agricultural labour supply"],
        correct: 0,
        explanation: "Out-migration can reduce the working-age population in rural areas."
    },
    {
        question: "Which strategy could help reduce rural depopulation?",
        options: ["Improve infrastructure and employment opportunities", "Remove services", "Close schools", "Reduce connectivity"],
        correct: 0,
        explanation: "Better services, infrastructure and employment can make rural areas more attractive."
    },
    {
        question: "Land restitution primarily aims to:",
        options: ["return land rights to people dispossessed through discriminatory laws", "increase urbanisation", "remove all agricultural land", "increase industrial pollution"],
        correct: 0,
        explanation: "Restitution addresses historical land dispossession."
    },
    {
        question: "Land redistribution primarily involves:",
        options: ["making land more accessible to previously disadvantaged people", "concentrating all land in cities", "eliminating agriculture", "increasing rural depopulation"],
        correct: 0,
        explanation: "Redistribution seeks to broaden access to land."
    },
    {
        question: "A major challenge associated with rural land reform can be:",
        options: ["limited infrastructure and support services", "excessive urban CBD density", "airport congestion only", "skyscraper construction"],
        correct: 0,
        explanation: "Successful land reform can depend on infrastructure, finance, skills, markets and support."
    },
    {
        question: "Which statement best describes a rural settlement issue?",
        options: ["It may involve unequal access to resources and infrastructure", "It concerns only skyscraper construction", "It has no relationship with economic development", "It occurs only in wealthy countries"],
        correct: 0,
        explanation: "Rural communities may face inadequate infrastructure, services, water and investment."
    },

    // ============================================================
    // SECTION J: Urban Settlements (186-200)
    // ============================================================
    {
        question: "Urbanisation refers to:",
        options: ["an increasing proportion of people living in urban areas", "decreasing urban population", "migration from cities to farms only", "rural land becoming agricultural"],
        correct: 0,
        explanation: "Urbanisation involves an increasing share of the population living in urban areas."
    },
    {
        question: "Urban growth refers to:",
        options: ["an increase in the population of an urban area", "a decrease in city population", "rural depopulation only", "expansion of forests"],
        correct: 0,
        explanation: "Urban growth concerns an increase in the population of an urban settlement."
    },
    {
        question: "Urban expansion refers primarily to:",
        options: ["physical growth of the built-up area", "decline in city boundaries", "rural depopulation only", "reduction in land use"],
        correct: 0,
        explanation: "Urban expansion describes outward physical development."
    },
    {
        question: "Urban sprawl is best described as:",
        options: ["controlled high-density development", "low-density outward expansion of urban areas", "rural conservation", "urban depopulation"],
        correct: 1,
        explanation: "Urban sprawl involves extensive outward growth, often with low-density development."
    },
    {
        question: "Counter-urbanisation involves:",
        options: ["movement from urban areas toward rural or smaller settlements", "rural residents moving into CBDs only", "international migration only", "growth of informal settlements only"],
        correct: 0,
        explanation: "Counter-urbanisation represents movement away from major urban centres."
    },
    {
        question: "The threshold population of a service refers to:",
        options: ["minimum population needed to support that service", "maximum population of a city", "distance between cities", "height of buildings"],
        correct: 0,
        explanation: "Threshold is the minimum market population required to make a service viable."
    },
    {
        question: "High-order goods generally have:",
        options: ["high thresholds and large ranges", "low thresholds and tiny ranges", "no consumers", "no economic value"],
        correct: 0,
        explanation: "High-order services require larger markets and people are generally willing to travel further for them."
    },
    {
        question: "A specialist cardiac hospital is most likely a:",
        options: ["low-order function", "high-order function", "basic rural function", "periodic function"],
        correct: 1,
        explanation: "Specialist services have high thresholds and large spheres of influence."
    },
    {
        question: "A convenience store selling everyday goods is generally:",
        options: ["low-order", "high-order", "specialised industrial", "international only"],
        correct: 0,
        explanation: "Everyday goods have low thresholds and consumers travel short distances for them."
    },
    {
        question: "A CBD generally has:",
        options: ["high land values and intense commercial activity", "only agriculture", "very low accessibility", "no public transport"],
        correct: 0,
        explanation: "CBDs are highly accessible commercial cores where land values are often high."
    },
    {
        question: "Urban decentralisation can occur when:",
        options: ["businesses move from the CBD to peripheral nodes", "all businesses remain in the CBD", "agriculture moves into the CBD", "rural settlements disappear"],
        correct: 0,
        explanation: "Commercial decentralisation involves movement of activities away from the traditional CBD."
    },
    {
        question: "Urban blight refers to:",
        options: ["physical deterioration and decline of parts of an urban area", "rapid agricultural growth", "improved housing quality", "increased vegetation"],
        correct: 0,
        explanation: "Urban blight involves deterioration of buildings, infrastructure and environmental quality."
    },
    {
        question: "Which is a common consequence of rapid urbanisation?",
        options: ["Housing shortages", "Automatic elimination of poverty", "Reduced traffic", "Unlimited service provision"],
        correct: 0,
        explanation: "Rapid population growth can outpace housing and infrastructure provision."
    },
    {
        question: "Informal settlements commonly develop because:",
        options: ["formal housing supply cannot meet demand", "all residents prefer industrial land", "governments prohibit housing", "urban land is unlimited"],
        correct: 0,
        explanation: "Rapid urban growth, poverty and inadequate formal housing supply contribute to informal settlement growth."
    },
    {
        question: "Which strategy would most effectively address several urban challenges simultaneously?",
        options: ["Integrated public transport, housing, infrastructure and land-use planning", "Expanding informal settlements without services", "Increasing private-car dependence", "Removing public transport"],
        correct: 0,
        explanation: "Urban challenges are interconnected, so integrated planning can address mobility, housing, service provision and land use together."
    }
];

// Register this subject's questions
const SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
SUBJECT_QUESTIONS['geography'] = GEOGRAPHY_QUESTIONS;