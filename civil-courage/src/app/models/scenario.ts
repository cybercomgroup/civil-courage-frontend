import { scenarioType } from 'app/models/scenarioType';

export class Scenario {
  event_id: number;
  append_text: string;
  severity: number;
  dateTime: string;
  type: scenarioType;
}
