export const MAGIC_ANSWERS = [
    "It is certain",
    "Yes, clearly",
    "Probably",
    "The signs say yes",
    "Don't count on it",
    "Very unlikely",
    "Ask again later",
    "Fate is undecided",
    "Impossible to say",
    "Absolutely not",
    "It seems favorable",
    "The fog is dense",
    "Why not",
    "That smells bad",
    "The cosmos approves",
    "Not today"
];

export const EASTER_EGG_KEYWORDS = [ "love", "heart", "flame", "loves", "to love", "kiss", "valentine's day" ];

export const REVEAL_VARIANTS = [ "mosaic", "flip", "fade" ] as const;

export type RevealVariant = ( typeof REVEAL_VARIANTS )[ number ];
