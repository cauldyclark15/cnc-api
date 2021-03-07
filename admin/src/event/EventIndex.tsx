import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { EventList } from "./EventList";
import { CreateEvent } from "./CreateEvent";
import { Event } from "./Event";

export const EventIndex = (): React.ReactElement => {
  useBreadcrumbs("/events/", "Events");

  return (
    <Switch>
      <PrivateRoute exact path={"/events/"} component={EventList} />
      <PrivateRoute path={"/events/new"} component={CreateEvent} />
      <PrivateRoute path={"/events/:id"} component={Event} />
    </Switch>
  );
};
