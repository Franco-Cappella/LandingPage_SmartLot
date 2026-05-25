import React from "react";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { ProblemScene } from "./scenes/ProblemScene";
import { BrandScene } from "./scenes/BrandScene";
import { FeaturesScene } from "./scenes/FeaturesScene";
import { CtaScene } from "./scenes/CtaScene";

const TRANSITION_FRAMES = 15;

export const SCENE_DURATIONS = {
  problem: 170,
  brand: 255,
  features: 270,
  cta: 250,
};

export const TOTAL_DURATION =
  SCENE_DURATIONS.problem +
  SCENE_DURATIONS.brand +
  SCENE_DURATIONS.features +
  SCENE_DURATIONS.cta -
  TRANSITION_FRAMES * 3;

const timing = linearTiming({ durationInFrames: TRANSITION_FRAMES });

export default function SmartLotPromo() {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence premountFor={15} durationInFrames={SCENE_DURATIONS.problem}>
        <ProblemScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence premountFor={15} durationInFrames={SCENE_DURATIONS.brand}>
        <BrandScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide()} timing={timing} />
      <TransitionSeries.Sequence premountFor={15} durationInFrames={SCENE_DURATIONS.features}>
        <FeaturesScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence premountFor={15} durationInFrames={SCENE_DURATIONS.cta}>
        <CtaScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
}
