require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY_RINKEBY,
      accounts: [process.env.PRIVATE_KEY],
    },
    ropstein: {
      url: process.env.STAGING_ALCHEMY_KEY_ROPSTEIN,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: "http://localhost:8545"
    },
    hardhat: {
      chainId: 31337
    },
  },
};