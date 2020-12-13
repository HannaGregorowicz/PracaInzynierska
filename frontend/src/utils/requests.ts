export const makeLocalRequest = async (
  path: string,
  method?: string,
  reqBody?: any
) => {
  let res;
  try {
    res = await fetch(`/api/${path}`, {
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
    res = await makeLocalRequest(`/groups/signIn/${groupId}`, "PUT");
  } catch (err) {}
  return res;
};

export const signToGroupOnce = async (groupId: string) => {
  let res = null;
  try {
    res = await makeLocalRequest(`/groups/signInOnce/${groupId}`, "PUT");
  } catch (err) {}
  return res;
};

export const signOutFromGroup = async (groupId: string) => {
  let res = null;
  try {
    res = await makeLocalRequest(`/groups/signOut/${groupId}`, "PUT");
  } catch (err) {}
  return res;
};

export const signOutFromGroupOnce = async (groupId: string) => {
  let res = null;
  try {
    res = await makeLocalRequest(`/groups/signOutOnce/${groupId}`, "PUT");
  } catch (err) {}
  return res;
};

export const reportAbsence = async (body: any) => {
  let res = null;
  try {
    res = await makeLocalRequest("/absence", "POST", JSON.stringify(body));
  } catch (err) {}
  return res;
};

export const addGroup = async (body: any) => {
  let res = null;
  try {
    res = await makeLocalRequest("/groups", "POST", JSON.stringify(body));
  } catch (err) {}
  return res;
};

export const deleteGroup = async (groupId: string, groupName: string) => {
  let res = null;
  try {
    res = await makeLocalRequest(`/groups/${groupId}/${groupName}`, "DELETE");
  } catch (err) {}
  return res;
};
