import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Event } from "../api/event/Event";

type Props = { id: string };

export const EventTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    Event,
    AxiosError,
    [string, string]
  >(["get-/api/events", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/events"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/events"}/${id}`} className="entity-id">
      {data?.name && data?.name.length ? data.name : data?.id}
    </Link>
  );
};
