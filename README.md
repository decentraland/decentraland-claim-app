# Decentraland Claim app  
## Confige  
Configure the following ENV variables first:   
```bash  
AMOUNT=100  
CHAIN_ID=1  
CLAIM_HOST=https://dc-mainnet-test.herokuapp.com  
DECENTRALAND_URL=https://decentraland.org/  
SYMBOL=MANA  
```  
## Deploy  
Build command:  
```bash  
yarn && yarn compile-contracts && cd apps/linkdrop-ui-kit && yarn test && yarn build && cd ../app-claim && yarn build  
```  
This will build static assets to the directory `apps/app-claim`  
