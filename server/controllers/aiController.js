const { GoogleGenAI } = require("@google/genai");
//console.log(process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateTitle = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({
        success: false,
        message: "Description is required",
      });
    }

    const prompt = `
Generate ONE short, creative title (maximum 6 words) for this journal entry.

Journal:
"${description}"

Return ONLY the title.
`;

    const response = await ai.interactions.create({
  model: "gemini-3.8-flash",
  input: prompt,
});

    res.json({
      success: true,
      title: response.output_text.trim(),
    });

  } catch (error) {
  console.error("Gemini Error:", error.message);
  console.error("Error status:", error.status);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

module.exports = { generateTitle };
console.log("Gemini Key:", process.env.GEMINI_API_KEY);