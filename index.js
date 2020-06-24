const { IncomingWebhook } = require('@slack/webhook')
const url = ''
const webhook = new IncomingWebhook(url)

webhook.send({
  text: '<!here> notification',
})