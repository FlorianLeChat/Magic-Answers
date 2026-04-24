export const MAGIC_ANSWERS = [
    "C'est compliqué à dire",
    "Le destin n'est pas encore décidé",
    "Repose la question plus tard",
    "Tout dépend de ce qui va suivre",
    "La réponse se cache dans le silence",
    "Le temps le dira",
    "Le moment n'est pas encore venu",
    "Le résultat est incertain",
    "La réponse est en train de se dessiner",
    "La patience révèle beaucoup",
    "Trop de variables entrent en jeu",
    "Regarde de plus près et repose la question",
    "L'équilibre est fragile",
    "Et pourquoi pas ?",
    "Les possibilités restent ouvertes",
    "Ce n'est pas encore décidé",
    "Quelque chose doit d'abord changer",
    "Les dés ne sont pas encore jetés",
    "Il est trop tôt pour trancher",
    "Laisse le temps faire son œuvre",
    "Rien n'est gravé dans le marbre",
    "Fais attention à ton ennemi",
    "Il est trop tôt pour trouver les réponses",
    "Oui, bien sûr",
    "Non, pas vraiment",
    "Es-tu SÛR de vouloir une réponse ????",
    "Mhhhh... nous sommes choqués par la question"
];

export const EASTER_EGG_KEYWORDS = [ "amour", "coeur", "cœur", "flamme", "aimer", "amoureux", "baiser" ];

export const REVEAL_VARIANTS = [ "mosaic", "flip", "fade" ] as const;

export type RevealVariant = ( typeof REVEAL_VARIANTS )[ number ];
