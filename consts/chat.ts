export type TMessage = {
  role: "user" | "model";
  message: string;
};

export type TMessagesHistory = TMessage[];