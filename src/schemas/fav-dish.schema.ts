import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DishDocument = FavDish & Document;

@Schema()
export class FavDish {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  recipe: string;

  @Prop()
  img: string;

  @Prop()
  src: string;

  @Prop()
  createdDate: string;
}

export const FavDishSchema = SchemaFactory.createForClass(FavDish);
