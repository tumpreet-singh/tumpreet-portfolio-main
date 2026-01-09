import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "" // add later: "91XXXXXXXXXX"

  if (!phoneNumber) return null

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-lg hover:scale-105 transition"
      aria-label="WhatsApp"
    >
      <MessageCircle />
    </a>
  )
}
