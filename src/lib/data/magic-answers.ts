export const MAGIC_ANSWERS = [
    "C'est certain",
    "Oui, clairement",
    "Probablement",
    "Les signes disent oui",
    "Ne comptez pas là dessus",
    "Très peu probable",
    "Demandez plus tard",
    "Le destin hésite",
    "Impossible à dire",
    "Absolument pas",
    "Cela semble favorable",
    "Le brouillard est dense",
    "Pourquoi pas",
    "Ça sent mauvais",
    "Le cosmos approuve",
    "Pas aujourd'hui"
];

export const EASTER_EGG_KEYWORDS = [ "amour", "coeur", "cœur", "flamme", "crush", "saint valentin", "soulmate" ];

export const REVEAL_VARIANTS = [ "mosaic", "flip", "fade" ] as const;

export type RevealVariant = ( typeof REVEAL_VARIANTS )[ number ];
