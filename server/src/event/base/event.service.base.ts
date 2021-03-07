import { PrismaService } from "nestjs-prisma";
import {
  FindOneEventArgs,
  FindManyEventArgs,
  EventCreateArgs,
  EventUpdateArgs,
  EventDeleteArgs,
  Subset,
} from "@prisma/client";

export class EventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}
  findMany<T extends FindManyEventArgs>(args: Subset<T, FindManyEventArgs>) {
    return this.prisma.event.findMany(args);
  }
  findOne<T extends FindOneEventArgs>(args: Subset<T, FindOneEventArgs>) {
    return this.prisma.event.findOne(args);
  }
  create<T extends EventCreateArgs>(args: Subset<T, EventCreateArgs>) {
    return this.prisma.event.create<T>(args);
  }
  update<T extends EventUpdateArgs>(args: Subset<T, EventUpdateArgs>) {
    return this.prisma.event.update<T>(args);
  }
  delete<T extends EventDeleteArgs>(args: Subset<T, EventDeleteArgs>) {
    return this.prisma.event.delete(args);
  }
}
