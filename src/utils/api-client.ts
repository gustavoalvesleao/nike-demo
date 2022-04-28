const apiURL = process.env.REACT_APP_API_URL;

interface CustomConfig {
  data?: unknown;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: {
    "Content-Type"?: string;
  };
}

async function client(
  endpoint: string,
  { data, headers: customHeaders, ...customConfig }: CustomConfig = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : "",
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(`${apiURL}${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return Promise.reject(data);
  });
}

export { client };
