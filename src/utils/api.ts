import { ClientResponse, Method } from "../types";
import { HOST_ADDRESS } from "../../config/config";
import { getLocalStorage } from "./localStorage";

export async function callApi<T>(
  path: string,
  method: Method = Method.Get,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any = undefined
): Promise<ClientResponse<T>> {
  try {
    const response = await fetch(`${HOST_ADDRESS}/${path}`, {
      method,
      headers: ["POST", "PATCH", "PUT"].includes(method)
        ? {
            "Content-Type": "application/json",
            token: getLocalStorage("token") || undefined,
          }
        : {
            token: getLocalStorage("token") || undefined,
          },
      body: body && JSON.stringify(body),
    });

    const result = await response.json();
    if (response.ok) {
      return {
        ...result,
        status: true,
      };
    }
    return {
      status: false,
      message: result.message,
    };
  } catch (error) {
    return {
      message: "An error occurred, please try again later.",
      status: false,
    };
  }
}
