# Bid Escrow Contract Flows

## Glossary
Job Offer - A description of a Job posted by JobPoster
Bid - on offer that can be accepted by the Job Poster
JobPoster - user of the system that posts a Job Offer; it has to be KYC’d
Worker - the user who does a job
Internal Worker - a Worker who completed the KYC and
was voted to be a VotingAssociate
External Worker - a Worker who completed the KYC and is not a VotingAssociate
Voting Associate (or VA) - users of the system with Reputation and permissions 
to vote
KYC - Know Your Customer, a process that validates 
that the user can be the user of the system
Bid Escrow Voting - Mints reputation
Simple Voting - only redistribution of Reputation, no minting. 
Governance Voting - E.g. Variable voting, 
the mechanism is the same as in the Simple Voting

## Governance variables

| Parameter name                              | Initial Value     | Stored value      | Type       | Description                                                                                                                                                                                                                      |
|---------------------------------------------|-------------------|-------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PostJobDOSFee                               | 10                | 10000             | float      | A DOS fee that the JobPoster needs to attach to the Post Job query. The value is the minimum amount of Fiat currency to be attached as CSPR using FiatConversionRate                                                             |
| InternalAuctionTime TODO                    | 7 days            | 604800            | seconds    | The time of the Internal Auction                                                                                                                                                                                                 |
| PublicAuctionTime TODO                      | 10 days           | 864000            | seconds    | The time of the External Auction                                                                                                                                                                                                 |
| DefaultPolicingRate                         | 0.3               | 300               | float      | This rate defines how many Reputation tokens are given to the VA’s for their community audit/vote on a work product.. In case of value of 0.3, 30% of the payment is redistributed between VA’s and 70% is given to the Worker.  |
| ReputationConversionRate                    | 0.1               | 100               | float      | This parameter tells how much Reputation is minted for each unit of currency paid for Work. For value equal to 0.1, 1 Reputation is minted for each 10 CSPR.                                                                     |
| FiatConversionRateAddress TODO              | not available yet | not available yet | address    | An address of a contract that will return the conversion rate between Fiat and CSPR                                                                                                                                              |
| ForumKYCRequired TODO                       | True              | True              | bool       | Defines if KYC is required to post on Forum.                                                                                                                                                                                     |
| GovernanceQuorumRatio                       | 0.5               | 500               | float      | How many holders of the Reputation tokens (VA’s) are needed for a governance vote quorum. For example, if 100 accounts hold tokens, the quorum would be 51 votes.                                                                |
| GovernanceInformalQuorumRatio               | 0.5               | 500               | float      | How many holders of the Reputation tokens (VA’s) are needed for an informal voting quorum.                                                                                                                                       |
| InformalQuorumRatio                         | 0.5               | 500               | float      | How many holders of the Reputation tokens (VA’s) are needed for a regular informal voting quorum.                                                                                                                                |
| InformalStakeReputation TODO                | true              | true              | bool       | Tells if the Informal Voting should stake the reputation or only simulate it.                                                                                                                                                    |
| QuorumRatio                                 | 0.5               | 500               | float      | How many holders of the Reputation tokens (VA’s) are needed for a regular voting quorum.                                                                                                                                         |
| GovernanceInformalVotingTime                | 5 days            | 432000            | seconds    | Time for the informal part of the Governance voting                                                                                                                                                                              |
| GovernanceVotingTime                        | 5 days            | 432000            | seconds    | Time for the formal part of the Governance voting                                                                                                                                                                                |
| InformalVotingTime TODO                     | 5 days            | 432000            | seconds    | Time for the informal part of other votings                                                                                                                                                                                      |
| VotingTime TODO                             | 5 days            | 432000            | seconds    | Time for the formal part of other votings                                                                                                                                                                                        |
| TimeBetweenInformalAndFormalVoting TODO     |                   |                   |            |                                                                                                                                                                                                                                  |
| MinimumGovernanceVotingReputation           | 100               | 100               | Reputation | Minimum amount of reputation to be staked when creating a governance vote                                                                                                                                                        |
| MinimumVotingReputation                     | 10                | 10                | Reputation | Minimum amount of Reputation to be staked when creating a vote                                                                                                                                                                   |
| VABidAcceptanceTimeout TODO                 | 2 days            | 172800            | seconds    | How much time the bid wait for the acceptance. After this time, the bid can be cancelled                                                                                                                                         |
| VACanBidOnPublicAuction TODO                | False             | False             | bool       | Whether or not VA’s can take part in the Public Auction part of the Bidding process.                                                                                                                                             |
| DistributePaymentToNonVoters TODO           | True              | True              | bool       | Determines if the Payment for the Job should be distributed between all VA’s or only to those who voted                                                                                                                          |
| GovernanceWalletAddress TODO                |                   |                   | address    | The address of the multisig Governance Wallet                                                                                                                                                                                    |
| DefaultReputationSlash TODO                 | 0.1               | 100               | float      | How much reputation of an Internal Worker is slashed after not completing a Job.                                                                                                                                                 |
| TimeDifferenceBetweenInformalAndFormal TODO | ? days            |                   | seconds    | Time between ending the Informal Voting and starting Formal Voting                                                                                                                                                               |
| VotingClearnessDelta TODO                   | 8                 |                   | int        | If the difference between 50/50 and result of the Informal Voting is bigger than the value, the time between votings should be doubled.                                                                                          |
| VotingStartAfterJobSubmition TODO           | ?                 |                   | days       |                                                                                                                                                                                                                                  |
| GovernancePaymentRatio                      | 0.1               | 100               | float      | How much CSPR is sent to GovernanceWallet after the Job is finished                                                                                                                                                              |
| GovernanceWalletAddress                     |                   |                   | address    | An address of a multisig wallet of the DAO.                                                                                                                                                                                      |
QUESTION: What exact initial values should the Governance Variables have.

## General flow
A diagram below shows a general overview of a bid escrow process conducted 
on-chain. It shows only the most important parts of the main path. Each part
of the process will be described in detail in later sections of this document.

 ![](https://i.imgur.com/trvxROv.png)


## Posting a Job Offer
The first step of a Bid Escrow process is Posting a Job Offer. 
It is done by JobPoster by sending a query to a BidEscrow contract containing:
- Expected timeframe for completing a Job
- Maximum budget for a Job
With the query, the JobPoster sends a DOS fee in CSPR. 
The minimum amount of a DOS fee is defined in governance variable PostJobDOSFee.
This action creates a new object in the contract called Job Offer 
and starts the Bidding process.

![](https://i.imgur.com/uQh4HiR.png)
 
### Calculating minimum DOS Fee TODO
To calculate the minimum amount of CSPR that
need to be attached to the Post Job request, we use the following formula:

PostDOSFeeCSPR = FiatConversionRate * PostJobDOSFee

The PostJobDOSFee is a Governance Variable.
The FiatConversionRate is queried from a smart contract living at the address 
that is held in the FiatConversionRateAddress Governance Variable using get_rate() 
method. Ultimately this address will point to the smart contract that is 
connected to the Oracle which will present current currency exchange rates.

For example, when USDT is used as a Fiat currency and in case of price
 of the USD in CSPR of 21.06, and PostJobDosFee of 10, we calculate the fee:

PostDOSFeeCSPR = 21.06 * 10 = 210.6 CSPR

After the process is completed, the DOS Fee is returned to the Job Poster.

## Bidding process
The Bidding process allows Workers to post Bids on blockchain with the offer of 
completing a job. It is divided into two main parts.

### Internal Auction
During this part of the bidding process only the VA’s can bid. 
As the VA’s have Reputation, they are bidding using Reputation as a stake. 
The Bid query to the contract consists of:
- Proposed timeframe for completing a Job
- Proposed payment for a Job
- The amount of Reputation the Internal Worker stakes on this Job
For price discovery each bid also has to show the then existing reputation score
of the bidder - so the job poster looks at 4 variables for selecting a bid: 
1. time, 
2. price, 
3. rep staked,
4. total rep score of bidder) 
This assures a better selection process and price discovery. 
The Bid is then added to a list of available bids in the contract storage and
is available for picking by Job Poster. The time of Internal Auction is defined
in a governance variable InternalAuctionTime. The bidding process can already be
completed here, if JobPoster decides to chose one of the posted Bids before
Internal auction ends. However, if no Bid is picked during this time,
the process becomes a Public Auction.

### Public Auction
If no Internal Worker decides to post a Bid on a Job Offer, or JobPoster did not
 pick any bid during Internal Auction, the External Workers have a chance of 
 submitting their bids during Public Auction time. As External Workers do not 
have any Reputation to stake, they are staking CSPR.
The query to the contract in case of External Workers consists of:
- Proposed timeframe for completing a Job
- Proposed payment for a Job
- Decision if the Worker wants to become a Voting Associate 
if the Job is completed
- And a CSPR stake sent alongside the query
Internal Workers by default cannot to submit their bids during Public Auction, 
however this behaviour is configurable using VACanBidOnPublicAuction Governance 
Variable.The time of Public auction is defined in a governance variable 
PublicAuctionTime.

![](https://i.imgur.com/tcybFtr.png)

### No Bid is selected or posted TODO
When no Bid is posted or selected by Job Poster during both auctions, the Job is 
cancelled, DOS Fee is returned to the Job Poster and stakes sent by the Bidders 
are returned to them.

## Picking a Bid
During the Auction process the Job Poster can Pick a Bid. To do this, he sends 
to the contract following information which defines unambiguously the connection
between JobOffer and the chosen Bid and the Payment amount in the CSPR as stated
in the Worker’s Bid.
This action creates a Job object in the contract and causes multiple things to happen:
1. The Auction process stops.
2. Stakes of Workers who hasn’t been chosen is returned to them.
3. Stake of the Worker who has been selected stays in the contract 
- it will be used in the Voting process.

![](https://i.imgur.com/NWQG1LZ.png)

## Submitting a Job proof
Now the Worker has the time to complete the Job and submit its proof to the 
contract. The time for a job is the one stated by the Worker in his Bid. After 
the works have been completed, the Worker sends a query to the contract 
containing the cryptographic hash of a document being a proof of Work done for 
a Job Poster.

### Grace period TODO

However, if External Worker do not post a Job Proof in time, his CSPR stake is 
redistributed between all VA’s. In case of Internal Worker, his staked 
Reputation gets burned and it undergoes the Automated Reputation slashing. Then 
the process enters a Grace period (with the timeframe the same as the timeframe 
of the work for Worker). During this period, anyone (VA, External Worker, even
the original Worker) can submit the Job Proof, becoming the new Worker and 
participating in the reward mechanism. Alongside the Job Proof, a Worker needs 
to send a stake in form of Reputation or CSPR (for External Worker). This stake 
will behave in the same manner as stake sent by the original Worker.
If nobody submits the Job Proof during the grace period, the whole process ends. 
The CSPR paid by the Job Poster is returned along with the DOS Fee.

### Automated Reputation slashing TODO
It is a process of automated burning certain amount of Reputation of the VA. 
The amount of Reputation to burn is calculated using a formula:

reputation to burn = worker's total reputation * DefaultReputationSlash

If the Worker has Reputation staked in other parts of the system, we burn it as 
soon as it is released, until the required amount is burned.
If the Reputation Slash is set to 100%:
- we burn all the reputation,
- fail all the jobs where this VA is either worker or job poster,
- fail all the votings started by this VA,
- remove all votes from all active votings,
- remove all bids from all auctions,
- remove VA token.

![](https://i.imgur.com/SfjWjxi.png)


## Voting
Voting process starts automatically after amount of time defined by the 
VotingStartAfterJobSubmition Governance Variable or if Worker starts it. First 
vote in the Informal Voting is cast automatically for the Worker as a “yes” vote
- confirming that the Job was completed correctly. The first vote stake for 
Internal Worker is the initial stake from the Bidding process as posted by the 
winning bidder. In case of the External Worker, his CSPR stake is added to the 
Payment pool and a new Reputation is minted using a formula:

minted reputation = CSPR stake * ReputationConversionRate

Where ReputationConversionRate is a governance variable. The minted reputation 
is used as an upstake in the first “yes” vote.

### Calculating Quorum
During both types of Voting a specific amount of votes is required to be cast -
the Quorum. The proportional amount of votes is defined in the Governance 
Variables *QuorumRatio.To calculate the amount of votes required to achieve 
quorum we use the following formula:

quorum = total amount of VA's * QuorumRatio

For example, with 11 VA’s and QuorumRatio set to 0.5, the quorum is 5.5, which
means that there need to be at least 6 votes cast for the Voting.

When the External Worker does the Job, his CSPR stake is converted to Reputation 
and used as a “yes” vote. However, this vote does not count as a vote during the 
quorum calculation. For the Internal Worker, the vote is accounted for during 
the quorum calculation.

### Informal Voting
The Informal Voting is the first phase of the Voting process. It is conducted 
on-chain. Its parameters are configured using governance variables:

InformalVotingTime - how long the voting lasts
InformalQuorumRatio - how many VA votes are needed
InformalStakeReputation - if the Reputation used for Informal Voting should be 
staked or not.

#### Voting passed
When Informal Voting passed, and time between voting passes, 
following things happen:

The time between Votings starts to count
Worker’s stake is used as a “yes” vote for the first vote in the Formal Voting
VA’s stakes are returned to them

#### Voting failed
When Informal Voting fails, following things happen:

The time between Votings starts to count
Worker’s stake is used as a “yes” vote for the first vote in the Formal Voting
VA’s stakes are returned to them

#### Quorum not reached
When the Quorum is not reached during the Informal Voting, 
following things happen:

The process ends here.
VA’s stakes are returned to them
Job Poster payment and DOS fee is returned
Internal Worker’s Reputation and External Worker’s CSPR stake is returned.
External Worker’s Reputation that was minted using CSPR stake is burned.

### Time between Votings TODO
After passed or failed Informal Voting there is certain amount of time before 
the Formal Voting starts. The basic value for this time is stored in 
TimeDifferenceBetweenInformalAndFormal Governance Variable.
However, depending on the vote difference in the Informal Voting this time can
be doubled. This behaviour is configured using VotingClearnessDelta Governance 
Variable. It is a numeric value which tells how far from 50/50 result can be in 
percent points, before the time will be doubled.For example, when 
VotingClearnessDelta is set to 8 and the result of the Informal Voting is 
42 percent “for” and 58 “against” then the time between votings should be d
oubled. When the result is 41/59, the default value of time will be used.

### Formal Voting
The Formal Voting is the final step in the Voting process. Its parameters are 
configured using governance variables:

VotingTime - how long the voting lasts
QuorumRatio - how many VA votes are needed

Different actions are performed by the contract depending on the result,
type of the Worker and whether the External Worker wanted to become a Va.

#### Voting passed
Besides yielding a positive result, the Voting passed means that the Reputation 
staked by the losing side is redistributed between the winning side, 
depending on the type of Worker.

##### External Worker who wanted to become VA
The External Worker becomes VA, which makes the rest of the process analogous 
to the Internal Worker

##### Internal Worker
Reputation of the voters who voted “yes” is returned to them
Reputation of the voters who voted “no” is redistributed between the voters 
who voted “yes” proportional to the amount of reputation staked in the voting

##### External Worker
Reputation of the voters who voted “yes” is returned to them, except for the 
Reputation minted for the Worker using CSPR stake
Reputation of the voters who voted “no” is redistributed between the voters who 
voted “yes” proportional to the amount of reputation staked in the voting 
(External Worker does not receive Reputation in this step)
Part of the Reputation minted for the Worker using CSPR stake is redistributed 
between all voters, except for the Worker. The rest is burned.
How much Reputation is redistributed is calculated using a formula: 
 
voters reward = reputation minted for External Worker * DefaultPolicingRate

### Voting failed
Besides yielding a negative result, the Voting passed means that the Reputation
staked by the losing side is redistributed between the winning side, 
epending on the type of Worker.

##### External Worker who wanted to become VA
The External Worked DOES NOT become a VA
Reputation of the voters who voted “no” is returned to them
Reputation of the voters who voted “yes” except for the Reputation minted for 
the Worker using CSPR stake is redistributed between the voters who voted “no” 
proportional to the amount of reputation staked in the voting
Part of the Reputation minted for the Worker using CSPR stake is redistributed 
between all voters, except for the Worker. The rest is burned. How much 
Reputation is redistributed is calculated using a formula:

voters reward = reputation minted for External Worker * DefaultPolicingRate

##### Internal Worker
Reputation of the voters who voted “no” is returned to them
Reputation of the voters who voted “yes” is redistributed between the voters 
who voted “no” proportional to the amount of reputation staked in the voting

##### External Worker
Reputation of the voters who voted “no” is returned to them
Reputation of the voters who voted “yes” except for the Reputation minted for 
the Worker using CSPR stake is redistributed between the voters who voted “no”
proportional to the amount of reputation staked in the voting
Part of the Reputation minted for the Worker using CSPR stake is redistributed 
between all voters, except for the Worker. The rest is burned. How much 
Reputation is redistributed is calculated using a formula:

voters reward = reputation minted for External Worker * DefaultPolicingRate

##### Quorum not reached
When the Quorum is not reached during the Formal Voting, following things happen:
The process ends here.
VA’s stakes are returned to them
Job Poster payment and DOS fee is returned
Internal Worker’s Reputation and External Worker’s CSPR stake is returned.
External Worker’s Reputation that was minted using CSPR stake is burned.

## Returning CSPR after failed Voting
If the Voting fails, the CSPR sent to the contract as a payment for Job is 
returned to the Job Poster. If the work has been attempted to do by an
External Worker the CSPR that the Worker staked during the Bid process is 
redistributed between all VA’s.

## Reputation minting after a passed Voting
After a successful vote over a Job result, a new Reputation is being minted 
using a formula:

reputation minted = job price * ReputationConversionRate

Then the Reputation is redistributed between VA’s who voted and Internal Worker.

### Internal Worker
When the Job was done correctly by the Internal Worker, firstly some amount of 
the Reputation is given to those who took part in the Voting - including the 
Internal Worker. How much is redistributed to them is described by a formula:

voters total reward = minted reputation * DefaultPolicingRate

Where DefaultPolicingRate is a Governance Variable. 
The rest of the Reputation is awarded to the Internal Worker.

### External Worker
As the External Worker cannot receive Reputation, when it finishes the Job 
without becoming a VA, all minted reputation is redistributed between VA’s who 
voted.

## Payment CSPR Redistribution after a passed Voting
Reputation used for the Voting and minted after a successful Job has been 
redistributed during above process, but there is CSPR to redistribute that was 
allocated to the Job. How much resources is redistributed and to whom depends 
on the type of Worker and whether it wanted to become a VA.


### Payment pool
The CSPR to redistribute is calculated using a formula:

payment pool = job price + External Worker CSPR stake

### External Worker who wanted to become VA
As the External Worker now is the VA, it is considered to be an Internal Worker
in this scenario.

### Internal Worker
Firstly the Governance Payment is calculated using a formula:

governance payment = payment pool* GovernancePaymentRatio

The Governance Payment is then transferred to a multisig wallet, which address 
is held in the Governance Variable called GovernanceWallet.
The rest of the payment is redistributed between all of the VA’s.

remaining amount = payment pool- governance payment

### External Worker
If the Job was done by an External Worker who didn’t want to become a VA, the 
first step is the same as in the case of Internal Worker - Governance Payment
is being made. However the rest is then divided between the External worker 
and the VA’s. Firstly to get the amount that VA’s receive we use a formula:

VA payment amount = remaining amount * DefaultPolicingRate

Where the DefaultPolicingRate is a Governance Variable.
Then, the rest is transferred to the External Worker:

External Worker payment amount = payment pool- governance payment - VA payment amount


![](https://i.imgur.com/wSyT0RL.png) 

## Return of the DOS Fee
The final step of the process is returning the DOS Fee to the Job Poster.

## Redistribution calculation
### CSPR
The Redistribution of CSPR is done based on the total amount of Reputation that
the VA has. This means that staked tokens are also accounted for during 
calculation. The amount of CSPR given to the VA is calculated using a formula:

VA award = total award * VA reputationtotal reputation of elligible VA's / total 
reputation of elligible VA's

### Reputation
The Redistribution of the Reputation after a completed voting is calculated 
using a formula:

VA reputation award= total award * VA stakesum of staked reputation of elligible 
VA's / sum of staked  reputation of elligible VA's

Where total award is amount of Reputation to redistribute. After voting it would
be the sum of Reputation staked by the losing side. For newly minted Reputation
- all of it, minus the Reputation reward for the Worker.

## Onboarding without a Job Offer TODO
One of the side effects of completing a Job by an External Worker is the p
ossibility to become a Voting Associate. It is also possible to become one 
without completing a Job using Bid Escrow contract. To do this, an External 
Worker submits an Onboarding Request to the Bid Escrow Contract, containing 
Document Hash of a document containing the reason why the Onboarding should be 
done and a CSPR stake. The rest of the process is analogous to the regular Job 
submission process of an External Worker, except that instead of redistribution 
of Job Payment between VA’s we redistribute the stake of the External Worker. 
If the process fails, the CSPR stake of the External Worker is returned.