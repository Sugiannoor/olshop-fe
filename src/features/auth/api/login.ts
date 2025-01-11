import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";
import storage from "@/utils/storage";

import { CREDS_KEY } from "./creds";
import { User } from "@/features/user/types";
type LoginDTO = {
  email: string;
  password: string;
};

type LoginResponse = GeneralResponse<{
  access_token: string;
  user: User;
}>;

export async function login(data: LoginDTO): Promise<LoginResponse> {
  const res = await axios.post<LoginResponse>("/auth/login", data);

  // const { district } = res.data.data.user;

  // if (district != "Customer" && district != "Admin")
  //   throw { message: "Anda tidak memiliki akses kedalam aplikasi ini" };

  return res.data;
}

type UseLoginOption = {
  config?: MutationConfig<typeof login>;
};

export function useLogin({ config }: UseLoginOption = {}) {
  return useMutation(login, {
    onSuccess: ({ data: { access_token, user } }) => {
      queryClient.setQueryData([CREDS_KEY], user);
      storage.setToken(access_token);
    },
    ...config,
  });
}
