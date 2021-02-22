const Router = artifacts.require("UniSwapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth;
    const FACTORY_ADDRESS = '0xb97f545da1e966490fe072711515c80b0063b7bc'
    
    if(network === 'mainnet'){
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    }else{
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
