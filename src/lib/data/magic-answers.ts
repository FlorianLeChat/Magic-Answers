import * as m from "$lib/locales/messages.js";

type MessageKey = Exclude<keyof typeof m, "m">;
type MessageFunction = ( typeof m )[ MessageKey ];

/**
 * Collects every generated Paraglide message starting with the given prefix
 * (e.g. "magic_answer"), sorted by key so the numbering order is preserved.
 *
 * @author Claude
 */
const messagesByPrefix = ( prefix: string ): MessageFunction[] =>
    ( Object.keys( m ) as MessageKey[] )
        .filter( ( key ) => key.startsWith( prefix ) )
        .sort()
        .map( ( key ) => m[ key ] );

export const MAGIC_ANSWERS = messagesByPrefix( "magic_answer" );
export const LOVE_ANSWERS = messagesByPrefix( "love_answer" );

/**
 * Kept as raw keywords (not Paraglide messages): this list is used to detect
 * love-related input regardless of the active display locale, so it also
 * includes English terms alongside the French ones.
 *
 * @author Claude
 */
export const EASTER_EGG_KEYWORDS = [
    "amour",
    "aime",
    "coeur",
    "flamme",
    "baiser",
    "bisou",
    "cheri",
    "tendresse",
    "calin",
    "passion",
    "romantique",
    "romance",
    "seduire",
    "seduction",
    "desir",
    "attirance",
    "flirt",
    "couple",
    "copain",
    "copine",
    "fiance",
    "fiancaille",
    "mariage",
    "love",
    "coup de foudre",
    "sentiment",
    "heart",
    "flame",
    "kiss",
    "darling",
    "sweetheart",
    "crush",
    "romantic",
    "seduce",
    "seduction",
    "desire",
    "attraction",
    "boyfriend",
    "girlfriend",
    "fiance",
    "fiancee",
    "marriage",
    "wedding",
    "feelings"
];

export const REVEAL_VARIANTS = [ "mosaic", "flip", "fade" ] as const;

export type RevealVariant = ( typeof REVEAL_VARIANTS )[ number ];
