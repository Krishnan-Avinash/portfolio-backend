import axios from "axios";
import { exec } from "child_process";

export const getLeetcode = async (req, res) => {
  try {
    const resp = await axios.get(process.env.LEETCODE);
    return res.status(200).send({ message: "Successful", data: resp.data });
  } catch (error) {
    return res.status(500).send({ message: "Some error occured" });
  }
};

export const getGFG = async (req, res) => {
  exec("python python-scripts/main.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return res.status(500).json({ error: "Error executing Python script" });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    console.log(`stdout: ${stdout}`);
    // Send stdout as a response to the client
    res.json({ output: stdout });
  });
};
