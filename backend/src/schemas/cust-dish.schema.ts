import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CustDishDocument = CustDish & Document;

@Schema()
export class CustDish {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  category: string;

  @Prop()
  area: string;

  @Prop({ required: true })
  instructions: string[];

  @Prop({ required: true })
  mesures: string[];

  @Prop()
  image: string;

  @Prop()
  src: string;
}

export const CustDishSchema = SchemaFactory.createForClass(CustDish);
