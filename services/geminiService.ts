
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const enhanceListingDescription = async (title: string, amenities: string[], location: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a compelling and professional marketing description for a PG (Paying Guest) listing with the following details:
      Title: ${title}
      Amenities: ${amenities.join(', ')}
      Location: ${location}
      Target Audience: Students and young professionals. Keep it under 150 words.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const getSmartPGRecommendations = async (studentPreferences: string, listings: any[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on the following student preferences: "${studentPreferences}", analyze which of these PG listings would be the best match. 
      Listings: ${JSON.stringify(listings)}
      Provide a brief summary explaining why.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedId: { type: Type.STRING },
            reasoning: { type: Type.STRING }
          },
          required: ["recommendedId", "reasoning"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Recommendation Error:", error);
    return null;
  }
};
