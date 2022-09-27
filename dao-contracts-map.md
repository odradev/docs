```
├── dao-contracts
│   ├── bin - Files used to generate WASM file.
│   ├── src 
│   │   ├── action.rs - Enum for actions that 'AdminContract' can perform.
│   │   ├── admin.rs - Implementation of the admin contract.
│   │   ├── builder - The builder of the voting configuration, which has defined a default behavior. 
│   │   │   ├── mod.rs
│   │   │   └── voting_configuration_builder.rs
│   │   ├── dao_nft.rs - Implementation of the NFT contract, which can be owned by dao. 
│   │   ├── kyc_voter.rs - Contract, which let us create voting, to mint a kyc token. 
│   │   ├── lib.rs - Main entry point to the dao_contracts library. 
│   │   ├── mocks - Mock contract for the voting. 
│   │   │   ├── mock_voter.rs
│   │   │   └── mod.rs
│   │   ├── onboarding_voter.rs - Contract, which let for the onboarding of a new one VA (Voting Associate).
│   │   ├── repo_voter.rs - Contract, which let for the changes to the variable_repository.
│   │   ├── reputation.rs - Implementation of reputation token.
│   │   ├── reputation_voter.rs - Contract, which lets minting and burning of the reputation.
│   │   ├── simple_voter.rs - This allows you to vote for any hash document.
│   │   ├── variable_repository.rs - Contract, which stores the variables. 
│   │   └── voting - Reusable module with the voting module. 
│   │       ├── ballot.rs - Implementation of the ballot
│   │       ├── governance_voting - Voting logic for informal and formal votings.
│   │       │   ├── consts.rs
│   │       │   ├── events.rs
│   │       │   └── voting.rs
│   │       ├── governance_voting.rs
│   │       ├── kyc_info.rs - Information about the current status of the kyc process.   
│   │       ├── mod.rs - Entry point for the voting library.
│   │       ├── onboarding_info.rs - Current status of the onboarding process.
│   │       └── types.rs - Definition of the types used in voting. 
│   └── tests
|
├── dao-erc20
│   ├── bin - Files used to generate WASM file.
│   │   └── erc20_contract.rs
│   ├── src
│   │   ├── erc20.rs - Implementation of ERC20 token.
│   │   └── lib.rs
│   ├── tests
│   │   └── test_erc20.rs - Test of ERC20 Token.
├── dao-erc721
│   ├── bin 
│   ├── Cargo.toml
│   ├── src
│   │   ├── core.rs - Implementation of ERC721 library.
│   │   ├── erc721.rs - Implementation of ERC721 contract.
│   │   ├── events.rs 
│   │   ├── extensions
│   │   │   ├── burnable.rs
│   │   │   ├── metadata.rs
│   │   │   ├── mintable.rs
│   │   │   └── mod.rs
│   │   ├── lib.rs
│   │   └── receiver.rs - implementation of the receiver of the ERC721.
│   ├── tests
│   │   └── test_erc721_spec.rs
│   └── wasm
|
├── dao-macros
│   ├── src
│   │   ├── contract
│   │   │   ├── caller.rs - Generation of the callers' code. 
│   │   │   ├── contract_bin.rs - Definition macro for the bins.
│   │   │   ├── contract_struct.rs - Definition of the struct macro.
│   │   │   ├── contract_test.rs - Definition for the macro to tests instance. 
│   │   │   ├── generator.rs 
│   │   │   ├── parser.rs - Implementation of the CasperContractiItem.
│   │   │   └── utils.rs - Set of utilis.
│   │   ├── contract.rs
│   │   ├── event.rs - Functions used to define events.
│   │   ├── instance.rs - Functions used to define instance
│   │   ├── lib.rs - Entry point for the library.
│   │   └── serialization.rs - Macro, which defines CL Type.
│   └── tests
|
├── dao-modules - Reusable modules to use in every contract. 
│   ├── Cargo.toml
│   └── src
│       ├── access_control.rs - The access control module.
│       ├── lib.rs 
│       ├── owner.rs - The module, which allows for one owner. 
│       ├── repository.rs - Reusable module of the variable repository storage.
│       └── whitelist.rs - The module of the whitelist. 
├── dao-utils 
│   └── src
│       ├── casper_env.rs - Functions used to interact with the Casper blockchain. 
│       ├── conversions.rs - Helpers for byte conversions. 
│       ├── events.rs - Implementation of the events.
│       ├── instance.rs - Trait instance.
│       ├── lib.rs - The starting point for the dao-utils.
│       ├── math.rs - Support functions for math. 
│       ├── parts - Basic structures used in the contracts. 
│       │   ├── address.rs - Implementation of the address.
│       │   ├── collection.rs - Implementation of the collections such as OrderedCollection, Set, and List.
│       │   ├── consts.rs - Consts used in the whole repository.
│       │   ├── contract_call.rs 
│       │   ├── error.rs - Definition of the errors used in contracts. 
│       │   ├── mapping.rs - A data structure for storing key-value parts.
│       │   ├── mod.rs - 
│       │   ├── sequence.rs - A data structure for keeping the generator of the next numbers. 
│       │   ├── types.rs - A data structure for storing a single value.
│       │   └── variable.rs 
│       ├── test_contract.rs
│       └── test_env.rs - Implementation of the Virtual Machine of the Casper for a test environment.
├── resources - Contracts description files.
```