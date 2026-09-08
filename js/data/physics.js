// ============================================================
// PHYSICS — 200 Questions
// ============================================================

if (typeof window.SUBJECT_QUESTIONS === 'undefined') {
    window.SUBJECT_QUESTIONS = {};
}

var PHYSICS_QUESTIONS = [
    // ============================================================
    // SECTION A — NEWTON'S LAWS, FORCES AND FRICTION (1-20)
    // ============================================================
    {
        question: "A 5 kg object experiences a resultant force of 20 N. Its acceleration is:",
        options: ["2 m·s⁻²", "4 m·s⁻²", "5 m·s⁻²", "100 m·s⁻²"],
        correct: 1,
        explanation: "F = ma, so a = 20/5 = 4 m·s⁻²."
    },
    {
        question: "Newton's First Law is also called the law of:",
        options: ["acceleration", "action and reaction", "inertia", "gravitation"],
        correct: 2,
        explanation: "Objects resist changes to their state of motion because of inertia."
    },
    {
        question: "A passenger moves forward when a car suddenly brakes. This is mainly due to:",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Newton's Law of Gravitation"],
        correct: 0,
        explanation: "The passenger tends to maintain the car's original velocity."
    },
    {
        question: "A 10 kg object is pushed with 50 N while friction acts backwards with 20 N. The acceleration is:",
        options: ["2 m·s⁻²", "3 m·s⁻²", "5 m·s⁻²", "7 m·s⁻²"],
        correct: 1,
        explanation: "F_net = 50 - 20 = 30 N; a = 30/10 = 3 m·s⁻²."
    },
    {
        question: "Static friction acts:",
        options: ["only when an object is moving", "opposite the tendency of motion", "in the direction of motion", "vertically upwards only"],
        correct: 1,
        explanation: "Static friction prevents relative motion between surfaces."
    },
    {
        question: "The maximum static friction is given by:",
        options: ["f_s = μ_kN", "f_s = ma", "f_s,max = μ_sN", "f_s = mg"],
        correct: 2,
        explanation: "f_s,max = μ_sN is the formula for maximum static friction."
    },
    {
        question: "A 20 kg box rests on a horizontal surface. If μ_s = 0.4, the maximum static friction is approximately:",
        options: ["8 N", "49 N", "78.4 N", "196 N"],
        correct: 2,
        explanation: "f_s,max = 0.4(20)(9.8) = 78.4 N."
    },
    {
        question: "Kinetic friction is generally calculated using:",
        options: ["f_k = μ_kN", "f_k = ma", "f_k = mg", "f_k = mv"],
        correct: 0,
        explanation: "f_k = μ_kN is the formula for kinetic friction."
    },
    {
        question: "A box is moving at constant velocity across a rough horizontal surface. The resultant force is:",
        options: ["zero", "equal to friction", "greater than friction", "equal to its weight"],
        correct: 0,
        explanation: "Constant velocity means zero acceleration and therefore zero resultant force."
    },
    {
        question: "Which force is perpendicular to a horizontal surface?",
        options: ["friction", "tension", "normal force", "applied horizontal force"],
        correct: 2,
        explanation: "The normal force is perpendicular to the surface."
    },
    {
        question: "The weight of a 60 kg learner on Earth is approximately:",
        options: ["60 N", "294 N", "588 N", "980 N"],
        correct: 2,
        explanation: "W = mg = 60(9.8) = 588 N."
    },
    {
        question: "Mass differs from weight because mass is:",
        options: ["a force", "measured in newtons", "independent of gravitational field strength", "always zero in space"],
        correct: 2,
        explanation: "Mass is a scalar quantity independent of gravitational field strength."
    },
    {
        question: "An astronaut has a mass of 70 kg on Earth. On the Moon the astronaut's mass is:",
        options: ["zero", "smaller", "larger", "unchanged"],
        correct: 3,
        explanation: "Mass is invariant; it does not change with location."
    },
    {
        question: "The astronaut's weight on the Moon is lower because:",
        options: ["mass decreases", "lunar gravitational acceleration is lower", "inertia disappears", "the astronaut has no mass"],
        correct: 1,
        explanation: "Weight = mg, and lunar gravitational acceleration is lower than on Earth."
    },
    {
        question: "Newton's Third Law forces:",
        options: ["act on the same object", "are always unequal", "act on different objects", "occur at different times"],
        correct: 2,
        explanation: "Newton's Third Law forces act on different objects."
    },
    {
        question: "A book rests on a table. The Newton Third Law partner to Earth's gravitational force on the book is:",
        options: ["the normal force on the book", "the gravitational force of the book on Earth", "the weight of the table", "friction on the book"],
        correct: 1,
        explanation: "The book attracts Earth with an equal and opposite gravitational force."
    },
    {
        question: "A 10 kg object accelerates at 3 m·s⁻². The resultant force is:",
        options: ["3 N", "13 N", "30 N", "300 N"],
        correct: 2,
        explanation: "F = ma = 10 × 3 = 30 N."
    },
    {
        question: "If the resultant force on an object doubles while its mass remains constant, acceleration:",
        options: ["halves", "doubles", "remains unchanged", "becomes zero"],
        correct: 1,
        explanation: "a = F/m, so if F doubles, a doubles."
    },
    {
        question: "If the mass of an object doubles while the resultant force remains constant, its acceleration:",
        options: ["doubles", "halves", "quadruples", "remains unchanged"],
        correct: 1,
        explanation: "a = F/m, so if m doubles, a halves."
    },
    {
        question: "A force diagram should show:",
        options: ["only resultant force", "all forces acting on the object", "only gravitational forces", "only horizontal forces"],
        correct: 1,
        explanation: "A force diagram should show all forces acting on the object."
    },

    // ============================================================
    // SECTION B — INCLINED PLANES AND CONNECTED BODIES (21-30)
    // ============================================================
    {
        question: "For an object on an inclined plane, the component of weight parallel to the slope is:",
        options: ["mg cos θ", "mg sin θ", "mg tan θ", "mg"],
        correct: 1,
        explanation: "The parallel component is mg sin θ."
    },
    {
        question: "The component of weight perpendicular to the slope is:",
        options: ["mg cos θ", "mg sin θ", "mg tan θ", "zero"],
        correct: 0,
        explanation: "The perpendicular component is mg cos θ."
    },
    {
        question: "For a frictionless inclined plane, increasing the angle of inclination generally causes the acceleration down the plane to:",
        options: ["decrease", "increase", "remain zero", "become infinite"],
        correct: 1,
        explanation: "a = g sin θ, so as θ increases, a increases."
    },
    {
        question: "A 5 kg object is on a frictionless 30° incline. Its component of weight parallel to the plane is approximately:",
        options: ["12.25 N", "24.5 N", "42.4 N", "49 N"],
        correct: 1,
        explanation: "mg sin 30° = 5(9.8)(0.5) = 24.5 N."
    },
    {
        question: "For the same object, the perpendicular component of weight is:",
        options: ["12.25 N", "24.5 N", "42.4 N", "49 N"],
        correct: 2,
        explanation: "mg cos 30° ≈ 42.4 N."
    },
    {
        question: "A normal force on an inclined plane is generally:",
        options: ["equal to mg in all cases", "greater than mg", "less than mg", "always zero"],
        correct: 2,
        explanation: "N = mg cos θ, which is less than mg for θ > 0."
    },
    {
        question: "Two objects connected by a light, inextensible string have:",
        options: ["different accelerations", "equal acceleration magnitude", "no acceleration", "unrelated motion"],
        correct: 1,
        explanation: "The string ensures they move with the same acceleration magnitude."
    },
    {
        question: "A 4 kg mass and a 6 kg mass are connected over a frictionless pulley. Ignoring pulley mass, the heavier mass moves:",
        options: ["upward", "downward", "sideways", "nowhere"],
        correct: 1,
        explanation: "The heavier mass accelerates downward."
    },
    {
        question: "In an ideal string over a frictionless pulley, the tension is:",
        options: ["different on each side", "zero", "the same throughout the string", "always equal to weight"],
        correct: 2,
        explanation: "Tension is constant throughout an ideal string."
    },
    {
        question: "If friction on an inclined plane increases while the applied force stays constant, acceleration down the plane will generally:",
        options: ["increase", "decrease", "remain unchanged", "become infinite"],
        correct: 1,
        explanation: "Increasing friction opposes motion and reduces acceleration."
    },

    // ============================================================
    // SECTION C — NEWTON'S LAW OF UNIVERSAL GRAVITATION (31-40)
    // ============================================================
    {
        question: "Newton's Law of Universal Gravitation states that gravitational force is proportional to:",
        options: ["m₁ + m₂", "m₁m₂", "r²", "1/(m₁m₂)"],
        correct: 1,
        explanation: "F ∝ m₁m₂."
    },
    {
        question: "Gravitational force is inversely proportional to:",
        options: ["r", "r²", "m₁m₂", "g"],
        correct: 1,
        explanation: "F ∝ 1/r²."
    },
    {
        question: "If the distance between two masses doubles, gravitational force becomes:",
        options: ["twice as large", "four times as large", "half as large", "one-quarter as large"],
        correct: 3,
        explanation: "F ∝ 1/r², so doubling r reduces F to 1/4."
    },
    {
        question: "If both masses are doubled while distance remains constant, gravitational force becomes:",
        options: ["twice as large", "four times as large", "half as large", "unchanged"],
        correct: 1,
        explanation: "F ∝ m₁m₂, so doubling both masses makes F four times larger."
    },
    {
        question: "The SI unit of gravitational force is:",
        options: ["kg", "N", "J", "W"],
        correct: 1,
        explanation: "Force is measured in newtons (N)."
    },
    {
        question: "Weight is:",
        options: ["mass × velocity", "mass × acceleration due to gravity", "force × distance", "mass ÷ gravity"],
        correct: 1,
        explanation: "Weight = mass × gravitational acceleration."
    },
    {
        question: "An object is weightless when:",
        options: ["its mass is zero", "it experiences no gravitational interaction whatsoever", "its apparent weight is zero", "it has no momentum"],
        correct: 2,
        explanation: "Weightlessness occurs when apparent weight is zero."
    },
    {
        question: "The gravitational force between two objects is always:",
        options: ["repulsive", "attractive", "zero", "electromagnetic"],
        correct: 1,
        explanation: "Gravitational force is always attractive."
    },
    {
        question: "If Earth's radius increased while Earth's mass stayed constant, surface gravitational acceleration would:",
        options: ["increase", "decrease", "stay constant", "become zero"],
        correct: 1,
        explanation: "g = GM/R², so increasing R decreases g."
    },
    {
        question: "An object's weight on another planet depends mainly on:",
        options: ["its mass and the planet's gravitational field", "its colour", "its velocity only", "its volume only"],
        correct: 0,
        explanation: "Weight = mass × gravitational field strength of the planet."
    },

    // ============================================================
    // SECTION D — MOMENTUM AND IMPULSE (41-60)
    // ============================================================
    {
        question: "Momentum is defined as:",
        options: ["p = mv", "p = ma", "p = Fd", "p = m/v"],
        correct: 0,
        explanation: "Momentum = mass × velocity."
    },
    {
        question: "Momentum is a:",
        options: ["scalar", "vector", "constant for every object", "dimensionless quantity"],
        correct: 1,
        explanation: "Momentum has both magnitude and direction."
    },
    {
        question: "The SI unit of momentum is:",
        options: ["N", "J", "kg·m·s⁻¹", "W"],
        correct: 2,
        explanation: "Momentum is measured in kg·m·s⁻¹."
    },
    {
        question: "A 4 kg object moves at 5 m·s⁻¹. Its momentum is:",
        options: ["0.8 kg·m·s⁻¹", "9 kg·m·s⁻¹", "20 kg·m·s⁻¹", "25 kg·m·s⁻¹"],
        correct: 2,
        explanation: "p = mv = 4 × 5 = 20 kg·m·s⁻¹."
    },
    {
        question: "A stationary object has:",
        options: ["maximum momentum", "zero momentum", "negative momentum", "infinite momentum"],
        correct: 1,
        explanation: "If velocity is zero, momentum is zero."
    },
    {
        question: "Impulse is equal to:",
        options: ["F/t", "Ft", "F/t²", "mv/t"],
        correct: 1,
        explanation: "Impulse = force × time."
    },
    {
        question: "Impulse is equal to:",
        options: ["change in momentum", "change in mass", "change in displacement", "kinetic energy"],
        correct: 0,
        explanation: "Impulse = Δp = mΔv."
    },
    {
        question: "A force of 50 N acts for 0.2 s. The impulse is:",
        options: ["2.5 N·s", "10 N·s", "25 N·s", "250 N·s"],
        correct: 1,
        explanation: "Impulse = Ft = 50 × 0.2 = 10 N·s."
    },
    {
        question: "Airbags reduce injury mainly because they:",
        options: ["increase momentum", "decrease stopping time", "increase stopping time", "increase the passenger's mass"],
        correct: 2,
        explanation: "Increasing collision time reduces average force."
    },
    {
        question: "For the same change in momentum, increasing collision time causes average force to:",
        options: ["increase", "decrease", "remain unchanged", "become infinite"],
        correct: 1,
        explanation: "F_avg = Δp/Δt, so increasing Δt decreases F_avg."
    },
    {
        question: "A 2 kg ball changes velocity from +5 m·s⁻¹ to -3 m·s⁻¹. Its change in momentum is:",
        options: ["-6 kg·m·s⁻¹", "-10 kg·m·s⁻¹", "-16 kg·m·s⁻¹", "+16 kg·m·s⁻¹"],
        correct: 2,
        explanation: "Δp = m(vf - vi) = 2(-3 - 5) = -16 kg·m·s⁻¹."
    },
    {
        question: "In an isolated system, total momentum:",
        options: ["increases", "decreases", "remains constant", "becomes zero"],
        correct: 2,
        explanation: "Momentum is conserved in isolated systems."
    },
    {
        question: "An isolated system has:",
        options: ["zero external resultant force", "zero internal forces", "zero mass", "zero velocity"],
        correct: 0,
        explanation: "An isolated system has no external resultant force."
    },
    {
        question: "In an elastic collision:",
        options: ["momentum only is conserved", "kinetic energy only is conserved", "both momentum and kinetic energy are conserved", "neither is conserved"],
        correct: 2,
        explanation: "Both momentum and kinetic energy are conserved in elastic collisions."
    },
    {
        question: "In a perfectly inelastic collision:",
        options: ["objects separate with the same speeds", "objects stick together", "kinetic energy is always conserved", "momentum is not conserved"],
        correct: 1,
        explanation: "Perfectly inelastic collisions result in objects sticking together."
    },
    {
        question: "A 2 kg trolley moving at 4 m·s⁻¹ collides with a stationary 2 kg trolley. If they stick together, their common velocity is:",
        options: ["1 m·s⁻¹", "2 m·s⁻¹", "4 m·s⁻¹", "8 m·s⁻¹"],
        correct: 1,
        explanation: "By conservation of momentum: (2)(4) + (2)(0) = (4)v → v = 2 m·s⁻¹."
    },
    {
        question: "Momentum conservation is particularly useful in:",
        options: ["collisions", "measuring temperature", "measuring resistance only", "calculating density only"],
        correct: 0,
        explanation: "Momentum conservation is especially useful in collision problems."
    },
    {
        question: "If the velocity of an object doubles, its momentum:",
        options: ["halves", "doubles", "quadruples", "remains unchanged"],
        correct: 1,
        explanation: "p = mv, so doubling v doubles p."
    },
    {
        question: "If both mass and velocity double, momentum:",
        options: ["doubles", "triples", "quadruples", "remains unchanged"],
        correct: 2,
        explanation: "p = mv, so 2m × 2v = 4mv."
    },
    {
        question: "The direction of momentum is the same as the direction of:",
        options: ["acceleration", "force", "velocity", "displacement only"],
        correct: 2,
        explanation: "Momentum is in the direction of velocity."
    },

    // ============================================================
    // SECTION E — VERTICAL PROJECTILE MOTION (61-75)
    // ============================================================
    {
        question: "A projectile is an object moving under the influence of:",
        options: ["gravity only", "friction only", "tension only", "an applied force only"],
        correct: 0,
        explanation: "A projectile moves under gravity only (ignoring air resistance)."
    },
    {
        question: "At the highest point of a vertically thrown object, its velocity is:",
        options: ["maximum upward", "zero", "maximum downward", "equal to g"],
        correct: 1,
        explanation: "At the highest point, the object momentarily stops before falling back."
    },
    {
        question: "At the highest point, acceleration is:",
        options: ["zero", "9.8 m·s⁻² upward", "9.8 m·s⁻² downward", "infinite"],
        correct: 2,
        explanation: "Gravity always acts downward with acceleration 9.8 m·s⁻²."
    },
    {
        question: "An object is thrown upward at 19.6 m·s⁻¹. Time to reach maximum height is:",
        options: ["0.5 s", "1 s", "2 s", "4 s"],
        correct: 2,
        explanation: "t = v/g = 19.6/9.8 = 2 s."
    },
    {
        question: "For the object in Question 64, maximum height above the launch point is:",
        options: ["9.8 m", "19.6 m", "39.2 m", "98 m"],
        correct: 1,
        explanation: "h = v²/(2g) = (19.6)²/(2×9.8) = 19.6 m."
    },
    {
        question: "Ignoring air resistance, the acceleration of a falling object is:",
        options: ["constant downward", "constant upward", "zero", "dependent on mass"],
        correct: 0,
        explanation: "Free-fall acceleration is constant at 9.8 m·s⁻² downward."
    },
    {
        question: "Two objects of different masses are dropped simultaneously from the same height in a vacuum. They:",
        options: ["have different accelerations", "land simultaneously", "heavier one lands first", "lighter one lands first"],
        correct: 1,
        explanation: "In a vacuum, all objects fall with the same acceleration regardless of mass."
    },
    {
        question: "For a freely falling object, the velocity-time graph is:",
        options: ["horizontal", "straight line with constant positive slope", "curved upward", "vertical"],
        correct: 1,
        explanation: "v = u + at, so the graph is a straight line with slope g."
    },
    {
        question: "The gradient of a velocity-time graph represents:",
        options: ["displacement", "velocity", "acceleration", "momentum"],
        correct: 2,
        explanation: "Gradient of v-t graph = acceleration."
    },
    {
        question: "The area under a velocity-time graph represents:",
        options: ["acceleration", "displacement", "force", "power"],
        correct: 1,
        explanation: "Area under v-t graph = displacement."
    },
    {
        question: "The acceleration-time graph for free fall near Earth's surface is:",
        options: ["zero", "constant", "exponential", "sinusoidal"],
        correct: 1,
        explanation: "Acceleration is constant at g = 9.8 m·s⁻²."
    },
    {
        question: "A ball is thrown vertically upward. During its upward journey its acceleration is:",
        options: ["upward", "downward", "zero", "changing direction"],
        correct: 1,
        explanation: "Gravity always acts downward."
    },
    {
        question: "At the highest point of a projectile's path:",
        options: ["velocity and acceleration are both zero", "velocity is zero but acceleration is not", "acceleration is zero but velocity is not", "both are maximum"],
        correct: 1,
        explanation: "Velocity is zero at the highest point, but acceleration is still g downward."
    },
    {
        question: "A ball falls for 3 s from rest. Its final velocity is approximately:",
        options: ["9.8 m·s⁻¹", "19.6 m·s⁻¹", "29.4 m·s⁻¹", "39.2 m·s⁻¹"],
        correct: 2,
        explanation: "v = gt = 9.8 × 3 = 29.4 m·s⁻¹."
    },
    {
        question: "The displacement of a freely falling object from rest after 2 s is:",
        options: ["9.8 m", "19.6 m", "29.4 m", "39.2 m"],
        correct: 1,
        explanation: "s = ½gt² = ½(9.8)(4) = 19.6 m."
    },

    // ============================================================
    // SECTION F — WORK, ENERGY AND POWER (76-100)
    // ============================================================
    {
        question: "Work done by a constant force is:",
        options: ["Fd cos θ", "Fd sin θ", "F/d", "Fd²"],
        correct: 0,
        explanation: "W = Fd cos θ."
    },
    {
        question: "If force and displacement are perpendicular, work done is:",
        options: ["maximum", "zero", "negative", "infinite"],
        correct: 1,
        explanation: "W = Fd cos 90° = 0."
    },
    {
        question: "A force of 20 N moves an object 5 m in the same direction. Work done is:",
        options: ["4 J", "25 J", "100 J", "400 J"],
        correct: 2,
        explanation: "W = Fd = 20 × 5 = 100 J."
    },
    {
        question: "If a force acts opposite to displacement, work done by that force is:",
        options: ["positive", "zero", "negative", "infinite"],
        correct: 2,
        explanation: "W = Fd cos 180° = -Fd."
    },
    {
        question: "The SI unit of work is:",
        options: ["watt", "joule", "newton", "pascal"],
        correct: 1,
        explanation: "Work is measured in joules (J)."
    },
    {
        question: "The kinetic energy of an object is:",
        options: ["mv", "mgh", "½mv²", "Fd"],
        correct: 2,
        explanation: "K = ½mv²."
    },
    {
        question: "A 4 kg object moving at 5 m·s⁻¹ has kinetic energy:",
        options: ["20 J", "40 J", "50 J", "100 J"],
        correct: 2,
        explanation: "K = ½(4)(25) = 50 J."
    },
    {
        question: "If velocity doubles, kinetic energy becomes:",
        options: ["twice as large", "three times as large", "four times as large", "unchanged"],
        correct: 2,
        explanation: "K ∝ v², so doubling v quadruples K."
    },
    {
        question: "Gravitational potential energy near Earth's surface is:",
        options: ["mgh", "mv", "ma", "Fd/t"],
        correct: 0,
        explanation: "U = mgh."
    },
    {
        question: "A 2 kg object is lifted 5 m. Its gravitational potential energy increase is approximately:",
        options: ["49 J", "98 J", "196 J", "490 J"],
        correct: 1,
        explanation: "ΔU = mgh = 2 × 9.8 × 5 = 98 J."
    },
    {
        question: "The work-energy theorem states that net work equals:",
        options: ["change in momentum", "change in kinetic energy", "change in mass", "gravitational force"],
        correct: 1,
        explanation: "W_net = ΔK."
    },
    {
        question: "If net work on an object is positive, its kinetic energy:",
        options: ["decreases", "increases", "remains unchanged", "becomes zero"],
        correct: 1,
        explanation: "Positive work increases kinetic energy."
    },
    {
        question: "If net work is negative, kinetic energy:",
        options: ["increases", "decreases", "remains constant", "doubles"],
        correct: 1,
        explanation: "Negative work decreases kinetic energy."
    },
    {
        question: "Mechanical energy is the sum of:",
        options: ["force and momentum", "kinetic and gravitational potential energy", "mass and weight", "power and work"],
        correct: 1,
        explanation: "Mechanical energy = K + U."
    },
    {
        question: "In the absence of non-conservative forces, mechanical energy:",
        options: ["increases", "decreases", "is conserved", "becomes zero"],
        correct: 2,
        explanation: "Mechanical energy is conserved when only conservative forces act."
    },
    {
        question: "Friction is classified as a:",
        options: ["conservative force", "non-conservative force", "gravitational force", "electrostatic force"],
        correct: 1,
        explanation: "Friction is non-conservative because work depends on path."
    },
    {
        question: "A conservative force has work that is:",
        options: ["dependent on path", "independent of path", "always zero", "always negative"],
        correct: 1,
        explanation: "Conservative forces have path-independent work."
    },
    {
        question: "Power is defined as:",
        options: ["work × time", "work/time", "force/time", "energy × time"],
        correct: 1,
        explanation: "P = W/t."
    },
    {
        question: "A machine performs 2 000 J of work in 10 s. Its average power is:",
        options: ["20 W", "100 W", "200 W", "20 000 W"],
        correct: 2,
        explanation: "P = W/t = 2000/10 = 200 W."
    },
    {
        question: "The SI unit of power is:",
        options: ["joule", "newton", "watt", "coulomb"],
        correct: 2,
        explanation: "Power is measured in watts (W)."
    },
    {
        question: "A constant force of 100 N moves an object at 4 m·s⁻¹ in the direction of the force. Power is:",
        options: ["25 W", "96 W", "400 W", "2 500 W"],
        correct: 2,
        explanation: "P = Fv = 100 × 4 = 400 W."
    },
    {
        question: "A motor lifts 500 kg vertically at constant speed. If the speed is increased, the required power:",
        options: ["decreases", "increases", "becomes zero", "remains unchanged"],
        correct: 1,
        explanation: "P = Fv = mgv, so increasing v increases P."
    },
    {
        question: "If friction acts on a moving object, mechanical energy is generally converted into:",
        options: ["chemical energy only", "thermal/internal energy", "mass", "momentum"],
        correct: 1,
        explanation: "Friction converts mechanical energy into thermal energy."
    },
    {
        question: "A 10 kg object slides down a frictionless slope. Its loss in gravitational potential energy equals:",
        options: ["its gain in kinetic energy", "zero", "its mass", "its power"],
        correct: 0,
        explanation: "By conservation of mechanical energy, ΔU = ΔK."
    },
    {
        question: "A machine receives 1 000 J of energy and produces 800 J useful output. Its efficiency is:",
        options: ["20%", "50%", "80%", "125%"],
        correct: 2,
        explanation: "Efficiency = (useful output/input) × 100 = (800/1000) × 100 = 80%."
    },

    // ============================================================
    // SECTION G — WAVES, SOUND AND DOPPLER EFFECT (101-120)
    // ============================================================
    {
        question: "The distance between two successive crests is called:",
        options: ["amplitude", "frequency", "wavelength", "period"],
        correct: 2,
        explanation: "Wavelength is the distance between successive crests."
    },
    {
        question: "Frequency is measured in:",
        options: ["metres", "hertz", "joules", "seconds"],
        correct: 1,
        explanation: "Frequency is measured in hertz (Hz)."
    },
    {
        question: "The relationship between wave speed, frequency and wavelength is:",
        options: ["v = f/λ", "v = fλ", "v = λ/f", "v = f + λ"],
        correct: 1,
        explanation: "v = fλ."
    },
    {
        question: "A wave has frequency 5 Hz and wavelength 2 m. Its speed is:",
        options: ["2.5 m·s⁻¹", "7 m·s⁻¹", "10 m·s⁻¹", "25 m·s⁻¹"],
        correct: 2,
        explanation: "v = fλ = 5 × 2 = 10 m·s⁻¹."
    },
    {
        question: "The period of a 20 Hz wave is:",
        options: ["0.02 s", "0.05 s", "0.2 s", "20 s"],
        correct: 1,
        explanation: "T = 1/f = 1/20 = 0.05 s."
    },
    {
        question: "A transverse wave has particles vibrating:",
        options: ["parallel to wave direction", "perpendicular to wave direction", "randomly", "only upward"],
        correct: 1,
        explanation: "Transverse waves have perpendicular particle motion."
    },
    {
        question: "A longitudinal wave has particles vibrating:",
        options: ["perpendicular to propagation", "parallel to propagation", "in circles", "at rest"],
        correct: 1,
        explanation: "Longitudinal waves have parallel particle motion."
    },
    {
        question: "Sound in air is primarily:",
        options: ["transverse", "longitudinal", "electromagnetic", "stationary only"],
        correct: 1,
        explanation: "Sound is a longitudinal wave."
    },
    {
        question: "Sound cannot travel through:",
        options: ["air", "water", "steel", "a vacuum"],
        correct: 3,
        explanation: "Sound requires a medium; it cannot travel in a vacuum."
    },
    {
        question: "The pitch of a sound is related to:",
        options: ["amplitude", "frequency", "speed only", "wavelength only"],
        correct: 1,
        explanation: "Pitch corresponds to frequency."
    },
    {
        question: "Loudness is primarily related to:",
        options: ["amplitude", "frequency", "wavelength", "period"],
        correct: 0,
        explanation: "Loudness corresponds to amplitude."
    },
    {
        question: "If the frequency of a sound increases, its pitch:",
        options: ["decreases", "increases", "remains unchanged", "becomes zero"],
        correct: 1,
        explanation: "Higher frequency means higher pitch."
    },
    {
        question: "The Doppler effect is observed when there is relative motion between:",
        options: ["source and observer", "two stationary objects", "two resistors", "mass and gravity"],
        correct: 0,
        explanation: "Doppler effect requires relative motion between source and observer."
    },
    {
        question: "When a sound source approaches a stationary observer, the observed frequency:",
        options: ["decreases", "increases", "becomes zero", "remains unchanged"],
        correct: 1,
        explanation: "Approaching source causes higher observed frequency."
    },
    {
        question: "When a sound source moves away from an observer, the observed pitch:",
        options: ["increases", "decreases", "becomes infinite", "remains unchanged"],
        correct: 1,
        explanation: "Receding source causes lower observed frequency/pitch."
    },
    {
        question: "An ambulance approaches an observer. The siren sounds higher pitched because:",
        options: ["wavelength increases", "wavefronts become compressed", "sound speed becomes zero", "amplitude becomes zero"],
        correct: 1,
        explanation: "Approaching source compresses wavefronts, reducing wavelength and increasing frequency."
    },
    {
        question: "When the source passes the observer, the observed frequency:",
        options: ["suddenly changes from higher to lower", "remains permanently high", "becomes zero", "doubles"],
        correct: 0,
        explanation: "As the source passes, the frequency shifts from higher to lower."
    },
    {
        question: "The Doppler effect can be used to measure:",
        options: ["relative velocity", "mass directly", "resistance directly", "gravitational constant"],
        correct: 0,
        explanation: "Doppler shift is used to measure relative velocity."
    },
    {
        question: "Red shift in light from distant galaxies provides evidence that:",
        options: ["the universe is contracting", "the universe is expanding", "light has no frequency", "galaxies are stationary"],
        correct: 1,
        explanation: "Red shift indicates galaxies are moving away, supporting expansion."
    },
    {
        question: "A red shift means observed wavelengths are:",
        options: ["shorter than emitted wavelengths", "longer than emitted wavelengths", "zero", "unchanged"],
        correct: 1,
        explanation: "Red shift corresponds to longer wavelengths (lower frequency)."
    },

    // ============================================================
    // SECTION H — ELECTROSTATICS (121-140)
    // ============================================================
    {
        question: "The SI unit of electric charge is:",
        options: ["ampere", "coulomb", "volt", "ohm"],
        correct: 1,
        explanation: "Charge is measured in coulombs (C)."
    },
    {
        question: "Like charges:",
        options: ["attract", "repel", "disappear", "have no force"],
        correct: 1,
        explanation: "Like charges repel each other."
    },
    {
        question: "Unlike charges:",
        options: ["repel", "attract", "have no interaction", "become neutral automatically"],
        correct: 1,
        explanation: "Unlike charges attract each other."
    },
    {
        question: "Coulomb's Law is:",
        options: ["F = kQ₁Q₂/r²", "F = kQ₁Q₂r²", "F = Q/r", "F = ma"],
        correct: 0,
        explanation: "Coulomb's Law: F = kQ₁Q₂/r²."
    },
    {
        question: "If the distance between two charges doubles, electrostatic force becomes:",
        options: ["twice as large", "four times as large", "half as large", "one-quarter as large"],
        correct: 3,
        explanation: "F ∝ 1/r², so doubling r reduces F to 1/4."
    },
    {
        question: "If one charge doubles, the electrostatic force:",
        options: ["halves", "doubles", "quadruples", "stays unchanged"],
        correct: 1,
        explanation: "F ∝ Q₁Q₂, so doubling one charge doubles F."
    },
    {
        question: "Two charges 2μC and 3μC are separated by 0.3 m. The magnitude of the force is approximately:",
        options: ["0.06 N", "0.6 N", "6 N", "60 N"],
        correct: 1,
        explanation: "F = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.3² = 0.6 N."
    },
    {
        question: "The electric field is defined as:",
        options: ["force per unit positive charge", "charge per unit force", "energy per unit mass", "force × charge"],
        correct: 0,
        explanation: "E = F/q."
    },
    {
        question: "The equation for electric field strength is:",
        options: ["E = Fq", "E = F/q", "E = q/F", "E = ma"],
        correct: 1,
        explanation: "E = F/q."
    },
    {
        question: "The electric field due to a point charge is:",
        options: ["E = kQ/r²", "E = kQr²", "E = Q/r", "E = Fr"],
        correct: 0,
        explanation: "E = kQ/r²."
    },
    {
        question: "Electric field lines around a positive point charge point:",
        options: ["inward", "outward", "randomly", "clockwise"],
        correct: 1,
        explanation: "Field lines point away from positive charges."
    },
    {
        question: "Electric field lines around a negative point charge point:",
        options: ["outward", "inward", "upward only", "downward only"],
        correct: 1,
        explanation: "Field lines point toward negative charges."
    },
    {
        question: "Electric field lines:",
        options: ["can cross each other", "never cross each other", "always form circles", "have no direction"],
        correct: 1,
        explanation: "Field lines never cross."
    },
    {
        question: "A positive test charge placed in an electric field experiences force:",
        options: ["opposite the field", "in the direction of the field", "perpendicular to the field", "always zero"],
        correct: 1,
        explanation: "Positive charges experience force in the field direction."
    },
    {
        question: "A negative charge in an electric field experiences force:",
        options: ["in the field direction", "opposite the field direction", "always upward", "always zero"],
        correct: 1,
        explanation: "Negative charges experience force opposite to the field."
    },
    {
        question: "The electric field is strongest where field lines are:",
        options: ["widely spaced", "closely spaced", "absent", "parallel to the ground"],
        correct: 1,
        explanation: "Closer field lines indicate stronger field."
    },
    {
        question: "If a test charge is doubled while the electric field remains unchanged, the force on it:",
        options: ["halves", "doubles", "remains unchanged", "becomes zero"],
        correct: 1,
        explanation: "F = qE, so doubling q doubles F."
    },
    {
        question: "A charge of 2×10⁻⁶ C experiences a force of 0.04 N. Electric field strength is:",
        options: ["2×10³ N/C", "2×10⁴ N/C", "8×10⁴ N/C", "2×10⁻⁸ N/C"],
        correct: 1,
        explanation: "E = F/q = 0.04 / 2×10⁻⁶ = 2×10⁴ N/C."
    },
    {
        question: "At the midpoint between two identical positive charges, the net electric field is:",
        options: ["maximum", "zero", "infinite", "downward"],
        correct: 1,
        explanation: "The fields from identical charges cancel at the midpoint."
    },
    {
        question: "At the midpoint between equal and opposite charges, the electric field:",
        options: ["is zero", "points from positive to negative", "points from negative to positive", "has no direction"],
        correct: 1,
        explanation: "The field points from the positive to the negative charge."
    },

    // ============================================================
    // SECTION I — ELECTRIC CIRCUITS (141-160)
    // ============================================================
    {
        question: "Electric current is:",
        options: ["energy per charge", "rate of flow of charge", "resistance per voltage", "force per charge"],
        correct: 1,
        explanation: "Current is the rate of flow of charge: I = ΔQ/Δt."
    },
    {
        question: "The SI unit of current is:",
        options: ["volt", "ampere", "ohm", "coulomb"],
        correct: 1,
        explanation: "Current is measured in amperes (A)."
    },
    {
        question: "Ohm's Law is:",
        options: ["V = IR", "V = I/R", "R = VI", "I = VR"],
        correct: 0,
        explanation: "Ohm's Law: V = IR."
    },
    {
        question: "A 12 V battery is connected to a 4 Ω resistor. Current is:",
        options: ["0.33 A", "3 A", "8 A", "48 A"],
        correct: 1,
        explanation: "I = V/R = 12/4 = 3 A."
    },
    {
        question: "A conductor obeying Ohm's Law has:",
        options: ["constant resistance at constant temperature", "resistance equal to zero", "current independent of voltage", "voltage always zero"],
        correct: 0,
        explanation: "Ohmic conductors have constant resistance at constant temperature."
    },
    {
        question: "In a series circuit, current through each resistor is:",
        options: ["different", "the same", "always zero", "infinite"],
        correct: 1,
        explanation: "Current is the same through all series components."
    },
    {
        question: "In a parallel circuit, the potential difference across each branch is:",
        options: ["the same", "always zero", "different in all cases", "infinite"],
        correct: 0,
        explanation: "Voltage is the same across all parallel branches."
    },
    {
        question: "Three 2 Ω resistors connected in series have equivalent resistance:",
        options: ["0.67 Ω", "2 Ω", "4 Ω", "6 Ω"],
        correct: 3,
        explanation: "R_series = 2 + 2 + 2 = 6 Ω."
    },
    {
        question: "Two 6 Ω resistors connected in parallel have equivalent resistance:",
        options: ["3 Ω", "6 Ω", "12 Ω", "36 Ω"],
        correct: 0,
        explanation: "1/R_parallel = 1/6 + 1/6 = 2/6 → R = 3 Ω."
    },
    {
        question: "Adding another resistor in series causes total resistance to:",
        options: ["decrease", "increase", "become zero", "remain unchanged"],
        correct: 1,
        explanation: "Series resistance adds."
    },
    {
        question: "Adding another branch in parallel generally causes total resistance to:",
        options: ["increase", "decrease", "remain unchanged", "become infinite"],
        correct: 1,
        explanation: "Parallel branches reduce total resistance."
    },
    {
        question: "Electrical power is:",
        options: ["P = VI", "P = V/I", "P = IR", "P = R/V"],
        correct: 0,
        explanation: "Power P = VI."
    },
    {
        question: "A 220 V appliance draws 5 A. Its power is:",
        options: ["44 W", "225 W", "1 100 W", "4 400 W"],
        correct: 2,
        explanation: "P = VI = 220 × 5 = 1 100 W."
    },
    {
        question: "Electrical energy consumed can be calculated using:",
        options: ["E = Pt", "E = P/t", "E = V/I", "E = IR"],
        correct: 0,
        explanation: "Energy = Power × time."
    },
    {
        question: "One kilowatt-hour means:",
        options: ["1 W for 1 000 h", "1 kW for 1 hour", "1 000 kW for 1 hour", "1 J for 1 hour"],
        correct: 1,
        explanation: "1 kWh = 1 kW × 1 hour."
    },
    {
        question: "A 2 kW heater operates for 3 hours. Energy consumed is:",
        options: ["0.67 kWh", "2 kWh", "5 kWh", "6 kWh"],
        correct: 3,
        explanation: "E = Pt = 2 × 3 = 6 kWh."
    },
    {
        question: "If electricity costs R2.50 per kWh, the heater in the previous question costs:",
        options: ["R5.00", "R7.50", "R15.00", "R25.00"],
        correct: 2,
        explanation: "Cost = 6 × 2.50 = R15.00."
    },
    {
        question: "A non-ohmic conductor:",
        options: ["always obeys Ohm's Law", "does not maintain constant resistance", "has zero resistance", "cannot carry current"],
        correct: 1,
        explanation: "Non-ohmic conductors have varying resistance."
    },
    {
        question: "An incandescent lamp is an example of a:",
        options: ["perfectly ohmic conductor", "non-ohmic conductor", "battery", "capacitor only"],
        correct: 1,
        explanation: "Lamps are non-ohmic as resistance changes with temperature."
    },
    {
        question: "The slope of a V-I graph for an ohmic resistor, with V on the y-axis and I on the x-axis, represents:",
        options: ["current", "resistance", "power", "charge"],
        correct: 1,
        explanation: "Slope = V/I = R."
    },

    // ============================================================
    // SECTION J — INTERNAL RESISTANCE AND EMF (161-170)
    // ============================================================
    {
        question: "EMF is best described as:",
        options: ["energy supplied per unit charge by a source", "resistance inside a resistor", "current through a wire", "energy lost in a resistor only"],
        correct: 0,
        explanation: "EMF = energy per unit charge supplied by the source."
    },
    {
        question: "A real battery has:",
        options: ["zero internal resistance", "internal resistance", "infinite resistance only", "no emf"],
        correct: 1,
        explanation: "All real batteries have internal resistance."
    },
    {
        question: "The terminal potential difference of a discharging battery is generally:",
        options: ["greater than its emf", "equal to zero", "less than its emf", "always negative"],
        correct: 2,
        explanation: "V = ε - Ir, so V < ε."
    },
    {
        question: "For a battery supplying current, ε =",
        options: ["V + Ir", "V - Ir", "Ir - V", "V/r"],
        correct: 0,
        explanation: "ε = V + Ir."
    },
    {
        question: "A battery has emf 12 V and internal resistance 1 Ω. If current is 2 A, terminal voltage is:",
        options: ["2 V", "10 V", "12 V", "14 V"],
        correct: 1,
        explanation: "V = ε - Ir = 12 - (2)(1) = 10 V."
    },
    {
        question: "Increasing external resistance generally causes current from a battery to:",
        options: ["increase", "decrease", "become infinite", "remain unchanged"],
        correct: 1,
        explanation: "I = ε/(R + r), so increasing R decreases I."
    },
    {
        question: "When a battery supplies current, energy is lost internally mainly because of:",
        options: ["internal resistance", "gravity", "magnetic fields only", "mass"],
        correct: 0,
        explanation: "Internal resistance dissipates energy as heat."
    },
    {
        question: "A battery's internal resistance can cause:",
        options: ["terminal voltage to fall under load", "current to become impossible", "emf to become zero", "charge to disappear"],
        correct: 0,
        explanation: "Internal resistance causes voltage drop under load."
    },
    {
        question: "For a circuit with emf 10 V, external resistance 4 Ω and internal resistance 1 Ω, current is:",
        options: ["1 A", "2 A", "2.5 A", "5 A"],
        correct: 1,
        explanation: "I = ε/(R + r) = 10/(4+1) = 2 A."
    },
    {
        question: "In the previous circuit, terminal voltage is:",
        options: ["2 V", "6 V", "8 V", "10 V"],
        correct: 2,
        explanation: "V = IR = 2 × 4 = 8 V."
    },

    // ============================================================
    // SECTION K — ELECTRODYNAMICS (171-180)
    // ============================================================
    {
        question: "A generator converts:",
        options: ["electrical energy to mechanical energy", "mechanical energy to electrical energy", "chemical energy to nuclear energy", "heat to mass"],
        correct: 1,
        explanation: "Generators convert mechanical energy to electrical energy."
    },
    {
        question: "An electric motor converts:",
        options: ["electrical energy into mechanical energy", "mechanical energy into electrical energy", "light into chemical energy", "gravitational energy into charge"],
        correct: 0,
        explanation: "Motors convert electrical energy to mechanical energy."
    },
    {
        question: "Generators operate using:",
        options: ["electrostatic repulsion only", "electromagnetic induction", "nuclear fission", "static friction"],
        correct: 1,
        explanation: "Generators use electromagnetic induction."
    },
    {
        question: "Motors operate primarily using:",
        options: ["motor effect", "photoelectric effect", "Doppler effect", "gravitational effect"],
        correct: 0,
        explanation: "Motors use the motor effect (force on current-carrying conductor in a magnetic field)."
    },
    {
        question: "Electromagnetic induction occurs when:",
        options: ["magnetic flux through a conductor changes", "resistance becomes zero", "current is absent", "mass changes"],
        correct: 0,
        explanation: "Induction requires changing magnetic flux."
    },
    {
        question: "Increasing the rate of change of magnetic flux generally increases induced:",
        options: ["mass", "emf", "resistance only", "gravitational force"],
        correct: 1,
        explanation: "Faster flux change induces greater emf."
    },
    {
        question: "Lenz's Law states that induced current:",
        options: ["always supports the change causing it", "opposes the change causing it", "has no magnetic effect", "flows randomly"],
        correct: 1,
        explanation: "Induced current opposes the change that produces it."
    },
    {
        question: "In an AC generator, the slip rings:",
        options: ["provide continuous electrical connection", "stop the rotor", "increase mass", "remove magnetic flux"],
        correct: 0,
        explanation: "Slip rings provide continuous connection in AC generators."
    },
    {
        question: "A DC generator uses:",
        options: ["slip rings only", "a split-ring commutator", "no magnetic field", "no coil"],
        correct: 1,
        explanation: "DC generators use a split-ring commutator."
    },
    {
        question: "A transformer operates using:",
        options: ["direct current only", "changing magnetic flux", "static charge only", "friction"],
        correct: 1,
        explanation: "Transformers use changing magnetic flux."
    },

    // ============================================================
    // SECTION L — ALTERNATING CURRENT (181-190)
    // ============================================================
    {
        question: "AC differs from DC because AC:",
        options: ["has no current", "periodically changes direction", "cannot carry energy", "has zero voltage always"],
        correct: 1,
        explanation: "AC periodically reverses direction."
    },
    {
        question: "For sinusoidal AC, I_rms =",
        options: ["I_max", "I_max/2", "I_max/√2", "2I_max"],
        correct: 2,
        explanation: "I_rms = I_max/√2."
    },
    {
        question: "If I_max = 10 A, I_rms is approximately:",
        options: ["5 A", "7.07 A", "10 A", "14.14 A"],
        correct: 1,
        explanation: "I_rms = 10/√2 = 7.07 A."
    },
    {
        question: "If V_rms = 220 V, the maximum voltage is approximately:",
        options: ["110 V", "220 V", "311 V", "440 V"],
        correct: 2,
        explanation: "V_max = 220 × √2 = 311 V."
    },
    {
        question: "For a purely resistive AC circuit:",
        options: ["P = I_rms V_rms", "P = I_max V_max only", "P = 0", "P = V/I"],
        correct: 0,
        explanation: "P = I_rms V_rms for resistive AC circuits."
    },
    {
        question: "AC is advantageous for transmission because:",
        options: ["voltage can be transformed easily", "it has no energy", "current cannot flow", "resistance becomes zero"],
        correct: 0,
        explanation: "AC voltage can be easily transformed using transformers."
    },
    {
        question: "High-voltage transmission reduces energy loss because:",
        options: ["current decreases for the same power", "resistance increases", "voltage becomes zero", "power disappears"],
        correct: 0,
        explanation: "P = VI, so higher V means lower I for same power, reducing I²R losses."
    },
    {
        question: "For fixed power, increasing transmission voltage causes current to:",
        options: ["increase", "decrease", "remain unchanged", "become infinite"],
        correct: 1,
        explanation: "I = P/V, so increasing V decreases I."
    },
    {
        question: "Power loss in transmission wires is approximately:",
        options: ["P_loss = I²R", "P_loss = IR²", "P_loss = V/R²", "P_loss = R/I"],
        correct: 0,
        explanation: "Power loss = I²R."
    },
    {
        question: "If current in a transmission line is halved, resistive power loss becomes:",
        options: ["twice as large", "half as large", "one-quarter as large", "four times as large"],
        correct: 2,
        explanation: "P_loss ∝ I², so halving I reduces loss to 1/4."
    },

    // ============================================================
    // SECTION M — PHOTOELECTRIC EFFECT (191-200)
    // ============================================================
    {
        question: "The photoelectric effect occurs when:",
        options: ["electrons are emitted from a metal due to suitable-frequency light", "protons are emitted from metals", "atoms stop moving", "light disappears"],
        correct: 0,
        explanation: "Photoelectric effect: light ejects electrons from a metal surface."
    },
    {
        question: "The minimum frequency required to eject electrons is called:",
        options: ["resonant frequency", "threshold frequency", "natural frequency", "Doppler frequency"],
        correct: 1,
        explanation: "Threshold frequency is the minimum frequency for photoemission."
    },
    {
        question: "The minimum energy required to remove an electron from a metal is called:",
        options: ["kinetic energy", "work function", "potential energy", "rest energy"],
        correct: 1,
        explanation: "The work function (W₀) is the minimum energy to remove an electron."
    },
    {
        question: "The photoelectric equation is:",
        options: ["hf = W₀ + K_max", "hf = W₀ - K_max", "E = mc² only", "F = ma"],
        correct: 0,
        explanation: "hf = W₀ + K_max."
    },
    {
        question: "If incident light frequency is below the threshold frequency:",
        options: ["electrons are emitted slowly", "electrons are emitted faster", "no photoelectrons are emitted", "all electrons are emitted"],
        correct: 2,
        explanation: "No photoemission occurs below threshold frequency."
    },
    {
        question: "Increasing light intensity above threshold frequency primarily increases:",
        options: ["maximum kinetic energy of each electron", "number of emitted electrons", "work function", "threshold frequency"],
        correct: 1,
        explanation: "Intensity affects the number of electrons, not their energy."
    },
    {
        question: "Increasing frequency above threshold generally increases:",
        options: ["maximum kinetic energy", "work function", "electron mass", "wavelength"],
        correct: 0,
        explanation: "K_max = hf - W₀, so higher frequency means higher K_max."
    },
    {
        question: "The photoelectric effect supports the idea that light has:",
        options: ["only wave properties", "particle-like properties", "no energy", "no frequency"],
        correct: 1,
        explanation: "Photoelectric effect demonstrates the particle nature of light (photons)."
    },
    {
        question: "An electron is emitted with maximum kinetic energy 2 eV. If the photon energy is 5 eV, the work function is:",
        options: ["2 eV", "3 eV", "5 eV", "7 eV"],
        correct: 1,
        explanation: "W₀ = hf - K_max = 5 - 2 = 3 eV."
    },
    {
        question: "An emission spectrum is produced when electrons in atoms:",
        options: ["move from higher to lower energy levels and emit photons", "move from lower to higher levels and always absorb photons", "stop moving", "lose their mass"],
        correct: 0,
        explanation: "Emission spectra are produced when electrons drop to lower energy levels and emit photons."
    }
];


window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['physics'] = PHYSICS_QUESTIONS;
console.log('✅ Physics loaded:', window.SUBJECT_QUESTIONS['physics'].length, 'questions');