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
  Cpu,
  Loader2,
  CheckCircle2,
  SlidersHorizontal
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
const InvoiceScenario = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Active state
  const [vendor, setVendor] = useState('Supplier XYZ');
  const [amount, setAmount] = useState('2,50,000');
  const [invoiceId, setInvoiceId] = useState('INV-88301');
  const [poMatch, setPoMatch] = useState('100% Match');
  const [category, setCategory] = useState('Hardware Components');
  const [notes, setNotes] = useState('Standard monthly restock.');
  const [strictness, setStrictness] = useState('Normal');

  // Form state
  const [formVendor, setFormVendor] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formPoMatch, setFormPoMatch] = useState('100% Match');
  const [formCategory, setFormCategory] = useState('Hardware Components');
  const [formNotes, setFormNotes] = useState('');
  const [formStrictness, setFormStrictness] = useState('Normal');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (formVendor && formAmount) {
      setIsCreating(false);
      setIsAnalyzing(true);

      // Simulate AI processing delay
      setTimeout(() => {
        setVendor(formVendor);
        setAmount(formAmount);
        setPoMatch(formPoMatch);
        setCategory(formCategory);
        setNotes(formNotes);
        setStrictness(formStrictness);
        setInvoiceId(`INV-${Math.floor(Math.random() * 90000) + 10000}`);

        // Form states can be kept or cleared
        setFormVendor('');
        setFormAmount('');
        setFormNotes('');
        setIsAnalyzing(false);
      }, 2500);
    }
  };
    </div>

    <div className="grid-2">
      <div className="card">
        <h3 className="section-label">
          <Inbox size={16} /> Immediate Context (Working Memory)
        </h3>
        <div className="data-group">
          <div className="data-row">
            <span className="data-label">Vendor</span>
            <span className="data-value">Supplier XYZ</span>
          </div>
          <div className="data-row">
            <span className="data-label">Amount</span>
            <span className="data-value font-mono">₹2,50,000</span>
          </div>
          <div className="data-row">
            <span className="data-label">Status</span>
            <span className="data-value" style={{ color: 'var(--status-target)' }}>Pending Release</span>
          </div>
          <div className="data-row">
            <span className="data-label">PO Match</span>
            <span className="data-value">100% Match</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="section-label">
          <History size={16} /> Retrieved Past Memories
        </h3>
        <div className="memory-list">
          <div className="memory-item danger">
            <div className="memory-header">
              <span className="memory-title">Quality Issue</span>
              <span className="memory-time">4 Months Ago</span>
            </div>
            <div className="memory-body">
              This supplier sent 30% broken items. It cost us ₹50,000 to replace and delayed production by 2 weeks.
            </div>
          </div>
          <div className="memory-item warning">
            <div className="memory-header">
              <span className="memory-title">Payment Friction</span>
              <span className="memory-time">8 Months Ago</span>
            </div>
            <div className="memory-body">
              Vendor claimed they didn't get payment for invoice #INV-4412 even though we sent it.
            </div>
          </div>
        </div>
      </div>

      <div className="decision-box danger-theme grid-full">
        <h3 className="section-label" style={{ color: 'inherit', opacity: 0.8 }}>
          <Cpu size={16} /> AI Agent Decision
        </h3>
        <div className="decision-action">
          <ShieldAlert size={28} /> Hold Payment & Flag for QA
        </div>
        <div className="decision-reason">
          Even though the PO matches up perfectly right now, the system remembers that this supplier caused a major financial hit just 4 months ago due to bad quality. So, the agent halts the normal payment process and forces a manual QA check first.
        </div>
        <div className="tags">
          <span className="tag danger">Risk Index: High</span>
          <span className="tag warning">Time Decay: Minimal</span>
          <span className="tag dark">Pattern: Quality Issues</span>
        </div>
      </div>
    </div>
  </div>
);

// Scenario 2
const SupportScenario = () => (
  <div className="animate-fade-in">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
      <div>
        <h1 className="page-title">Support Ticket Escalation</h1>
        <p className="page-description" style={{ marginBottom: 0 }}>
          TechCorp Inc. just reported a 503 API error. Priority is currently Tier 2.
        </p>
      </div>
      <div className="status-badge active">Live Demo</div>
    </div>

    <div className="grid-2">
      <div className="card">
        <h3 className="section-label">
          <Inbox size={16} /> Current Context (Working Memory)
        </h3>
        <div className="data-group">
          <div className="data-row">
            <span className="data-label">Customer</span>
            <span className="data-value">TechCorp Inc. (Enterprise)</span>
          </div>
          <div className="data-row">
            <span className="data-label">Issue</span>
            <span className="data-value">API 503 Outage</span>
          </div>
          <div className="data-row">
            <span className="data-label">Time Remaining (SLA)</span>
            <span className="data-value">4.0 Hours</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="section-label">
          <Network size={16} /> Customer History (CRM)
        </h3>
        <div className="memory-list">
          <div className="memory-item warning">
            <div className="memory-header">
              <span className="memory-title">Contract Renewal</span>
              <span className="memory-time">2 Months Ago</span>
            </div>
            <div className="memory-body">
              Renewed for ₹50L, but they were seriously looking at our competitors during the talks.
            </div>
          </div>
          <div className="memory-item danger">
            <div className="memory-header">
              <span className="memory-title">Past Outage</span>
              <span className="memory-time">6 Months Ago</span>
            </div>
            <div className="memory-body">
              They had the exact same 503 error before. It took us 48 hours to fix and they were extremely frustrated.
            </div>
          </div>
          <div className="memory-item info">
            <div className="memory-header">
              <span className="memory-title">Communication Preference</span>
              <span className="memory-time">Always</span>
            </div>
            <div className="memory-body">
              Their CTO hates summary emails. Always wants detailed, technical root-cause analysis straight away.
            </div>
          </div>
        </div>
      </div>

      <div className="decision-box grid-full">
        <h3 className="section-label" style={{ color: 'inherit', opacity: 0.8 }}>
          <Cpu size={16} /> AI Agent Decision
        </h3>
        <div className="decision-action">
          <AlertTriangle size={28} /> Escalate to Tier 3 & Send Tech Details
        </div>
        <div className="decision-reason text-muted">
          We technically have 4 hours to fix this according to our SLA, but the CRM history shows they almost left us 2 months ago and hated this exact bug 6 months ago. So, the agent bypasses standard support, sends it straight to Tier 3 Engineering, and drafts a highly technical response tailored specifically for the CTO's preferences.
        </div>
        <div className="tags">
          <span className="tag success" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Risk: Churn</span>
          <span className="tag" style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)' }}>Action: Ignore SLA, Escalate</span>
          <span className="tag" style={{ background: 'var(--status-target-bg)', color: 'var(--status-target)' }}>Tone: Highly Technical</span>
        </div>
      </div>
    </div>
  </div>
);

export default App;
