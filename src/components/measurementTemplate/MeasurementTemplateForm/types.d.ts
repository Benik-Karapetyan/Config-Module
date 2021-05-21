export interface SelectItem {
  id: number;
  name: string;
}

export interface Timing {
  type: number;
  dayOfWeek: string[];
  frequency: number;
  period: number;
  periodUnit: number;
  whenOfDay?: string[];
  timeOfDay?: string[];
  whenOfCase: string;
}

export interface TemplateTiming {
  templateId: number;
  name?: string;
  timing: Timing;
  comment?: string;
}

export interface CharacteristicCategory {
  id: number | string;
  templateTimings: TemplateTiming[];
}

interface MeasurementTemplate {
  name: string;
  categoryId: string | number | undefined;
  locations: string[];
  branches: (number | undefined)[];
  isDefault: boolean;
  characteristicCategories: CharacteristicCategory[];
}
