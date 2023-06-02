import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;
}

@InputType()
export class UpdateCategoryInput {
  @Field()
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly description: string;
}

@InputType()
export class FindCategoryInput {
  @Field()
  readonly id: number;
}
