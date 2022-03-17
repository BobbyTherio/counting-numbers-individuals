import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors:Doctor[] = [
    {name: "John Wick", specialization: "Dentistry"},
    {name: "Beth Dutton", specialization: "Cardiology"},
    {name: "Kelce Dutton", specialization: "Veterinary"},
  ];

  constructor() { }
}
