import { AlunoType } from "../types/AlunoType";

export function arrayNotas(data: AlunoType[]) {
  const arr = data.map(({ notaFinal, id, sexo }) => {
    return { id, notaFinal, sexo };
  });

  const ForM = (a: number) => {
    const countA = arr.filter((e) => {
      return e.notaFinal == "A" && e.sexo == a;
    }).length;

    const countB = arr.filter((e) => {
      return e.notaFinal == "B" && e.sexo == a;
    }).length;

    const countC = arr.filter((e) => {
      return e.notaFinal == "C" && e.sexo == a;
    }).length;

    const countD = arr.filter((e) => {
      return e.notaFinal == "D" && e.sexo == a;
    }).length;

    const countF = arr.filter((e) => {
      return e.notaFinal == "F" && e.sexo == a;
    }).length;

    return [countA, countB, countC, countD, countF];
  };

  const l = ["A", "B", "C", "D", "F"];

  const f = ForM(1);
  const m = ForM(0);

  let i = -1;
  return l.map(() => {
    i++;
    return { data: [m[i], f[i]] };
  });
}
