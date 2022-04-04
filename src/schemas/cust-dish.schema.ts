import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CustDishDocument = CustDish & Document;

@Schema()
export class CustDish {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  recipe: string;
}

export const CustDishSchema = SchemaFactory.createForClass(CustDish);
