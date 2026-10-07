import { useEffect } from 'react'
import { chatbaseConfig } from './chatbaseConfig'

export default function ChatbaseWidget() {
  useEffect(() => {
    const { botId, domain } = chatbaseConfig

    if (!botId || botId === 'PASTE_CHATBASE_BOT_ID_HERE') {
      console.warn('Chatbase Bot ID is not configured.')
      return
    }

    if (!window.chatbase) {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = []
        }

        window.chatbase.q.push(args)
      }

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') {
            return target.q
          }

          return (...args) => target(prop, ...args)
        },
      })
    }

    if (document.getElementById(botId)) {
      return
    }

    const loadWidget = () => {
      if (document.getElementById(botId)) {
        return
      }

      const script = document.createElement('script')
      script.src = 'https://www.chatbase.co/embed.min.js'
      script.id = botId
      script.setAttribute('domain', domain)
      script.async = true

      document.body.appendChild(script)
    }

    if (document.readyState === 'complete') {
      loadWidget()
    } else {
      window.addEventListener('load', loadWidget, { once: true })
    }

    return () => {
      window.removeEventListener('load', loadWidget)
    }
  }, [])

  return null
}
