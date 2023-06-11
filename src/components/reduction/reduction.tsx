import React, { useState } from "react";

const Reduction: React.FC  = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [activity, setActivity] = useState<number>(0);
  const [gender, setGender] = useState<number>(0);
  const [deficit, setDeficit] = useState<number>(0);

  function handleSubmit() {
    const weightCalc = 10 * weight;
    const heightCalc = 6.25 * height;
    const ageCalc = 5 * age;
    const basicMetabolism =
      weightCalc + heightCalc - ageCalc + gender;
    const totalMetabolism = basicMetabolism * activity;
    const deficitCalc = deficit * 0.3;
    const deficitCalcInKcal = totalMetabolism * deficitCalc;
    const totalCalories = totalMetabolism - deficitCalcInKcal
    alert(totalCalories);
    return (
      <div>
        eee {basicMetabolism}eee {totalMetabolism}eee {totalCalories}
      </div>
    );
  }

  return (
    <section>
      <h3>redukcja</h3>
      <main>
        <form onSubmit={handleSubmit}  >
          <label>
            Aktywność:
            <select
              value={gender}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setGender(Number(e.target.value));
              }}
            >
              <option value={-161} >
                Kobieta
              </option>
              <option value={5} >
                Mężczyzna
              </option>
            </select>
          </label>
          <label>
            Wiek:
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAge(Number(e.target.value));
              }}
            />
          </label>
          <label>
            Waga:
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setWeight(Number(e.target.value));
              }}
            />
          </label>

          <label>
            Wzrost:
            <input
              type="number"
              name="height"
              value={height}
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
          </label>
          <label>
            Aktywność:
            <select
              value={activity}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setActivity(Number(e.target.value));
              }}
            >
              <option value={1.4}>Minimalna</option>
              <option value={1.6}>Mała</option>
              <option value={1.7}>Umiarkowana</option>
              <option value={1.9}>Intensywna</option>
              <option value={2.3}>Bardzo intensywna</option>
            </select>
          </label>
          <label>
            Redukcja tygodniowo (kg):
            <input
              type="number"
              name="deficit"
              value={deficit}
              step="0.1"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDeficit(Number(e.target.value));
              }}
            />
          </label>
          <button type="submit">Wyślij</button>
        </form>
      </main>
    </section>
  );
};

export default Reduction;
