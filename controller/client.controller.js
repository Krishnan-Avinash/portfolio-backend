import { Client } from "../models/client.model.js";

const addClient = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    if (!name || !email || !number || !message) {
      return res
        .status(300)
        .json({ success: false, message: "All details required" });
    }
    const newClient = {
      name,
      email,
      number,
      message,
    };
    const newClientRegister = new Client(newClient);
    newClientRegister.save();
    res.status(200).json({ success: true, message: "Successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error occures" });
  }
};

export { addClient };
