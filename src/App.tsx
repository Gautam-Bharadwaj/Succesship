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