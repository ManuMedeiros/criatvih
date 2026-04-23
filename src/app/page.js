"use client";

import { PrimeiraParte } from "./primeira-parte";
import { SegundaParte } from "./segunda-parte";
import { TerceiraParte } from "./terceira-parte";
import { QuartaParte } from "./quarta-parte";
import { QuintaParte } from "./quinta-parte";
import { SextaParte } from "./sexta-parte";
import { SetimaParte } from "./setima-parte";
import { OitavaParte } from "./oitava-parte";

export default function Home() {
  return (
    <main style={{ background: "#000" }}>
      <PrimeiraParte />
      <SegundaParte />
      <TerceiraParte />
      <QuartaParte />
      <QuintaParte />
      <OitavaParte />
      <SextaParte />
      <SetimaParte />
    </main>
  );
}
