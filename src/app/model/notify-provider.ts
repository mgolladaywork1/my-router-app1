import { Injectable } from '@angular/core';

export type Notify = {
  id: number; complaint: string;
};

@Injectable()
export class NotifyProvider{
  notifyProviders: Notify[] = [
    { id: 0, complaint: 'Chest pain or pressure' },
    { id: 1, complaint: 'Shortness of breath or persistent wheezing'},
    { id: 2, complaint: 'Fever, temperature more than 100.4 degree Fahrenheit'},
    { id: 3, complaint: 'Unusual drainage, bleeding, redness or opening of incision/wound'},
    { id: 4, complaint: 'Urinary problems, burning, frequency, blood in urine, urinary retention, or unable to empty bladder'},
    { id: 5, complaint: 'Sudden or persistent pain not relieeved by prescribed pain medication'},
    { id: 6, complaint: 'Discoloration, swelling and/or numbness in extremities'},
    { id: 7, complaint: 'Excessive bruising, tenderness, or bleeding'},
    { id: 8, complaint: 'Sudden skin rash'},
    { id: 9, complaint: 'Persistent nausea, vomiting, diarrhea, constipation'},
    { id: 10, complaint: 'Changes in mental status/alertness'}
]
}
