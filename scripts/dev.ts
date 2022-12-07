import hre from "hardhat";

const main = async () => {
  /**
   * In order to deploy something to the blockchain, we need to have a wallet address.
   * Hardhat does this for us magically in the background.
   * I grabbed the wallet address of contract owner and a random person.
   */
  const [owner, randomPerson] = await hre.ethers.getSigners();

  /**
   * This will actually compile our contract and generate the necessary
   * files we need to work with our contract under the artifacts directory.
   */
   const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

   /**
    * Hardhat will create a local Ethereum network for us, but just for this contract. 
    * 
    * Then, after the script completes it'll destroy that local network.
    * So, every time you run the contract, it'll be a fresh blockchain. 
    * 
    * It's kinda like refreshing your local server every time so you always star
    * from a clean slate which makes it easy to debug errors.
    */
   const waveContract = await waveContractFactory.deploy();
 
   /**
    * We'll wait until our contract is officially deployed to our local blockchain!
    * Our constructor runs when we actually deploy.
    */
   await waveContract.deployed();

  /**
   * Once it's deployed waveContract.address will basically give us
   * the address and the owner of the deployed contract
   */
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  /**
   * We can also get the contract balance.
   */
  await waveContract.getTotalWaves();

  const firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  await waveContract.getTotalWaves();

  const secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
};

runMain();