import React from "react";
import mockImages from "./__mocks__/mock-images";
import ExperienceOverview from "./ExperienceOverview";

export default {
  title: `Experiences/ExperienceOverview`,
  component: ExperienceOverview,
};

export const GenericExperienceOverview = () => (
  <ExperienceOverview
    islandName="PekoPeko"
    images={mockImages}
    catchPhrase="A nonstop city of thrilling contrasts"
    description="With its futuristic skyscrapers, unrivaled food scene, and wild nightlife, PekoPeko is a rush of pure adrenaline. This vast and multifaceted city is famously cutting edge, yet its ancient Buddhist temples, vintage teahouses, and peaceful gardens offer a serene escape — and a poignant reminder of the city’s long history. And for those who know where to look, PekoPeko’s smaller pleasures (secret ramen spots, shopping alleys, chill record bars) are often hiding in plain sight."
  />
);
