import { routes } from '@discordeno/constant'
import TRANSFORMERS from '@discordeno/transformer'
import type {
  BigString,
  Camelize,
  DiscordAutoModerationRule
} from '@discordeno/types'
import type { RestManager } from '../../../restManager.js'

/**
 * Gets an automod rule by its ID.
 *
 * @param rest - The rest manager to use to make the request.
 * @param guildId - The ID of the guild to get the rule of.
 * @param ruleId - The ID of the rule to get.
 * @returns An instance of {@link DiscordAutoModerationRule}.
 *
 * @remarks
 * Requires the `MANAGE_GUILD` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule}
 */
export async function getAutomodRule (
  rest: RestManager,
  guildId: BigString,
  ruleId: BigString
): Promise<Camelize<DiscordAutoModerationRule>> {
  const result = await rest.runMethod<DiscordAutoModerationRule>(
    'GET',
    routes.AUTOMOD_RULE(guildId, ruleId)
  )

  return TRANSFORMERS.automodRule(result)
}
