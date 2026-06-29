import { useQuery } from "@tanstack/react-query";
import { fetchExecutives } from "../api/executive";

export function useExecutives(limit?: number) {
  return useQuery({
    queryKey: ["executives"],
    queryFn: () => fetchExecutives(limit),
  });
}
