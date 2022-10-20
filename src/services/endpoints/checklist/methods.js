import instance from "../../instance";


export const create = async (values) => {
  try {
    return await instance.post("checklist", values);
  } catch (e) {
    console.error(e);
  }
};


export const deleteItem = async ({ id }) => {
  try {
    return await instance.delete(`checklist/${id}`);
  } catch (e) {
    console.error(e);
  }
};

export const update = async ({ id, values }) => {
  try {
    return await instance.put(`checklist/${id}`, values);
  } catch (e) {
    console.error(e);
  }
};