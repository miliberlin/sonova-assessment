import React from "react";
import BenefitsTile from "./BenefitsTile";

export default function Benefits() {
  return (
    <section id="benefits" className="side-padding">
      <h3>sed pulvinar proin gravida hendrerit</h3>
      <div className="flex">
        <BenefitsTile number="97" text="senectus et netus et malesuada" />
        <BenefitsTile
          number="95"
          text="ullamcorper malesuada proin libero nunc consequat"
        />
        <BenefitsTile
          number="66"
          text="urna duis convallis convallis tellus id interdum"
        />
        <BenefitsTile
          number="62"
          text="massa vitae tortor condimentum lacinia quis"
        />
        <BenefitsTile
          number="56"
          text="id aliquet risus feugiat in ante metus dictum"
        />
        <BenefitsTile />
      </div>
    </section>
  );
}
