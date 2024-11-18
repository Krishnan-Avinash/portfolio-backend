import axios from "axios";
export const getLeetcode = async (req, res) => {
  try {
    const resp = await axios.get(process.env.LEETCODE);
    return res.status(200).send({ message: "Successful", data: resp.data });
  } catch (error) {
    return res.status(500).send({ message: "Some error occured" });
  }
};

export const getGFG = async (req, res) => {
  try {
    const resp = await axios.get(process.env.GFG);
    return res.status(200).send({ message: "Successful", data: resp.data });
  } catch (error) {
    return res.status(500).send({ message: "Some error occured" });
  }
};
