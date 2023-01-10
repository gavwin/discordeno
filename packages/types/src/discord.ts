// import type { FileContent } from './discordeno.js'
import type { WebhookTypes } from './shared.js'

//   ActivityTypes,
//   AllowedMentionsTypes,
//   ApplicationCommandOptionTypes,
//   ApplicationCommandPermissionTypes,
//   ApplicationCommandTypes,
//   ApplicationFlags,
//   AuditLogEvents,
//   ButtonStyles,
//   ChannelFlags,
//   ChannelTypes,
//   DefaultMessageNotificationLevels,
//   EmbedTypes,
//   ExplicitContentFilterLevels,
//   GatewayEventNames,
//   GuildFeatures,
//   GuildNsfwLevel,
//   IntegrationExpireBehaviors,
//   InteractionResponseTypes,
//   InteractionTypes,
//   Localization,
//   MessageActivityTypes,
//   MessageComponentTypes,
//   MessageTypes,
//   MfaLevels,
//   OverwriteTypes,
//   PickPartial,
//   PremiumTiers,
//   PremiumTypes,
//   ScheduledEventEntityType,
//   ScheduledEventPrivacyLevel,
//   ScheduledEventStatus,
//   SortOrderTypes,
//   StickerFormatTypes,
//   StickerTypes,
//   SystemChannelFlags,
//   TargetTypes,
//   TeamMembershipStates,
//   TextStyles,
//   UserFlags,
//   VerificationLevels,
//   VideoQualityModes,
//   VisibilityTypes,

import type {
  ActivityTypes,
  AllowedMentionsTypes,
  ApplicationCommandOptionTypes,
  ApplicationCommandPermissionTypes,
  ApplicationCommandTypes,
  ApplicationFlags,
  AuditLogEvents,
  ButtonStyles,
  ChannelFlags,
  ChannelTypes,
  DefaultMessageNotificationLevels,
  EmbedTypes,
  ExplicitContentFilterLevels,
  GatewayEventNames,
  GuildFeatures,
  GuildNsfwLevel,
  IntegrationExpireBehaviors,
  InteractionTypes,
  MessageActivityTypes,
  MessageComponentTypes,
  MessageTypes,
  MfaLevels,
  OverwriteTypes,
  PickPartial,
  PremiumTiers,
  PremiumTypes,
  ScheduledEventEntityType,
  ScheduledEventPrivacyLevel,
  ScheduledEventStatus,
  SortOrderTypes,
  StickerFormatTypes,
  StickerTypes,
  SystemChannelFlags,
  TargetTypes,
  TeamMembershipStates,
  TextStyles,
  UserFlags,
  VerificationLevels,
  VideoQualityModes,
} from './shared'
import type { FileContent } from './discordeno.js'

/** https://discord.com/developers/docs/resources/user#user-object */
export interface DiscordUser {
  /** The user's username, not unique across the platform */
  username: string
  /** The user's chosen language option */
  locale?: string
  /** The flags on a user's account */
  flags?: UserFlags
  /** The type of Nitro subscription on a user's account */
  premium_type?: PremiumTypes
  /** The public flags on a user's account */
  public_flags?: UserFlags
  /** the user's banner color encoded as an integer representation of hexadecimal color code */
  accent_color?: number
  /** The user's id */
  id: string
  /** The user's 4-digit discord-tag */
  discriminator: string
  /** The user's avatar hash */
  avatar: string | null
  /** Whether the user belongs to an OAuth2 application */
  bot?: boolean
  /** Whether the user is an Official Discord System user (part of the urgent message system) */
  system?: boolean
  /** Whether the user has two factor enabled on their account */
  mfa_enabled?: boolean
  /** Whether the email on this account has been verified */
  verified?: boolean
  /** The user's email */
  email?: string | null
  /** the user's banner, or null if unset */
  banner?: string
}

// /** https://discord.com/developers/docs/resources/user#connection-object */
// export interface DiscordConnection {
//   /** id of the connection account */
//   id: string
//   /** The username of the connection account */
//   name: string
//   /** The service of the connection (twitch, youtube) */
//   type: DiscordConnectionServices
//   /** Whether the connection is revoked */
//   revoked?: boolean
//   /** Whether the connection is verified */
//   verified: boolean
//   /** Whether friend sync is enabled for this connection */
//   friend_sync: boolean
//   /** Whether activities related to this connection will be shown in presence updates */
//   show_activity: boolean
//   /** Visibility of this connection */
//   visibility: VisibilityTypes

//   /** An array of partial server integrations */
//   integrations?: DiscordIntegration[]
//   /** Whether this connection has a corresponding third party OAuth2 token. */
//   two_way_link: boolean
// }

// /** https://discord.com/developers/docs/resources/user#connection-object-services */
// export type DiscordConnectionServices =
//   | 'battlenet'
//   | 'ebay'
//   | 'epicgames'
//   | 'facebook'
//   | 'github'
//   | 'leagueoflegends'
//   | 'playstation'
//   | 'reddit'
//   | 'riotgames'
//   | 'spotify'
//   | 'skype'
//   | 'steam'
//   | 'twitch'
//   | 'twitter'
//   | 'xbox'
//   | 'youtube'

/** https://discord.com/developers/docs/resources/guild#integration-object-integration-structure */
export interface DiscordIntegration {
  /** Integration Id */
  id: string
  /** Integration name */
  name: string
  /** Integration type (twitch, youtube or discord) */
  type: 'twitch' | 'youtube' | 'discord'
  /** Is this integration enabled */
  enabled?: boolean
  /** Is this integration syncing */
  syncing?: boolean
  /** Role Id that this integration uses for "subscribers" */
  role_id?: string
  /** Whether emoticons should be synced for this integration (twitch only currently) */
  enable_emoticons?: boolean
  /** The behavior of expiring subscribers */
  expire_behavior?: IntegrationExpireBehaviors
  /** The grace period (in days) before expiring subscribers */
  expire_grace_period?: number
  /** When this integration was last synced */
  synced_at?: string
  /** How many subscribers this integration has */
  subscriber_count?: number
  /** Has this integration been revoked */
  revoked?: boolean
  /** User for this integration */
  user?: DiscordUser
  /** Integration account information */
  account: DiscordIntegrationAccount
  /** The bot/OAuth2 application for discord integrations */
  application?: DiscordIntegrationApplication
  /** the scopes the application has been authorized for */
  scopes: string[]
}

/** https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure */
export interface DiscordIntegrationAccount {
  /** Id of the account */
  id: string
  /** Name of the account */
  name: string
}

/** https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure */
export interface DiscordIntegrationApplication {
  /** The id of the app */
  id: string
  /** The name of the app */
  name: string
  /** the icon hash of the app */
  icon: string | null
  /** The description of the app */
  description: string
  /** The bot associated with this application */
  bot?: DiscordUser
}

/** https://github.com/discord/discord-api-docs/blob/master/docs/topics/Gateway.md#integration-create-event-additional-fields */
export interface DiscordIntegrationCreateUpdate extends DiscordIntegration {
  /** Id of the guild */
  guild_id: string
}

/** https://github.com/discord/discord-api-docs/blob/master/docs/topics/Gateway.md#integration-delete-event-fields */
export interface DiscordIntegrationDelete {
  /** Integration id */
  id: string
  /** Id of the guild */
  guild_id: string
  /** Id of the bot/OAuth2 application for this discord integration */
  application_id?: string
}

/** https://discord.com/developers/docs/topics/gateway#guild-integrations-update */
export interface DiscordGuildIntegrationsUpdate {
  /** id of the guild whose integrations were updated */
  guild_id: string
}

/** https://discord.com/developers/docs/topics/gateway#typing-start */
export interface DiscordTypingStart {
  /** Unix time (in seconds) of when the user started typing */
  timestamp: number
  /** id of the channel */
  channel_id: string
  /** id of the guild */
  guild_id?: string
  /** id of the user */
  user_id: string
  /** The member who started typing if this happened in a guild */
  member?: DiscordMember
}

/** https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface DiscordMember {
  /** Whether the user is deafened in voice channels */
  deaf?: boolean
  /** Whether the user is muted in voice channels */
  mute?: boolean
  /** Whether the user has not yet passed the guild's Membership Screening requirements */
  pending?: boolean
  /** The user this guild member represents */
  user?: DiscordUser
  /** This users guild nickname */
  nick?: string | null
  /** The members custom avatar for this server. */
  avatar?: string
  /** Array of role object ids */
  roles: string[]
  /** When the user joined the guild */
  joined_at: string
  /** When the user started boosting the guild */
  premium_since?: string | null
  /** The permissions this member has in the guild. Only present on interaction events. */
  permissions?: string
  /** when the user's timeout will expire and the user will be able to communicate in the guild again (set null to remove timeout), null or a time in the past if the user is not timed out */
  communication_disabled_until?: string | null
}

/** https://discord.com/developers/docs/resources/application#application-object */
export interface DiscordApplication {
  /** The name of the app */
  name: string
  /** The description of the app */
  description: string
  /** An array of rpc origin urls, if rpc is enabled */
  rpc_origins?: string[]
  /** The url of the app's terms of service */
  terms_of_service_url?: string
  /** The url of the app's privacy policy */
  privacy_policy_url?: string
  /** The hex encoded key for verification in interactions and the GameSDK's GetTicket */
  verify_key: string
  /** If this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists */
  primary_sku_id?: string
  /** If this application is a game sold on Discord, this field will be the URL slug that links to the store page */
  slug?: string
  /** The application's public flags */
  flags?: ApplicationFlags
  /** The id of the app */
  id: string
  /** The icon hash of the app */
  icon: string | null
  /** When false only app owner can join the app's bot to guilds */
  bot_public: boolean
  /** When true the app's bot will only join upon completion of the full oauth2 code grant flow */
  bot_require_code_grant: boolean
  /** Partial user object containing info on the owner of the application */
  owner?: Partial<DiscordUser>
  /** If the application belongs to a team, this will be a list of the members of that team */
  team: DiscordTeam | null
  /** If this application is a game sold on Discord, this field will be the guild to which it has been linked */
  guild_id?: string
  /** If this application is a game sold on Discord, this field will be the hash of the image on store embeds */
  cover_image?: string
  /** up to 5 tags describing the content and functionality of the application */
  tags?: string[]
  /** settings for the application's default in-app authorization link, if enabled */
  install_params?: DiscordInstallParams
  /** the application's default custom authorization link, if enabled */
  custom_install_url?: string
  /** the application's role connection verification entry point, which when configured will render the app as a verification method in the guild role verification configuration */
  role_connections_verification_url?: string
}

/** https://discord.com/developers/docs/topics/teams#data-models-team-object */
export interface DiscordTeam {
  /** A hash of the image of the team's icon */
  icon: string | null
  /** The unique id of the team */
  id: string
  /** The members of the team */
  members: DiscordTeamMember[]
  /** The user id of the current team owner */
  owner_user_id: string
  /** The name of the team */
  name: string
}

/** https://discord.com/developers/docs/topics/teams#data-models-team-members-object */
export interface DiscordTeamMember {
  /** The user's membership state on the team */
  membership_state: TeamMembershipStates
  /** Will always be `["*"]` */
  permissions: Array<'*'>
  /** The id of the parent team of which they are a member */
  team_id: string
  /** The avatar, discriminator, id, and username of the user */
  user: Partial<DiscordUser> & Pick<DiscordUser, 'avatar' | 'discriminator' | 'id' | 'username'>
}

/** https://discord.com/developers/docs/topics/gateway#webhooks-update-webhook-update-event-fields */
export interface DiscordWebhookUpdate {
  /** id of the guild */
  guild_id: string
  /** id of the channel */
  channel_id: string
}

/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object */
export interface DiscordAllowedMentions {
  /** An array of allowed mention types to parse from the content. */
  parse?: AllowedMentionsTypes[]
  /** For replies, whether to mention the author of the message being replied to (default false) */
  replied_user?: boolean
  /** Array of role_ids to mention (Max size of 100) */
  roles?: string[]
  /** Array of user_ids to mention (Max size of 100) */
  users?: string[]
}

/** https://discord.com/developers/docs/resources/channel#embed-object */
export interface DiscordEmbed {
  /** Title of embed */
  title?: string
  /** Type of embed (always "rich" for webhook embeds) */
  type?: EmbedTypes
  /** Description of embed */
  description?: string
  /** Url of embed */
  url?: string
  /** Color code of the embed */
  color?: number
  /** Timestamp of embed content */
  timestamp?: string
  /** Footer information */
  footer?: DiscordEmbedFooter
  /** Image information */
  image?: DiscordEmbedImage
  /** Thumbnail information */
  thumbnail?: DiscordEmbedThumbnail
  /** Video information */
  video?: DiscordEmbedVideo
  /** Provider information */
  provider?: DiscordEmbedProvider
  /** Author information */
  author?: DiscordEmbedAuthor
  /** Fields information */
  fields?: DiscordEmbedField[]
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure */
export interface DiscordEmbedAuthor {
  /** Name of author */
  name: string
  /** Url of author */
  url?: string
  /** Url of author icon (only supports http(s) and attachments) */
  icon_url?: string
  /** A proxied url of author icon */
  proxy_icon_url?: string
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure */
export interface DiscordEmbedField {
  /** Name of the field */
  name: string
  /** Value of the field */
  value: string
  /** Whether or not this field should display inline */
  inline?: boolean
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure */
export interface DiscordEmbedFooter {
  /** Footer text */
  text: string
  /** Url of footer icon (only supports http(s) and attachments) */
  icon_url?: string
  /** A proxied url of footer icon */
  proxy_icon_url?: string
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure */
export interface DiscordEmbedImage {
  /** Source url of image (only supports http(s) and attachments) */
  url: string
  /** A proxied url of the image */
  proxy_url?: string
  /** Height of image */
  height?: number
  /** Width of image */
  width?: number
}

export interface DiscordEmbedProvider {
  /** Name of provider */
  name?: string
  /** Url of provider */
  url?: string
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure */
export interface DiscordEmbedThumbnail {
  /** Source url of thumbnail (only supports http(s) and attachments) */
  url: string
  /** A proxied url of the thumbnail */
  proxy_url?: string
  /** Height of thumbnail */
  height?: number
  /** Width of thumbnail */
  width?: number
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure */
export interface DiscordEmbedVideo {
  /** Source url of video */
  url?: string
  /** A proxied url of the video */
  proxy_url?: string
  /** Height of video */
  height?: number
  /** Width of video */
  width?: number
}

/** https://discord.com/developers/docs/resources/channel#attachment-object */
export interface DiscordAttachment {
  /** Name of file attached */
  filename: string
  /** The attachment's [media type](https://en.wikipedia.org/wiki/Media_type) */
  content_type?: string
  /** Size of file in bytes */
  size: number
  /** Source url of file */
  url: string
  /** A proxied url of file */
  proxy_url: string
  /** Attachment id */
  id: string
  /** description for the file (max 1024 characters) */
  description?: string
  /** Height of file (if image) */
  height?: number | null
  /** Width of file (if image) */
  width?: number | null
  /** whether this attachment is ephemeral. Ephemeral attachments will automatically be removed after a set period of time. Ephemeral attachments on messages are guaranteed to be available as long as the message itself exists. */
  ephemeral?: boolean
}

/** https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure */
export type DiscordWebhook = DiscordIncomingWebhook | DiscordApplicationWebhook

export interface DiscordIncomingWebhook {
  /** The type of the webhook */
  type: WebhookTypes
  /** The secure token of the webhook (returned for Incoming Webhooks) */
  token?: string
  /** The url used for executing the webhook (returned by the webhooks OAuth2 flow) */
  url?: string

  /** The id of the webhook */
  id: string
  /** The guild id this webhook is for */
  guild_id?: string
  /** The channel id this webhook is for */
  channel_id: string
  /** The user this webhook was created by (not returned when getting a webhook with its token) */
  user?: DiscordUser
  /** The default name of the webhook */
  name: string | null
  /** The default user avatar hash of the webhook */
  avatar: string | null
  /** The bot/OAuth2 application that created this webhook */
  application_id: string | null
  /** The guild of the channel that this webhook is following (returned for Channel Follower Webhooks) */
  source_guild?: Partial<DiscordGuild>
  /** The channel that this webhook is following (returned for Channel Follower Webhooks) */
  source_channel?: Partial<DiscordChannel>
}

export interface DiscordApplicationWebhook {
  /** The type of the webhook */
  type: WebhookTypes.Application
  /** The secure token of the webhook (returned for Incoming Webhooks) */
  token?: string
  /** The url used for executing the webhook (returned by the webhooks OAuth2 flow) */
  url?: string

  /** The id of the webhook */
  id: string
  /** The guild id this webhook is for */
  guild_id?: string | null
  /** The channel id this webhook is for */
  channel_id?: string | null
  /** The user this webhook was created by (not returned when getting a webhook with its token) */
  user?: DiscordUser
  /** The default name of the webhook */
  name: string | null
  /** The default user avatar hash of the webhook */
  avatar: string | null
  /** The bot/OAuth2 application that created this webhook */
  application_id: string | null
  /** The guild of the channel that this webhook is following (returned for Channel Follower Webhooks), field will be absent if the webhook creator has since lost access to the guild where the followed channel resides */
  source_guild?: Partial<DiscordGuild>
  /** The channel that this webhook is following (returned for Channel Follower Webhooks), field will be absent if the webhook creator has since lost access to the guild where the followed channel resides */
  source_channel?: Partial<DiscordChannel>
}

/** https://discord.com/developers/docs/resources/guild#guild-object */
export interface DiscordGuild {
  /** Guild name (2-100 characters, excluding trailing and leading whitespace) */
  name: string
  /** True if the user is the owner of the guild */
  owner?: boolean
  /** Afk timeout in seconds */
  afk_timeout: number
  /** True if the server widget is enabled */
  widget_enabled?: boolean
  /** Verification level required for the guild */
  verification_level: VerificationLevels
  /** Default message notifications level */
  default_message_notifications: DefaultMessageNotificationLevels
  /** Explicit content filter level */
  explicit_content_filter: ExplicitContentFilterLevels
  /** Enabled guild features */
  features: GuildFeatures[]
  /** Required MFA level for the guild */
  mfa_level: MfaLevels
  /** System channel flags */
  system_channel_flags: SystemChannelFlags
  /** True if this is considered a large guild */
  large?: boolean
  /** True if this guild is unavailable due to an outage */
  unavailable?: boolean
  /** Total number of members in this guild */
  member_count?: number
  /** The maximum number of presences for the guild (the default value, currently 25000, is in effect when null is returned) */
  max_presences?: number | null
  /** The maximum number of members for the guild */
  max_members?: number
  /** The vanity url code for the guild */
  vanity_url_code: string | null
  /** The description of a guild */
  description: string | null
  /** Premium tier (Server Boost level) */
  premium_tier: PremiumTiers
  /** The number of boosts this guild currently has */
  premium_subscription_count?: number
  /** The maximum amount of users in a video channel */
  max_video_channel_users?: number
  /** Approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true */
  approximate_member_count?: number
  /** Approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true */
  approximate_presence_count?: number
  /** Guild NSFW level */
  nsfw_level: GuildNsfwLevel
  /** Whether the guild has the boost progress bar enabled */
  premium_progress_bar_enabled: boolean
  /** Guild id */
  id: string
  /** Icon hash */
  icon: string | null
  /** Icon hash, returned when in the template object */
  icon_hash?: string | null
  /** Splash hash */
  splash: string | null
  /** Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature */
  discovery_splash: string | null
  /** Id of the owner */
  owner_id: string
  /** Total permissions for the user in the guild (excludes overwrites) */
  permissions?: string
  /** Id of afk channel */
  afk_channel_id: string | null
  /** The channel id that the widget will generate an invite to, or null if set to no invite */
  widget_channel_id?: string | null
  /** Roles in the guild */
  roles: DiscordRole[]
  /** Custom guild emojis */
  emojis: DiscordEmoji[]
  /** Application id of the guild creator if it is bot-created */
  application_id: string | null
  /** The id of the channel where guild notices such as welcome messages and boost events are posted */
  system_channel_id: string | null
  /** The id of the channel where community guilds can display rules and/or guidelines */
  rules_channel_id: string | null
  /** When this guild was joined at */
  joined_at?: string
  /** States of members currently in voice channels; lacks the guild_id key */
  voice_states?: Array<Omit<DiscordVoiceState, 'guildId'>>
  /** Users in the guild */
  members?: DiscordMember[]
  /** Channels in the guild */
  channels?: DiscordChannel[]
  // TODO: check if need to omit
  /** All active threads in the guild that the current user has permission to view */
  threads?: DiscordChannel[]
  /** Presences of the members in the guild, will only include non-offline members if the size is greater than large threshold */
  presences?: Array<Partial<DiscordPresenceUpdate>>
  /** Banner hash */
  banner: string | null
  // TODO: Can be optimized to a number but is it worth it?
  /** The preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US" */
  preferred_locale: string
  /** The id of the channel where admins and moderators of Community guilds receive notices from Discord */
  public_updates_channel_id: string | null
  /** The welcome screen of a Community guild, shown to new members, returned in an Invite's guild object */
  welcome_screen?: DiscordWelcomeScreen
  /** Stage instances in the guild */
  stage_instances?: DiscordStageInstance[]
  /** custom guild stickers */
  stickers?: DiscordSticker[]
}

/** https://discord.com/developers/docs/topics/permissions#role-object-role-structure */
export interface DiscordRole {
  /** Role id */
  id: string
  /** If this role is showed separately in the user listing */
  hoist: boolean
  /** Permission bit set */
  permissions: string
  /** Whether this role is managed by an integration */
  managed: boolean
  /** Whether this role is mentionable */
  mentionable: boolean
  /** The tags this role has */
  tags?: DiscordRoleTags
  /** the role emoji hash */
  icon?: string
  /** Role name */
  name: string
  /** Integer representation of hexadecimal color code */
  color: number
  /** Position of this role */
  position: number
  /** role unicode emoji */
  unicode_emoji?: string
}

/** https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure */
export interface DiscordRoleTags {
  /** The id of the bot this role belongs to */
  bot_id?: string
  /** The id of the integration this role belongs to */
  integration_id?: string
  /** Whether this is the guild's premium subscriber role */
  premium_subscriber?: null
  /** Whether this is a guild's linked role */
  guild_connections?: null
}

/** https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure */
export interface DiscordEmoji {
  /** Emoji name (can only be null in reaction emoji objects) */
  name?: string
  /** Emoji id */
  id?: string
  /** Roles allowed to use this emoji */
  roles?: string[]
  /** User that created this emoji */
  user?: DiscordUser
  /** Whether this emoji must be wrapped in colons */
  require_colons?: boolean
  /** Whether this emoji is managed */
  managed?: boolean
  /** Whether this emoji is animated */
  animated?: boolean
  /** Whether this emoji can be used, may be false due to loss of Server Boosts */
  available?: boolean
}

/** https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure */
export interface DiscordVoiceState {
  /** The session id for this voice state */
  session_id: string
  /** The guild id this voice state is for */
  guild_id?: string
  /** The channel id this user is connected to */
  channel_id: string | null
  /** The user id this voice state is for */
  user_id: string
  /** The guild member this voice state is for */
  member?: DiscordMemberWithUser
  /** Whether this user is deafened by the server */
  deaf: boolean
  /** Whether this user is muted by the server */
  mute: boolean
  /** Whether this user is locally deafened */
  self_deaf: boolean
  /** Whether this user is locally muted */
  self_mute: boolean
  /** Whether this user is streaming using "Go Live" */
  self_stream?: boolean
  /** Whether this user's camera is enabled */
  self_video: boolean
  /** Whether this user is muted by the current user */
  suppress: boolean
  /** The time at which the user requested to speak */
  request_to_speak_timestamp: string | null
}

/** https://discord.com/developers/docs/resources/channel#channel-object */
export interface DiscordChannel {
  /** The id of the channel */
  id: string
  /** The type of channel */
  type: ChannelTypes
  /** The id of the guild */
  guild_id?: string
  /** Sorting position of the channel */
  position?: number
  /** Explicit permission overwrites for members and roles */
  permission_overwrites?: DiscordOverwrite[]
  /** The name of the channel (1-100 characters) */
  name?: string
  /** The channel topic (0-4096 characters for GUILD_FORUM channels, 0-1024 characters for all others) */
  topic?: string | null
  /** Whether the channel is nsfw */
  nsfw?: boolean
  /** The id of the last message sent in this channel (may not point to an existing or valid message) */
  last_message_id?: string | null
  /** The bitrate (in bits) of the voice or stage channel */
  bitrate?: number
  /** The user limit of the voice or stage channel */
  user_limit?: number
  /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
  rate_limit_per_user?: number
  /** the recipients of the DM */
  recipients?: DiscordUser[]
  /** icon hash of the group DM */
  icon?: string
  /** Id of the creator of the thread */
  owner_id?: string
  /** Application id of the group DM creator if it is bot-created */
  application_id?: string
  /** For guild channels: Id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created */
  parent_id?: string | null
  /** When the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned. */
  last_pin_timestamp?: string | null
  /** Voice region id for the voice or stage channel, automatic when set to null */
  rtc_region?: string | null
  /** The camera video quality mode of the voice channel, 1 when not present */
  video_quality_mode?: VideoQualityModes
  /** An approximate count of messages in a thread, stops counting at 50 */
  message_count?: number
  /** An approximate count of users in a thread, stops counting at 50 */
  member_count?: number
  /** Thread-specific fields not needed by other channels */
  thread_metadata?: DiscordThreadMetadata
  /** Thread member object for the current user, if they have joined the thread, only included on certain API endpoints */
  member?: DiscordThreadMember
  /** Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 */
  default_auto_archive_duration?: number
  /** computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a application command interaction */
  permissions?: string
  /** The flags of the channel */
  flags?: ChannelFlags
  /** number of messages ever sent in a thread, it's similar to `message_count` on message creation, but will not decrement the number when a message is deleted */
  total_message_sent?: number
  /** The set of tags that can be used in a GUILD_FORUM channel */
  available_tags?: DiscordForumTag[]
  /** The IDs of the set of tags that have been applied to a thread in a GUILD_FORUM channel */
  applied_tags: string[]
  /** the emoji to show in the add reaction button on a thread in a GUILD_FORUM channel */
  default_reaction_emoji?: DiscordDefaultReactionEmoji | null
  /** the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update. */
  default_thread_rate_limit_per_user: number
  /** the default sort order type used to order posts in GUILD_FORUM channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin */
  default_sort_order?: SortOrderTypes | null
  /** the default forum layout view used to display posts in `GUILD_FORUM` channels. Defaults to `0`, which indicates a layout view has not been set by a channel admin */
  default_forum_layout?: number
  /** When a thread is created this will be true on that channel payload for the thread. */
  newly_created?: boolean
}

/** https://discord.com/developers/docs/topics/gateway#presence-update */
export interface DiscordPresenceUpdate {
  /** Either "idle", "dnd", "online", or "offline" */
  status: 'idle' | 'dnd' | 'online' | 'offline'
  /** The user presence is being updated for */
  user: DiscordUser
  /** id of the guild */
  guild_id: string
  /** User's current activities */
  activities: DiscordActivity[]
  /** User's platform-dependent status */
  client_status: DiscordClientStatus
}

/** https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure */
export interface DiscordWelcomeScreen {
  /** The server description shown in the welcome screen */
  description: string | null
  /** The channels shown in the welcome screen, up to 5 */
  welcome_channels: DiscordWelcomeScreenChannel[]
}

/** https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure */
export interface DiscordWelcomeScreenChannel {
  /** The description shown for the channel */
  description: string
  /** The channel's id */
  channel_id: string
  /** The emoji id, if the emoji is custom */
  emoji_id: string | null
  /** The emoji name if custom, the unicode character if standard, or `null` if no emoji is set */
  emoji_name: string | null
}

/** https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure */
export interface DiscordStageInstance {
  /** The topic of the Stage instance (1-120 characters) */
  topic: string
  /** The id of this Stage instance */
  id: string
  /** The guild id of the associated Stage channel */
  guild_id: string
  /** The id of the associated Stage channel */
  channel_id: string
  /** The id of the scheduled event for this Stage instance */
  guild_scheduled_event_id?: string
}

export interface DiscordThreadMetadata {
  /** Whether the thread is archived */
  archived: boolean
  /** Duration in minutes to automatically archive the thread after recent activity */
  auto_archive_duration: 60 | 1440 | 4320 | 10080
  /** When a thread is locked, only users with `MANAGE_THREADS` can unarchive it */
  locked: boolean
  /** whether non-moderators can add other non-moderators to a thread; only available on private threads */
  invitable?: boolean
  /** Timestamp when the thread's archive status was last changed, used for calculating recent activity */
  archive_timestamp: string
  /** Timestamp when the thread was created; only populated for threads created after 2022-01-09 */
  create_timestamp?: string | null
}

// export interface DiscordThreadMemberBase {
//   /** Any user-thread settings, currently only used for notifications */
//   flags: number
// }

export interface DiscordThreadMember {
  /** Any user-thread settings, currently only used for notifications */
  flags: number
  /** The id of the thread */
  id: string
  /** The id of the user */
  user_id: string
  /** The time the current user last joined the thread */
  join_timestamp: string
}

// export interface DiscordThreadMemberGuildCreate {
//   /** Any user-thread settings, currently only used for notifications */
//   flags: number
//   /** The time the current user last joined the thread */
//   join_timestamp: string
// }

/** https://discord.com/developers/docs/topics/gateway-events#activity-object */
export interface DiscordActivity {
  /** The activity's name */
  name: string
  /** Activity type */
  type: ActivityTypes
  /** Stream url, is validated when type is 1 */
  url?: string | null
  /** Unix timestamp of when the activity was added to the user's session */
  created_at: number
  /** What the player is currently doing */
  details?: string | null
  /** The user's current party status */
  state?: string | null
  /** Whether or not the activity is an instanced game session */
  instance?: boolean
  /** Activity flags `OR`d together, describes what the payload includes */
  flags?: number
  /** Unix timestamps for start and/or end of the game */
  timestamps?: DiscordActivityTimestamps
  /** Application id for the game */
  application_id?: string
  /** The emoji used for a custom status */
  emoji?: DiscordActivityEmoji | null
  /** Information for the current party of the player */
  party?: DiscordActivityParty
  /** Images for the presence and their hover texts */
  assets?: DiscordActivityAssets
  /** Secrets for Rich Presence joining and spectating */
  secrets?: DiscordActivitySecrets
  /** The custom buttons shown in the Rich Presence (max 2) */
  buttons?: DiscordActivityButton[]
}

/** https://discord.com/developers/docs/topics/gateway#client-status-object */
export interface DiscordClientStatus {
  /** The user's status set for an active desktop (Windows, Linux, Mac) application session */
  desktop?: string
  /** The user's status set for an active mobile (iOS, Android) application session */
  mobile?: string
  /** The user's status set for an active web (browser, bot account) application session */
  web?: string
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps */
export interface DiscordActivityTimestamps {
  /** Unix time (in milliseconds) of when the activity started */
  start?: number
  /** Unix time (in milliseconds) of when the activity ends */
  end?: number
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji */
export interface DiscordActivityEmoji {
  /** The name of the emoji */
  name: string
  /** Whether this emoji is animated */
  animated?: boolean
  /** The id of the emoji */
  id?: string
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-party */
export interface DiscordActivityParty {
  /** Used to show the party's current and maximum size */
  size?: [currentSize: number, maxSize: number]
  /** The id of the party */
  id?: string
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets */
export interface DiscordActivityAssets {
  /** Text displayed when hovering over the large image of the activity */
  large_text?: string
  /** Text displayed when hovering over the small image of the activity */
  small_text?: string
  /** The id for a large asset of the activity, usually a snowflake */
  large_image?: string
  /** The id for a small asset of the activity, usually a snowflake */
  small_image?: string
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets */
export interface DiscordActivitySecrets {
  /** The secret for joining a party */
  join?: string
  /** The secret for spectating a game */
  spectate?: string
  /** The secret for a specific instanced match */
  match?: string
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons */
export interface DiscordActivityButton {
  /** The text shown on the button (1-32 characters) */
  label: string
  /** The url opened when clicking the button (1-512 characters) */
  url: string
}

export interface DiscordOverwrite {
  /** Either 0 (role) or 1 (member) */
  type: OverwriteTypes
  /** Role or user id */
  id: string
  /** Permission bit set */
  allow?: string
  /** Permission bit set */
  deny?: string
}

export interface DiscordMemberWithUser extends DiscordMember {
  /** The user object for this member */
  user: DiscordUser
}

/** https://discord.com/developers/docs/resources/channel#message-object */
export interface DiscordMessage {
  /** id of the message */
  id: string
  /** id of the channel the message was sent in */
  channel_id: string
  /**
   * id of the guild the message was sent in
   * Note: For MESSAGE_CREATE and MESSAGE_UPDATE events, the message object may not contain a guild_id or member field since the events are sent directly to the receiving user and the bot who sent the message, rather than being sent through the guild like non-ephemeral messages.
   */
  guild_id?: string
  /**
   * The author of this message (not guaranteed to be a valid user)
   * Note: The author object follows the structure of the user object, but is only a valid user in the case where the message is generated by a user or bot user. If the message is generated by a webhook, the author object corresponds to the webhook's id, username, and avatar. You can tell if a message is generated by a webhook by checking for the webhook_id on the message object.
   */
  author: DiscordUser
  /**
   * Member properties for this message's author
   * Note: The member object exists in `MESSAGE_CREATE` and `MESSAGE_UPDATE` events from text-based guild channels. This allows bots to obtain real-time member data without requiring bots to store member state in memory.
   */
  member?: DiscordMember
  /** Contents of the message */
  content?: string
  /** When this message was sent */
  timestamp: string
  /** When this message was edited (or null if never) */
  edited_timestamp: string | null
  /** Whether this was a TTS message */
  tts: boolean
  /** Whether this message mentions everyone */
  mention_everyone: boolean
  /**
   * Users specifically mentioned in the message
   * Note: The user objects in the mentions array will only have the partial member field present in `MESSAGE_CREATE` and `MESSAGE_UPDATE` events from text-based guild channels.
   */
  mentions: Array<DiscordUser & { member?: Partial<DiscordMember> }>
  /** Roles specifically mentioned in this message */
  mention_roles?: string[]
  /**
   * Channels specifically mentioned in this message
   * Note: Not all channel mentions in a message will appear in `mention_channels`. Only textual channels that are visible to everyone in a lurkable guild will ever be included. Only crossposted messages (via Channel Following) currently include `mention_channels` at all. If no mentions in the message meet these requirements, this field will not be sent.
   */
  mention_channels?: DiscordChannelMention[]
  /** Any attached files */
  attachments: DiscordAttachment[]
  /** Any embedded content */
  embeds: DiscordEmbed[]
  /** Reactions to the message */
  reactions?: DiscordReaction[]
  /** Used for validating a message was sent */
  nonce?: number | string
  /** Whether this message is pinned */
  pinned: boolean
  /** If the message is generated by a webhook, this is the webhook's id */
  webhook_id?: string
  /** Type of message */
  type: MessageTypes
  /** Sent with Rich Presence-related chat embeds */
  activity?: DiscordMessageActivity
  /** Sent with Rich Presence-related chat embeds */
  application?: Partial<DiscordApplication>
  /** if the message is an Interaction or application-owned webhook, this is the id of the application */
  application_id?: string
  /** Data showing the source of a crossposted channel follow add, pin or reply message */
  message_reference?: Omit<DiscordMessageReference, 'failIfNotExists'>
  /** Message flags combined as a bitfield */
  flags?: number
  /**
   * The stickers sent with the message (bots currently can only receive messages with stickers, not send)
   * @deprecated
   */
  stickers?: DiscordSticker[]
  /**
   * The message associated with the `message_reference`
   * Note: This field is only returned for messages with a `type` of `19` (REPLY). If the message is a reply but the `referenced_message` field is not present, the backend did not attempt to fetch the message that was being replied to, so its state is unknown. If the field exists but is null, the referenced message was deleted.
   */
  referenced_message?: DiscordMessage
  /** Sent if the message is a response to an Interaction */
  interaction?: DiscordMessageInteraction
  /** The thread that was started from this message, includes thread member object */
  thread?: Omit<DiscordChannel, 'member'> & { member: DiscordThreadMember }
  /** The components related to this message */
  components?: DiscordMessageComponents
  /** Sent if the message contains stickers */
  sticker_items?: DiscordStickerItem[]
  /** A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with `total_message_sent` on parent thread */
  position?: number
}

/** https://discord.com/developers/docs/resources/channel#channel-mention-object */
export interface DiscordChannelMention {
  /** id of the channel */
  id: string
  /** id of the guild containing the channel */
  guild_id: string
  /** The type of channel */
  type: number
  /** The name of the channel */
  name: string
}

/** https://discord.com/developers/docs/resources/channel#reaction-object */
export interface DiscordReaction {
  /** Times this emoji has been used to react */
  count: number
  /** Whether the current user reacted using this emoji */
  me: boolean
  /** Emoji information */
  emoji: Partial<DiscordEmoji>
}

/** https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure */
export interface DiscordMessageActivity {
  /** Type of message activity */
  type: MessageActivityTypes
  /** `party_id` from a Rich Presence event */
  party_id?: string
}

/** https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure */
export interface DiscordMessageReference {
  /** id of the originating message */
  message_id?: string
  /**
   * id of the originating message's channel
   * Note: `channel_id` is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
   */
  channel_id?: string
  /** id of the originating message's guild */
  guild_id?: string
  /** When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true */
  fail_if_not_exists: boolean
}

/** https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure */
export interface DiscordSticker {
  /** [Id of the sticker](https://discord.com/developers/docs/reference#image-formatting) */
  id: string
  /** Id of the pack the sticker is from */
  pack_id?: string
  /** Name of the sticker */
  name: string
  /** Description of the sticker */
  description: string
  /** a unicode emoji representing the sticker's expression */
  tags: string
  /** [type of sticker](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types) */
  type: StickerTypes
  /** [Type of sticker format](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types) */
  format_type: StickerFormatTypes
  /**  Whether or not the sticker is available */
  available?: boolean
  /** Id of the guild that owns this sticker */
  guild_id?: string
  /** The user that uploaded the sticker */
  user?: DiscordUser
  /** A sticker's sort order within a pack */
  sort_value?: number
}

/** https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure */
export interface DiscordMessageInteraction {
  /** Id of the interaction */
  id: string
  /** The type of interaction */
  type: InteractionTypes
  /** The name of the ApplicationCommand including the name of the subcommand/subcommand group */
  name: string
  /** The user who invoked the interaction */
  user: DiscordUser
  /** The member who invoked the interaction in the guild */
  member?: Partial<DiscordMember>
}

export type DiscordMessageComponents = DiscordActionRow[]

/** https://discord.com/developers/docs/interactions/message-components#actionrow */
export interface DiscordActionRow {
  /** Action rows are a group of buttons. */
  type: 1
  /** The components in this row */
  components:
    | [DiscordSelectMenuComponent | DiscordButtonComponent | DiscordInputTextComponent]
    | [DiscordButtonComponent, DiscordButtonComponent]
    | [DiscordButtonComponent, DiscordButtonComponent, DiscordButtonComponent]
    | [DiscordButtonComponent, DiscordButtonComponent, DiscordButtonComponent, DiscordButtonComponent]
    | [DiscordButtonComponent, DiscordButtonComponent, DiscordButtonComponent, DiscordButtonComponent, DiscordButtonComponent]
}

export interface DiscordSelectMenuComponent {
  type: MessageComponentTypes.SelectMenu
  /** A custom identifier for this component. Maximum 100 characters. */
  custom_id: string
  /** A custom placeholder text if nothing is selected. Maximum 150 characters. */
  placeholder?: string
  /** The minimum number of items that must be selected. Default 1. Between 1-25. */
  min_values?: number
  /** The maximum number of items that can be selected. Default 1. Between 1-25. */
  max_values?: number
  /** The choices! Maximum of 25 items. */
  options: DiscordSelectOption[]
}

export interface DiscordSelectOption {
  /** The user-facing name of the option. Maximum 25 characters. */
  label: string
  /** The dev-defined value of the option. Maximum 100 characters. */
  value: string
  /** An additional description of the option. Maximum 50 characters. */
  description?: string
  /** The id, name, and animated properties of an emoji. */
  emoji?: {
    /** Emoji id */
    id?: string
    /** Emoji name */
    name?: string
    /** Whether this emoji is animated */
    animated?: boolean
  }
  /** Will render this option as already-selected by default. */
  default?: boolean
}

/** https://discord.com/developers/docs/interactions/message-components#buttons-button-object */
export interface DiscordButtonComponent {
  /** All button components have type 2 */
  type: MessageComponentTypes.Button
  /** for what the button says (max 80 characters) */
  label?: string
  /** a dev-defined unique string sent on click (max 100 characters). type 5 Link buttons can not have a custom_id */
  custom_id?: string
  /** For different styles/colors of the buttons */
  style: ButtonStyles
  /** Emoji object that includes fields of name, id, and animated supporting unicode and custom emojis. */
  emoji?: {
    /** Emoji id */
    id?: string
    /** Emoji name */
    name?: string
    /** Whether this emoji is animated */
    animated?: boolean
  }
  /** optional url for link-style buttons that can navigate a user to the web. Only type 5 Link buttons can have a url */
  url?: string
  /** Whether or not this button is disabled */
  disabled?: boolean
}

/** https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure */
export interface DiscordInputTextComponent {
  /** InputText Component is of type 3 */
  type: MessageComponentTypes.InputText
  /** The style of the InputText */
  style: TextStyles
  /** whether this component is required to be filled, default true */
  required?: boolean
  /** The customId of the InputText */
  custom_id: string
  /** The label of the InputText (max 45 characters) */
  label: string
  /** The placeholder of the InputText */
  placeholder?: string
  /** The minimum length of the text the user has to provide */
  min_length?: number
  /** The maximum length of the text the user has to provide */
  max_length?: number
  /** Pre-filled value for input text. */
  value?: string
}

/** https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure */
export interface DiscordStickerItem {
  /** Id of the sticker */
  id: string
  /** Name of the sticker */
  name: string
  /** [Type of sticker format](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types) */
  format_type: StickerFormatTypes
}

/** https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure */
export interface DiscordStickerPack {
  /** id of the sticker pack */
  id: string
  /** the stickers in the pack */
  stickers: DiscordSticker[]
  /** name of the sticker pack */
  name: string
  /** id of the pack's SKU */
  sku_id: string
  /** id of a sticker in the pack which is shown as the pack's icon */
  cover_sticker_id?: string
  /** description of the sticker pack */
  description: string
  /** id of the sticker pack's [banner image](https://discord.com/developers/docs/reference#image-formatting) */
  banner_asset_id?: string
}

export interface DiscordInteraction {
  /** Id of the interaction */
  id: string
  /** Id of the application this interaction is for */
  application_id: string
  /** The type of interaction */
  type: InteractionTypes
  /** The guild it was sent from */
  guild_id?: string
  /** The channel it was sent from */
  channel_id?: string
  /** Guild member data for the invoking user, including permissions */
  member?: DiscordInteractionMember
  /** User object for the invoking user, if invoked in a DM */
  user?: DiscordUser
  /** A continuation token for responding to the interaction */
  token: string
  /** Read-only property, always `1` */
  version: 1
  /** For the message the button was attached to */
  message?: DiscordMessage
  /** the command data payload */
  data?: DiscordInteractionData
  /** The selected language of the invoking user */
  locale?: string
  /** The guild's preferred locale, if invoked in a guild */
  guild_locale?: string
  /** The computed permissions for a bot or app in the context of a specific interaction (including channel overwrites) */
  app_permissions: string
}

/** https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface DiscordInteractionMember extends DiscordMemberWithUser {
  /** Total permissions of the member in the channel, including overwrites, returned when in the interaction object */
  permissions: string
}

export interface DiscordInteractionData {
  /** The type of component */
  component_type?: MessageComponentTypes
  /** The custom id provided for this component. */
  custom_id?: string
  /** The components if its a Modal Submit interaction. */
  components?: DiscordMessageComponents
  /** The values chosen by the user. */
  values?: string[]
  /** The Id of the invoked command */
  id: string
  /** The name of the invoked command */
  name: string
  /** the type of the invoked command */
  type: ApplicationCommandTypes
  /** Converted users + roles + channels + attachments */
  resolved?: {
    /** The Ids and Message objects */
    messages?: Record<string, DiscordMessage>
    /** The Ids and User objects */
    users?: Record<string, DiscordUser>
    /** The Ids and partial Member objects */
    members?: Record<string, Omit<DiscordInteractionMember, 'user' | 'deaf' | 'mute'>>
    /** The Ids and Role objects */
    roles?: Record<string, DiscordRole>
    /** The Ids and partial Channel objects */
    channels?: Record<string, Pick<DiscordChannel, 'id' | 'name' | 'type' | 'permissions'>>
    /** The ids and attachment objects */
    attachments: Record<string, DiscordAttachment>
  }
  /** The params + values from the user */
  options?: DiscordInteractionDataOption[]
  /** The target id if this is a context menu command. */
  target_id?: string
  /** the id of the guild the command is registered to */
  guild_id?: string
}

export interface DiscordInteractionDataOption {
  /** Name of the parameter */
  name: string
  /** Value of application command option type */
  type: ApplicationCommandOptionTypes
  /** Value of the option resulting from user input */
  value?: string | boolean | number | DiscordMember | DiscordChannel | DiscordRole
  /** Present if this option is a group or subcommand */
  options?: DiscordInteractionDataOption[]
  /** `true` if this option is the currently focused option for autocomplete */
  focused?: boolean
}

// export interface DiscordInteractionDataResolved {
//   /** The Ids and Message objects */
//   messages?: Record<string, DiscordMessage>
//   /** The Ids and User objects */
//   users?: Record<string, DiscordUser>
//   /** The Ids and partial Member objects */
//   members?: Record<
//   string,
//   Omit<DiscordInteractionMember, 'user' | 'deaf' | 'mute'>
//   >
//   /** The Ids and Role objects */
//   roles?: Record<string, DiscordRole>
//   /** The Ids and partial Channel objects */
//   channels?: Record<
//   string,
//   Pick<DiscordChannel, 'id' | 'name' | 'type' | 'permissions'>
//   >
//   /** The Ids and attachments objects */
//   attachments?: Record<string, DiscordAttachment>
// }

// export interface DiscordListActiveThreads {
//   /** The active threads */
//   threads: DiscordChannel[]
//   /** A thread member object for each returned thread the current user has joined */
//   members: DiscordThreadMember[]
// }

// export interface DiscordListArchivedThreads extends DiscordListActiveThreads {
//   /** Whether there are potentially additional threads that could be returned on a subsequent call */
//   has_more: boolean
// }

export interface DiscordThreadListSync {
  /** The id of the guild */
  guild_id: string
  /** The parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channelIds that have no active threads as well, so you know to clear that data */
  channel_ids?: string[]
  /** All active threads in the given channels that the current user can access */
  threads: DiscordChannel[]
  /** All thread member objects from the synced threads for the current user, indicating which threads the current user has been added to */
  members: DiscordThreadMember[]
}

// /** https://discord.com/developers/docs/resources/audit-log#audit-log-object */
// export interface DiscordAuditLog {
//   /** List of webhooks found in the audit log */
//   webhooks: DiscordWebhook[]
//   /** List of users found in the audit log */
//   users: DiscordUser[]
//   /** List of audit log entries, sorted from most to least recent */
//   audit_log_entries: DiscordAuditLogEntry[]
//   /** List of partial integration objects */
//   integrations: Array<Partial<DiscordIntegration>>
//   /**
//    * List of threads found in the audit log.
//    * Threads referenced in `THREAD_CREATE` and `THREAD_UPDATE` events are included in the threads map since archived threads might not be kept in memory by clients.
//    */
//   threads: DiscordChannel[]
//   /** List of guild scheduled events found in the audit log */
//   guild_scheduled_events?: DiscordScheduledEvent[]
//   /** List of auto moderation rules referenced in the audit log */
//   auto_moderation_rules?: DiscordAutoModerationRule[]
//   /** List of application commands referenced in the audit log */
//   application_commands: DiscordApplicationCommand[]
// }

/** https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object */
export interface DiscordAutoModerationRule {
  /** The id of this rule */
  id: string
  /** The guild id of the rule */
  guild_id: string
  /** The name of the rule */
  name: string
  /** The id of the user who created this rule. */
  creator_id: string
  /** Indicates in what event context a rule should be checked. */
  event_type: AutoModerationEventTypes
  /** The type of trigger for this rule */
  trigger_type: AutoModerationTriggerTypes
  /** The metadata used to determine whether a rule should be triggered. */
  trigger_metadata: DiscordAutoModerationRuleTriggerMetadata
  /** Actions which will execute whenever a rule is triggered. */
  actions: DiscordAutoModerationAction[]
  /** Whether the rule is enabled. */
  enabled: boolean
  /** The role ids that are whitelisted. Max 20. */
  exempt_roles: string[]
  /** The channel ids that are whitelisted. Max 50. */
  exempt_channels: string[]
}

export enum AutoModerationEventTypes {
  /** When a user sends a message */
  MessageSend = 1,
}

export enum AutoModerationTriggerTypes {
  Keyword = 1,
  HarmfulLink,
  Spam,
  KeywordPreset,
  MentionSpam,
}

export interface DiscordAutoModerationRuleTriggerMetadata {
  // TODO: discord is considering renaming this before release
  /** The keywords needed to match. Only present when TriggerType.Keyword */
  keyword_filter?: string[]
  /** The pre-defined lists of words to match from. Only present when TriggerType.KeywordPreset */
  presets?: DiscordAutoModerationRuleTriggerMetadataPresets[]
  /** The substrings which will exempt from triggering the preset trigger type. Only present when TriggerType.KeywordPreset */
  allow_list: string[]
  /** Total number of mentions (role & user) allowed per message (Maximum of 50) */
  mention_total_limit: number
}

export enum DiscordAutoModerationRuleTriggerMetadataPresets {
  /** Words that may be considered forms of swearing or cursing */
  Profanity = 1,
  /** Words that refer to sexually explicit behavior or activity */
  SexualContent,
  /** Personal insults or words that may be considered hate speech */
  Slurs,
}

export interface DiscordAutoModerationAction {
  /** The type of action to take when a rule is triggered */
  type: AutoModerationActionType
  /** additional metadata needed during execution for this specific action type */
  metadata: DiscordAutoModerationActionMetadata
}

export enum AutoModerationActionType {
  /** Blocks the content of a message according to the rule */
  BlockMessage = 1,
  /** Logs user content to a specified channel */
  SendAlertMessage,
  /** Times out user for specified duration */
  Timeout,
}

export interface DiscordAutoModerationActionMetadata {
  /** The id of channel to which user content should be logged. Only in ActionType.SendAlertMessage */
  channel_id?: string
  /** Timeout duration in seconds maximum of 2419200 seconds (4 weeks). Only supported for TriggerType.Keyword && Only in ActionType.Timeout */
  duration_seconds?: number
}

/** https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields */
export interface DiscordAutoModerationActionExecution {
  /** The id of the guild */
  guild_id: string
  /** The id of the rule that was executed */
  rule_id: string
  /** The id of the user which generated the content which triggered the rule */
  user_id: string
  /** The content from the user */
  content: string
  /** Action which was executed */
  action: DiscordAutoModerationAction
  /** The trigger type of the rule that was executed. */
  rule_trigger_type: AutoModerationTriggerTypes
  /** The id of the channel in which user content was posted */
  channel_id?: string | null
  /** The id of the message. Will not exist if message was blocked by automod or content was not part of any message */
  message_id?: string | null
  /** The id of any system auto moderation messages posted as a result of this action */
  alert_system_message_id?: string | null
  /** The word or phrase that triggerred the rule. */
  matched_keyword: string | null
  /** The substring in content that triggered the rule */
  matched_content: string | null
}

/** https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure */
export interface DiscordAuditLogEntry {
  /** ID of the affected entity (webhook, user, role, etc.) */
  target_id: string | null
  /** Changes made to the `target_id` */
  changes?: DiscordAuditLogChange[]
  /** User or app that made the changes */
  user_id: string | null
  /** ID of the entry */
  id: string
  /** Type of action that occurred */
  action_type: AuditLogEvents
  /** Additional info for certain event types */
  options?: DiscordOptionalAuditEntryInfo
  /** Reason for the change (1-512 characters) */
  reason?: string
}

/** https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure */
export type DiscordAuditLogChange =
  | {
      new_value: string
      old_value: string
      key:
        | 'name'
        | 'description'
        | 'discovery_splash_hash'
        | 'banner_hash'
        | 'preferred_locale'
        | 'rules_channel_id'
        | 'public_updates_channel_id'
        | 'icon_hash'
        | 'image_hash'
        | 'splash_hash'
        | 'owner_id'
        | 'region'
        | 'afk_channel_id'
        | 'vanity_url_code'
        | 'widget_channel_id'
        | 'system_channel_id'
        | 'topic'
        | 'application_id'
        | 'permissions'
        | 'allow'
        | 'deny'
        | 'code'
        | 'channel_id'
        | 'inviter_id'
        | 'nick'
        | 'avatar_hash'
        | 'id'
        | 'location'
        | 'command_id'
    }
  | {
      new_value: number
      old_value: number
      key:
        | 'afk_timeout'
        | 'mfa_level'
        | 'verification_level'
        | 'explicit_content_filter'
        | 'default_message_notifications'
        | 'prune_delete_days'
        | 'position'
        | 'bitrate'
        | 'rate_limit_per_user'
        | 'color'
        | 'max_uses'
        | 'uses'
        | 'max_age'
        | 'expire_behavior'
        | 'expire_grace_period'
        | 'user_limit'
        | 'privacy_level'
        | 'auto_archive_duration'
        | 'default_auto_archive_duration'
        | 'entity_type'
        | 'status'
        | 'communication_disabled_until'
    }
  | {
      new_value: Array<Partial<DiscordRole>>
      old_value?: Array<Partial<DiscordRole>>
      key: '$add' | '$remove'
    }
  | {
      new_value: boolean
      old_value: boolean
      key:
        | 'widget_enabled'
        | 'nsfw'
        | 'hoist'
        | 'mentionable'
        | 'temporary'
        | 'deaf'
        | 'mute'
        | 'enable_emoticons'
        | 'archived'
        | 'locked'
        | 'invitable'
    }
  | {
      new_value: DiscordOverwrite[]
      old_value: DiscordOverwrite[]
      key: 'permission_overwrites'
    }
  | {
      new_value: string | number
      old_value: string | number
      key: 'type'
    }

/** https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info */
export interface DiscordOptionalAuditEntryInfo {
  /**
   * ID of the app whose permissions were targeted.
   *
   * Event types: `APPLICATION_COMMAND_PERMISSION_UPDATE`
   */
  application_id: string
  /**
   * Name of the Auto Moderation rule that was triggered.
   *
   * Event types: `AUTO_MODERATION_BLOCK_MESSAGE`, `AUTO_MODERATION_FLAG_TO_CHANNEL`, `AUTO_MODERATION_USER_COMMUNICATION_DISABLED`
   */
  auto_moderation_rule_name: string
  /**
   * Trigger type of the Auto Moderation rule that was triggered.
   *
   * Event types: `AUTO_MODERATION_BLOCK_MESSAGE`, `AUTO_MODERATION_FLAG_TO_CHANNEL`, `AUTO_MODERATION_USER_COMMUNICATION_DISABLED`
   */
  auto_moderation_rule_trigger_type: string
  /**
   * Channel in which the entities were targeted.
   *
   * Event types: `MEMBER_MOVE`, `MESSAGE_PIN`, `MESSAGE_UNPIN`, `MESSAGE_DELETE`, `STAGE_INSTANCE_CREATE`, `STAGE_INSTANCE_UPDATE`, `STAGE_INSTANCE_DELETE`
   */
  channel_id: string
  /**
   * Number of entities that were targeted.
   *
   * Event types: `MESSAGE_DELETE`, `MESSAGE_BULK_DELETE`, `MEMBER_DISCONNECT`, `MEMBER_MOVE`
   */
  count: string
  /**
   * Number of days after which inactive members were kicked.
   *
   * Event types: `MEMBER_PRUNE`
   */
  delete_member_days: string
  /**
   * ID of the overwritten entity.
   *
   * Event types: `CHANNEL_OVERWRITE_CREATE`, `CHANNEL_OVERWRITE_UPDATE`, `CHANNEL_OVERWRITE_DELETE`
   */
  id: string
  /**
   * Number of members removed by the prune.
   *
   * Event types: `MEMBER_PRUNE`
   */
  members_removed: string
  /**
   * ID of the message that was targeted.
   *
   * Event types: `MESSAGE_PIN`, `MESSAGE_UNPIN`, `STAGE_INSTANCE_CREATE`, `STAGE_INSTANCE_UPDATE`, `STAGE_INSTANCE_DELETE`
   */
  message_id: string
  /**
   * Name of the role if type is "0" (not present if type is "1").
   *
   * Event types: `CHANNEL_OVERWRITE_CREATE`, `CHANNEL_OVERWRITE_UPDATE`, `CHANNEL_OVERWRITE_DELETE`
   */
  role_name: string
  /**
   * Type of overwritten entity - "0", for "role", or "1" for "member".
   *
   * Event types: `CHANNEL_OVERWRITE_CREATE`, `CHANNEL_OVERWRITE_UPDATE`, `CHANNEL_OVERWRITE_DELETE`
   */
  type: string
}

export interface DiscordScheduledEvent {
  /** the id of the scheduled event */
  id: string
  /** the guild id which the scheduled event belongs to */
  guild_id: string
  /** the channel id in which the scheduled event will be hosted if specified */
  channel_id: string | null
  /** the id of the user that created the scheduled event */
  creator_id?: string | null
  /** the name of the scheduled event */
  name: string
  /** the description of the scheduled event */
  description?: string
  /** the time the scheduled event will start */
  scheduled_start_time: string
  /** the time the scheduled event will end if it does end. */
  scheduled_end_time: string | null
  /** the privacy level of the scheduled event */
  privacy_level: ScheduledEventPrivacyLevel
  /** the status of the scheduled event */
  status: ScheduledEventStatus
  /** the type of hosting entity associated with a scheduled event */
  entity_type: ScheduledEventEntityType
  /** any additional id of the hosting entity associated with event */
  entity_id: string | null
  /** the entity metadata for the scheduled event */
  entity_metadata: DiscordScheduledEventEntityMetadata | null
  /** the user that created the scheduled event */
  creator?: DiscordUser
  /** the number of users subscribed to the scheduled event */
  user_count?: number
  /** the cover image hash of the scheduled event */
  image?: string | null
}

export interface DiscordScheduledEventEntityMetadata {
  /** location of the event */
  location?: string
}

/** https://discord.com/developers/docs/topics/gateway#get-gateway-bot */
export interface DiscordGetGatewayBot {
  /** The WSS URL that can be used for connecting to the gateway */
  url: string
  /** The recommended number of shards to use when connecting */
  shards: number
  /** Information on the current session start limit */
  session_start_limit: DiscordSessionStartLimit
}

/** https://discord.com/developers/docs/topics/gateway#session-start-limit-object */
export interface DiscordSessionStartLimit {
  /** The total number of session starts the current user is allowed */
  total: number
  /** The remaining number of session starts the current user is allowed */
  remaining: number
  /** The number of milliseconds after which the limit resets */
  reset_after: number
  /** The number of identify requests allowed per 5 seconds */
  max_concurrency: number
}

/** https://discord.com/developers/docs/resources/invite#invite-metadata-object */
export interface DiscordInviteMetadata extends DiscordInvite {
  /** Number of times this invite has been used */
  uses: number
  /** Max number of times this invite can be used */
  max_uses: number
  /** Duration (in seconds) after which the invite expires */
  max_age: number
  /** Whether this invite only grants temporary membership */
  temporary: boolean
  /** When this invite was created */
  created_at: string
}

/** https://discord.com/developers/docs/resources/invite#invite-object */
export interface DiscordInvite {
  /** The invite code (unique Id) */
  code: string
  /** The guild this invite is for */
  guild?: Partial<DiscordGuild>
  /** The channel this invite is for */
  channel: Partial<DiscordChannel> | null
  /** The user who created the invite */
  inviter?: DiscordUser
  /** The type of target for this voice channel invite */
  target_type?: TargetTypes
  /** The target user for this invite */
  target_user?: DiscordUser
  /** The embedded application to open for this voice channel embedded application invite */
  target_application?: Partial<DiscordApplication>
  /** Approximate count of online members (only present when target_user is set) */
  approximate_presence_count?: number
  /** Approximate count of total members */
  approximate_member_count?: number
  /** The expiration date of this invite, returned from the `GET /invites/<code>` endpoint when `with_expiration` is `true` */
  expires_at?: string | null
  /** Stage instance data if there is a public Stage instance in the Stage channel this invite is for */
  stage_instance?: DiscordInviteStageInstance
  /** guild scheduled event data */
  guild_scheduled_event?: DiscordScheduledEvent
}

export interface DiscordInviteStageInstance {
  /** The members speaking in the Stage */
  members: Array<Partial<DiscordMember>>
  /** The number of users in the Stage */
  participant_count: number
  /** The number of users speaking in the Stage */
  speaker_count: number
  /** The topic of the Stage instance (1-120 characters) */
  topic: string
}

// /** https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure */
// export interface DiscordApplicationCommand
//   extends DiscordCreateApplicationCommand {
//   /** Unique ID of command */
//   id: string
//   /** ID of the parent application */
//   application_id: string
//   /** Guild id of the command, if not global */
//   guild_id?: string
// }

// export interface DiscordCreateApplicationCommand {
//   /** Type of command, defaults to `ApplicationCommandTypes.ChatInput` */
//   type?: ApplicationCommandTypes
//   /**
//    * Name of command, 1-32 characters.
//    * `ApplicationCommandTypes.ChatInput` command names must match the following regex `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$` with the unicode flag set.
//    * If there is a lowercase variant of any letters used, you must use those.
//    * Characters with no lowercase variants and/or uncased letters are still allowed.
//    * ApplicationCommandTypes.User` and `ApplicationCommandTypes.Message` commands may be mixed case and can include spaces.
//    */
//   name: string
//   /** Localization object for `name` field. Values follow the same restrictions as `name` */
//   name_localizations?: Localization | null
//   /** Description for `ApplicationCommandTypes.ChatInput` commands, 1-100 characters. Empty string for `ApplicationCommandTypes.User` and `ApplicationCommandTypes.Message` commands */
//   description: string
//   /** Localization object for `description` field. Values follow the same restrictions as `description` */
//   description_localizations?: Localization | null
//   /** Parameters for the command, max of 25 */
//   options?: DiscordApplicationCommandOption[]
//   /** Set of permissions represented as a bit set */
//   default_member_permissions?: string | null
//   /** Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible. */
//   dm_permission?: boolean
//   /** Indicates whether the command is age-restricted, defaults to false */
//   nsfw?: boolean
//   /** Auto incrementing version identifier updated during substantial record changes */
//   version?: string
// }

// /** https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure */
// export interface DiscordApplicationCommandOption {
//   /** Type of option */
//   type: ApplicationCommandOptionTypes
//   /**
//    * Name of command, 1-32 characters.
//    * `ApplicationCommandTypes.ChatInput` command names must match the following regex `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$` with the unicode flag set.
//    * If there is a lowercase variant of any letters used, you must use those.
//    * Characters with no lowercase variants and/or uncased letters are still allowed.
//    * ApplicationCommandTypes.User` and `ApplicationCommandTypes.Message` commands may be mixed case and can include spaces.
//    */
//   name: string
//   /** Localization object for the `name` field. Values follow the same restrictions as `name` */
//   name_localizations?: Localization | null
//   /** 1-100 character description */
//   description: string
//   /** Localization object for the `description` field. Values follow the same restrictions as `description` */
//   description_localizations?: Localization | null
//   /** If the parameter is required or optional--default `false` */
//   required?: boolean
//   /** Choices for the option types `ApplicationCommandOptionTypes.String`, `ApplicationCommandOptionTypes.Integer`, and `ApplicationCommandOptionTypes.Number`, from which the user can choose, max 25 */
//   choices?: DiscordApplicationCommandOptionChoice[]
//   /** If the option is a subcommand or subcommand group type, these nested options will be the parameters */
//   options?: DiscordApplicationCommandOption[]
//   /**
//    * If autocomplete interactions are enabled for this option.
//    *
//    * Only available for `ApplicationCommandOptionTypes.String`, `ApplicationCommandOptionTypes.Integer` and `ApplicationCommandOptionTypes.Number` option types
//    */
//   autocomplete?: boolean
//   /** If the option is a channel type, the channels shown will be restricted to these types */
//   channel_types?: ChannelTypes[]
//   /** If the option type is `ApplicationCommandOptionTypes.Integer` or `ApplicationCommandOptionTypes.Number`, the minimum permitted value */
//   min_value?: number
//   /** If the option type is `ApplicationCommandOptionTypes.Integer` or `ApplicationCommandOptionTypes.Number`, the maximum permitted value */
//   max_value?: number
//   /** If the option type is `ApplicationCommandOptionTypes.String`, the minimum permitted length */
//   min_length?: number
//   /** If the option type is `ApplicationCommandOptionTypes.String`, the maximum permitted length  */
//   max_length?: number
// }

// /** https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object */
// export interface DiscordApplicationCommandOptionChoice {
//   /** 1-100 character choice name */
//   name: string
//   /** Localization object for the `name` field. Values follow the same restrictions as `name` */
//   name_localizations?: Localization | null
//   /** Value for the choice, up to 100 characters if string */
//   value: string | number
// }

/** https://discord.com/developers/docs/interactions/slash-commands#guildapplicationcommandpermissions */
export interface DiscordGuildApplicationCommandPermissions {
  /** ID of the command or the application ID. When the `id` field is the application ID instead of a command ID, the permissions apply to all commands that do not contain explicit overwrites. */
  id: string
  /** ID of the application the command belongs to */
  application_id: string
  /** ID of the guild */
  guild_id: string
  /** Permissions for the command in the guild, max of 100 */
  permissions: DiscordApplicationCommandPermissions[]
}

/** https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissions */
export interface DiscordApplicationCommandPermissions {
  /** ID of the role, user, or channel. It can also be a permission constant */
  id: string
  /** ApplicationCommandPermissionTypes.Role, ApplicationCommandPermissionTypes.User, or ApplicationCommandPermissionTypes.Channel */
  type: ApplicationCommandPermissionTypes
  /** `true` to allow, `false`, to disallow */
  permission: boolean
}

// /** https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget */
// export interface DiscordGuildWidget {
//   id: string
//   name: string
//   instant_invite: string
//   channels: Array<{
//     id: string
//     name: string
//     position: number
//   }>
//   members: Array<{
//     id: string
//     username: string
//     discriminator: string
//     avatar?: string | null
//     status: string
//     avatar_url: string
//   }>
//   presence_count: number
// }

/** https://discord.com/developers/docs/resources/guild#guild-preview-object */
export interface DiscordGuildPreview {
  /** Guild id */
  id: string
  /** Guild name (2-100 characters) */
  name: string
  /** Icon hash */
  icon: string | null
  /** Splash hash */
  splash: string | null
  /** Discovery splash hash */
  discovery_splash: string | null
  /** Custom guild emojis */
  emojis: DiscordEmoji[]
  /** Enabled guild features */
  features: GuildFeatures[]
  /** Approximate number of members in this guild */
  approximate_member_count: number
  /** Approximate number of online members in this guild */
  approximate_presence_count: number
  /** The description for the guild, if the guild is discoverable */
  description: string | null
  /** Custom guild stickers */
  stickers: DiscordSticker[]
}

// export interface DiscordDiscoveryCategory {
//   /** Numeric id of the category */
//   id: number
//   /** The name of this category, in multiple languages */
//   name: DiscordDiscoveryName
//   /** Whether this category can be set as a guild's primary category */
//   is_primary: boolean
// }

// export interface DiscordDiscoveryName {
//   /** The name in English */
//   default: string
//   /** The name in other languages */
//   localizations?: Record<string, string>
// }

// export interface DiscordDiscoveryMetadata {
//   /** The guild Id */
//   guild_id: string
//   /** The id of the primary discovery category set for this guild */
//   primary_category_id: number
//   /** Up to 10 discovery search keywords set for this guild */
//   keywords: string[] | null
//   /** Whether guild info is shown when custom emojis from this guild are clicked */
//   emoji_discoverability_enabled: boolean
//   /** When the server's partner application was accepted or denied, for applications via Server Settings */
//   partner_actioned_timestamp: string | null
//   /** When the server applied for partnership, if it has a pending application */
//   partner_application_timestamp: string | null
//   /** Ids of up to 5 discovery subcategories set for this guild */
//   category_ids: number[]
// }

/** https://discord.com/developers/docs/resources/channel#followed-channel-object */
export interface DiscordFollowedChannel {
  /** Source message id */
  channel_id: string
  /** Created target webhook id */
  webhook_id: string
}

/** https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure */
export interface DiscordGatewayPayload {
  /** opcode for the payload */
  op: number
  /** Event data */
  d: unknown | null
  /** Sequence number, used for resuming sessions and heartbeats */
  s: number | null
  /** The event name for this payload */
  t: GatewayEventNames | null
}

/** https://discord.com/developers/docs/topics/gateway#guild-members-chunk */
export interface DiscordGuildMembersChunk {
  /** The id of the guild */
  guild_id: string
  /** Set of guild members */
  members: DiscordMemberWithUser[]
  /** The chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count) */
  chunk_index: number
  /** The total number of expected chunks for this response */
  chunk_count: number
  /** If passing an invalid id to `REQUEST_GUILD_MEMBERS`, it will be returned here */
  not_found?: string[]
  /** If passing true to `REQUEST_GUILD_MEMBERS`, presences of the returned members will be here */
  presences?: DiscordPresenceUpdate[]
  /** The nonce used in the Guild Members Request */
  nonce?: string
}

// export interface DiscordComponent {
//   /** component type */
//   type: MessageComponentTypes
//   /** a developer-defined identifier for the component, max 100 characters */
//   custom_id?: string
//   /** whether the component is disabled, default false */
//   disabled?: boolean
//   /** For different styles/colors of the buttons */
//   style?: ButtonStyles | TextStyles
//   /** text that appears on the button (max 80 characters) */
//   label?: string
//   /** the dev-define value of the option, max 100 characters for select or 4000 for input. */
//   value?: string
//   /** Emoji object that includes fields of name, id, and animated supporting unicode and custom emojis. */
//   emoji?: {
//     /** Emoji id */
//     id?: string
//     /** Emoji name */
//     name?: string
//     /** Whether this emoji is animated */
//     animated?: boolean
//   }
//   /** optional url for link-style buttons that can navigate a user to the web. Only type 5 Link buttons can have a url */
//   url?: string
//   /** The choices! Maximum of 25 items. */
//   options?: DiscordSelectOption[]
//   /** A custom placeholder text if nothing is selected. Maximum 150 characters. */
//   placeholder?: string
//   /** The minimum number of items that must be selected. Default 1. Between 1-25. */
//   min_values?: number
//   /** The maximum number of items that can be selected. Default 1. Between 1-25. */
//   max_values?: number
//   /** The minimum input length for a text input. Between 0-4000. */
//   min_length?: number
//   /** The maximum input length for a text input. Between 1-4000. */
//   max_length?: number
//   /** a list of child components */
//   components?: DiscordComponent[]
//   /** whether this component is required to be filled, default true */
//   required?: boolean
// }

/** https://discord.com/developers/docs/topics/gateway#channel-pins-update */
export interface DiscordChannelPinsUpdate {
  /** The id of the guild */
  guild_id?: string
  /** The id of the channel */
  channel_id: string
  /** The time at which the most recent pinned message was pinned */
  last_pin_timestamp?: string | null
}

/** https://discord.com/developers/docs/topics/gateway#guild-role-delete */
export interface DiscordGuildRoleDelete {
  /** id of the guild */
  guild_id: string
  /** id of the role */
  role_id: string
}

/** https://discord.com/developers/docs/topics/gateway#guild-ban-add */
export interface DiscordGuildBanAddRemove {
  /** id of the guild */
  guild_id: string
  /** The banned user */
  user: DiscordUser
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove */
export interface DiscordMessageReactionRemove extends Omit<DiscordMessageReactionAdd, 'member'> {}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-add */
export interface DiscordMessageReactionAdd {
  /** The id of the user */
  user_id: string
  /** The id of the channel */
  channel_id: string
  /** The id of the message */
  message_id: string
  /** The id of the guild */
  guild_id?: string
  /** The member who reacted if this happened in a guild */
  member?: DiscordMemberWithUser
  /** The emoji used to react */
  emoji: Partial<DiscordEmoji>
}

/** https://discord.com/developers/docs/topics/gateway#voice-server-update */
export interface DiscordVoiceServerUpdate {
  /** Voice connection token */
  token: string
  /** The guild this voice server update is for */
  guild_id: string
  /** The voice server host */
  endpoint: string | null
}

/** https://discord.com/developers/docs/topics/gateway#invite-create */
export interface DiscordInviteCreate {
  /** The channel the invite is for */
  channel_id: string
  /** The unique invite code */
  code: string
  /** The time at which the invite was created */
  created_at: string
  /** The guild of the invite */
  guild_id?: string
  /** The user that created the invite */
  inviter?: DiscordUser
  /** How long the invite is valid for (in seconds) */
  max_age: number
  /** The maximum number of times the invite can be used */
  max_uses: number
  /** The type of target for this voice channel invite */
  target_type: TargetTypes
  /** The target user for this invite */
  target_user?: DiscordUser
  /** The embedded application to open for this voice channel embedded application invite */
  target_application?: Partial<DiscordApplication>
  /** Whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role) */
  temporary: boolean
  /** How many times the invite has been used (always will be 0) */
  uses: number
}

/** https://discord.com/developers/docs/topics/gateway#hello */
export interface DiscordHello {
  /** The interval (in milliseconds) the client should heartbeat with */
  heartbeat_interval: number
}

/** https://discord.com/developers/docs/topics/gateway#ready */
export interface DiscordReady {
  /** Gateway version */
  v: number
  /** Information about the user including email */
  user: DiscordUser
  /** The guilds the user is in */
  guilds: DiscordUnavailableGuild[]
  /** Used for resuming connections */
  session_id: string
  /** Gateway url for resuming connections */
  resume_gateway_url: string
  /** The shard information associated with this session, if sent when identifying */
  shard?: [number, number]
  /** Contains id and flags */
  application: Partial<DiscordApplication> & Pick<DiscordApplication, 'id' | 'flags'>
}

/** https://discord.com/developers/docs/resources/guild#unavailable-guild-object */
export interface DiscordUnavailableGuild extends Pick<DiscordGuild, 'id' | 'unavailable'> {}

/** https://discord.com/developers/docs/topics/gateway#message-delete-bulk */
export interface DiscordMessageDeleteBulk {
  /** The ids of the messages */
  ids: string[]
  /** The id of the channel */
  channel_id: string
  /** The id of the guild */
  guild_id?: string
}

/** https://discord.com/developers/docs/resources/template#template-object-template-structure */
export interface DiscordTemplate {
  /** The template code (unique Id) */
  code: string
  /** Template name */
  name: string
  /** The description for the template */
  description: string | null
  /** Number of times this template has been used */
  usage_count: number
  /** The Id of the user who created the template */
  creator_id: string
  /** The user who created the template */
  creator: DiscordUser
  /** When this template was created */
  created_at: string
  /** When this template was last synced to the source guild */
  updated_at: string
  /** The Id of the guild this template is based on */
  source_guild_id: string
  /** The guild snapshot this template contains */
  serialized_source_guild: Omit<
    PickPartial<
      DiscordGuild,
      | 'name'
      | 'description'
      | 'verification_level'
      | 'default_message_notifications'
      | 'explicit_content_filter'
      | 'preferred_locale'
      | 'afk_timeout'
      | 'channels'
      | 'afk_channel_id'
      | 'system_channel_id'
      | 'system_channel_flags'
    >,
    'roles'
  > & {
    roles: Array<
      Omit<PickPartial<DiscordRole, 'name' | 'color' | 'hoist' | 'mentionable' | 'permissions' | 'icon' | 'unicode_emoji'>, 'id'> & { id: number }
    >
  }
  /** Whether the template has un-synced changes */
  is_dirty: boolean | null
}

/** https://discord.com/developers/docs/topics/gateway#guild-member-add */
export interface DiscordGuildMemberAdd extends DiscordMemberWithUser {
  /** id of the guild */
  guild_id: string
}

/** https://discord.com/developers/docs/topics/gateway#message-delete */
export interface DiscordMessageDelete {
  /** The id of the message */
  id: string
  /** The id of the channel */
  channel_id: string
  /** The id of the guild */
  guild_id?: string
}

/** https://discord.com/developers/docs/topics/gateway#thread-members-update-thread-members-update-event-fields */
export interface DiscordThreadMembersUpdate {
  /** The id of the thread */
  id: string
  /** The id of the guild */
  guild_id: string
  /** The users who were added to the thread */
  added_members?: DiscordThreadMember[]
  /** The id of the users who were removed from the thread */
  removed_member_ids?: string[]
  /** the approximate number of members in the thread, capped at 50 */
  member_count: number
}

/** https://discord.com/developers/docs/topics/gateway#thread-member-update */
export interface DiscordThreadMemberUpdate {
  /** The id of the thread */
  id: string
  /** The id of the guild */
  guild_id: string
  /** The timestamp when the bot joined this thread. */
  joined_at: string
  /** The flags this user has for this thread. Not useful for bots. */
  flags: number
}

/** https://discord.com/developers/docs/topics/gateway#guild-role-create */
export interface DiscordGuildRoleCreate {
  /** The id of the guild */
  guild_id: string
  /** The role created */
  role: DiscordRole
}

/** https://discord.com/developers/docs/topics/gateway#guild-emojis-update */
export interface DiscordGuildEmojisUpdate {
  /** id of the guild */
  guild_id: string
  /** Array of emojis */
  emojis: DiscordEmoji[]
}

/** https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update */
export interface DiscordGuildStickersUpdate {
  /** id of the guild */
  guild_id: string
  /** Array of sticker */
  stickers: DiscordSticker[]
}

// export interface DiscordAddGuildDiscoverySubcategory {
//   /** The guild Id of the subcategory was added to */
//   guild_id: string
//   /** The Id of the subcategory added */
//   category_id: number
// }

/** https://discord.com/developers/docs/topics/gateway#guild-member-update */
export interface DiscordGuildMemberUpdate {
  /** The id of the guild */
  guild_id: string
  /** User role ids */
  roles: string[]
  /** The user */
  user: DiscordUser
  /** Nickname of the user in the guild */
  nick?: string | null
  /** the member's [guild avatar hash](https://discord.com/developers/docs/reference#image-formatting) */
  avatar: string
  /** When the user joined the guild */
  joined_at: string
  /** When the user starting boosting the guild */
  premium_since?: string | null
  /** whether the user is deafened in voice channels */
  deaf?: boolean
  /** whether the user is muted in voice channels */
  mute?: boolean
  /** Whether the user has not yet passed the guild's Membership Screening requirements */
  pending?: boolean
  /** when the user's [timeout](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ) will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out. Will throw a 403 error if the user has the ADMINISTRATOR permission or is the owner of the guild */
  communication_disabled_until?: string
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all */
export interface DiscordMessageReactionRemoveAll extends Pick<DiscordMessageReactionAdd, 'channel_id' | 'message_id' | 'guild_id'> {}

// // TODO: add docs link
// export interface DiscordValidateDiscoverySearchTerm {
//   /** Whether the provided term is valid */
//   valid: boolean
// }

/** https://discord.com/developers/docs/topics/gateway#guild-role-update */
export interface DiscordGuildRoleUpdate {
  /** The id of the guild */
  guild_id: string
  /** The role updated */
  role: DiscordRole
}

export interface DiscordScheduledEventUserAdd {
  /** id of the guild scheduled event  */
  guild_scheduled_event_id: string
  /** id of the user                   */
  user_id: string
  /** id of the guild */
  guild_id: string
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji */
export type DiscordMessageReactionRemoveEmoji = Pick<DiscordMessageReactionAdd, 'channel_id' | 'guild_id' | 'message_id' | 'emoji'>

/** https://discord.com/developers/docs/topics/gateway#guild-member-remove */
export interface DiscordGuildMemberRemove {
  /** The id of the guild */
  guild_id: string
  /** The user who was removed */
  user: DiscordUser
}

// /** https://discord.com/developers/docs/resources/guild#ban-object */
// export interface DiscordBan {
//   /** The reason for the ban */
//   reason: string | null
//   /** The banned user */
//   user: DiscordUser
// }

export interface DiscordScheduledEventUserRemove {
  /** id of the guild scheduled event */
  guild_scheduled_event_id: string
  /** id of the user */
  user_id: string
  /** id of the guild */
  guild_id: string
}

/** https://discord.com/developers/docs/topics/gateway#invite-delete */
export interface DiscordInviteDelete {
  /** The channel of the invite */
  channel_id: string
  /** The guild of the invite */
  guild_id?: string
  /** The unique invite code */
  code: string
}

// /** https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure */
// export interface DiscordVoiceRegion {
//   /** Unique Id for the region */
//   id: string
//   /** Name of the region */
//   name: string
//   /** true for a single server that is closest to the current user's client */
//   optimal: boolean
//   /** Whether this is a deprecated voice region (avoid switching to these) */
//   deprecated: boolean
//   /** Whether this is a custom voice region (used for events/etc) */
//   custom: boolean
// }

// export interface DiscordGuildWidgetSettings {
//   /** whether the widget is enabled */
//   enabled: boolean
//   /** the widget channel id */
//   channel_id: string | null
// }

export interface DiscordInstallParams {
  /** the scopes to add the application to the server with */
  scopes: string[]
  /** the permissions to request for the bot role */
  permissions: string
}

// export interface DiscordInteractionResponse {
//   type: InteractionResponseTypes
//   data?: DiscordInteractionCallbackData
// }

// export interface DiscordInteractionCallbackData {
//   tts?: boolean
//   title?: string
//   flags?: number
//   content?: string
//   choices?: DiscordApplicationCommandOptionChoice[]
//   custom_id?: string
//   embeds?: DiscordEmbed[]
//   allowed_mentions?: DiscordAllowedMentions
//   components?: DiscordComponent[]
// }

export interface DiscordForumTag {
  /** The id of the tag */
  id: string
  /** The name of the tag (0-20 characters) */
  name: string
  /** Whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission */
  moderated: boolean
  /** The id of a guild's custom emoji At most one of emoji_id and emoji_name may be set. */
  emoji_id: string
  /** The unicode character of the emoji */
  emoji_name: string | null
}

export interface DiscordDefaultReactionEmoji {
  /** The id of a guild's custom emoji */
  emoji_id: string
  /** The unicode character of the emoji */
  emoji_name: string | null
}

// export interface DiscordCreateAutomoderationRule {
//   /** The name of the rule. */
//   name: string
//   /** The type of event to trigger the rule on. */
//   event_type: AutoModerationEventTypes
//   /** The type of trigger to use for the rule. */
//   trigger_type: AutoModerationTriggerTypes
//   /** The metadata to use for the trigger. */
//   trigger_metadata: DiscordAutoModerationRuleTriggerMetadata
//   /** The actions that will trigger for this rule */
//   actions: DiscordAutoModerationAction[]
//   /** Whether the rule should be enabled, true by default. */
//   enabled?: boolean
//   /** The role ids that should not be effected by the rule */
//   exempt_roles?: string[]
//   /** The channel ids that should not be effected by the rule. */
//   exempt_channels?: string[]
// }

// export interface DiscordModifyAutomoderationRule {
//   /** The name of the rule. */
//   name: string
//   /** The type of event to trigger the rule on. */
//   event_type: AutoModerationEventTypes
//   /** The metadata to use for the trigger. */
//   trigger_metadata: DiscordAutoModerationRuleTriggerMetadata
//   /** The actions that will trigger for this rule */
//   actions: DiscordAutoModerationAction[]
//   /** Whether the rule should be enabled, true by default. */
//   enabled?: boolean
//   /** The role ids that should not be effected by the rule */
//   exempt_roles?: string[]
//   /** The channel ids that should not be effected by the rule. */
//   exempt_channels?: string[]
// }

export interface DiscordModifyChannel {
  /** 1-100 character channel name */
  name?: string
  /** The type of channel; only conversion between text and news is supported and only in guilds with the "NEWS" feature */
  type?: ChannelTypes
  /** The position of the channel in the left-hand listing */
  position?: number | null
  /** 0-1024 character channel topic */
  topic?: string | null
  /** Whether the channel is nsfw */
  nsfw?: boolean | null
  /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
  rate_limit_per_user?: number | null
  /** The bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers) */
  bitrate?: number | null
  /** The user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit */
  user_limit?: number | null
  /** Channel or category-specific permissions */
  permission_overwrites?: DiscordOverwrite[] | null
  /** Id of the new parent category for a channel */
  parent_id?: string | null
  /** Voice region id for the voice channel, automatic when set to null */
  rtc_region?: string | null
  /** The camera video quality mode of the voice channel */
  video_quality_mode?: VideoQualityModes
  /** Whether the thread is archived */
  archived?: boolean
  /** Duration in minutes to automatically archive the thread after recent activity */
  auto_archive_duration?: 60 | 1440 | 4320 | 10080
  /** When a thread is locked, only users with `MANAGE_THREADS` can unarchive it */
  locked?: boolean
  /** whether non-moderators can add other non-moderators to a thread; only available on private threads */
  invitable?: boolean
  /** The set of tags that can be used in a GUILD_FORUM channel */
  available_tags?: Array<{
    /** The id of the tag */
    id: string
    /** The name of the tag (0-20 characters) */
    name: string
    /** Whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission */
    moderated: boolean
    /** The id of a guild's custom emoji At most one of emoji_id and emoji_name may be set. */
    emoji_id: string
    /** The unicode character of the emoji */
    emoji_name: string
  }>
  /** The IDs of the set of tags that have been applied to a thread in a GUILD_FORUM channel; limited to 5 */
  applied_tags?: string[]
  /** the emoji to show in the add reaction button on a thread in a GUILD_FORUM channel */
  default_reaction_emoji?: {
    /** The id of a guild's custom emoji */
    emoji_id: string
    /** The unicode character of the emoji */
    emoji_name: string | null
  }
  /** the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update. */
  default_thread_rate_limit_per_user?: number
  /** the default sort order type used to order posts in forum channels */
  default_sort_order?: SortOrderTypes | null
}

/** https://discord.com/developers/docs/resources/emoji#create-guild-emoji */
export interface DiscordCreateGuildEmoji {
  /** Name of the emoji */
  name: string
  /** The 128x128 emoji image. Emojis and animated emojis have a maximum file size of 256kb. Attempting to upload an emoji larger than this limit will fail and return 400 Bad Request and an error message, but not a JSON status code. If a URL is provided to the image parameter, Discordeno will automatically convert it to a base64 string internally. */
  image: string
  /** Roles allowed to use this emoji */
  roles?: string[]
}

/** https://discord.com/developers/docs/resources/emoji#modify-guild-emoji */
export interface DiscordModifyGuildEmoji {
  /** Name of the emoji */
  name?: string
  /** Roles allowed to use this emoji */
  roles?: string[] | null
}

export interface DiscordCreateGuildChannel {
  /** Channel name (1-100 characters) */
  name: string
  /** The type of channel */
  type?: ChannelTypes
  /** Channel topic (0-1024 characters) */
  topic?: string
  /** The bitrate (in bits) of the voice channel (voice only) */
  bitrate?: number
  /** The user limit of the voice channel (voice only) */
  user_limit?: number
  /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
  rate_limit_per_user?: number
  /** Sorting position of the channel */
  position?: number
  /** The channel's permission overwrites */
  permission_overwrites?: DiscordOverwrite[]
  /** Id of the parent category for a channel */
  parent_id?: string
  /** Whether the channel is nsfw */
  nsfw?: boolean
  /** Default duration (in minutes) that clients (not the API) use for newly created threads in this channel, to determine when to automatically archive the thread after the last activity */
  default_auto_archive_duration?: number
  /** Emoji to show in the add reaction button on a thread in a forum channel */
  default_reaction_emoji?: {
    /** The id of a guild's custom emoji. Exactly one of `emojiId` and `emojiName` must be set. */
    emoji_id?: string | null
    /** The unicode character of the emoji. Exactly one of `emojiId` and `emojiName` must be set. */
    emoji_name?: string | null
  }
  /** Set of tags that can be used in a forum channel */
  available_tags?: Array<{
    /** The id of the tag */
    id: string
    /** The name of the tag (0-20 characters) */
    name: string
    /** whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission */
    moderated: boolean
    /** The id of a guild's custom emoji */
    emoji_id: string
    /** The unicode character of the emoji */
    emoji_name?: string
  }>
  /** the default sort order type used to order posts in forum channels */
  default_sort_order?: SortOrderTypes | null
}

// export interface DiscordBulkDeleteMessages {
//   messages: string[]
// }

// /** https://discord.com/developers/docs/resources/channel#edit-message-json-params */
// export interface DiscordEditMessage {
//   /** The new message contents (up to 2000 characters) */
//   content?: string | null
//   /** Embedded `rich` content (up to 6000 characters) */
//   embeds?: DiscordEmbed[] | null
//   /** Edit the flags of the message (only `SUPPRESS_EMBEDS` can currently be set/unset) */
//   flags?: 4 | null
//   /** Allowed mentions for the message */
//   allowed_mentions?: DiscordAllowedMentions
//   /** When specified (adding new attachments), attachments which are not provided in this list will be removed. */
//   attachments?: DiscordAttachment[]
//   /** The components you would like to have sent in this message */
//   components?: DiscordMessageComponents
// }

export interface DiscordCreateMessage {
  /** The message contents (up to 2000 characters) */
  content?: string
  /** Can be used to verify a message was sent (up to 25 characters). Value will appear in the Message Create event. */
  nonce?: string | number
  /** true if this is a TTS message */
  tts?: boolean
  /** Embedded `rich` content (up to 6000 characters) */
  // embeds?: DiscordEmbed[]
  /** Allowed mentions for the message */
  // allowed_mentions?: DiscordAllowedMentions
  /** Include to make your message a reply */
  message_reference?: {
    /** id of the originating message */
    message_id?: string
    /**
     * id of the originating message's channel
     * Note: `channel_id` is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
     */
    channel_id?: string
    /** id of the originating message's guild */
    guild_id?: string
    /** When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true */
    fail_if_not_exists: boolean
  }
  /** The components you would like to have sent in this message */
  // components?: DiscordMessageComponents
  /** IDs of up to 3 stickers in the server to send in the message */
  stickerIds?: [string] | [string, string] | [string, string, string]
}

// export interface DiscordCreateScheduledEvent {
//   /** the channel id of the scheduled event. */
//   channel_id?: string
//   /** location of the event. Required for events with `entityType: ScheduledEventEntityType.External` */
//   location?: string
//   /** the name of the scheduled event */
//   name: string
//   /** the description of the scheduled event */
//   description: string
//   /** the time the scheduled event will start */
//   scheduled_start_time: string
//   /** the time the scheduled event will end if it does end. Required for events with `entityType: ScheduledEventEntityType.External` */
//   scheduled_end_time?: string
//   /** the privacy level of the scheduled event */
//   privacy_level?: ScheduledEventPrivacyLevel
//   /** the type of hosting entity associated with a scheduled event */
//   entity_type: ScheduledEventEntityType
// }

// export interface DiscordEditScheduledEvent {
//   /** the channel id of the scheduled event. null if switching to external event. */
//   channel_id: string | null
//   /** location of the event */
//   location?: string
//   /** the name of the scheduled event */
//   name: string
//   /** the description of the scheduled event */
//   description?: string
//   /** the time the scheduled event will start */
//   scheduled_start_time: string
//   /** the time the scheduled event will end if it does end. */
//   scheduled_end_time?: string
//   /** the privacy level of the scheduled event */
//   privacy_level: ScheduledEventPrivacyLevel
//   /** the type of hosting entity associated with a scheduled event */
//   entity_type: ScheduledEventEntityType
//   /** the status of the scheduled event */
//   status: ScheduledEventStatus
// }

// export interface DiscordCreateChannelInvite {
//   /** Duration of invite in seconds before expiry, or 0 for never. Between 0 and 604800 (7 days). Default: 86400 (24 hours) */
//   max_age?: number
//   /** Max number of users or 0 for unlimited. Between 0 and 100. Default: 0 */
//   max_uses?: number
//   /** Whether this invite only grants temporary membership. Default: false */
//   temporary?: boolean
//   /** If true, don't try to reuse similar invite (useful for creating many unique one time use invites). Default: false */
//   unique?: boolean
//   /** The type of target for this voice channel invite */
//   target_type?: TargetTypes
//   /** The id of the user whose stream to display for this invite, required if `target_type` is 1, the user must be streaming in the channel */
//   target_user_id?: string
//   /** The id of the embedded application to open for this invite, required if `target_type` is 2, the application must have the `EMBEDDED` flag */
//   target_application_id?: string
// }

// /** https://discord.com/developers/docs/resources/guild#update-current-user-voice-state */
// export interface DiscordEditOwnVoiceState {
//   /** The id of the channel the user is currently in */
//   channel_id: string
//   /** Toggles the user's suppress state */
//   suppress?: boolean
//   /** Sets the user's request to speak */
//   request_to_speak_timestamp?: number | null
// }

// /** https://discord.com/developers/docs/resources/guild#update-user-voice-state */
// export interface DiscordEditUserVoiceState {
//   /** The id of the channel the user is currently in */
//   channel_id: string
//   /** Toggles the user's suppress state */
//   suppress?: boolean
//   /** The user id to target */
//   user_id: string
// }

// export interface DiscordEditGuildWidgetSettings {
//   /** Whether or not the widget is enabled. */
//   enabled: boolean
//   /** The channel id if any for this widget. */
//   channel_id?: string | null
// }

// /** https://discord.com/developers/docs/resources/guild#create-guild */
// export interface DiscordCreateGuild {
//   /** Name of the guild (1-100 characters) */
//   name: string
//   /** Base64 128x128 image for the guild icon */
//   icon?: string
//   /** Verification level */
//   verification_level?: VerificationLevels
//   /** Default message notification level */
//   default_message_notifications?: DefaultMessageNotificationLevels
//   /** Explicit content filter level */
//   explicit_content_filter?: ExplicitContentFilterLevels
//   /** New guild roles (first role is the everyone role) */
//   roles?: DiscordRole[]
//   /** New guild's channels */
//   channels?: Array<Partial<DiscordChannel>>
//   /** Id for afk channel */
//   afk_channel_id?: string
//   /** Afk timeout in seconds */
//   afk_timeout?: number
//   /** The id of the channel where guild notices such as welcome messages and boost events are posted */
//   system_channel_id?: string
//   /** System channel flags */
//   system_channel_flags?: SystemChannelFlags
// }

// /** https://discord.com/developers/docs/resources/guild#modify-guild */
// export interface DiscordModifyGuild {
//   /** Guild name */
//   name?: string
//   /** Verification level */
//   verification_level?: VerificationLevels | null
//   /** Default message notification filter level */
//   default_message_notifications?: DefaultMessageNotificationLevels | null
//   /** Explicit content filter level */
//   explicit_content_filter?: ExplicitContentFilterLevels | null
//   /** Id for afk channel */
//   afk_channel_id?: string | null
//   /** Afk timeout in seconds */
//   afk_timeout?: number
//   /** Base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the `ANIMATED_ICON` feature) */
//   icon?: string | null
//   /** User id to transfer guild ownership to (must be owner) */
//   owner_id?: string
//   /** Base64 16:9 png/jpeg image for the guild splash (when the server has `INVITE_SPLASH` feature) */
//   splash?: string | null
//   /** Base64 16:9 png/jpeg image for the guild discovery spash (when the server has the `DISCOVERABLE` feature) */
//   discovery_splash?: string | null
//   /** Base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
//   banner?: string | null
//   /** The id of the channel where guild notices such as welcome messages and boost events are posted */
//   system_channel_id?: string | null
//   /** System channel flags */
//   system_channel_flags?: SystemChannelFlags
//   /** The id of the channel where Community guilds display rules and/or guidelines */
//   rules_channel_id?: string | null
//   /** The id of the channel where admins and moderators of Community guilds receive notices from Discord */
//   public_updates_channel_id?: string | null
//   /** The preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US" */
//   preferred_locale?: string | null
//   /** Enabled guild features */
//   features?: GuildFeatures[]
//   /** Whether the guild's boost progress bar should be enabled */
//   premium_progress_bar_enabled?: boolean
// }

// export interface DiscordEditGuildMFALevel {
//   /** The level to set for the guilds mfa level. */
//   level: MfaLevels
// }

// /** https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen */
// export interface DiscordModifyGuildWelcomeScreen {
//   /** Whether the welcome screen is enabled */
//   enabled?: boolean | null
//   /** Channels linked in the welcome screen and their display options */
//   welcome_screen?: DiscordWelcomeScreenChannel[] | null
//   /** The server description to show in the welcome screen */
//   description?: string | null
// }

// export interface DiscordStartThreadWithMessage {
//   /** 1-100 character thread name */
//   name: string
//   /** Duration in minutes to automatically archive the thread after recent activity */
//   auto_archive_duration: 60 | 1440 | 4320 | 10080
//   /** Amount of seconds a user has to wait before sending another message (0-21600) */
//   rate_limit_per_user?: number | null
// }

// export interface DiscordStartThreadWithoutMessage {
//   /** 1-100 character thread name */
//   name: string
//   /** Duration in minutes to automatically archive the thread after recent activity */
//   auto_archive_duration: 60 | 1440 | 4320 | 10080
//   /** Amount of seconds a user has to wait before sending another message (0-21600) */
//   rate_limit_per_user?: number | null
//   /** the type of thread to create */
//   type:
//   | ChannelTypes.AnnouncementThread
//   | ChannelTypes.PublicThread
//   | ChannelTypes.PrivateThread
//   /** whether non-moderators can add other non-moderators to a thread; only available when creating a private thread */
//   invitable?: boolean
// }

export interface DiscordFollowAnnouncementChannel {
  /** The id of the channel to send announcements to. */
  webhook_channel_id: string
}

export interface DiscordEditChannelPermissionOverridesOptions {
  /** Permission bit set */
  allow: string
  /** Permission bit set */
  deny: string
  /** Either 0 (role) or 1 (member) */
  type: OverwriteTypes
}

/** https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions */
export interface DiscordModifyGuildChannelPositions {
  /** Channel id */
  id: string
  /** Sorting position of the channel */
  position: number | null
  /** Syncs the permission overwrites with the new parent, if moving to a new category */
  lock_positions?: boolean | null
  /** The new parent ID for the channel that is moved */
  parent_id?: string | null
}

// /** https://discord.com/developers/docs/resources/guild#create-guild-ban */
// export interface DiscordCreateGuildBan {
//   /** Number of seconds to delete messages for, between 0 and 604800 (7 days) */
//   delete_message_seconds?: number
// }

// export interface DiscordEditBotMemberOptions {
//   nick?: string | null
// }

// /** https://discord.com/developers/docs/resources/guild#modify-guild-member */
// export interface DiscordModifyGuildMember {
//   /** Value to set users nickname to. Requires the `MANAGE_NICKNAMES` permission */
//   nick?: string | null
//   /** Array of role ids the member is assigned. Requires the `MANAGE_ROLES` permission */
//   roles?: string[] | null
//   /** Whether the user is muted in voice channels. Will throw a 400 if the user is not in a voice channel. Requires the `MUTE_MEMBERS` permission */
//   mute?: boolean | null
//   /** Whether the user is deafened in voice channels. Will throw a 400 if the user is not in a voice channel. Requires the `MOVE_MEMBERS` permission */
//   deaf?: boolean | null
//   /** Id of channel to move user to (if they are connected to voice). Requires the `MOVE_MEMBERS` permission */
//   channel_id?: string | null
//   /** when the user's timeout will expire and the user will be able to communicate in the guild again (up to 28 days in the future), set to null to remove timeout. Requires the `MODERATE_MEMBERS` permission */
//   communication_disabled_until?: number | null
// }

// export interface DiscordGetDMChannel {
//   /** The user id */
//   recipient_id: string
// }

// /** https://discord.com/developers/docs/resources/guild#begin-guild-prune */
// export interface DiscordBeginGuildPrune {
//   /** Number of days to prune (1 or more), default: 7 */
//   days?: number
//   /** Whether 'pruned' is returned, discouraged for large guilds, default: true */
//   compute_prune_count?: boolean
//   /** Role(s) ro include, default: none */
//   include_roles?: string[]
// }

// export interface DiscordCreateGuildRole {
//   /** Name of the role, max 100 characters, default: "new role" */
//   name?: string
//   /** Bitwise value of the enabled/disabled permissions, default: everyone permissions in guild */
//   permissions?: string
//   /** RGB color value, default: 0 */
//   color?: number
//   /** Whether the role should be displayed separately in the sidebar, default: false */
//   hoist?: boolean
//   /** Whether the role should be mentionable, default: false */
//   mentionable?: boolean
//   /** The role's unicode emoji (if the guild has the `ROLE_ICONS` feature) */
//   unicode_emoji?: string
//   /** the role's icon image (if the guild has the `ROLE_ICONS` feature) */
//   icon?: string
// }

// export interface DiscordEditGuildRole {
//   /** Name of the role, max 100 characters, default: "new role" */
//   name?: string
//   /** Bitwise value of the enabled/disabled permissions, default: everyone permissions in guild */
//   permissions?: string
//   /** RGB color value, default: 0 */
//   color?: number
//   /** Whether the role should be displayed separately in the sidebar, default: false */
//   hoist?: boolean
//   /** Whether the role should be mentionable, default: false */
//   mentionable?: boolean
//   /** The role's unicode emoji (if the guild has the `ROLE_ICONS` feature) */
//   unicode_emoji?: string
//   /** the role's icon image (if the guild has the `ROLE_ICONS` feature) */
//   icon?: string
// }

// export interface DiscordModifyRolePositions {
//   /** The role id */
//   id: string
//   /** The sorting position for the role. */
//   position?: number | null
// }

// export interface DiscordCreateGuildStickerOptions {
//   /** Name of the sticker (2-30 characters) */
//   name: string
//   /** Description of the sticker (empty or 2-100 characters) */
//   description: string
//   /** Autocomplete/suggestion tags for the sticker (max 200 characters) */
//   tags: string
// }

// export interface DiscordEditGuildStickerOptions {
//   /** Name of the sticker (2-30 characters) */
//   name?: string
//   /** Description of the sticker (empty or 2-100 characters) */
//   description?: string | null
//   /** Autocomplete/suggestion tags for the sticker (max 200 characters) */
//   tags?: string
// }

// export interface DiscordCreateTemplate {
//   /** Name which the template should have */
//   name: string
//   /** Description of the template */
//   description?: string
// }

export interface DiscordCreateWebhook {
  /** Name of the webhook (1-80 characters) */
  name: string
  /** Image url for the default webhook avatar */
  avatar?: string | null
}

// export interface DiscordModifyWebhook {
//   /** The default name of the webhook */
//   name?: string
//   /** Image for the default webhook avatar */
//   avatar?: string | null
//   /** The new channel id this webhook should be moved to */
//   channel_id?: string
// }

// /** https://discord.com/developers/docs/resources/webhook#execute-webhook */
// export interface DiscordExecuteWebhook {
//   /** Waits for server confirmation of message send before response, and returns the created message body (defaults to `false`; when `false` a message that is not saved does not return an error) */
//   wait?: boolean
//   /** Send a message to the specified thread within a webhook's channel. The thread will automatically be unarchived. */
//   thread_id?: string
//   /** Name of the thread to create (target channel has to be type of forum channel) */
//   thread_name?: string
//   /** The message contents (up to 2000 characters) */
//   content?: string
//   /** Override the default username of the webhook */
//   username?: string
//   /** Override the default avatar of the webhook */
//   avatar_url?: string
//   /** True if this is a TTS message */
//   tts?: boolean
//   /** Embedded `rich` content */
//   embeds?: DiscordEmbed[]
//   /** Allowed mentions for the message */
//   allowed_mentions?: DiscordAllowedMentions
//   /** the components to include with the message */
//   components?: DiscordMessageComponents
// }

/** https://discord.com/developers/docs/resources/channel#start-thread-in-forum-channel */
export interface DiscordCreateForumPostWithMessage {
  /** 1-100 character channel name */
  name: string
  /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 */
  auto_archive_duration?: 60 | 1440 | 4320 | 10080
  /** amount of seconds a user has to wait before sending another message (0-21600) */
  rate_limit_per_user?: number
  /** contents of the first message in the forum thread */
  message: {
    /** Message contents (up to 2000 characters) */
    content?: string
    /** Embedded rich content (up to 6000 characters) */
    embeds?: DiscordEmbed[]
    /** Allowed mentions for the message */
    allowed_mentions?: DiscordAllowedMentions[]
    /** Components to include with the message */
    components?: DiscordMessageComponents[]
    /** IDs of up to 3 stickers in the server to send in the message */
    sticker_ids?: string[]
    /** Contents of the file being sent. See {@link https://discord.com/developers/docs/reference#uploading-files Uploading Files} */
    file: FileContent | FileContent[] | undefined
    /** JSON-encoded body of non-file params, only for multipart/form-data requests. See {@link https://discord.com/developers/docs/reference#uploading-files Uploading Files} */
    payload_json?: string
    /** Attachment objects with filename and description. See {@link https://discord.com/developers/docs/reference#uploading-files Uploading Files} */
    attachments?: DiscordAttachment[]
    /** Message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set) */
    flags?: number
  }
  /** the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM channel */
  applied_tags?: string[]
}

// /** https://discord.com/developers/docs/resources/guild-template#modify-guild-template */
// export interface DiscordModifyGuildTemplate {
//   /** name of the template (1-100 characters) */
//   name?: string
//   /** description for the template (0-120 characters) */
//   description?: string
// }
