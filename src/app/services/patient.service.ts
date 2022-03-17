import { Injectable } from '@angular/core';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients:Patient[] = [
    {name: "Ken Smith", illness: "Cough"},
    {name: "Mike Duff", illness: "Flu"},
    {name: "Vic Chuck", illness: "Dumb"},
  ];

  constructor() { }
}
