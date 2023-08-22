import {createContext, useContext} from 'react';
export type FetchContextProps = {
    url: string;
    headers: HeaderProps;
  };
  
  export type HeaderProps = {
    'Content-Type': string;
    Authorization?: string;
    role?: string;
  };


export type FetcherWithAuthDef = <TData, TVariables>(
  query: string | undefined,
) => (variables?: TVariables) => Promise<TData>;

export const fetcherWithAuth: FetcherWithAuthDef = query => {
  const FetchContext = createContext<FetchContextProps>({
    url: 'https://countries.trevorblades.com/graphql',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const UseFetchContext = () => useContext(FetchContext);
  const {url, headers} = UseFetchContext();

  return async variables => {
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();
    if (
      json.errors ||
      [400, 401, 403, 404, 405, 408, 500, 502, 504].includes(res?.status)
    ) {
      throw json.errors[0];
    }
    return json.data;
  };
};

export default fetcherWithAuth;