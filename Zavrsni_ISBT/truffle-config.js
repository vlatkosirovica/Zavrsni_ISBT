module.exports = {
  networks: {
    loc_ugovor_ugovor: {
      network_id: "*",
      port: 7000,
      host: "127.0.0.1"
    },
    loc_development_development: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.18"
    }
  }
};
