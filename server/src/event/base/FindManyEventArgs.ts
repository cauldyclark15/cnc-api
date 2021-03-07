import { ArgsType, Field } from "@nestjs/graphql";
import { EventWhereInput } from "./EventWhereInput";

@ArgsType()
class FindManyEventArgs {
  @Field(() => EventWhereInput, { nullable: true })
  where?: EventWhereInput;
}

export { FindManyEventArgs };
