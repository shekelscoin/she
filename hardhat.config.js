require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/GUUdz9l3M8NNhpS84rnU-D33fO92O6TJ',
      accounts: [
        '68d4b676763128ccd60776bf914f32333dc1652923bf10880571a4c27a20e07e',
      ],
    },
  },
}
