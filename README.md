# Fahrenheit PingPongBot

Ridiculously simple REST API: the single `/score/` endpoint takes all the parameters it needs:

        /score/winner/winnerScore/loser/loserScore

I deployed this app to Dokku, with the WEBHOOK_URL environment variable passed to index.js. You can run this on the command line with:

        WEBHOOK_URL=https://webhook.url.example.com node index.js