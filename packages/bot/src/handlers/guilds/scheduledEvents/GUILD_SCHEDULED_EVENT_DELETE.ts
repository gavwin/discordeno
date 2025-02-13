import type { DiscordGatewayPayload, DiscordScheduledEvent } from '@discordeno/types'
import type { Bot } from '../../../bot.js'

export async function handleGuildScheduledEventDelete(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  const payload = data.d as DiscordScheduledEvent
  bot.events.scheduledEventDelete?.(bot.transformers.scheduledEvent(bot, payload))
}
