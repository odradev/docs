├── dao-contracts
│   ├── bin - Bin files used to generate wasm film.
│   ├── src 
│   │   ├── action.rs - Enum for actions that 'AdminContract' can perform.
│   │   ├── admin.rs - Implementation of the admin contract.
│   │   ├── builder - The builder of the voting configuration, which has defined default behavior. 
│   │   │   ├── mod.rs
│   │   │   └── voting_configuration_builder.rs
│   │   ├── dao_nft.rs - Implementation of the NFT contract, which can be owned by dao. 
│   │   ├── kyc_voter.rs - Contract, which let us create voting, thanks to kyc token can be minted. 
│   │   ├── lib.rs - Main entry point to the dao_contracts library. 
│   │   ├── mocks - Mock contract to the voting. 
│   │   │   ├── mock_voter.rs
│   │   │   └── mod.rs
│   │   ├── onboarding_voter.rs - Contract, which let for the onboarding of a new one VA (Voting Associate).
│   │   ├── repo_voter.rs - Contract, which let for the changes to the ariable_repository.
│   │   ├── reputation.rs - Implementation of reputation token.
│   │   ├── reputation_voter.rs - Contract, which lets minting and burning of the reputation.
│   │   ├── simple_voter.rs - This allows you to vote for any hash document.
│   │   ├── variable_repository.rs - Contract, which stores the variables. 
│   │   └── voting - Reusable module to the definition of voting. 
│   │       ├── ballot.rs - implementation of the ballot
│   │       ├── governance_voting - Voting logic for informal voting and formal voting.
│   │       │   ├── consts.rs
│   │       │   ├── events.rs
│   │       │   └── voting.rs
│   │       ├── governance_voting.rs
│   │       ├── kyc_info.rs - Information about the current status of the kyc process   
│   │       ├── mod.rs - Entry point for the voting library.
│   │       ├── onboarding_info.rs - Current status of the onboarding process.
│   │       └── types.rs - Definition of the types used in voting. 
│   └── tests
│       ├── governance_voting_common.rs
│       ├── test_admin.rs
│       ├── test_governance_results.rs
│       ├── test_governance_voting.rs
│       ├── test_kyc_voter.rs
│       ├── test_onboarding_voter.rs
│       ├── test_repo_voter.rs
│       ├── test_reputation.rs
│       ├── test_reputation_voter.rs
│       ├── test_simple_voter.rs
│       └── test_variable_repository.rs
├── dao-erc20
│   ├── bin - File that is used to generate WASM file.
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
│       ├── admin_contract.wasm
│       ├── dao_owned_nft_contract.wasm
│       ├── erc_20.wasm
│       ├── erc_721.wasm
│       ├── getter_proxy.wasm
│       ├── kyc_voter_contract.wasm
│       ├── mock_erc_721_non_receiver.wasm
│       ├── mock_erc_721_receiver.wasm
│       ├── mock_voter_contract.wasm
│       ├── onboarding_voter_contract.wasm
│       ├── repo_voter_contract.wasm
│       ├── reputation_contract.wasm
│       ├── reputation_voter_contract.wasm
│       ├── simple_voter_contract.wasm
│       └── variable_repository_contract.wasm
├── dao-macros
│   ├── sample-contract
│   │   ├── Cargo.toml
│   │   └── src
│   │       ├── casper_contract.rs
│   │       ├── contract.rs
│   │       └── lib.rs
│   ├── src
│   │   ├── contract
│   │   │   ├── caller.rs - Generation of the callers' code. 
│   │   │   ├── contract_bin.rs - Definition macro to the bins.
│   │   │   ├── contract_struct.rs - Definition struct macro.
│   │   │   ├── contract_test.rs - Definition macro to tests instance. 
│   │   │   ├── generator.rs 
│   │   │   ├── parser.rs - implementation of the CasperContractiItem.
│   │   │   └── utils.rs - Set of the utilis.
│   │   ├── contract.rs
│   │   ├── event.rs - Functions used to write events.
│   │   ├── instance.rs - Functions used to write instance
│   │   ├── lib.rs - Entry point for the library.
│   │   └── serialization.rs - Macro, which defines CL Type.
│   └── tests
│       ├── expand_tests.rs
│       └── templates
│           ├── bin.template
│           └── contract.template
├── dao-modules - Reusable modules to use in every contract. 
│   ├── Cargo.toml
│   └── src
│       ├── access_control.rs - The access control module.
│       ├── lib.rs 
│       ├── owner.rs - The module, which allows for one owner. 
│       ├── repository.rs - Reusable module of the repository
│       └── whitelist.rs - The module of the white list, which helps us to check who is on the whitelist. 
├── dao-utils 
│   ├── bin
│   │   └── getter_proxy.rs
│   ├── Cargo.toml
│   └── src
│       ├── casper_env.rs - Functions used to interact with CasperHost. 
│       ├── conversions.rs - Helpers about byte conversion. 
│       ├── events.rs - Implementation of the events.
│       ├── instance.rs - Trait instance. 
│       ├── lib.rs - The starting point for the dao-utils.
│       ├── math.rs - Support functions about math. 
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