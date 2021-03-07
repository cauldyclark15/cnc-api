import { ArgsType, Field } from "@nestjs/graphql";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";

@ArgsType()
class DeleteEventArgs {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  where!: EventWhereUniqueInput;
}

export { DeleteEventArgs };
