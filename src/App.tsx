import { useState } from 'react';
import {
  BrainCircuit,
  FileText,
  HeadphonesIcon,
  AlertTriangle,
  Database,
  Network,
  History,
  Zap,
  ShieldAlert,
  Activity,
  Inbox,
  Link2,
  Cpu
} from 'lucide-react';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('arch');

  return (
    <div className="app-layout">
      {/* Navbar segment */}
      <nav className="navbar">
        <div className="brand">
          <BrainCircuit size={24} color="var(--text-main)" />
          <span>ContextMind AI</span>
        </div>

        <div className="nav-tabs">
          <button
            className={`tab-button ${activeTab === 'arch' ? 'active' : ''}`}
            onClick={() => setActiveTab('arch')}
          >
            <div className="icon"><Network size={16} /></div>
            Architecture
          </button>
          <button
            className={`tab-button ${activeTab === 'invoice' ? 'active' : ''}`}
            onClick={() => setActiveTab('invoice')}
          >
            <div className="icon"><FileText size={16} /></div>
            Scenario: Invoice
          </button>
          <button
            className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
          >
            <div className="icon"><HeadphonesIcon size={16} /></div>
            Scenario: Support
          </button>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'arch' && <ArchitectureView />}
        {activeTab === 'invoice' && <InvoiceScenario />}
        {activeTab === 'support' && <SupportScenario />}
      </main>
    </div>
  );
};

// Overview of how the system works
const ArchitectureView = () => (
  <div className="animate-fade-in">
    <h1 className="page-title">How ContextMind Works.</h1>
    <p className="page-description">
      We built a system that replicates how human professionals think. It balances what's happening right now with past experiences, so the AI can make smart decisions without getting overloaded with irrelevant data.
    </p>

    <div className="grid-2">
      <div className="card grid-full">
        <h3 className="section-label">
          <Database size={16} /> Core Memory Types
        </h3>
        <div className="arch-grid">
          <div className="arch-node">
            <div className="arch-icon"><Inbox size={20} /></div>
            <div className="arch-title">Working Memory</div>
            <div className="arch-desc">What the agent is working on right now. (e.g. current invoice).</div>
          </div>
          <div className="arch-node">
            <div className="arch-icon"><History size={20} /></div>
            <div className="arch-title">Episodic Memory</div>
            <div className="arch-desc">Records of past interactions and events over time.</div>
          </div>
          <div className="arch-node">
            <div className="arch-icon"><Network size={20} /></div>
            <div className="arch-title">Semantic Graph</div>
            <div className="arch-desc">General facts and how different entities are connected.</div>
          </div>
          <div className="arch-node">
            <div className="arch-icon"><Zap size={20} /></div>
            <div className="arch-title">Retrieval Engine</div>
            <div className="arch-desc">Finds relevant past info based on time and context.</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="section-label">
          <Link2 size={16} /> How We Rank Context
        </h3>
        <div className="data-group" style={{ marginBottom: '24px' }}>
          <div className="data-row">
            <span className="data-label">1. Semantic Similarity</span>
            <span className="data-value">Vector Cosine &gt; 0.85</span>
          </div>
          <div className="data-row">
            <span className="data-label">2. Relationship Distance</span>
            <span className="data-value">Direct Link (1 Degree)</span>
          </div>
          <div className="data-row">
            <span className="data-label">3. Time Decay</span>
            <span className="data-value font-mono">Formula: e^(-λt)</span>
          </div>
        </div>
        <div className="arch-desc">
          Older info naturally loses importance over time. A major failure 4 months ago still matters heavily, but a minor delay from 4 years ago is ignored.
        </div>
      </div>

      <div className="card">
        <h3 className="section-label">
          <Activity size={16} /> Memory Lifecycle
        </h3>
        <div className="memory-list">
          <div className="memory-item info">
            <div className="memory-header">
              <span className="memory-title">Fresh</span>
              <span className="memory-time">0-30 Days</span>
            </div>
            <div className="memory-body">High priority. Loaded directly for the agent to consider.</div>
          </div>
          <div className="memory-item warning">
            <div className="memory-header">
              <span className="memory-title">Maturing</span>
              <span className="memory-time">30-180 Days</span>
            </div>
            <div className="memory-body">Summarized and only pulled in if related to the current task.</div>
          </div>
          <div className="memory-item danger">
            <div className="memory-header">
              <span className="memory-title">Stale / Archived</span>
              <span className="memory-time">180+ Days</span>
            </div>
            <div className="memory-body">Hidden away unless a systemic pattern keeps repeating.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Scenario 1
const InvoiceScenario = () => (
  <div className="animate-fade-in">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
      <div>
        <h1 className="page-title">Invoice Processing</h1>
        <p className="page-description" style={{ marginBottom: 0 }}>
          Assessing Supplier XYZ's new invoice (#INV-88301) for ₹2,50,000.
        </p>
      </div>
      <div className="status-badge active">Live Demo</div>
    </div>