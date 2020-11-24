export const makeLocalRequest = async (
  path: string,
  method?: string,
  reqBody?: any
) => {
  let res;
  try {
    res = await fetch(path, {
      method: method ? method : "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: reqBody ? reqBody : null
    });
  } catch (err) {
    console.error(err);
  }
  return res;
};
