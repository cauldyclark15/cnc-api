import { ArgsType, Field } from "@nestjs/graphql";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventUpdateInput } from "./EventUpdateInput";

@ArgsType()
class UpdateEventArgs {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  where!: EventWhereUniqueInput;
  @Field(() => EventUpdateInput, { nullable: false })
  data!: EventUpdateInput;
}

export { UpdateEventArgs };
