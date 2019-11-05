const { WebClient } = require('@slack/web-api');
 
// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;
 
// Initialize
const web = new WebClient(token);

// Given some known conversation ID (representing a public channel, private channel, DM or group DM)
const conversationId = '...';
 
(async () => {
 
  // Post a message to the channel, and await the result.
  // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: conversationId,
  });
 
  // The result contains an identifier for the message, `ts`.
  console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
})();

console.log(web)