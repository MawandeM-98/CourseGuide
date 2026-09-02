// ============================================================
// COURSEGUIDE - DATA
// ============================================================

// Subject configuration
const SUBJECTS = [
    { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#6c63ff' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: '#2ecc71' },
    { id: 'life-sciences', name: 'Life Sciences', icon: '🧬', color: '#e74c3c' },
    { id: 'physics', name: 'Physics', icon: '⚡', color: '#f39c12' },
    { id: 'accounting', name: 'Accounting', icon: '💰', color: '#3498db' },
    { id: 'business-studies', name: 'Business Studies', icon: '📊', color: '#9b59b6' }
];

// ----- LIFE SCIENCES QUESTIONS (FULL 200) -----
// Combined from both mock exams you provided

// FIRST MOCK EXAM (100 Questions) - Basic NSC Style
const LIFE_SCIENCES_BASIC = [
    // SECTION A — Reproduction, Meiosis and Human Reproduction (1–20)
    {
        question: "During meiosis, homologous chromosomes separate and move towards opposite poles of the cell. Which phase of meiosis is being described?",
        options: ["Prophase I", "Anaphase I", "Metaphase II", "Anaphase II"],
        correct: 1,
        explanation: "During Anaphase I, homologous chromosomes separate and move to opposite poles. Sister chromatids remain attached. Anaphase II is when sister chromatids separate. (Exam trap: Homologous chromosomes → Anaphase I. Sister chromatids → Anaphase II.)"
    },
    {
        question: "Which process during meiosis is primarily responsible for producing new combinations of alleles on homologous chromosomes?",
        options: ["DNA replication", "Crossing over", "Cytokinesis", "Translation"],
        correct: 1,
        explanation: "Crossing over occurs during Prophase I of meiosis. Sections of DNA are exchanged between non-sister chromatids of homologous chromosomes, creating new combinations of alleles. DNA replication copies DNA but does not exchange chromosome sections."
    },
    {
        question: "A human skin cell contains 46 chromosomes. How many chromosomes would normally be present in a human gamete?",
        options: ["23", "46", "69", "92"],
        correct: 0,
        explanation: "Human body cells are diploid with 46 chromosomes. Gametes are haploid and contain half: 46 ÷ 2 = 23. This reduction is essential because fertilisation restores the diploid number."
    },
    {
        question: "Which statement correctly describes the importance of meiosis?",
        options: [
            "It produces genetically identical diploid cells.",
            "It maintains the chromosome number after fertilisation by producing haploid gametes.",
            "It doubles the chromosome number before fertilisation.",
            "It produces body cells needed for growth."
        ],
        correct: 1,
        explanation: "Meiosis produces haploid gametes. When two gametes fuse during fertilisation, 23 + 23 = 46. Without meiosis, chromosome numbers would double every generation."
    },
    {
        question: "A learner observes a cell in which chromosomes are arranged along the equator of the cell. The chromosomes are still in homologous pairs. Which stage is most likely being observed?",
        options: ["Metaphase I", "Metaphase II", "Anaphase I", "Telophase II"],
        correct: 0,
        explanation: "During Metaphase I, homologous chromosome pairs line up at the equator. In Metaphase II, chromosomes line up individually rather than as homologous pairs."
    },
    {
        question: "Which hormone is mainly responsible for stimulating ovulation in the human female reproductive system?",
        options: ["Oestrogen", "Progesterone", "Luteinising hormone", "Testosterone"],
        correct: 2,
        explanation: "A surge in LH triggers ovulation. FSH → follicle develops → oestrogen rises → LH surge → ovulation."
    },
    {
        question: "After ovulation, the follicle that released the ovum develops into the:",
        options: ["placenta", "corpus luteum", "Graafian follicle", "endometrium"],
        correct: 1,
        explanation: "After ovulation, the ruptured follicle develops into the corpus luteum. It secretes mainly progesterone to maintain the endometrium."
    },
    {
        question: "Which hormone is mainly secreted by the corpus luteum and helps maintain the thickness of the endometrium?",
        options: ["FSH", "LH", "Progesterone", "Testosterone"],
        correct: 2,
        explanation: "Progesterone maintains the thickened endometrium, making it suitable for implantation and helping maintain pregnancy."
    },
    {
        question: "Fertilisation in humans normally occurs in the:",
        options: ["uterus", "vagina", "oviduct", "ovary"],
        correct: 2,
        explanation: "Fertilisation normally occurs in the oviduct/Fallopian tube, not in the uterus. The fertilised ovum then moves towards the uterus for implantation."
    },
    {
        question: "Which structure allows nutrients and oxygen to move from the mother's blood to the foetus?",
        options: ["Cervix", "Placenta", "Amnion", "Umbilical vein only"],
        correct: 1,
        explanation: "The placenta is the exchange surface between maternal and foetal blood supplies. Oxygen and nutrients move towards the foetus, while CO₂ and wastes move towards the mother."
    },
    {
        question: "Why is the placenta important during pregnancy?",
        options: [
            "It directly mixes the mother's blood with the foetal blood.",
            "It allows substances to be exchanged between maternal and foetal blood without normally mixing the two blood supplies.",
            "It produces sperm cells.",
            "It prevents all substances from reaching the foetus."
        ],
        correct: 1,
        explanation: "Maternal and foetal blood normally do not directly mix. Their proximity allows substances to cross the placental exchange surface. (Exam trap: Saying the placenta 'mixes the blood' is incorrect.)"
    },
    {
        question: "A pregnant woman consumes alcohol regularly. Which statement best explains why this can harm the developing foetus?",
        options: [
            "Alcohol cannot cross the placenta.",
            "Alcohol can cross the placenta and interfere with foetal development.",
            "Alcohol is converted into oxygen by the placenta.",
            "Alcohol only affects the mother's blood cells."
        ],
        correct: 1,
        explanation: "Some substances in the mother's blood can cross the placenta. Alcohol can reach the foetus and interfere with normal development."
    },
    {
        question: "Which hormone is primarily responsible for the development of male secondary sexual characteristics?",
        options: ["Oestrogen", "Progesterone", "Testosterone", "Insulin"],
        correct: 2,
        explanation: "Testosterone is the main male sex hormone responsible for development of male secondary sexual characteristics and contributes to sperm production."
    },
    {
        question: "Which structure produces testosterone in the testes?",
        options: ["Sertoli cells", "Leydig cells", "Epididymis", "Prostate gland"],
        correct: 1,
        explanation: "Leydig cells, also called interstitial cells, produce testosterone in the testes."
    },
    {
        question: "Sperm cells are produced in the:",
        options: ["epididymis", "vas deferens", "seminiferous tubules", "prostate gland"],
        correct: 2,
        explanation: "Sperm production occurs inside the seminiferous tubules of the testes. Sperm then mature and are stored in the epididymis."
    },
    {
        question: "A woman has a menstrual cycle in which fertilisation does not occur. What normally happens to the corpus luteum?",
        options: [
            "It continues producing high levels of progesterone indefinitely.",
            "It degenerates, causing progesterone levels to decrease.",
            "It becomes the placenta.",
            "It produces FSH."
        ],
        correct: 1,
        explanation: "If fertilisation does not occur, the corpus luteum degenerates. Progesterone levels fall, causing the endometrium to break down, resulting in menstruation."
    },
    {
        question: "Which combination correctly describes FSH?",
        options: [
            "Stimulates development of ovarian follicles",
            "Causes milk production",
            "Causes ovulation directly",
            "Maintains the endometrium throughout pregnancy"
        ],
        correct: 0,
        explanation: "FSH stimulates development of ovarian follicles and contributes to oestrogen production. LH is the hormone associated with the ovulation surge."
    },
    {
        question: "Identical twins develop when:",
        options: [
            "two ova are fertilised by two sperm cells.",
            "one zygote separates into two embryos.",
            "two sperm cells fertilise one ovum.",
            "two embryos fuse together."
        ],
        correct: 1,
        explanation: "Identical twins originate from one fertilised ovum. The early embryo separates into two genetically very similar embryos."
    },
    {
        question: "Which process produces genetically different gametes?",
        options: ["Mitosis only", "Meiosis", "Binary fission", "DNA transcription"],
        correct: 1,
        explanation: "Meiosis produces haploid gametes and creates genetic variation through crossing over and independent assortment."
    },
    {
        question: "A human embryo implants successfully in the uterus. Which structure must become sufficiently thick before implantation?",
        options: ["Endometrium", "Epididymis", "Cervix", "Oviduct"],
        correct: 0,
        explanation: "The embryo implants into the thickened lining of the uterus, called the endometrium."
    },
    // SECTION B — Nervous System, Homeostasis, Hormones (21–40)
    {
        question: "The part of the neuron that normally receives impulses from another neuron is the:",
        options: ["axon", "dendrite", "myelin sheath", "synaptic knob"],
        correct: 1,
        explanation: "Dendrites receive impulses and conduct them towards the cell body. The axon generally carries impulses away from the cell body."
    },
    {
        question: "Which sequence correctly represents the pathway of an impulse in a simple reflex arc?",
        options: [
            "Effector → motor neuron → sensory neuron → receptor",
            "Receptor → sensory neuron → interneuron → motor neuron → effector",
            "Receptor → motor neuron → interneuron → sensory neuron → effector",
            "Brain → receptor → motor neuron → sensory neuron"
        ],
        correct: 1,
        explanation: "Stimulus → receptor → sensory neuron → CNS → motor neuron → effector → response."
    },
    {
        question: "A person touches a hot object and immediately withdraws their hand. The rapid response is mainly controlled initially by the:",
        options: ["reflex arc", "cerebrum", "endocrine system", "pituitary gland"],
        correct: 0,
        explanation: "The withdrawal occurs rapidly through a reflex pathway. The brain is informed, but the immediate withdrawal does not wait for conscious processing."
    },
    {
        question: "Why is a reflex action advantageous?",
        options: [
            "It always requires conscious thought.",
            "It produces a rapid response that can reduce injury.",
            "It prevents all sensory information from reaching the brain.",
            "It permanently changes the nervous system."
        ],
        correct: 1,
        explanation: "Reflex actions are rapid and automatic, especially useful when the stimulus could cause damage."
    },
    {
        question: "Which part of the brain is primarily associated with balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        correct: 1,
        explanation: "The cerebellum coordinates movement, balance and posture."
    },
    {
        question: "Which part of the brain controls breathing and heart rate?",
        options: ["Cerebellum", "Medulla oblongata", "Cerebrum", "Corpus callosum"],
        correct: 1,
        explanation: "The medulla controls involuntary activities such as breathing and heart rate."
    },
    {
        question: "The hypothalamus plays an important role in:",
        options: ["producing sperm.", "maintaining homeostasis.", "producing red blood cells.", "digesting proteins."],
        correct: 1,
        explanation: "The hypothalamus helps regulate body temperature, water balance and other homeostatic processes."
    },
    {
        question: "A person walks from an air-conditioned room into a very hot environment. Which response would help reduce an increase in body temperature?",
        options: [
            "Vasoconstriction and shivering",
            "Vasodilation and increased sweating",
            "Reduced sweating and vasoconstriction",
            "Increased metabolic heat production"
        ],
        correct: 1,
        explanation: "Vasodilation increases blood flow near the skin surface, increasing heat loss. Sweating allows evaporative cooling."
    },
    {
        question: "Sweating helps cool the body mainly because:",
        options: [
            "sweat absorbs heat when it evaporates from the skin.",
            "sweat increases blood pressure.",
            "sweat stops blood circulation.",
            "sweat increases body temperature."
        ],
        correct: 0,
        explanation: "When sweat evaporates, heat energy is removed from the skin."
    },
    {
        question: "Which receptor detects changes in light intensity?",
        options: ["Mechanoreceptor", "Photoreceptor", "Thermoreceptor", "Chemoreceptor"],
        correct: 1,
        explanation: "Photoreceptors detect light. The retina contains rods and cones."
    },
    {
        question: "The photoreceptors found in the retina are:",
        options: ["rods and cones", "rods and neurons only", "cones and mechanoreceptors", "sensory and motor neurons"],
        correct: 0,
        explanation: "Rods are sensitive to low light levels. Cones provide colour vision and detailed vision under brighter conditions."
    },
    {
        question: "Which photoreceptor is mainly responsible for vision in dim light?",
        options: ["Cone", "Rod", "Bipolar cell", "Ganglion cell"],
        correct: 1,
        explanation: "Rods are highly sensitive to low levels of light."
    },
    {
        question: "A person has difficulty seeing different colours. Which cells are most likely affected?",
        options: ["Rods", "Cones", "Motor neurons", "Thermoreceptors"],
        correct: 1,
        explanation: "Different types of cones respond to different wavelengths of visible light and are important for colour vision."
    },
    {
        question: "The blind spot occurs because:",
        options: [
            "there are no photoreceptors where the optic nerve leaves the eye.",
            "the lens cannot focus light.",
            "the cornea blocks light.",
            "rods are concentrated in this region."
        ],
        correct: 0,
        explanation: "The optic nerve leaves the eye at the blind spot. There are no rods or cones at this point, so light cannot be detected."
    },
    {
        question: "The hormone insulin is released when blood glucose levels:",
        options: ["decrease significantly.", "increase above normal.", "remain constant.", "reach zero."],
        correct: 1,
        explanation: "When blood glucose rises, the pancreas releases insulin."
    },
    {
        question: "What is the main effect of insulin on blood glucose concentration?",
        options: [
            "It increases blood glucose.",
            "It decreases blood glucose.",
            "It prevents glucose entering cells.",
            "It converts glycogen into glucose."
        ],
        correct: 1,
        explanation: "Insulin promotes uptake of glucose by cells and conversion of excess glucose into glycogen."
    },
    {
        question: "When blood glucose levels fall below normal, the pancreas secretes:",
        options: ["insulin", "glucagon", "ADH", "thyroxine"],
        correct: 1,
        explanation: "When blood glucose falls, glucagon promotes the conversion of glycogen to glucose, increasing blood glucose concentration."
    },
    {
        question: "Glucagon increases blood glucose concentration mainly by promoting:",
        options: [
            "conversion of glucose to glycogen.",
            "conversion of glycogen to glucose.",
            "uptake of glucose by cells.",
            "production of insulin."
        ],
        correct: 1,
        explanation: "Glucagon stimulates glycogenolysis, helping increase blood glucose."
    },
    {
        question: "Which process is an example of negative feedback?",
        options: [
            "A change occurs and the response makes the change even greater.",
            "A change occurs and the response reduces the original change.",
            "A stimulus always produces an identical response.",
            "The body stops responding to all stimuli."
        ],
        correct: 1,
        explanation: "Negative feedback counteracts a deviation from the normal range (e.g., high blood glucose → insulin → blood glucose decreases)."
    },
    {
        question: "A person has multiple sclerosis, a condition involving damage to the myelin sheath. Which process would most likely be affected?",
        options: [
            "Speed of nerve impulse transmission",
            "Production of digestive enzymes",
            "Formation of red blood cells",
            "Production of bile"
        ],
        correct: 0,
        explanation: "Myelin insulates axons and allows impulses to travel rapidly. Damage to the myelin sheath can therefore interfere with nerve transmission."
    },
    // SECTION C — Plant Responses and Hormones (41–60)
    {
        question: "A plant shoot bends towards a source of light. This response is called:",
        options: ["geotropism", "phototropism", "hydrotropism", "thigmotropism"],
        correct: 1,
        explanation: "Photo = light. A shoot growing towards light demonstrates positive phototropism."
    },
    {
        question: "Auxin is mainly produced in the:",
        options: ["growing tips of shoots.", "mature xylem vessels.", "roots only.", "phloem sieve plates only."],
        correct: 0,
        explanation: "Auxin is produced in growing regions and influences cell elongation."
    },
    {
        question: "In a shoot exposed to light from one side, auxin accumulates mainly on the:",
        options: ["illuminated side.", "shaded side.", "upper surface only.", "lower surface only."],
        correct: 1,
        explanation: "In shoots exposed to one-sided light, auxin accumulates more on the shaded side."
    },
    {
        question: "Why does a shoot bend towards light?",
        options: [
            "Auxin inhibits cell elongation on the shaded side.",
            "Auxin promotes greater cell elongation on the shaded side.",
            "Light destroys all auxin on the shaded side.",
            "Auxin prevents growth on both sides."
        ],
        correct: 1,
        explanation: "Auxin promotes cell elongation in shoots. Cells on the shaded side elongate more, causing the shoot to bend towards the light."
    },
    {
        question: "A plant root grows downward in response to gravity. This is called:",
        options: ["positive geotropism", "negative geotropism", "positive phototropism", "negative hydrotropism"],
        correct: 0,
        explanation: "A root growing in the direction of gravity demonstrates positive geotropism."
    },
    {
        question: "Which hormone is strongly associated with fruit ripening?",
        options: ["Ethene", "Auxin", "Cytokinin", "Gibberellin"],
        correct: 0,
        explanation: "Ethene is strongly associated with fruit ripening."
    },
    {
        question: "Which plant hormone is associated with seed dormancy and stomatal closure during water stress?",
        options: ["Abscisic acid", "Auxin", "Ethene", "Gibberellin"],
        correct: 0,
        explanation: "Abscisic acid is associated with seed dormancy and closing stomata during water stress."
    },
    {
        question: "A farmer wants to delay the ripening of fruit during transport. Which approach would be most appropriate?",
        options: [
            "Increase ethene concentration.",
            "Reduce exposure to ethene and control temperature.",
            "Increase temperature dramatically.",
            "Increase respiration rate."
        ],
        correct: 1,
        explanation: "Ethene promotes ripening. Managing ethene exposure and temperature can delay ripening during storage and transport."
    },
    {
        question: "Which hormone promotes cell division in plants?",
        options: ["Cytokinin", "Abscisic acid", "Ethene", "Insulin"],
        correct: 0,
        explanation: "Cytokinins promote cell division and are involved in plant growth and development."
    },
    {
        question: "A plant's stomata close during drought conditions. Which hormone is primarily involved?",
        options: ["Auxin", "Abscisic acid", "Cytokinin", "Testosterone"],
        correct: 1,
        explanation: "During water stress, abscisic acid promotes stomatal closure, reducing water loss."
    },
    {
        question: "The main function of stomata is to:",
        options: [
            "absorb minerals from the soil.",
            "regulate gas exchange and water loss.",
            "transport sugars throughout the plant.",
            "produce seeds."
        ],
        correct: 1,
        explanation: "Stomata allow CO₂ to enter and O₂ to leave while controlling water loss through transpiration."
    },
    {
        question: "Guard cells control:",
        options: ["opening and closing of stomata.", "movement of blood.", "transport through the xylem.", "production of pollen."],
        correct: 0,
        explanation: "Guard cells surround each stoma and control whether the pore is open or closed."
    },
    {
        question: "Which condition would generally cause stomata to close?",
        options: [
            "Adequate water supply",
            "Darkness and water stress",
            "High carbon dioxide demand during photosynthesis",
            "Increased need for carbon dioxide uptake"
        ],
        correct: 1,
        explanation: "Both darkness and water shortage can promote stomatal closure."
    },
    {
        question: "Which plant tissue transports water and mineral salts from the roots?",
        options: ["Phloem", "Xylem", "Epidermis", "Cambium"],
        correct: 1,
        explanation: "Xylem transports water and mineral salts mainly from roots towards the leaves."
    },
    {
        question: "Which tissue transports mainly organic nutrients such as sucrose?",
        options: ["Xylem", "Phloem", "Root hair", "Epidermis"],
        correct: 1,
        explanation: "Phloem transports organic nutrients, particularly sucrose, from sources to sinks."
    },
    {
        question: "A plant is placed horizontally. After several hours, its shoot grows upwards. This response demonstrates:",
        options: ["positive geotropism.", "negative geotropism.", "positive phototropism.", "hydrotropism."],
        correct: 1,
        explanation: "The shoot grows away from gravity. Negative = away from the stimulus."
    },
    {
        question: "The main advantage of tropic responses in plants is that they:",
        options: [
            "allow plants to respond directionally to environmental stimuli.",
            "stop all plant growth.",
            "prevent photosynthesis.",
            "eliminate the need for hormones."
        ],
        correct: 0,
        explanation: "Tropic responses allow plants to grow in directions that improve access to resources such as light or water."
    },
    {
        question: "Which hormone promotes stem elongation and can break seed dormancy?",
        options: ["Gibberellin", "Abscisic acid", "Ethene", "Insulin"],
        correct: 0,
        explanation: "Gibberellins promote stem elongation and can help break seed dormancy."
    },
    {
        question: "A plant has been exposed to prolonged drought. Which response would best conserve water?",
        options: [
            "Increased stomatal opening",
            "Increased transpiration",
            "Stomatal closure",
            "Increased leaf surface area"
        ],
        correct: 2,
        explanation: "Closing stomata reduces water loss through transpiration."
    },
    {
        question: "Which statement correctly compares plant and animal hormonal coordination?",
        options: [
            "Both plants and animals use chemical messengers to coordinate responses.",
            "Only animals use hormones.",
            "Only plants respond to environmental stimuli.",
            "Plant hormones are produced exclusively in glands."
        ],
        correct: 0,
        explanation: "Plants and animals both use chemical signalling systems. Their mechanisms differ, but chemical messengers coordinate physiological responses in both."
    },
    // SECTION D — DNA, RNA, Protein Synthesis and Genetics (61–80)
    {
        question: "DNA is composed of repeating units called:",
        options: ["amino acids", "nucleotides", "fatty acids", "monosaccharides"],
        correct: 1,
        explanation: "DNA is a polymer made from nucleotides. Each nucleotide contains a sugar, a phosphate group, and a nitrogenous base."
    },
    {
        question: "Which nitrogenous base is found in DNA but not normally in RNA?",
        options: ["Adenine", "Guanine", "Thymine", "Cytosine"],
        correct: 2,
        explanation: "DNA contains A, T, C and G. RNA contains A, U, C and G. Therefore thymine is characteristic of DNA."
    },
    {
        question: "Which base pairs with adenine in DNA?",
        options: ["Uracil", "Thymine", "Cytosine", "Guanine"],
        correct: 1,
        explanation: "In DNA: A pairs with T and C pairs with G."
    },
    {
        question: "Which base pairs with adenine during RNA formation?",
        options: ["Thymine", "Uracil", "Guanine", "Cytosine"],
        correct: 1,
        explanation: "In RNA, uracil replaces thymine. Therefore: A pairs with U."
    },
    {
        question: "The process by which DNA is used to produce mRNA is called:",
        options: ["translation", "transcription", "replication", "mutation"],
        correct: 1,
        explanation: "Transcription produces mRNA using DNA as the template. DNA → mRNA."
    },
    {
        question: "Translation takes place mainly at the:",
        options: ["ribosome", "nucleus", "lysosome", "mitochondrion only"],
        correct: 0,
        explanation: "Translation occurs at ribosomes, where the mRNA sequence is used to assemble amino acids into a polypeptide."
    },
    {
        question: "The function of mRNA is to:",
        options: [
            "carry the genetic message from DNA to the ribosome.",
            "transport oxygen through the blood.",
            "form the cell membrane.",
            "digest proteins."
        ],
        correct: 0,
        explanation: "mRNA carries the coded information copied from DNA to the ribosome."
    },
    {
        question: "The function of tRNA is to:",
        options: [
            "carry specific amino acids to the ribosome.",
            "copy the entire DNA molecule.",
            "destroy mRNA.",
            "produce glucose."
        ],
        correct: 0,
        explanation: "tRNA carries specific amino acids to the ribosome and uses its anticodon to pair with the appropriate mRNA codon."
    },
    {
        question: "A sequence of three bases on mRNA is called a:",
        options: ["gene", "codon", "anticodon", "chromosome"],
        correct: 1,
        explanation: "A codon is a sequence of three bases on mRNA that specifies an amino acid or a stop signal."
    },
    {
        question: "A sequence of three bases on tRNA that is complementary to an mRNA codon is called an:",
        options: ["allele", "anticodon", "codon", "gene"],
        correct: 1,
        explanation: "The anticodon is the three-base sequence on tRNA that is complementary to an mRNA codon."
    },
    {
        question: "Which molecule determines the sequence of amino acids during protein synthesis?",
        options: ["DNA/mRNA genetic information", "ATP only", "Glucose", "Lipids"],
        correct: 0,
        explanation: "The base sequence in DNA is transcribed into mRNA and ultimately determines the amino acid sequence of a protein."
    },
    {
        question: "A mutation is:",
        options: [
            "a permanent change in the DNA base sequence.",
            "a normal stage of mitosis.",
            "the joining of two gametes.",
            "the movement of chromosomes during meiosis."
        ],
        correct: 0,
        explanation: "A mutation changes the DNA base sequence. Depending on where it occurs, it may have no effect or alter a protein."
    },
    {
        question: "Which mutation can potentially be inherited by offspring?",
        options: ["A mutation in a skin cell", "A mutation in a liver cell", "A mutation in a gamete", "A mutation in a red blood cell"],
        correct: 2,
        explanation: "Only mutations that enter the germline/gametes can normally be passed to offspring."
    },
    {
        question: "An individual has genotype Bb. The individual is:",
        options: ["homozygous dominant.", "homozygous recessive.", "heterozygous.", "haploid."],
        correct: 2,
        explanation: "An individual with two different alleles, such as Bb, is heterozygous."
    },
    {
        question: "Which genotype represents a homozygous recessive individual?",
        options: ["BB", "Bb", "bB", "bb"],
        correct: 3,
        explanation: "Two identical recessive alleles produce a homozygous recessive genotype."
    },
    {
        question: "Brown eye colour is represented by B and blue eye colour by b. If B is dominant, which genotype will produce blue eyes?",
        options: ["BB", "Bb", "bb", "B"],
        correct: 2,
        explanation: "Because B is dominant, BB and Bb produce the dominant phenotype. Only bb produces the recessive phenotype."
    },
    {
        question: "Two heterozygous individuals are crossed: Bb × Bb. What percentage of their offspring is expected to be homozygous recessive?",
        options: ["0%", "25%", "50%", "75%"],
        correct: 1,
        explanation: "BB, Bb, Bb, bb → 1/4 = 25%."
    },
    {
        question: "In the same cross, Bb × Bb, what percentage of offspring are expected to show the dominant phenotype?",
        options: ["25%", "50%", "75%", "100%"],
        correct: 2,
        explanation: "Three of four genotypes produce the dominant phenotype: BB + Bb + Bb = 3/4 = 75%."
    },
    {
        question: "A father has genotype IAi and a mother has genotype IBi. What blood groups could their children have?",
        options: ["A and B only", "AB and O only", "A, B, AB and O", "O only"],
        correct: 2,
        explanation: "Cross IAi × IBi → IAIB (AB), IAi (A), IBi (B), ii (O). All four blood groups are possible."
    },
    {
        question: "Which statement about sex-linked inheritance is correct?",
        options: [
            "Sex-linked genes are found only on autosomes.",
            "The X chromosome can carry alleles for sex-linked traits.",
            "Males always have two X chromosomes.",
            "Females cannot carry recessive sex-linked alleles."
        ],
        correct: 1,
        explanation: "Sex-linked genes are located on sex chromosomes, particularly the X chromosome. Males have XY and females normally have XX."
    },
    // SECTION E — Evolution, Genetics Application and Integrated Questions (81–100)
    {
        question: "Natural selection occurs because:",
        options: [
            "all organisms are genetically identical.",
            "individuals with advantageous heritable variations may survive and reproduce more successfully.",
            "organisms consciously choose useful mutations.",
            "environmental conditions never change."
        ],
        correct: 1,
        explanation: "Natural selection acts on existing variation. Individuals with advantageous heritable characteristics may survive and reproduce more successfully."
    },
    {
        question: "A population of bacteria is exposed repeatedly to an antibiotic. Eventually, a larger proportion of the bacteria are resistant. The best explanation is:",
        options: [
            "the antibiotic deliberately caused every bacterium to become resistant.",
            "resistant bacteria survived and reproduced, increasing the frequency of resistance alleles.",
            "all bacteria changed because they needed to survive.",
            "bacteria stopped reproducing."
        ],
        correct: 1,
        explanation: "The antibiotic does not deliberately 'teach' bacteria. If resistant bacteria already exist, they are more likely to survive treatment and reproduce, increasing the frequency of resistance."
    },
    {
        question: "Which process increases genetic variation by producing new combinations of existing alleles?",
        options: ["Crossing over", "Mitosis", "Asexual reproduction only", "Binary fission only"],
        correct: 0,
        explanation: "Crossing over creates new combinations of alleles by exchanging DNA between homologous chromosomes."
    },
    {
        question: "Which process can introduce a completely new allele into a population?",
        options: ["Mutation", "Fertilisation only", "Crossing over only", "Natural selection only"],
        correct: 0,
        explanation: "Mutation can create a new DNA sequence and therefore potentially introduce a new allele."
    },
    {
        question: "A population becomes separated into two groups by a mountain range. Over many generations, the groups accumulate genetic differences and eventually can no longer interbreed successfully. This is an example of:",
        options: ["artificial selection", "speciation", "cloning", "genetic engineering"],
        correct: 1,
        explanation: "When populations become reproductively isolated and accumulate enough differences, a new species may arise."
    },
    {
        question: "The separation of populations by a physical barrier is called:",
        options: ["geographic isolation", "reproductive cloning", "mutation", "artificial insemination"],
        correct: 0,
        explanation: "A physical barrier such as a mountain range, river or large distance can separate populations."
    },
    {
        question: "Which evidence provides strong support for common ancestry?",
        options: [
            "Similarities in DNA sequences between organisms",
            "Differences in habitat only",
            "Similarities in body size only",
            "Differences in diet only"
        ],
        correct: 0,
        explanation: "DNA comparisons reveal genetic similarities and differences and provide strong evidence for evolutionary relationships."
    },
    {
        question: "Structures that have similar underlying anatomy but may perform different functions are called:",
        options: ["analogous structures.", "homologous structures.", "vestigial organs only.", "acquired characteristics."],
        correct: 1,
        explanation: "Homologous structures have similar underlying anatomical structures because of common ancestry, even though their functions may differ."
    },
    {
        question: "The wings of a bird and the wings of an insect are often used as an example of:",
        options: ["homologous structures.", "analogous structures.", "identical structures.", "vestigial structures."],
        correct: 1,
        explanation: "Bird wings and insect wings perform similar functions but have very different underlying structures and evolutionary origins."
    },
    {
        question: "A fossil is most useful to evolutionary biologists because it:",
        options: [
            "provides evidence about organisms that lived in the past.",
            "shows that all organisms appeared simultaneously.",
            "proves that evolution cannot occur.",
            "provides DNA from every extinct organism."
        ],
        correct: 0,
        explanation: "Fossils provide evidence of organisms that lived in the past and can reveal changes in populations over geological time."
    },
    {
        question: "Which dating method is generally used to determine the relative age of fossils by comparing their position in rock layers?",
        options: ["Stratigraphy", "PCR", "DNA replication", "Translation"],
        correct: 0,
        explanation: "Stratigraphy examines the position of rock layers. In undisturbed strata, deeper layers are generally older."
    },
    {
        question: "A group of organisms has a gene pool containing two alleles, A and a. Over several generations, the frequency of A increases from 20% to 70%. What does this indicate?",
        options: [
            "The frequency of allele A has increased in the population.",
            "Every organism became genetically identical.",
            "Allele A has disappeared.",
            "Mutation has necessarily stopped."
        ],
        correct: 0,
        explanation: "Allele frequency refers to how common an allele is. Increasing from 20% to 70% means allele A became considerably more common."
    },
    {
        question: "Which factor can change allele frequencies in a population?",
        options: ["Natural selection", "Genetic drift", "Gene flow", "All of the above"],
        correct: 3,
        explanation: "Natural selection, genetic drift and gene flow can all change allele frequencies."
    },
    {
        question: "A small group of individuals leaves a large population and establishes a new population elsewhere. The new population has allele frequencies very different from the original population. This is known as the:",
        options: ["founder effect", "bottleneck effect", "placebo effect", "greenhouse effect"],
        correct: 0,
        explanation: "The founder effect occurs when a small group establishes a new population, carrying only a sample of the original gene pool."
    },
    {
        question: "A sudden environmental disaster drastically reduces the size of a population. The surviving population has reduced genetic variation. This is an example of the:",
        options: ["founder effect", "bottleneck effect", "mutation effect", "crossing-over effect"],
        correct: 1,
        explanation: "A population bottleneck occurs when a population is drastically reduced in size, often by an environmental event."
    },
    {
        question: "Which statement best describes genetic drift?",
        options: [
            "A random change in allele frequencies, particularly significant in small populations.",
            "A deliberate change in DNA caused by an organism's needs.",
            "The movement of individuals between populations.",
            "The formation of proteins from amino acids."
        ],
        correct: 0,
        explanation: "Genetic drift is random rather than directed. Its effect is particularly strong in small populations."
    },
    {
        question: "A researcher investigates whether temperature affects the rate of enzyme activity. The same amount of enzyme is placed in identical test tubes, but each tube is kept at a different temperature. What is the independent variable?",
        options: ["Amount of enzyme", "Temperature", "Rate of enzyme activity", "Type of test tube"],
        correct: 1,
        explanation: "The independent variable is the factor deliberately changed by the researcher — here, temperature."
    },
    {
        question: "In the same investigation, the researcher measures the amount of product formed per minute. This measurement represents the:",
        options: ["independent variable.", "dependent variable.", "controlled variable.", "constant temperature."],
        correct: 1,
        explanation: "The dependent variable is what is measured — here, the rate of enzyme activity."
    },
    {
        question: "A learner repeats an experiment five times and obtains similar results each time. This mainly increases the:",
        options: ["reliability of the results.", "independent variable.", "size of the hypothesis.", "number of controlled variables."],
        correct: 0,
        explanation: "Repeating an experiment and obtaining similar results increases confidence that the results are consistent and reliable."
    },
    {
        question: "A learner concludes that increased temperature causes an increase in enzyme activity because the experimental results show this trend. However, the learner performed the experiment only once. Which statement is most appropriate?",
        options: [
            "The conclusion is automatically proven.",
            "The investigation should be repeated to determine whether the results are reliable.",
            "The dependent variable should be removed.",
            "A hypothesis is unnecessary in scientific investigations."
        ],
        correct: 1,
        explanation: "A single experiment is insufficient to establish reliable results. Repetition allows the researcher to determine whether the observed pattern is consistent."
    }
];

// ----- SECOND MOCK EXAM (ADVANCED) — 100 Questions -----
// Cell with 2n = 8 (Q1)
const LIFE_SCIENCES_ADVANCED = [
    {
        question: "A cell with a diploid chromosome number of 2n = 8 undergoes meiosis. At the end of meiosis II, how many chromosomes and chromatids will normally occur in each daughter cell?",
        options: ["8 chromosomes and 8 chromatids", "4 chromosomes and 8 chromatids", "4 chromosomes and 4 chromatids", "2 chromosomes and 4 chromatids"],
        correct: 2,
        explanation: "The organism begins with 2n = 8, meaning four homologous pairs. Meiosis halves the chromosome number: 8 → 4. At the end of meiosis II, sister chromatids have separated, so each chromosome consists of one chromatid. So each gamete contains: 4 chromosomes and 4 chromatids. (Trap: After meiosis I there would be 4 chromosomes but each would still consist of two chromatids.)"
    },
    {
        question: "The following observations were made during meiosis: Homologous chromosomes are paired. Non-sister chromatids overlap. Sections of genetic material are exchanged. Which combination correctly identifies the phase and the significance of the process?",
        options: [
            "Prophase I; increases genetic variation",
            "Prophase II; reduces chromosome number",
            "Metaphase I; produces mutations",
            "Anaphase I; produces identical gametes"
        ],
        correct: 0,
        explanation: "Crossing over takes place during Prophase I when homologous chromosomes pair. Non-sister chromatids exchange corresponding DNA sections. This produces new combinations of maternal and paternal alleles."
    },
    {
        question: "A diploid organism has three homologous chromosome pairs. Ignoring crossing over, how many different chromosome combinations can potentially occur in its gametes as a result of independent assortment?",
        options: ["3", "6", "8", "9"],
        correct: 2,
        explanation: "Independent assortment produces 2ⁿ possible combinations, where n = number of homologous pairs. Here: 2³ = 8. Crossing over would produce even greater variation."
    },
    {
        question: "A learner examines two cells. Cell X: Homologous chromosomes are separating. Cell Y: Sister chromatids are separating. Which statement is correct?",
        options: [
            "X is in Anaphase II and Y in Anaphase I.",
            "X and Y are both undergoing mitosis.",
            "X is in Anaphase I and Y may be in Anaphase II.",
            "X is in Metaphase I and Y in Telophase II."
        ],
        correct: 2,
        explanation: "During Anaphase I: homologous chromosomes separate. During Anaphase II: sister chromatids separate. This distinction is extremely important in NSC meiosis questions."
    },
    {
        question: "Nondisjunction occurs during Anaphase I of meiosis when a pair of homologous chromosomes fails to separate. What is the most likely consequence?",
        options: [
            "All four gametes will have the normal chromosome number.",
            "Two gametes will have an extra chromosome and two will lack that chromosome.",
            "Only one gamete will be abnormal.",
            "DNA replication will stop permanently."
        ],
        correct: 1,
        explanation: "If homologous chromosomes fail to separate in Anaphase I, both chromosomes travel to the same pole. After meiosis II, this can produce: two n+1 gametes and two n-1 gametes. All four are abnormal with respect to that chromosome."
    },
    {
        question: "The table shows the concentrations of four hormones during part of a menstrual cycle. Day 5: FSH Moderate, LH Low, Oestrogen Low, Progesterone Very low. Day 12: FSH Moderate, LH Moderate, Oestrogen High, Progesterone Low. Day 14: FSH Low, LH Very high, Oestrogen High, Progesterone Low. Day 21: FSH Low, LH Low, Oestrogen Moderate, Progesterone Very high. Day 28: FSH Rising, LH Low, Oestrogen Low, Progesterone Very low. Which event most likely occurs around day 14?",
        options: ["Implantation", "Menstruation", "Ovulation", "Degeneration of the endometrium"],
        correct: 2,
        explanation: "The strongest clue is the sudden LH peak around day 14. An LH surge causes the mature Graafian follicle to rupture and release the secondary oocyte. LH surge → ovulation."
    },
    {
        question: "Using the data in the previous question, which structure is mainly responsible for the high progesterone concentration on day 21?",
        options: ["Graafian follicle", "Corpus luteum", "Pituitary gland", "Endometrium"],
        correct: 1,
        explanation: "After ovulation, the empty Graafian follicle becomes the corpus luteum. The corpus luteum secretes large amounts of progesterone. This explains the high progesterone concentration around day 21."
    },
    {
        question: "A woman has normal FSH secretion but cannot produce a surge of LH. Which process would most directly be disrupted?",
        options: ["Initial growth of the ovarian follicle", "Ovulation", "Menstrual flow", "Formation of ova during foetal development"],
        correct: 1,
        explanation: "FSH can still stimulate follicular development. However, without the LH surge, the mature follicle would not normally rupture. Therefore ovulation would be most directly affected."
    },
    {
        question: "A woman's progesterone level remains unusually low after ovulation. Which outcome is most likely?",
        options: [
            "The endometrium may not be maintained adequately.",
            "FSH secretion will permanently stop.",
            "Fertilisation will occur automatically.",
            "More sperm will be produced."
        ],
        correct: 0,
        explanation: "Progesterone maintains the thickened endometrium. Low progesterone after ovulation can therefore make implantation or continued maintenance of the endometrium less likely."
    },
    {
        question: "A researcher measures endometrial thickness during a menstrual cycle. Day 1: 6 mm, Day 5: 2 mm, Day 10: 5 mm, Day 15: 8 mm, Day 21: 12 mm, Day 28: 4 mm. Which hormonal change best explains the decrease from day 21 to day 28 if pregnancy does not occur?",
        options: ["Increase in testosterone", "Decrease in progesterone", "Increase in ADH", "Increase in thyroxine"],
        correct: 1,
        explanation: "If fertilisation does not occur: Corpus luteum degenerates → progesterone decreases → endometrium breaks down → menstruation. The data show exactly this pattern."
    },
    {
        question: "A sperm cell contains 23 chromosomes. Immediately after fertilisation with a normal ovum, the resulting zygote should contain:",
        options: ["23 chromosomes.", "46 chromosomes.", "69 chromosomes.", "92 chromosomes."],
        correct: 1,
        explanation: "Normal human gametes are haploid: 23 chromosomes. Fertilisation restores the diploid chromosome number: 23 + 23 = 46."
    },
    {
        question: "Three men undergo fertility testing. Male P: Sperm concentration High, Motility 82%, Normal morphology 75%. Male Q: High, 20%, 76%. Male R: Low, 75%, 78%. Which man is most specifically affected by poor sperm movement?",
        options: ["P", "Q", "R", "P and R"],
        correct: 1,
        explanation: "Motility means the ability of sperm to move efficiently. Male Q has 20% motility despite having a high sperm concentration. This identifies movement rather than quantity as the primary problem."
    },
    {
        question: "Why is poor sperm motility likely to decrease the probability of fertilisation?",
        options: [
            "Sperm cannot undergo meiosis.",
            "Fewer sperm are likely to reach the ovum.",
            "Sperm contain too many chromosomes.",
            "The uterus stops producing progesterone."
        ],
        correct: 1,
        explanation: "Sperm must move through the female reproductive tract towards the oviduct. Poor motility decreases the probability that sufficient sperm will reach the ovum."
    },
    {
        question: "A blockage occurs in both oviducts of a woman, but her ovaries, uterus and hormonal cycle remain normal. Which event may still occur naturally?",
        options: [
            "Fertilisation in the oviduct",
            "Ovulation",
            "Movement of a zygote into the uterus",
            "Implantation following natural fertilisation"
        ],
        correct: 1,
        explanation: "The ovaries can still release ova because they are unaffected. However, blocked oviducts can prevent sperm from reaching the ovum and prevent a fertilised ovum from moving towards the uterus."
    },
    {
        question: "A woman's ovaries are surgically removed. Which pair of hormone concentrations would be expected to decrease most directly?",
        options: ["FSH and LH", "Oestrogen and progesterone", "Insulin and glucagon", "ADH and thyroxine"],
        correct: 1,
        explanation: "The ovaries produce the major quantities of the female reproductive hormones: Oestrogen and progesterone. FSH and LH come from the pituitary gland and may actually increase because ovarian negative feedback is removed."
    },
    {
        question: "During pregnancy, the placenta increasingly produces progesterone. Why is continued progesterone secretion important?",
        options: [
            "It stimulates menstruation.",
            "It maintains the uterine lining.",
            "It triggers sperm production.",
            "It causes the endometrium to break down."
        ],
        correct: 1,
        explanation: "Progesterone maintains the endometrium and helps prevent menstruation during pregnancy. Without adequate progesterone, the uterine lining may not remain suitable for development."
    },
    {
        question: "Maternal and foetal blood normally do not mix directly at the placenta. Why is exchange nevertheless possible?",
        options: [
            "The two blood supplies are separated by a thin exchange surface.",
            "The placenta contains an open chamber where both blood supplies mix.",
            "Foetal red blood cells enter the maternal heart.",
            "The umbilical artery joins directly to maternal arteries."
        ],
        correct: 0,
        explanation: "Maternal and foetal blood vessels come very close at the placenta but are normally separated. The thin barrier allows diffusion and other transport processes without direct blood mixing."
    },
    {
        question: "Which substance would normally move mainly from the foetus towards the mother across the placenta?",
        options: ["Oxygen", "Glucose", "Carbon dioxide", "Amino acids"],
        correct: 2,
        explanation: "Foetal metabolism produces carbon dioxide. It diffuses: Foetus → maternal circulation for removal by the mother's lungs. Oxygen and nutrients usually move predominantly in the opposite direction."
    },
    {
        question: "Identical twins are more genetically similar than fraternal twins because identical twins:",
        options: [
            "develop from two separate ova.",
            "originate from the same zygote.",
            "always share a single placenta.",
            "receive all their DNA from the mother."
        ],
        correct: 1,
        explanation: "Identical twins originate when one zygote separates into two embryos. They therefore possess essentially the same original genetic material. Fraternal twins arise from different ova fertilised by different sperm cells."
    },
    {
        question: "A couple undergoes IVF treatment. Which sequence is correct?",
        options: [
            "Fertilisation in uterus → embryo removed → ovum collected",
            "Ovum collected → fertilisation outside body → embryo transferred to uterus",
            "Embryo collected → meiosis → sperm transferred",
            "Ovulation prevented → zygote placed in ovary"
        ],
        correct: 1,
        explanation: "IVF means in vitro fertilisation. 'In vitro' means fertilisation takes place outside the body under controlled laboratory conditions. The resulting embryo is later transferred into the uterus."
    },
    // Questions 21-40: Nervous System, Homeostasis, Hormones
    {
        question: "The graph shows blood glucose concentration after a carbohydrate-rich meal. Blood glucose rises and then falls. Which hormone would be expected to increase shortly after the blood glucose concentration rises?",
        options: ["Glucagon", "Insulin", "ADH", "Thyroxine"],
        correct: 1,
        explanation: "Blood glucose rises after carbohydrate digestion and absorption. The pancreas responds by increasing insulin secretion. Insulin promotes removal of excess glucose from the bloodstream."
    },
    {
        question: "After insulin secretion increases, which change contributes most directly to restoring blood glucose concentration?",
        options: [
            "Glycogen is converted into glucose.",
            "Glucose uptake by cells increases and glucose is converted to glycogen.",
            "Proteins are converted entirely into glucose.",
            "Glucose absorption from the intestine increases."
        ],
        correct: 1,
        explanation: "Insulin promotes: glucose uptake by cells; use of glucose in respiration; conversion of excess glucose to glycogen. These processes lower blood glucose."
    },
    {
        question: "A person has insufficient insulin production. Which pattern would most likely occur after a meal?",
        options: [
            "Blood glucose rises and remains elevated for longer than normal.",
            "Blood glucose immediately falls to zero.",
            "Glycogen formation increases strongly.",
            "Glucagon permanently disappears."
        ],
        correct: 0,
        explanation: "Without sufficient insulin, glucose is not removed from the blood efficiently. Blood glucose therefore rises after eating and can remain abnormally high."
    },
    {
        question: "During prolonged fasting, blood glucose begins falling below the normal range. Which sequence is most appropriate?",
        options: [
            "Insulin secretion increases → glycogen formation increases → glucose rises",
            "Glucagon secretion increases → glycogen breaks down → blood glucose rises",
            "ADH decreases → glucose absorption increases → blood glucose rises",
            "Thyroxine stops → glycogen forms → blood glucose rises"
        ],
        correct: 1,
        explanation: "Low blood glucose stimulates glucagon secretion. Glucagon stimulates conversion of stored glycogen into glucose. Blood glucose then rises towards normal."
    },
    {
        question: "Blood glucose regulation is described as negative feedback because:",
        options: [
            "every change is amplified.",
            "the response counteracts the initial deviation.",
            "insulin inhibits all endocrine glands.",
            "glucose concentration never changes."
        ],
        correct: 1,
        explanation: "Negative feedback works by opposing the original change. For example: Blood glucose rises → insulin released → glucose falls. The response reverses the deviation."
    },
    {
        question: "A learner records urine output after drinking different amounts of water. 200 mL → 90 mL; 500 mL → 290 mL; 1 000 mL → 720 mL. Which hormonal change best explains the largest urine output?",
        options: ["Increased ADH", "Decreased ADH", "Increased insulin", "Increased thyroxine"],
        correct: 1,
        explanation: "After a large amount of water is consumed, the blood becomes less concentrated. Less ADH is secreted. The collecting ducts reabsorb less water, so more dilute urine is produced."
    },
    {
        question: "If ADH concentration increases, the kidney collecting ducts generally:",
        options: [
            "become more permeable to water.",
            "become completely impermeable to water.",
            "secrete additional glucose.",
            "stop filtering blood."
        ],
        correct: 0,
        explanation: "ADH increases the water permeability of collecting ducts. More water is reabsorbed into the blood. Result: less urine + more concentrated urine."
    },
    {
        question: "A person becomes severely dehydrated. Which combination is expected?",
        options: [
            "Low ADH and dilute urine",
            "High ADH and concentrated urine",
            "Low ADH and concentrated urine",
            "High insulin and dilute urine"
        ],
        correct: 1,
        explanation: "Dehydration raises blood osmotic concentration. The hypothalamus detects this and ADH secretion increases. More water is conserved by the kidneys."
    },
    {
        question: "The following data were obtained from a healthy person. Condition X: ADH High, Urine volume Low. Condition Y: ADH Low, Urine volume High. Which situation could correspond to X?",
        options: [
            "Drinking three litres of water rapidly",
            "Severe sweating during exercise",
            "Excess water intake",
            "Very low blood osmotic concentration"
        ],
        correct: 1,
        explanation: "Sweating causes water loss. This makes the blood more concentrated and stimulates ADH release. High ADH results in low urine volume."
    },
    {
        question: "A person's core temperature increases from 37 °C to 39 °C. Which response is most appropriate?",
        options: [
            "Vasoconstriction and shivering",
            "Vasodilation and sweating",
            "Increased thyroxine and shivering",
            "Reduced skin blood flow and reduced sweating"
        ],
        correct: 1,
        explanation: "When body temperature is too high: Vasodilation increases blood flow near the skin. Sweating increases evaporative cooling. Together these promote heat loss."
    },
    {
        question: "During exposure to cold conditions, blood vessels near the skin constrict. What is the advantage?",
        options: [
            "More heat is transferred to the environment.",
            "Less warm blood reaches the skin surface, reducing heat loss.",
            "Sweat production increases.",
            "Metabolic activity stops."
        ],
        correct: 1,
        explanation: "Vasoconstriction limits blood flow near the skin surface. Less heat is transferred from warm blood to the external environment."
    },
    {
        question: "The graph shows body temperature during exposure to cold. Temperature drops and then returns towards 37 °C. The return towards 37 °C represents:",
        options: ["positive feedback.", "homeostatic negative feedback.", "mutation.", "natural selection."],
        correct: 1,
        explanation: "Temperature drops away from the approximately 37 °C set point and then returns towards it. The corrective response opposes the original change. That is negative feedback."
    },
    {
        question: "A patient has damage to the hypothalamus. Which combination of functions is most likely to be affected?",
        options: [
            "Temperature regulation and water balance",
            "DNA replication and protein synthesis",
            "Blood clotting and digestion only",
            "Sperm chromosomes and eye colour"
        ],
        correct: 0,
        explanation: "The hypothalamus has major homeostatic functions, including: thermoregulation; osmoregulation; interaction with the endocrine system."
    },
    {
        question: "A runner steps on a sharp object and withdraws the foot before consciously recognising pain. Which sequence best represents the immediate pathway?",
        options: [
            "Receptor → sensory neuron → spinal cord → motor neuron → muscle",
            "Muscle → sensory neuron → receptor → cerebrum",
            "Cerebrum → receptor → motor neuron → spinal cord",
            "Receptor → endocrine gland → spinal cord → muscle"
        ],
        correct: 0,
        explanation: "This is the basic reflex pathway. The interneuron within the spinal cord may connect the sensory and motor neurons."
    },
    {
        question: "Why can the withdrawal occur before conscious perception?",
        options: [
            "The reflex response can be coordinated through the spinal cord before the cerebrum processes the sensation.",
            "The brain receives no information at all.",
            "Sensory neurons move faster than electrical impulses.",
            "Muscles detect the stimulus directly."
        ],
        correct: 0,
        explanation: "The impulse can be processed in the spinal cord and sent to the effector before conscious interpretation occurs in the cerebrum. This reduces response time."
    },
    {
        question: "A drug slows the release of neurotransmitters from the synaptic knob. Which consequence is most likely?",
        options: [
            "Transmission across synapses will become slower or less effective.",
            "DNA replication will increase.",
            "All axons will become shorter.",
            "Myelin production will immediately double."
        ],
        correct: 0,
        explanation: "Neurotransmitters carry signals chemically across the synaptic gap. Reduced neurotransmitter release means the next neuron is less likely to be stimulated normally."
    },
    {
        question: "A neuron has its myelin sheath severely damaged. What is the expected effect?",
        options: [
            "Increased speed of impulse conduction",
            "Reduced efficiency of impulse transmission",
            "Increased testosterone production",
            "Increased transcription"
        ],
        correct: 1,
        explanation: "Myelin electrically insulates the axon and allows faster transmission. Damage therefore slows or disrupts impulse conduction."
    },
    {
        question: "The table shows pupil diameter under different light conditions. Very low: 7.0 mm, Medium: 4.5 mm, High: 2.2 mm. Why does the pupil become smaller in bright light?",
        options: [
            "To allow maximum light onto the retina",
            "To reduce the amount of light entering the eye",
            "To increase accommodation for distant objects",
            "To stimulate the optic nerve to produce hormones"
        ],
        correct: 1,
        explanation: "Bright light could overstimulate or damage retinal receptors. The circular muscles of the iris contract, reducing pupil diameter. Less light enters the eye."
    },
    {
        question: "A learner shifts focus from a distant mountain to a book held close to the eyes. Which change occurs?",
        options: [
            "Ciliary muscles relax and lens becomes thinner.",
            "Ciliary muscles contract and lens becomes more convex.",
            "Suspensory ligaments tighten and lens becomes flatter.",
            "Pupil dilation alone focuses the image."
        ],
        correct: 1,
        explanation: "For a nearby object: ciliary muscles contract; tension on suspensory ligaments decreases; lens becomes thicker/more convex; refractive power increases."
    },
    {
        question: "Damage occurs specifically to the cones of the retina. Which ability is most directly reduced?",
        options: ["Hearing high-pitched sounds", "Colour vision", "Balance", "Reflex speed"],
        correct: 1,
        explanation: "Cones provide: colour vision; sharp detailed vision; best function in brighter light. Rods are more important in dim light."
    },
    // Questions 41-60: Experimental Design, Data and Plant Responses
    {
        question: "A learner investigates the effect of light direction on shoot growth. Twenty identical seedlings are divided into two groups. Group 1 receives light from directly above. Group 2 receives light from the left. Water, temperature, species and age are kept constant. Shoot curvature is measured after 48 hours. What is the independent variable?",
        options: ["Shoot curvature", "Direction of light", "Amount of water", "Number of seedlings"],
        correct: 1,
        explanation: "The independent variable is the factor deliberately changed. The researcher changes the direction from which light reaches the seedlings."
    },
    {
        question: "What is the dependent variable in the investigation?",
        options: ["Direction of light", "Shoot curvature", "Plant species", "Temperature"],
        correct: 1,
        explanation: "The dependent variable is what is measured. Here the response being measured is the angle or degree of shoot curvature."
    },
    {
        question: "Why were several seedlings used in each group instead of one?",
        options: [
            "To increase reliability and reduce the influence of unusual individual plants",
            "To create a second independent variable",
            "To ensure every plant grows at exactly the same rate",
            "To eliminate the need for controls"
        ],
        correct: 0,
        explanation: "Biological organisms naturally vary. Using many seedlings reduces the effect of one unusual individual and makes the average result more representative."
    },
    {
        question: "Results: Light above: 1° curvature, Light left: 31° toward light. Which conclusion is best supported?",
        options: [
            "Light direction influences shoot growth direction.",
            "Light completely stops growth.",
            "Auxin is destroyed in every plant.",
            "Gravity has no effect on plants."
        ],
        correct: 0,
        explanation: "The plants exposed to lateral light curved substantially towards it. Plants receiving overhead light showed almost no lateral curvature. Therefore direction of light influences the direction of shoot growth."
    },
    {
        question: "In shoots illuminated from one side, greater elongation normally occurs on the:",
        options: [
            "illuminated side due to more auxin.",
            "shaded side due to greater auxin concentration.",
            "shaded side because auxin inhibits elongation there.",
            "illuminated side because ABA increases."
        ],
        correct: 1,
        explanation: "Auxin accumulates more on the shaded side of a shoot. It stimulates greater elongation there. Unequal elongation causes the shoot to bend towards the light."
    },
    {
        question: "A researcher cuts off the shoot tip of a seedling and then exposes it to unilateral light. The shoot does not curve. The most reasonable explanation is that:",
        options: [
            "the major auxin-producing/perceiving region was removed.",
            "photosynthesis permanently stopped throughout the plant.",
            "xylem was completely removed.",
            "gravity no longer existed."
        ],
        correct: 0,
        explanation: "The shoot tip is important in perceiving directional light and is a major source of auxin. Removing it therefore disrupts the normal phototropic response."
    },
    {
        question: "Consider the results of an investigation into seedling growth. Auxin concentration 0: 4 mm, Low: 8 mm, Medium: 15 mm, High: 11 mm, Very high: 3 mm. Which conclusion is most appropriate?",
        options: [
            "Increasing auxin always increases growth.",
            "Auxin has no effect.",
            "An optimum concentration exists, while excessive concentration may inhibit growth.",
            "Only zero auxin promotes growth."
        ],
        correct: 2,
        explanation: "Growth rises: 4 → 8 → 15 mm but then falls: 11 → 3 mm. Therefore there appears to be a concentration producing maximum stimulation, while very high concentrations are inhibitory."
    },
    {
        question: "Which graph would best display the relationship in the previous question?",
        options: [
            "A line graph with auxin concentration on the x-axis and growth on the y-axis",
            "A pedigree",
            "A pie chart of chromosome numbers",
            "A phylogenetic tree"
        ],
        correct: 0,
        explanation: "Auxin concentration is the independent variable and stem growth is the dependent variable. Because concentration represents an ordered quantitative progression, a line graph is suitable."
    },
    {
        question: "A learner investigates the effect of temperature on germination but changes both temperature and amount of water between groups. What is the main problem?",
        options: [
            "There are two changing variables, making the effect of temperature difficult to isolate.",
            "The sample is automatically too large.",
            "Germination cannot be measured.",
            "Temperature cannot ever be an independent variable."
        ],
        correct: 0,
        explanation: "A valid experiment should ideally manipulate one independent variable while keeping other relevant conditions constant. Changing both water and temperature makes it impossible to determine which caused the result."
    },
    {
        question: "Which modification would improve validity?",
        options: [
            "Keep water volume constant and vary only temperature.",
            "Change seed species in every group.",
            "Use a different number of seeds in each group.",
            "Record results only from the highest temperature."
        ],
        correct: 0,
        explanation: "If temperature is being tested: Temperature changes. Other significant factors, such as water availability, should remain constant. That improves validity."
    },
    {
        question: "A researcher studies transpiration rate. Temperature 15°C: 1.8 mL, 20°C: 2.5 mL, 25°C: 3.7 mL, 30°C: 5.4 mL. What trend is supported within this range?",
        options: [
            "Transpiration decreases with increasing temperature.",
            "Transpiration increases as temperature increases.",
            "Temperature has no effect.",
            "Transpiration reaches zero at 30 °C."
        ],
        correct: 1,
        explanation: "The data rise consistently: 1.8 → 2.5 → 3.7 → 5.4 mL/h. Therefore the supported conclusion is that transpiration increased as temperature increased within the tested range."
    },
    {
        question: "Why can higher temperature increase transpiration?",
        options: [
            "It can increase evaporation of water from leaf surfaces.",
            "It prevents all water molecules from moving.",
            "It converts phloem into xylem.",
            "It stops diffusion."
        ],
        correct: 0,
        explanation: "Higher temperature gives water molecules more kinetic energy. Evaporation from moist mesophyll surfaces and diffusion of water vapour can therefore increase."
    },
    {
        question: "If humidity increased greatly while all other factors remained constant, transpiration would generally:",
        options: [
            "increase sharply.",
            "decrease because the water vapour concentration gradient becomes smaller.",
            "remain absolutely unchanged.",
            "stop because photosynthesis ends."
        ],
        correct: 1,
        explanation: "High humidity means the external air already contains more water vapour. The water-vapour concentration gradient between leaf and atmosphere becomes smaller. Diffusion therefore slows."
    },
    {
        question: "A plant is suffering severe water stress. Which combination is most likely?",
        options: [
            "ABA increases; stomata close",
            "Auxin increases; stomata remain permanently open",
            "Ethene decreases; xylem closes",
            "Cytokinin increases; guard cells disappear"
        ],
        correct: 0,
        explanation: "During water stress, abscisic acid contributes to closing stomata. This decreases water loss through transpiration."
    },
    {
        question: "A fruit distributor stores fruit in an atmosphere with low ethene concentration. The purpose is most likely to:",
        options: [
            "speed up ripening.",
            "delay ripening.",
            "increase meiosis.",
            "stimulate root geotropism."
        ],
        correct: 1,
        explanation: "Ethene promotes fruit ripening. Reducing exposure can therefore extend storage and transportation time before fruit becomes fully ripe."
    },
    {
        question: "An experiment compares fruit ripening. No added ethene: 10 days, Low ethene: 7 days, Medium ethene: 5 days, High ethene: 4 days. Which hypothesis is supported?",
        options: [
            "Increased ethene exposure accelerates ripening within the tested range.",
            "Ethene stops ripening.",
            "Ethene has no measurable relationship with ripening.",
            "Fruit produces insulin in response to ethene."
        ],
        correct: 0,
        explanation: "Time to ripening decreases: 10 → 7 → 5 → 4 days as ethene concentration increases. The data therefore support an accelerating effect."
    },
    {
        question: "Why should fruit of similar maturity and size be used in each treatment?",
        options: [
            "These variables could otherwise influence ripening time.",
            "It increases ethene concentration.",
            "It changes the dependent variable deliberately.",
            "It prevents respiration."
        ],
        correct: 0,
        explanation: "Fruit maturity and size could independently affect ripening time. Keeping them similar allows ethene concentration to remain the major changing factor."
    },
    {
        question: "A learner repeats a plant experiment five times and calculates the mean. The main purpose is to:",
        options: [
            "improve reliability.",
            "alter the independent variable.",
            "prove the hypothesis is always correct.",
            "eliminate biological variation completely."
        ],
        correct: 0,
        explanation: "Repeated trials help show whether results are consistent. Calculating a mean also reduces the effect of random variation."
    },
    {
        question: "A result is very different from all other repeated measurements. The best scientific response is to:",
        options: [
            "hide the result automatically.",
            "investigate whether it is an anomaly or measurement error and repeat the measurement where appropriate.",
            "change the hypothesis to fit it immediately.",
            "remove all the other results."
        ],
        correct: 1,
        explanation: "Scientific data should not simply be deleted because they are inconvenient. The researcher should check for: measurement error; procedural mistakes; genuine biological variation. Repeating the measurement can help."
    },
    {
        question: "Which statement distinguishes reliability from validity most accurately?",
        options: [
            "Reliability concerns consistency; validity concerns whether the investigation fairly tests the intended relationship.",
            "Reliability and validity mean exactly the same thing.",
            "Validity means repeating an investigation many times only.",
            "Reliability means changing several variables simultaneously."
        ],
        correct: 0,
        explanation: "Reliability: Can similar results be obtained repeatedly? Validity: Does the design genuinely test the intended relationship without uncontrolled variables confusing the outcome? They are related but not identical."
    },
    // Questions 61-80: DNA, Protein Synthesis and Genetics
    {
        question: "A section of DNA has the following template strand: TAC GGA CTT AAA. What is the complementary mRNA sequence?",
        options: ["AUG CCU GAA UUU", "TAC GGA CTT AAA", "ATG CCT GAA TTT", "UAC GGA CUU AAA"],
        correct: 0,
        explanation: "DNA template: TAC GGA CTT AAA. mRNA complementary bases are: T→A, A→U, C→G, G→C. Therefore: AUG CCU GAA UUU."
    },
    {
        question: "If the mRNA sequence is: AUG – GCU – AAA – UGA. How many amino acids would normally be added before the stop codon?",
        options: ["2", "3", "4", "12"],
        correct: 1,
        explanation: "The codons are: AUG | GCU | AAA | UGA. UGA is a stop codon. Therefore the first three codons specify amino acids before translation stops."
    },
    {
        question: "A mutation changes the DNA triplet from AAA → AAG but both triplets ultimately code for the same amino acid. This mutation is most likely:",
        options: ["silent.", "frameshift.", "chromosome nondisjunction.", "crossing over."],
        correct: 0,
        explanation: "The DNA sequence changed, but the amino acid did not. Because the genetic code is degenerate, several codons can code for the same amino acid. Such a base substitution can therefore be silent."
    },
    {
        question: "A single nucleotide is deleted from near the start of a coding sequence. Why can this have a major effect?",
        options: [
            "It may shift the reading frame of subsequent codons.",
            "It always adds an entire chromosome.",
            "It prevents meiosis only.",
            "It converts RNA into DNA."
        ],
        correct: 0,
        explanation: "Removing one nucleotide changes how subsequent bases are grouped into triplets. For example: ABC DEF GHI can become: ACD EFG HI... Many downstream amino acids may therefore change."
    },
    {
        question: "A DNA molecule contains 30% adenine. Assuming normal double-stranded DNA, what percentage would be cytosine?",
        options: ["20%", "30%", "40%", "70%"],
        correct: 0,
        explanation: "If adenine = 30%, thymine also = 30%. So: A + T = 60%. Remaining: 100 − 60 = 40%. Cytosine and guanine occur equally: 40 ÷ 2 = 20%."
    },
    {
        question: "Why is the answer to the previous question equal to 20%?",
        options: [
            "A = T, so A + T = 60%; the remaining 40% consists equally of C and G.",
            "A always equals C.",
            "C is twice the amount of adenine.",
            "DNA contains no guanine."
        ],
        correct: 0,
        explanation: "This follows Chargaff's base-pairing relationship: A = T and C = G. So 30% A means 30% T, leaving 40% for C and G together."
    },
    {
        question: "In pea plants, tallness T is dominant over dwarfness t. A heterozygous tall plant is crossed with a dwarf plant. What proportion of offspring is expected to be dwarf?",
        options: ["0%", "25%", "50%", "75%"],
        correct: 2,
        explanation: "Cross: Tt × tt. Gametes: T, t × t, t. Offspring: Tt, Tt, tt, tt. Therefore: 2/4 = 50% dwarf."
    },
    {
        question: "The cross in the previous question is: Tt × tt. What is the expected genotype ratio?",
        options: ["1 TT : 1 tt", "1 Tt : 1 tt", "3 Tt : 1 tt", "1 TT : 2 Tt : 1 tt"],
        correct: 1,
        explanation: "Half the offspring are heterozygous tall: Tt. Half are homozygous recessive: tt. Ratio: 1 : 1."
    },
    {
        question: "A tall plant of unknown genotype is crossed with a dwarf plant. The offspring are: 51 tall and 49 dwarf. What is the most likely genotype of the tall parent?",
        options: ["TT", "Tt", "tt", "Cannot contain T"],
        correct: 1,
        explanation: "A test cross against the recessive genotype gives approximately: 51 tall : 49 dwarf ≈ 1 : 1. That is the expected result of: Tt × tt."
    },
    {
        question: "Why does the result in the previous question suggest heterozygosity?",
        options: [
            "A Tt × tt test cross predicts approximately a 1:1 phenotype ratio.",
            "TT × tt predicts 1:1.",
            "tt × tt produces tall offspring.",
            "Heterozygous parents produce only recessive offspring."
        ],
        correct: 0,
        explanation: "The heterozygous parent produces: 50% T gametes and 50% t gametes. The recessive parent produces only t. Therefore approximately half the offspring are tall and half dwarf."
    },
    {
        question: "In cattle, red coat RR and white coat WW show codominance. Heterozygous cattle RW have both red and white hairs. Two roan cattle are crossed. What proportion of offspring is expected to be roan?",
        options: ["25%", "50%", "75%", "100%"],
        correct: 1,
        explanation: "Cross: RW × RW. Offspring: RR, RW, RW, WW. Two of four are RW: 2/4 = 50%."
    },
    {
        question: "The phenotype ratio from RW × RW is:",
        options: ["3 red : 1 white", "1 red : 2 roan : 1 white", "1 roan : 1 white", "4 roan"],
        correct: 1,
        explanation: "Genotypes and phenotypes correspond directly in this codominant cross: RR = red, RW = roan, WW = white. Ratio: 1 : 2 : 1."
    },
    {
        question: "A mother has blood group A and genotype IAi. The father has blood group B and genotype IBi. What is the probability of a child with blood group O?",
        options: ["0%", "25%", "50%", "75%"],
        correct: 1,
        explanation: "Cross: IAi × IBi. Possible combinations: IAIB (AB), IAi (A), IBi (B), ii (O). Each has a probability of approximately 25%."
    },
    {
        question: "What is the probability of a child with blood group AB from the same cross?",
        options: ["0%", "25%", "50%", "100%"],
        correct: 1,
        explanation: "Only one of the four genotype combinations is IAIB. Therefore: 1/4 = 25%."
    },
    {
        question: "Haemophilia is caused by a recessive allele carried on the X chromosome. A carrier woman XᴴXʰ has children with a normal man XᴴY. What is the probability that a son will have haemophilia?",
        options: ["0%", "25%", "50%", "100%"],
        correct: 2,
        explanation: "A son receives: Y from his father and one X chromosome from his mother. The carrier mother can pass: Xᴴ or Xʰ with equal probability. Therefore half of sons are expected to receive Xʰ and be affected."
    },
    {
        question: "For the same couple, what is the probability that any child, without specifying sex, will be a haemophiliac boy?",
        options: ["25%", "50%", "75%", "100%"],
        correct: 0,
        explanation: "Possible offspring: XᴴXᴴ, XᴴXʰ, XᴴY, XʰY. Only one of four is an affected boy: 1/4 = 25%."
    },
    {
        question: "Why are X-linked recessive conditions often more common in males?",
        options: [
            "Males possess only one X chromosome, so a recessive allele on it can be expressed without a corresponding dominant allele.",
            "Males possess two X chromosomes.",
            "Y chromosomes always carry dominant copies of X-linked genes.",
            "Females cannot inherit recessive alleles."
        ],
        correct: 0,
        explanation: "A male normally has XY. If the single X carries the recessive condition allele, there is no second X containing a dominant allele to mask it."
    },
    {
        question: "A man with an X-linked recessive condition has children with a woman who is homozygous normal. Which statement is correct?",
        options: [
            "All daughters inherit the affected X chromosome from their father and are expected to be carriers.",
            "All sons inherit the affected X chromosome from their father.",
            "Every child will express the condition.",
            "No daughter inherits an X chromosome from the father."
        ],
        correct: 0,
        explanation: "The affected father is XʰY. Every daughter receives his Xʰ chromosome. The homozygous normal mother contributes Xᴴ. Therefore daughters are XᴴXʰ and are carriers. Sons receive the father's Y chromosome, not his X."
    },
    {
        question: "Two genes are located very close together on the same chromosome. They tend to be inherited together because:",
        options: [
            "they are genetically linked.",
            "they undergo independent assortment more frequently.",
            "they are both necessarily recessive.",
            "they occur on separate homologous chromosome pairs."
        ],
        correct: 0,
        explanation: "Genes located close together on the same chromosome tend to travel together during meiosis. They therefore do not always show completely independent assortment."
    },
    {
        question: "Crossing over can separate linked alleles because:",
        options: [
            "homologous chromosomes may exchange chromosome segments during Prophase I.",
            "sister chromatids disappear during mitosis.",
            "RNA replaces DNA.",
            "chromosomes double after fertilisation."
        ],
        correct: 0,
        explanation: "During Prophase I, non-sister chromatids of homologous chromosomes may exchange DNA. A crossover occurring between two linked genes can separate their allele combination."
    },
    // Questions 81-100: Pedigree Analysis, Evolution and Population Change
    {
        question: "A rare condition is controlled by an autosomal recessive allele a. Generation I: I-1 unaffected male and I-2 affected female. They have two children: II-1 unaffected male and II-2 unaffected female. What is the genotype of individual I-2?",
        options: ["AA", "Aa", "aa", "Either AA or Aa"],
        correct: 2,
        explanation: "The condition is autosomal recessive. An affected individual must therefore possess two recessive alleles: aa."
    },
    {
        question: "Individual II-1 is unaffected. Since his mother is affected, which genotype must II-1 have?",
        options: ["AA", "Aa", "aa", "AY"],
        correct: 1,
        explanation: "His mother is aa, so she can give only a. II-1 is unaffected, meaning he must also have received a dominant A from his father. Therefore: Aa."
    },
    {
        question: "Why must II-1 possess allele a?",
        options: [
            "His affected mother can pass only allele a to her offspring.",
            "His father must be affected.",
            "Every male has allele a.",
            "Autosomal traits occur only in males."
        ],
        correct: 0,
        explanation: "An aa individual produces gametes carrying only a. Therefore every biological child must inherit an a allele from her."
    },
    {
        question: "If II-1 has children with a woman who is also heterozygous, what is the probability of an affected child?",
        options: ["0%", "25%", "50%", "100%"],
        correct: 1,
        explanation: "Cross: Aa × Aa. Produces: AA, Aa, Aa, aa. Only aa is affected. Probability: 1/4 = 25%."
    },
    {
        question: "A condition appears in every generation. Affected individuals appear in both sexes. An affected male and an unaffected female produce affected and unaffected descendants of both sexes. Which inheritance pattern is most consistent with this pedigree?",
        options: ["Autosomal dominant", "Y-linked", "Mitochondrial only", "Autosomal recessive with all affected people aa and no carriers present"],
        correct: 0,
        explanation: "The condition: appears across successive generations; affects males and females; can be transmitted from affected parents. This is strongly consistent with autosomal dominant inheritance."
    },
    {
        question: "Why is Y-linked inheritance unlikely?",
        options: [
            "An affected female occurs.",
            "The condition occurs in a male.",
            "Y-linked traits are dominant.",
            "Fathers do not have chromosomes."
        ],
        correct: 0,
        explanation: "Y-linked alleles occur on the Y chromosome. Females normally have no Y chromosome. Therefore an affected female rules out a simple Y-linked pattern."
    },
    {
        question: "If the condition is autosomal dominant and unaffected individuals are dd, what genotype is most likely for an affected parent who has unaffected children?",
        options: ["DD", "Dd", "dd", "XY"],
        correct: 1,
        explanation: "If an affected individual were DD and the unaffected partner dd, every child would receive D and be affected. Since unaffected children occur, the affected parent must be Dd."
    },
    {
        question: "Two heterozygous affected individuals with genotype Dd have a child. What is the probability that the child will be unaffected?",
        options: ["0%", "25%", "50%", "75%"],
        correct: 1,
        explanation: "Cross: Dd × Dd. Offspring: DD, Dd, Dd, dd. Only dd is unaffected. Probability: 25%."
    },
    {
        question: "Before widespread use of an antibiotic, a bacterial population contains: 9 990 susceptible bacteria and 10 resistant bacteria. After repeated antibiotic treatment, most surviving bacteria are resistant. Which explanation best matches natural selection?",
        options: [
            "The antibiotic caused each bacterium to deliberately develop resistance.",
            "Resistant variants already existed, survived treatment at a higher rate and reproduced.",
            "Susceptible bacteria transformed because they needed resistance.",
            "Antibiotics caused all bacteria to become genetically identical."
        ],
        correct: 1,
        explanation: "Natural selection does not require organisms to consciously change. Variation already exists. When the antibiotic is applied: susceptible bacteria die at a higher rate; resistant bacteria survive; survivors reproduce; resistance alleles become more frequent."
    },
    {
        question: "After several generations, the resistance allele becomes much more common. This is evidence of evolution because:",
        options: [
            "allele frequencies in the population changed over generations.",
            "each individual bacterium evolved during its own lifetime.",
            "DNA stopped replicating.",
            "bacteria became multicellular."
        ],
        correct: 0,
        explanation: "At population level, evolution can be defined as a change in allele frequencies over generations. The population changed genetically. Individual bacteria did not 'evolve because they needed to.'"
    },
    {
        question: "Consider a population of beetles: Generation 1: 800 green, 200 brown. Generation 5: 520 green, 480 brown. Generation 10: 190 green, 810 brown. The environment became progressively drier and browner. Which interpretation is most reasonable if brown beetles are better camouflaged?",
        options: [
            "Brown beetles probably experienced greater reproductive success.",
            "Green beetles deliberately changed their colour.",
            "Natural selection stopped occurring.",
            "Brown beetles cannot pass colour alleles to offspring."
        ],
        correct: 0,
        explanation: "As the environment became browner, brown beetles may have been less visible to predators. If colour is heritable, they may survive and reproduce more successfully. Their alleles then become more common."
    },
    {
        question: "Which additional evidence would strengthen the natural-selection explanation in the previous question?",
        options: [
            "Brown colour is heritable.",
            "Every beetle changes colour during life.",
            "Brown beetles never reproduce.",
            "Beetle colour has no genetic basis."
        ],
        correct: 0,
        explanation: "Natural selection can produce evolutionary change only when the advantageous variation can be inherited. If brown colour were purely acquired and not heritable, it would not explain the increasing genetic frequency across generations."
    },
    {
        question: "A population of birds becomes separated when a new river forms. After thousands of generations: the two populations have different mating calls; their breeding seasons differ; mating between them produces no viable offspring. What has most likely occurred?",
        options: ["Speciation", "Cloning", "Mitosis", "Artificial fertilisation"],
        correct: 0,
        explanation: "The populations are now reproductively isolated: different mating behaviour; different breeding timing; inability to produce viable offspring. This indicates formation of separate species."
    },
    {
        question: "Which event occurred first in the most likely speciation sequence?",
        options: ["Reproductive isolation", "Geographic isolation", "Complete genetic identity", "Extinction of both populations"],
        correct: 1,
        explanation: "A common allopatric speciation sequence is: One population → geographic barrier → two isolated populations → different mutations/selection pressures/genetic drift → increasing genetic differences → reproductive isolation → new species."
    },
    {
        question: "A storm carries six lizards from a large island population to a remote island. Their descendants establish a population with unusually high frequencies of alleles that were rare in the original population. This is best described as:",
        options: ["founder effect.", "artificial selection.", "gene cloning.", "stabilising homeostasis."],
        correct: 0,
        explanation: "Only six individuals establish the new population. Their alleles may not accurately represent the original population. As a result, rare alleles can become unusually common simply because the founders happened to carry them."
    },
    {
        question: "Why is the founder effect considered a form of genetic drift?",
        options: [
            "Allele frequencies may change largely by chance because the new population begins with a small, non-representative sample.",
            "It always favours the most useful allele.",
            "It occurs only because humans select organisms.",
            "It creates new alleles through transcription."
        ],
        correct: 0,
        explanation: "Genetic drift involves random changes in allele frequencies. Founder populations are especially vulnerable because their initial gene pool is very small."
    },
    {
        question: "A disease kills 95% of a large animal population regardless of phenotype. The small surviving population happens to contain fewer alleles than the original population. This is an example of:",
        options: ["bottleneck effect.", "sexual selection.", "codominance.", "protein synthesis."],
        correct: 0,
        explanation: "A dramatic population reduction leaves only a small sample of the original gene pool. Even when survival is not based on phenotype, allele frequencies can change substantially by chance. That is a population bottleneck."
    },
    {
        question: "Two unrelated species independently develop streamlined bodies because both live in fast-moving aquatic environments. Their similar body shapes are most likely the result of:",
        options: ["convergent evolution.", "identical ancestry in the very recent past.", "meiosis failure.", "artificial selection."],
        correct: 0,
        explanation: "Unrelated organisms exposed to similar selection pressures can independently evolve similar adaptations. Their similar body shapes therefore do not necessarily indicate close ancestry."
    },
    {
        question: "The forelimbs of humans, whales and bats have similar basic bone arrangements but perform different functions. This evidence is most consistent with:",
        options: [
            "homologous structures and common ancestry.",
            "analogous structures only.",
            "unrelated evolution.",
            "identical environmental pressures producing identical DNA."
        ],
        correct: 0,
        explanation: "Human arms, whale flippers and bat forelimbs have similar underlying skeletal structures. Their functions differ, but structural similarity supports inheritance from a common ancestor. This is evidence of divergent evolution."
    },
    {
        question: "Scientists compare DNA sequences from four species. Species A: 98.7%, B: 91.2%, C: 83.5%, D: 71.0%. Which species is most likely to share the most recent common ancestor with Species X?",
        options: ["Species A", "Species B", "Species C", "Species D"],
        correct: 0,
        explanation: "Greater DNA similarity generally indicates a closer evolutionary relationship when comparable sequences are being examined. Species A shares 98.7% similarity with Species X, the highest of the four."
    }
];

// ----- COMBINED LIFE SCIENCES (200 QUESTIONS) -----
const LIFE_SCIENCES_ALL = LIFE_SCIENCES_BASIC.concat(LIFE_SCIENCES_ADVANCED);

// ----- OTHER SUBJECTS (Placeholder Questions) -----
const OTHER_SUBJECTS = {
    mathematics: [
        {
            question: "What is the value of (2 + 3) × 4?",
            options: ["12", "16", "20", "24"],
            correct: 2,
            explanation: "First solve the brackets: 2 + 3 = 5, then multiply by 4: 5 × 4 = 20."
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "12 × 12 = 144, so the square root of 144 is 12."
        }
    ],
    geography: [
        {
            question: "What is the capital of South Africa?",
            options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
            correct: 1,
            explanation: "Pretoria is the administrative capital of South Africa."
        },
        {
            question: "Which ocean borders South Africa to the east?",
            options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
            correct: 2,
            explanation: "The Indian Ocean borders South Africa to the east."
        }
    ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1,
            explanation: "The SI unit of force is the Newton (N)."
        },
        {
            question: "What is the speed of light approximately?",
            options: ["300,000 km/s", "150,000 km/s", "600,000 km/s", "30,000 km/s"],
            correct: 0,
            explanation: "The speed of light is approximately 300,000 km/s."
        }
    ],
    accounting: [
        {
            question: "What is the accounting equation?",
            options: ["Assets = Liabilities + Expenses", "Assets = Liabilities + Owner's Equity", "Assets = Revenue - Expenses", "Liabilities = Assets + Owner's Equity"],
            correct: 1,
            explanation: "The accounting equation is: Assets = Liabilities + Owner's Equity."
        },
        {
            question: "What is a debit?",
            options: ["Money going out of an account", "Money coming into an account", "A type of credit", "A financial statement"],
            correct: 0,
            explanation: "A debit is an entry that increases assets or decreases liabilities."
        }
    ],
    'business-studies': [
        {
            question: "What is a sole proprietorship?",
            options: ["A business owned by one person", "A business owned by two or more people", "A business with shareholders", "A government-owned business"],
            correct: 0,
            explanation: "A sole proprietorship is a business owned and operated by one person."
        },
        {
            question: "What is a SWOT analysis used for?",
            options: ["Financial planning", "Strategic analysis", "Marketing research", "Accounting"],
            correct: 1,
            explanation: "SWOT analysis is used for strategic planning: Strengths, Weaknesses, Opportunities, Threats."
        }
    ]
};

// ----- COMBINED QUESTIONS LOOKUP -----
const QUESTIONS = {
    'life-sciences': LIFE_SCIENCES_ALL,  // 200 questions
    'mathematics': OTHER_SUBJECTS.mathematics,
    'geography': OTHER_SUBJECTS.geography,
    'physics': OTHER_SUBJECTS.physics,
    'accounting': OTHER_SUBJECTS.accounting,
    'business-studies': OTHER_SUBJECTS['business-studies']
};

const QUESTIONS_PER_QUIZ = 10;

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomQuestions(subjectId, count) {
    count = count || QUESTIONS_PER_QUIZ;
    const allQuestions = QUESTIONS[subjectId] || [];
    if (allQuestions.length === 0) return [];
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}