import { Composition } from "remotion";
import SmartLotPromo from "./SmartLotPromo";

export default function Root() {
  return (
    <Composition
      id="SmartLotPromo"
      component={SmartLotPromo}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
}