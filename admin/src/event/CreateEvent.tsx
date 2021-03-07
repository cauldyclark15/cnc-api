import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Event } from "../api/event/Event";
import { EventCreateInput } from "../api/event/EventCreateInput";

const INITIAL_VALUES = {} as EventCreateInput;

export const CreateEvent = (): React.ReactElement => {
  useBreadcrumbs("/events/new", "Create Event");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    Event,
    AxiosError,
    EventCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/events", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/events"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: EventCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Event"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <TextField label="Name" name="name" />
          </div>
          <div>
            <TextField label="Payload" name="payload" textarea />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
