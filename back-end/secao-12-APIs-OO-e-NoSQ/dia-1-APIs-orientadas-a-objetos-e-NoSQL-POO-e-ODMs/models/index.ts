import { Schema, model, connect } from 'mongoose';

// 1. Cria a interface que representa as informações de um Pet
interface IPet {
  name: string;
  species: string;
  age?: number; //Campo opcional definido por: (?)
  weight: number;
  dailyMealsNumber: number;
}

// 2. Cria o Schema de acordo com Interface por meio do Generic: <IPet>
const petSchema = new Schema<IPet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: false },
  weight: { type: Number, required: true },
  dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
});

// 3. Cria a Model de acordo com a Interface e o Schema
export const Pet = model<IPet>('Pet', petSchema); // Aceita somente schemas do tipo IPet