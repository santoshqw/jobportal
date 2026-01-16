import Message from "../models/message.model.js";
import Chat from "../models/chat.model.js";

export const getChat = async (req, res) => {
  const myId = req.user._id;
  const friendId = req.params.id;

  try {
    //  Find private chat
    const chat = await Chat.findOne({
      isGroupChat: false,
      users: { $all: [myId, friendId] },
    });

    //  If no chat exists
    if (!chat) {
      return res.status(200).json({
        chatId: null,
        messages: [],
      });
    }

    //  Fetch messages
    const messages = await Message.find({ chat: chat._id })
      .populate("sender", "name")
      .sort({ createdAt: 1 });

    //  Response
    res.status(200).json({
      chatId: chat._id,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch messages",
      error: error.message,
    });
  }
};
