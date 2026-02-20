# ContextMind AI 

## Project Objective
This project is an assignment exploring how AI agents should utilize context and memory to make autonomous business decisions. The goal is to mirror a human professional's ability to retain past interactions and apply them critically to current situations.

Rather than generating a theoretical essay outlining memory concepts, this project delivers a React and Vite interactive prototype that practically demonstrates the proposed architecture in action.

## System Architecture Flow

Here is the visual representation of how the ContextMind AI system processes a business event, manages memory throughout its lifecycle, and makes a final autonomous decision.

```mermaid
graph TD
    %% Define Styles
    classDef incoming fill:#f4f4f5,stroke:#09090b,stroke-width:2px;
    classDef memory fill:#eff6ff,stroke:#3b82f6,stroke-width:2px;
    classDef engine fill:#fffbeb,stroke:#f59e0b,stroke-width:2px;
    classDef process fill:#ffffff,stroke:#09090b,stroke-width:1px;
    classDef decision fill:#09090b,stroke:#09090b,stroke-width:2px,color:#ffffff;
    classDef storage fill:#fef2f2,stroke:#ef4444,stroke-width:1px;
    
    %% Input Layer
    Trigger(Incoming Business Task <br/> e.g., New Invoice, Support Ticket) ::: incoming
    
    %% Immediate Processing Layer
    Trigger --> WM[Working Memory <br/> Immediate Context] ::: memory
    
    %% The Retrieval Core
    WM --> Router{Retrieval Engine} ::: engine
    
    %% Backing Memory sources
    Router -.->|Queries| EM[Episodic Memory <br/> Past Interactions] ::: memory
    Router -.->|Queries| SG[Semantic Graph <br/> Entities & Relationships] ::: memory
    
    %% How it weights data
    EM --> Weighting[Rank Context] ::: process
    SG --> Weighting
    
    %% Ranking Metrics
    Weighting --> Metric1(Semantic Similarity)
    Weighting --> Metric2(Direct Graph Link)
    Weighting --> Metric3(Temporal Decay Penalty)
    
    Metric1 --> AI[Decision Synthesis Core] ::: decision
    Metric2 --> AI
    Metric3 --> AI
    WM --> AI
    