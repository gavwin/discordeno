import type { BigString, DiscordBeginGuildPrune } from '@discordeno/types'
import type { RestManager } from '../../restManager.js'

/**
 * Initiates the process of pruning inactive members.
 *
 * @param rest - The rest manager to use to make the request.
 * @param guildId - The ID of the guild to prune the members of.
 * @param options - The parameters for the pruning of members.
 * @returns A number indicating how many members were pruned.
 *
 * @remarks
 * Requires the `KICK_MEMBERS` permission.
 *
 * ❗ Requests to this endpoint will time out for large guilds. To prevent this from happening, set the {@link BeginGuildPrune.computePruneCount} property of the {@link options} object parameter to `false`. This will begin the process of pruning, and immediately return `undefined`, rather than wait for the process to complete before returning the actual count of members that have been kicked.
 *
 * ⚠️ By default, this process will not remove members with a role. To include the members who have a _particular subset of roles_, specify the role(s) in the {@link BeginGuildPrune.includeRoles | includeRoles} property of the {@link options} object parameter.
 *
 * Fires a _Guild Member Remove_ gateway event for every member kicked.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune}
 */
export async function pruneMembers (
  rest: RestManager,
  guildId: BigString,
  options: BeginGuildPrune
): Promise<number | undefined> {
  const result = await rest.runMethod<{ pruned: number | null }>(
    rest,
    'POST',
    rest.constants.routes.GUILD_PRUNE(guildId),
    {
      days: options.days,
      compute_prune_count: options.computePruneCount,
      include_roles: options.includeRoles
    } as DiscordBeginGuildPrune
  )

  return result.pruned ?? undefined
}

/** https://discord.com/developers/docs/resources/guild#begin-guild-prune */
export interface BeginGuildPrune {
  /** Number of days to prune (1 or more), default: 7 */
  days?: number
  /** Whether 'pruned' is returned, discouraged for large guilds, default: true */
  computePruneCount?: boolean
  /** Role(s) ro include, default: none */
  includeRoles?: string[]
}
