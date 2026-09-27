import { loadFont as loadLocalFont } from "@remotion/fonts";
import { loadFont as loadPlexMono } from "@remotion/google-fonts/IBMPlexMono";
import { staticFile } from "remotion";

// English + numerals: thin monospace.
const plex = loadPlexMono("normal", {
  weights: ["200", "300", "400"],
  subsets: ["latin"],
});

// Chinese: Noto Serif SC, subset to exactly the glyphs used in src/
// (see scripts/fetch-fonts.mjs). A full CJK font is ~100 network chunks per
// weight — a local subset keeps renders fast and deterministic.
export const SERIF_FAMILY = "Noto Serif SC Reel";

for (const weight of ["300", "400"]) {
  loadLocalFont({
    family: SERIF_FAMILY,
    url: staticFile(`fonts/noto-serif-sc-${weight}.woff2`),
    weight,
  });
}

export const FONT = {
  // Serif first so CJK glyphs land in Noto; Latin inside Chinese lines also
  // renders in Noto's Latin, which matches the serif voice.
  serif: `"${SERIF_FAMILY}", serif`,
  // CJK falls through to the serif subset rather than a system font (tofu).
  mono: `${plex.fontFamily}, "${SERIF_FAMILY}", monospace`,
} as const;
