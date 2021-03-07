import { ArgsType, Field } from "@nestjs/graphql";
import { EventCreateInput } from "./EventCreateInput";

@ArgsType()
class CreateEventArgs {
  @Field(() => EventCreateInput, { nullable: false })
  data!: EventCreateInput;
}

export { CreateEventArgs };
