```
├── dao-contracts
│   ├── bin
│   ├── src
│   │   ├── action.rs
│   │   ├── admin.rs
│   │   ├── builder
│   │   │   ├── mod.rs
│   │   │   └── voting_configuration_builder.rs
│   │   ├── dao_nft.rs
│   │   ├── kyc_voter.rs
│   │   ├── lib.rs
│   │   ├── mocks
│   │   │   ├── mock_voter.rs
│   │   │   └── mod.rs
│   │   ├── onboarding_voter.rs
│   │   ├── repo_voter.rs
│   │   ├── reputation.rs
│   │   ├── reputation_voter.rs
│   │   ├── simple_voter.rs
│   │   ├── variable_repository.rs
│   │   └── voting
│   │       ├── ballot.rs
│   │       ├── governance_voting
│   │       │   ├── consts.rs
│   │       │   ├── events.rs
│   │       │   └── voting.rs
│   │       ├── governance_voting.rs
│   │       ├── kyc_info.rs
│   │       ├── mod.rs
│   │       ├── onboarding_info.rs
│   │       └── types.rs
│   └── tests
│       ├── governance_voting_common.rs
│       ├── test_admin.rs
│       ├── test_governance_results.rs
│       ├── test_governance_voting.rs
│       ├── test_kyc_voter.rs
│       ├── test_onboarding_voter.rs
│       ├── test_repo_voter.rs
│       ├── test_reputation.rs
│       ├── test_reputation_voter.rs
│       ├── test_simple_voter.rs
│       └── test_variable_repository.rs
├── dao-erc20
│   ├── bin - File that is used to generate WASM file.
│   │   └── erc20_contract.rs
│   ├── src
│   │   ├── erc20.rs - Implementation of ERC20 token.
│   │   └── lib.rs
│   ├── tests
│   │   └── test_erc20.rs - Test of ERC20 Token.
├── dao-erc721
│   ├── bin
│   ├── Cargo.toml
│   ├── src
│   │   ├── core.rs
│   │   ├── erc721.rs
│   │   ├── events.rs
│   │   ├── extensions
│   │   │   ├── burnable.rs
│   │   │   ├── metadata.rs
│   │   │   ├── mintable.rs
│   │   │   └── mod.rs
│   │   ├── lib.rs
│   │   └── receiver.rs
│   ├── tests
│   │   └── test_erc721_spec.rs
│   └── wasm
│       ├── admin_contract.wasm
│       ├── dao_owned_nft_contract.wasm
│       ├── erc_20.wasm
│       ├── erc_721.wasm
│       ├── getter_proxy.wasm
│       ├── kyc_voter_contract.wasm
│       ├── mock_erc_721_non_receiver.wasm
│       ├── mock_erc_721_receiver.wasm
│       ├── mock_voter_contract.wasm
│       ├── onboarding_voter_contract.wasm
│       ├── repo_voter_contract.wasm
│       ├── reputation_contract.wasm
│       ├── reputation_voter_contract.wasm
│       ├── simple_voter_contract.wasm
│       └── variable_repository_contract.wasm
├── dao-macros
│   ├── sample-contract
│   │   ├── Cargo.toml
│   │   └── src
│   │       ├── casper_contract.rs
│   │       ├── contract.rs
│   │       └── lib.rs
│   ├── src
│   │   ├── contract
│   │   │   ├── caller.rs
│   │   │   ├── contract_bin.rs
│   │   │   ├── contract_struct.rs
│   │   │   ├── contract_test.rs
│   │   │   ├── generator.rs
│   │   │   ├── parser.rs
│   │   │   └── utils.rs
│   │   ├── contract.rs
│   │   ├── event.rs
│   │   ├── instance.rs
│   │   ├── lib.rs
│   │   └── serialization.rs
│   └── tests
│       ├── expand_tests.rs
│       └── templates
│           ├── bin.template
│           └── contract.template
├── dao-modules
│   ├── Cargo.toml
│   └── src
│       ├── access_control.rs
│       ├── lib.rs
│       ├── owner.rs
│       ├── repository.rs
│       └── whitelist.rs
├── dao-utils
│   ├── bin
│   │   └── getter_proxy.rs
│   ├── Cargo.toml
│   └── src
│       ├── casper_env.rs
│       ├── conversions.rs
│       ├── events.rs
│       ├── instance.rs
│       ├── lib.rs
│       ├── math.rs
│       ├── parts
│       │   ├── address.rs
│       │   ├── collection.rs
│       │   ├── consts.rs
│       │   ├── contract_call.rs
│       │   ├── error.rs
│       │   ├── mapping.rs
│       │   ├── mod.rs
│       │   ├── sequence.rs
│       │   ├── types.rs
│       │   └── variable.rs
│       ├── test_contract.rs
│       └── test_env.rs
├── resources
```