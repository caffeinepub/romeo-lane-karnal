import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useAddReservation() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      date: string;
      time: string;
      guests: bigint;
      name: string;
      phone: string;
      specialRequests: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.addReservation(
        data.date,
        data.time,
        data.guests,
        data.name,
        data.phone,
        data.specialRequests,
      );
    },
  });
}

export function useAddContactMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.addContactMessage(data.name, data.email, data.message);
    },
  });
}

export function useGetAllReservations() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["reservations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReservations();
    },
    enabled: !!actor && !isFetching,
  });
}
