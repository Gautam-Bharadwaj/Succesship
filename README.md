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
    Trigger("Incoming Business Task <br/> e.g., New Invoice, Support Ticket") ::: incoming
    
    %% Immediate Processing Layer
    Trigger --> WM["Working Memory <br/> Immediate Context"] ::: memory
    
    %% The Retrieval Core
    WM --> Router{"Retrieval Engine"} ::: engine
    
    %% Backing Memory sources
    Router -.->|Queries| EM["Episodic Memory <br/> Past Interactions"] ::: memory
    Router -.->|Queries| SG["Semantic Graph <br/> Entities & Relationships"] ::: memory
    
    %% How it weights data
    EM --> Weighting["Rank Context"] ::: process
    SG --> Weighting
    
    %% Ranking Metrics
    Weighting --> Metric1("Semantic Similarity")
    Weighting --> Metric2("Direct Graph Link")
    Weighting --> Metric3("Temporal Decay Penalty")
    
    Metric1 --> AI["Decision Synthesis Core"] ::: decision
    Metric2 --> AI
    Metric3 --> AI
    WM --> AI
    
    %% Output
    AI --> Action["Execute Action Override"] ::: decision
    AI --> Explain["Generate Reasoning Citation"] ::: decision
    
    %% Memory Lifecycle Sub-Flow
    subgraph Memory Lifecycle [Data Storage Pipeline]
    EM_Update("New Event Logged") --> Fresh[("Fresh Data: 0-30 Days <br/> Fast DB")] ::: storage
    Fresh --> Maturing[("Maturing: 30-180 Days <br/> Vector DB")] ::: storage
    Maturing --> Stale[("Archived: 180+ Days <br/> Cold Storage")] ::: storage
    end
    
    %% Adding connection from Lifecycle to overall system
    Fresh -.-> EM
    Maturing -.-> EM
```

## Core Architecture
When a human processes a business event, like an invoice approval, they evaluate the immediate context, which involves the surface-level details of the current transaction. They also consider historical context, recalling previous experiences with the parties involved, and relational context, assessing the wider impact or risk associated with the entity.

This dashboard visualizes how an AI system replicates this cognitive process. It categorizes data into Working Memory, Episodic Memory, and Semantic Graphs. It implements a Temporal Decay algorithm that ensures recent, highly impactful memories carry more weight than older, irrelevant ones. Furthermore, it runs two simulated scenarios involving Invoice Validation and Support Escalation to demonstrate how the agent intelligently overrides standard operational procedures based on retrieved historical context.

## Architectural Responses to Core Challenges

The following section outlines the system design decisions addressing the specific technical challenges posed in the assignment.

### 1. How would your system scale to thousands of suppliers and millions of transactions?
To prevent computational bottlenecks and infinite context accumulation, the system employs a Tiered Storage Architecture based on the memory's lifecycle state. Fresh Context from the last 30 days is stored in ultra-fast, in-memory databases for immediate synchronous retrieval during active operations. Maturing Context from 30 to 180 days is summarized and vectorized into high-performance Vector Databases. This data is queried asynchronously only when semantic triggers are matched. Stale Context older than 180 days is offloaded to cost-effective cold storage. Stale memory is only re-hydrated into the active graph if the system detects a recurring, systemic anomaly tied to that specific entity.

### 2. Should emotional context (customer frustration, urgency) be stored and retrieved?
Yes, emotional context is critical metadata. In human business interactions, a previous negative experience drastically shifts the handling of future issues. Our system quantifies this via Sentiment Vectors. As demonstrated in the support scenario of the prototype, recalling that a client was extremely frustrated during an identical outage six months prior transforms a standard support ticket into a critical churn risk. This sentiment data forces the agent to bypass standard SLAs, escalate immediately, and alter its communication tone to suit the situation.

### 3. How do you ensure data privacy when storing business-sensitive context?
Storing vast amounts of historical context introduces significant security risks. We handle this through two primary mechanisms. First, we use Pre-Storage Tokenization, meaning before any episodic memory is written to the Vector Database or Semantic Graph, exact financial figures and personal data are masked. Second, we use Scope-Based Retrieval. Memory retrieval is strictly governed using Role-Based Access Control. When an agent queries the database, its unique identity mask is appended to the request. This ensures that a Support Agent cannot retrieve confidential payroll history, and an HR Agent cannot access proprietary engineering logic, even if the semantic search matches.

### 4. Can your system explain why it retrieved specific context for a decision?
Yes, through explicit Retrieval Citations. A black box AI is unacceptable in enterprise environments. When our agent makes a decision, it outputs a complete Reasoning Trace. Every retrieved memory carries a unique identifier, a computed similarity score, and a temporal decay penalty. Therefore, if a human auditor inspects an agent's decision, the system provides the exact trace, explaining exactly which episode ID triggered the action and with what weight. This transparency is visualized via the tagging system in the prototype's decision panels.

### 5. How would you handle multi-agent scenarios where different agents need shared context?
Siloed agents lead to duplicated efforts and blind spots. We resolve this using an Event-Driven Memory architecture. The system maintains a localized Working Memory for individual agents directly handling a task, alongside a centralized Global Knowledge Graph representing absolute truths and shared vendor histories. When one agent logs a severe defect from a supplier, that specific memory event is broadcast via a message broker. Another agent, like the Procurement Agent, ingests this event and instantly adjusts its internal risk weights for that supplier, enabling real-time, cross-domain contextual awareness without manual synchronization.

## Running the Application Locally

First, ensure Node.js is installed on your machine.
Then, navigate to the project directory in your terminal.
Install the required dependencies using the node package manager.
Finally, start the development server and open the local host link provided in your terminal to interact with the prototype.
