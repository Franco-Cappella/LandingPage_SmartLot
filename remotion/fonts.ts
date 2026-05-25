import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const poppins = loadPoppins("normal", {
  weights: ["600", "700"],
  subsets: ["latin"],
});

const inter = loadInter("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});

export const headingFontFamily = poppins.fontFamily;
export const bodyFontFamily = inter.fontFamily;
