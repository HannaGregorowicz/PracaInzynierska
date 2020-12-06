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
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: reqBody ? reqBody : null
    });
  } catch (err) {
    console.error(err);
  }
  return res;
};

export const signToGroup = async (groupId: string) => {
  let res = null;
  try {
    res = await makeLocalRequest(`/groups/sign/${groupId}`, "PUT");
  } catch (err) {}
  return res;
};
