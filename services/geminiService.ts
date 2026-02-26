
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiAssistant {
  private ai: any;
  private chat: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text || "I'm sorry, I couldn't process that.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I encountered a technical glitch. Please try again later or contact Shafa directly.";
    }
  }

  async *sendMessageStream(message: string) {
    try {
      const response = await this.chat.sendMessageStream({ message });
      for await (const chunk of response) {
        yield chunk.text || "";
      }
    } catch (error) {
      console.error("Gemini API Stream Error:", error);
      yield "Error connecting to AI service.";
    }
  }
}
