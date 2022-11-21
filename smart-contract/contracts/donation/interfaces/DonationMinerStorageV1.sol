// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.4;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Upgradeable as IERC20} from "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "./IDonationMiner.sol";

/**
 * @title Storage for DonationMiner
 * @notice For future upgrades, do not change DonationMinerStorageV1. Create a new
 * contract which implements DonationMinerStorageV1 and following the naming convention
 * DonationMinerStorageVX.
 */
abstract contract DonationMinerStorageV1 is IDonationMiner {
    IERC20 public override usdc;
    IERC20 public override SAVEH;
    ITreasury public override treasury;
    uint256 public override rewardPeriodSize;
    uint256 public override donationCount;
    uint256 public override rewardPeriodCount;
    uint256 public override decayNumerator;
    uint256 public override decayDenominator;

    mapping(uint256 => Donation) public override donations;
    mapping(uint256 => RewardPeriod) public override rewardPeriods;
    mapping(address => Donor) public override donors;

    uint256 public override claimDelay;
    
    uint256 public override againstPeriods;

    IStaking public override staking;
    //ratio between 1 kUSD donated and 1 SAVEH staked
    uint256 public override stakingDonationRatio;
    uint256 public override communityDonationRatio;
}
