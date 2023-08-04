export interface CalculatorProps {
  onTotalMetabolismChange: (totalMetabolism: number) => void;
}

export interface MaintenanceProps {
  onTotalNutritionsChange: (
    totalProteins: number,
    totalFat: number,
    totalCarbons: number,
  ) => void;
}
export interface GainProps {
  onTotalNutritionsChange: (
    totalProteins: number,
    totalFat: number,
    totalCarbons: number,
  ) => void;
}
export interface ReductionProps {
  onTotalNutritionsChange: (
    totalProteins: number,
    totalFat: number,
    totalCarbons: number,
  ) => void;
}
