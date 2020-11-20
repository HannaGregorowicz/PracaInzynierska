export const makeLocalRequest = async (
  path: string,
  method: string,
  reqBody?: any
) => {
  try {
    await fetch(path, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: reqBody ? reqBody : {}
    });
  } catch (err) {
    console.error(err);
  }
};
