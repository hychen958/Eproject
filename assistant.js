import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function main() {
  console.log("Assistant is typing...")
  console.log()
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  })

  console.log(completion)
}

main()