import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "916280505657" // replace with real number later

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[9999]
        flex items-center gap-2
        bg-black dark:bg-white
        text-white dark:text-black
        px-4 py-3 rounded-full
        shadow-lg
        hover:scale-105 transition
      "
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm font-medium">
        WhatsApp
      </span>
    </a>
  )
}
