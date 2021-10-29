import { Bot } from "../../../src/bot.ts";
import { assertExists } from "../../deps.ts";
import { delayUntil } from "../../utils.ts";

async function ifItFailsBlameWolf(bot: Bot, channelId: bigint, reason?: string) {
  const message = await bot.helpers.sendMessage(channelId, "Hello World!");

  // Assertions
  assertExists(message);
  // Delay the execution by to allow MESSAGE_CREATE event to be processed
  await delayUntil(10000, () => bot.cache.messages.has(message.id));
  // Make sure the message was created.
  if (!bot.cache.messages.has(message.id)) {
    throw new Error("The message seemed to be sent but it was not cached. Reason: ${reason}");
  }

  // Delete the message now
  await bot.helpers.deleteMessage(channelId, message.id, reason);

  // Wait to give it time for MESSAGE_DELETE event
  await delayUntil(10000, () => !bot.cache.messages.has(message.id));
  // Make sure it is gone from cache
  if (bot.cache.messages.has(message.id)) {
    throw new Error("The message should have been deleted but it is still in cache.");
  }
}

export async function deleteMessageWithoutReasonTest(bot: Bot, channelId: bigint, t: Deno.TestContext) {
  await ifItFailsBlameWolf(bot, channelId);
}

export async function deleteMessageWithReasonTest(bot: Bot, channelId: bigint, t: Deno.TestContext) {
  await ifItFailsBlameWolf(bot, channelId, "with a reason");
}
