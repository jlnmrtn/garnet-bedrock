
## Prerequisites  
In order for this project you need to have completed the bedrock configuration

## Dependencies installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Amplify installation & configuration

* Install amplify cli
* amplify init
* amplify add auth
* amplify push
  
## Give amplify role access to call the bedrock agent


## Configure your frontend to interact with your bedrock agent
Update the 2 following parameters in `api/chat/route.rs` file  
```
agentId: "XXXXXXXXX", // required
agentAliasId: "XXXXXXXX", // required
```

## Start the project locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

