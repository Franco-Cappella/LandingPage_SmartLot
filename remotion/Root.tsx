import { Composition } from "remotion";
import SmartLotPromo, { TOTAL_DURATION } from "./SmartLotPromo";

export default function Root() {
  return (
    <Composition
      id="SmartLotPromo"
      component={SmartLotPromo}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />
  );
}
