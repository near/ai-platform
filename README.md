# ai-platform

## NearAI
If you are looking for the NearAI platform, you want the [near.ai](https://near.ai) website or [repo](https://github.com/nearai/nearai)

## DEMONSTRATION
This is a deprecated prototype. It demonstrates storing a directory of interrelated resources on BOS, specifically User Sovereign AI capabilities on Near Protocol.

It may be viewable [here](https://dev.near.org/near/widget/AI.Nexus) if that BOS Gateway and QueryApi are running. It relies on the following layers:
1. A BOS (Blockchain Operating System) [Gateway](https://github.com/near/near-discovery)
2. Data is stored in the [near.social](https://near.social) contract.
3. Using the Entity structure defined in QueryApi indexers and components in [near-discovery-components](https://github.com/near/near-discovery-components)
4. The Query api [entities indexer](https://dev.near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=dataplatform.near/entities) and [repo](https://github.com/near/queryapi)


Examples, templates, and research toward layers that support User Sovereign AI.
These may be Near specific, multi-chain using Near chain abstraction, or implementations on other protocols.


## Areas
* [./nexus/components](nexus/components) - NEAR AI resource Nexus, React on Chain component implementation
* [./nexus/framework/trust](nexus/framework/trust) - Trust and Integrity Framework
* [./nexus/examples](nexus/examples) - Example agents that use Agent Framework capabilities