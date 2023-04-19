import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  // SWR will fetch /api/current using this fetcher
  // SRW will store the response in its global store
  // if data already exists it will not fetch again
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
