import { ArgsType, Field } from "@nestjs/graphql";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";

@ArgsType()
class FindOneEventArgs {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  where!: EventWhereUniqueInput;
}

export { FindOneEventArgs };
