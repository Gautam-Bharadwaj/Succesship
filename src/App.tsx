import { useState, useEffect } from 'react';
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
  SlidersHorizontal,
  Moon,
  Sun,
  Briefcase,
  LineChart,
  Terminal,
  Clock
} from 'lucide-react';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('arch');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

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
            className={`tab-button ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <div className="icon"><LineChart size={16} /></div>
            AI ROI Metrics
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
          <button
            className={`tab-button ${activeTab === 'hr' ? 'active' : ''}`}
            onClick={() => setActiveTab('hr')}
          >
            <div className="icon"><Briefcase size={16} /></div>
            Scenario: Hiring
          </button>

          <div style={{ width: '1px', height: '20px', background: 'var(--border)', margin: '0 8px' }} />

          <button className="tab-button" onClick={() => setIsDark(!isDark)}>
            <div className="icon">{isDark ? <Sun size={18} /> : <Moon size={18} />}</div>
          </button>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'arch' && <ArchitectureView isDark={isDark} />}
        {activeTab === 'analytics' && <AnalyticsDashboard />}
        {activeTab === 'invoice' && <InvoiceScenario isDark={isDark} />}
        {activeTab === 'support' && <SupportScenario isDark={isDark} />}
        {activeTab === 'hr' && <HRScenario isDark={isDark} />}
      </main>
    </div>
  );
};

// Overview of how the system works
const ArchitectureView = ({ isDark }: { isDark: boolean }) => {
  const [timeForward, setTimeForward] = useState(0);

  return (
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 className="section-label">
              <Clock size={16} /> "Time Machine" Decay Simulator
            </h3>
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>T + {timeForward} Months</span>
          </div>
          <p className="arch-desc" style={{ marginBottom: '16px' }}>
            Slide to see how an event's influence decays over time algebraically. 
            Formula: <code>Weight = e^(-λt)</code>
          </p>

          <input 
            type="range" 
            min="0" max="24" 
            value={timeForward} 
            onChange={(e) => setTimeForward(parseInt(e.target.value))} 
            style={{ marginBottom: '24px' }}
          />

          <div className="data-group">
            <div className={`memory-item ${timeForward < 3 ? 'danger' : (timeForward < 9 ? 'warning' : '')}`} style={{ opacity: Math.max(0.3, 1 - (timeForward * 0.05)) }}>
              <div className="memory-header">
                <span className="memory-title">Major System Outage</span>
                <span className="memory-time">{timeForward === 0 ? 'Just Now' : `${timeForward} Months Ago`}</span>
              </div>
              <div className="memory-body">
                {timeForward < 3 ? "URGENT FLAG: Client is extremely frustrated. All SLAs are currently active and being heavily monitored." : 
                 timeForward < 9 ? "Noted pattern of instability recently. Monitor closely during renewals." : 
                 "Archived event. Client stabilized long ago. Context is ignored by AI to save tokens."}
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-main)' }}>
                Computed Context Weight: {(Math.exp(-0.15 * timeForward) * 100).toFixed(1)}%
              </div>
            </div>
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
};

const AnalyticsDashboard = () => (
  <div className="animate-fade-in">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
      <div>
        <h1 className="page-title">AI Business Impact</h1>
        <p className="page-description" style={{ marginBottom: 0 }}>
          Real-time metrics demonstrating the ROI of ContextMind AI over the last 30 days.
        </p>
      </div>
    </div>

    <div className="grid-3" style={{ marginBottom: '32px' }}>
      <div className="card" style={{ padding: '24px' }}>
        <h3 className="section-label" style={{ marginBottom: '8px' }}>Events Processed</h3>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-target)' }}>4,521</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+12% from last month</div>
      </div>
      <div className="card" style={{ padding: '24px' }}>
        <h3 className="section-label" style={{ marginBottom: '8px' }}>Risk Prevented (Est.)</h3>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-danger)' }}>₹25.4M</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>18 Critical Escalations Caught</div>
      </div>
      <div className="card" style={{ padding: '24px' }}>
        <h3 className="section-label" style={{ marginBottom: '8px' }}>Human Hours Saved</h3>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-success)' }}>340+</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Auto-approvals & Routing</div>
      </div>
    </div>

    <div className="card grid-full">
      <h3 className="section-label">
        <Activity size={16} /> Recent Autonomous Actions
      </h3>
      <div className="data-group">
        <div className="data-row">
          <span className="data-label">Support Pipeline</span>
          <span className="data-value">Escalated "WidgetCorp" to Tier 3 (Churn Risk 80%)</span>
          <span className="status-badge" style={{ background: 'var(--status-danger-bg)', color: 'var(--status-danger)' }}>Intervened</span>
        </div>
        <div className="data-row">
          <span className="data-label">Invoice Processing</span>
          <span className="data-value">Auto-approved ₹45,000 for AWS Hosting</span>
          <span className="status-badge" style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)' }}>Auto-Approved</span>
        </div>
        <div className="data-row">
          <span className="data-label">HR Screening</span>
          <span className="data-value">Flagged candidate ID #0942 (Flight-Risk pattern match)</span>
          <span className="status-badge" style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)' }}>Flagged</span>
        </div>
        <div className="data-row">
          <span className="data-label">Invoice Processing</span>
          <span className="data-value">Halted random ₹1M invoice from unseen vendor</span>
          <span className="status-badge" style={{ background: 'var(--status-danger-bg)', color: 'var(--status-danger)' }}>Blocked</span>
        </div>
      </div>
    </div>
  </div>
);

// Scenario 1
const InvoiceScenario = ({ isDark }: { isDark: boolean }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  // Active state
  const [vendor, setVendor] = useState('Supplier XYZ');
  const [amount, setAmount] = useState('2,50,000');
  const [invoiceId, setInvoiceId] = useState('INV-88301');
  const [poMatch, setPoMatch] = useState('100% Match');
  const [category, setCategory] = useState('Hardware Components');
  const [notes, setNotes] = useState('Standard monthly restock.');
  const [strictness, setStrictness] = useState('Normal');

  // Form state
  // ... omitted standard useState setup logic for brevity
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
      setShowDebug(false);

      setTimeout(() => {
        setVendor(formVendor);
        setAmount(formAmount);
        setPoMatch(formPoMatch);
        setCategory(formCategory);
        setNotes(formNotes);
        setStrictness(formStrictness);
        setInvoiceId(`INV-${Math.floor(Math.random() * 90000) + 10000}`);
        
        setFormVendor('');
        setFormAmount('');
        setFormNotes('');
        setIsAnalyzing(false);
      }, 2500);
    }
  };

  const handleOpenNew = () => {
    setFormVendor(vendor);
    setFormAmount(amount);
    setFormPoMatch(poMatch);
    setFormCategory(category);
    setFormNotes(notes);
    setFormStrictness(strictness);
    setIsCreating(true);
    setShowDebug(false);
  }

  // AI Evaluation Logic
  let riskScore = 0;
  const riskReasons: { text: string, type: 'danger' | 'warning' | 'info' }[] = [];

  const vendorLower = vendor.toLowerCase();
  if (vendorLower.includes('xyz')) {
    riskScore += 40;
    riskReasons.push({ text: "Historical quality issues with supplier (-40)", type: 'danger' });
  } else if (vendorLower.includes('scam') || vendorLower.includes('fake')) {
    riskScore += 80;
    riskReasons.push({ text: "Vendor flagged in internal blacklist (-80)", type: 'danger' });
  } else {
    riskReasons.push({ text: "Vendor has good standing", type: 'info' });
  }

  const amountNum = parseInt(amount.replace(/[^0-9]/g, ''));
  if (amountNum > 200000) {
    riskScore += 20;
    riskReasons.push({ text: "High-value transaction above ₹2,00,000 threshold (+20)", type: 'warning' });
  }

  if (poMatch === 'Partial Match') {
    riskScore += 30;
    riskReasons.push({ text: "Purchase Order only partially matches (+30)", type: 'warning' });
  } else if (poMatch === 'No PO') {
    riskScore += 50;
    riskReasons.push({ text: "No Purchase Order associated (+50)", type: 'danger' });
  } else {
    riskReasons.push({ text: "100% PO Match verified", type: 'info' });
  }

  if (category === 'Hardware Components') {
    riskScore += 10;
  } else if (category === 'Software Subscriptions') {
    riskScore -= 10;
  }

  const notesLower = notes.toLowerCase();
  if (notesLower.includes('urgent') || notesLower.includes('asap') || notesLower.includes('threat')) {
    riskScore += 30;
    riskReasons.push({ text: "Anomalous urgency or threatening language detected (+30)", type: 'danger' });
  }

  let threshold = 50;
  if (strictness === 'Strict') threshold = 30;
  if (strictness === 'Relaxed') threshold = 70;

  const isHighRisk = riskScore >= threshold;

  const debugJSON = {
    sys_req_id: `r-${Math.floor(Math.random() * 999999)}`,
    agent_framework: "ContextMind Invoice Proc V2.1",
    variables: { vendor, amount, category, strictness },
    computed_risk: riskScore,
    threshold: threshold,
    memory_hits: riskReasons.length,
    vector_search_latency: "42ms",
    final_directive: isHighRisk ? "HALT_MANUAL_QA" : "AUTO_APPROVE"
  }

  if (isAnalyzing) {
    return (
      <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '24px' }}>
        <Loader2 size={48} className="spin-animation" color="var(--status-target)" />
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '8px' }}>ContextMind AI is analyzing...</h2>
          <div className="processing-steps">
            <span className="step-1">Fetching Vendor History...</span>
            <span className="step-2">Calculating Semantic Risk...</span>
            <span className="step-3">Generating Decision...</span>
          </div>
        </div>
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <h1 className="page-title">Generate Context</h1>
            <p className="page-description" style={{ marginBottom: 0 }}>
              Build a custom scenario to see how the AI evaluates it.
            </p>
          </div>
          <button className="tab-button" onClick={() => setIsCreating(false)}>
            Cancel
          </button>
        </div>

        <div className="card" style={{ maxWidth: '800px', padding: '40px', margin: '0 auto' }}>
          <form onSubmit={handleSend} className="data-group">
            <div className="grid-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Vendor Name *</label>
                <input
                  autoFocus
                  className="custom-input"
                  placeholder="e.g. Acme Corp"
                  value={formVendor}
                  onChange={e => setFormVendor(e.target.value)}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Amount (₹) *</label>
                <input
                  className="custom-input"
                  placeholder="e.g. 5,00,000"
                  value={formAmount}
                  onChange={e => setFormAmount(e.target.value.replace(/[^0-9,]/g, ''))}
                  required
                />
              </div>
            </div>

            <div className="grid-2" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">PO Match Status</label>
                <select className="custom-input" value={formPoMatch} onChange={e => setFormPoMatch(e.target.value)}>
                  <option>100% Match</option>
                  <option>Partial Match</option>
                  <option>No PO</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Category</label>
                <select className="custom-input" value={formCategory} onChange={e => setFormCategory(e.target.value)}>
                  <option>Hardware Components</option>
                  <option>Software Subscriptions</option>
                  <option>Consulting Services</option>
                  <option>Office Supplies</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
              <label className="data-label">Context / Notes</label>
              <textarea
                className="custom-input"
                style={{ minHeight: '80px', resize: 'vertical' }}
                placeholder="e.g. Urgent payment, vendor threatening to stop delivery"
                value={formNotes}
                onChange={e => setFormNotes(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
              <label className="data-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={16} /> AI Strictness Level
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['Relaxed', 'Normal', 'Strict'].map(level => (
                  <button
                    key={level}
                    type="button"
                    className={`tab-button ${formStrictness === level ? 'active' : ''}`}
                    onClick={() => setFormStrictness(level)}
                    style={{ flex: 1, justifyContent: 'center', border: '1px solid var(--border)' }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="primary-button" style={{ marginTop: '32px' }}>
              <Zap size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
              Send to ContextMind AI
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h1 className="page-title">Invoice Processing</h1>
          <p className="page-description" style={{ marginBottom: 0 }}>
            Assessing {vendor}'s new invoice (#{invoiceId}) for ₹{amount}.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div className="status-badge active" style={{ display: 'flex', gap: '6px' }}>
            <SlidersHorizontal size={12} /> {strictness} Mode
          </div>
          <button className="primary-button-sm" onClick={handleOpenNew}>+ New Invoice</button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 className="section-label">
            <Inbox size={16} /> Immediate Context (Working Memory)
          </h3>
          <div className="data-group">
            <div className="data-row">
              <span className="data-label">Vendor</span>
              <span className="data-value">{vendor}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Amount</span>
              <span className="data-value font-mono">₹{amount}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Category</span>
              <span className="data-value">{category}</span>
            </div>
            <div className="data-row">
              <span className="data-label">PO Match</span>
              <span className="data-value" style={{
                color: poMatch === '100% Match' ? 'var(--status-success)' : (poMatch === 'Partial Match' ? 'var(--status-warning)' : 'var(--status-danger)')
              }}>{poMatch}</span>
            </div>
            {notes && (
              <div className="data-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                <span className="data-label">Attached Notes</span>
                <span className="data-value" style={{ fontSize: '0.9rem', fontStyle: 'italic', fontWeight: 400 }}>"{notes}"</span>
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <h3 className="section-label">
            <History size={16} /> Memory Engine Extraction
          </h3>
          <div className="memory-list">
            {riskReasons.map((reason, idx) => (
              <div key={idx} className={`memory-item ${reason.type}`}>
                <div className="memory-header">
                  <span className="memory-title">
                    {reason.type === 'danger' ? 'Critical Context' : (reason.type === 'warning' ? 'Notable Context' : 'Positive Context')}
                  </span>
                </div>
                <div className="memory-body">
                  {reason.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-full">
          {isHighRisk ? (
            <div className="decision-box danger-theme">
              <h3 className="section-label" style={{ color: 'inherit', opacity: 0.8 }}>
                <Cpu size={16} /> AI Agent Decision
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="decision-action">
                    <ShieldAlert size={28} /> Action Blocked: Flagged for QA
                  </div>
                  <div className="decision-reason">
                    Based on the combined memory graph and working context, the risk score ({riskScore}) exceeds the threshold ({threshold} in {strictness} setting). The agent has halted normal processing.
                  </div>
                  <div className="tags">
                    <span className="tag danger">Risk Score: {riskScore} / 100</span>
                    <span className="tag warning">Threshold: {threshold}</span>
                    <span className="tag dark">Pattern Match: High</span>
                  </div>
                </div>
                <button className="secondary-button" onClick={() => setShowDebug(!showDebug)}>
                   <Terminal size={14} /> See Trace Log
                </button>
              </div>
            </div>
          ) : (
            <div className="decision-box" style={{ background: 'var(--status-success-bg)', color: '#047857', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 className="section-label" style={{ color: 'inherit', opacity: 0.8 }}>
                <Cpu size={16} /> AI Agent Decision
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                 <div>
                    <div className="decision-action" style={{ color: '#047857' }}>
                      <CheckCircle2 size={28} /> Auto-Approve Payment
                    </div>
                    <div className="decision-reason">
                      Context synthesis shows a risk score of {riskScore}, below the {threshold} threshold for {strictness} mode. The AI safely approves the payment.
                    </div>
                    <div className="tags">
                      <span className="tag success" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#047857' }}>Risk Score: {riskScore} / 100</span>
                      <span className="tag success" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#047857' }}>Auto-Processed</span>
                    </div>
                 </div>
                 <button className="secondary-button" onClick={() => setShowDebug(!showDebug)}>
                   <Terminal size={14} /> See Trace Log
                </button>
              </div>
            </div>
          )}

          {showDebug && (
            <div className="json-terminal animate-fade-in" data-theme={isDark ? 'dark' : 'light'}>
               <div className="terminal-header"><Terminal size={14}/> SYSTEM TRACE LOG</div>
               <pre>{JSON.stringify(debugJSON, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Scenario 2
const SupportScenario = ({ isDark }: { isDark: boolean }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  // Active state
  const [customer, setCustomer] = useState('TechCorp Inc.');
  const [tier, setTier] = useState('Enterprise');
  const [issue, setIssue] = useState('API 503 Outage');
  const [priority, setPriority] = useState('Tier 2 (SLA: 4.0 Hours)');
  const [strictness, setStrictness] = useState('Normal');

  // Form state
  const [formCustomer, setFormCustomer] = useState('');
  const [formTier, setFormTier] = useState('Enterprise');
  const [formIssue, setFormIssue] = useState('');
  const [formPriority, setFormPriority] = useState('Tier 2 (SLA: 4.0 Hours)');
  const [formStrictness, setFormStrictness] = useState('Normal');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (formCustomer && formIssue) {
      setIsCreating(false);
      setIsAnalyzing(true);
      setShowDebug(false);

      setTimeout(() => {
        setCustomer(formCustomer);
        setTier(formTier);
        setIssue(formIssue);
        setPriority(formPriority);
        setStrictness(formStrictness);

        setFormCustomer('');
        setFormIssue('');
        setIsAnalyzing(false);
      }, 2500);
    }
  };

  const handleOpenNew = () => {
    setFormCustomer(customer);
    setFormTier(tier);
    setFormIssue(issue);
    setFormPriority(priority);
    setFormStrictness(strictness);
    setIsCreating(true);
    setShowDebug(false);
  }

  // AI Evaluation Logic for Support Context
  let riskScore = 0;
  const memoryContexts: { title: string, time: string, desc: string, type: 'danger' | 'warning' | 'info' | 'success'}[] = [];

  const customerLower = customer.toLowerCase();
  
  if (customerLower.includes('techcorp')) {
    riskScore += 50;
    memoryContexts.push({
      title: "Past Outage",
      time: "6 Months Ago",
      desc: "They had the exact same 503 error before. It took us 48 hours to fix and they were extremely frustrated.",
      type: "danger"
    });
    memoryContexts.push({
      title: "Contract Renewal",
      time: "2 Months Ago",
      desc: "Renewed for ₹50L, but they were seriously looking at our competitors during the talks.",
      type: "warning"
    });
  } else if (customerLower.includes('startup')) {
    riskScore += 10;
    memoryContexts.push({
      title: "Onboarding completed",
      time: "1 Month Ago",
      desc: "Customer just finished onboarding. They are currently testing non-critical endpoints.",
      type: "info"
    });
  } else if (customerLower.includes('cancel')) {
    riskScore += 80;
    memoryContexts.push({
      title: "Cancellation Risk",
      time: "1 Week Ago",
      desc: "Account manager noted they are doing an active trial with competitor XYZ.",
      type: "danger"
    });
  } else {
    memoryContexts.push({
      title: "General Interaction",
      time: "Historical",
      desc: "Standard monthly interactions. Customer health score is stable at 90/100.",
      type: "success"
    });
  }

  if (tier === 'Enterprise') {
    riskScore += 20;
    if (!customerLower.includes('techcorp')) {
       memoryContexts.push({ title: "VIP Status", time: "Permanent", desc: "Enterprise SLA agreements mandate strict adherence.", type: "warning" });
    }
  } else if (tier === 'Free Tier') {
    riskScore -= 20;
  }

  const issueLower = issue.toLowerCase();
  if (issueLower.includes('outage') || issueLower.includes('down') || issueLower.includes('500')) {
    riskScore += 30;
  } else if (issueLower.includes('billing') || issueLower.includes('refund')) {
    riskScore += 15;
  }

  let escalateThreshold = 60;
  if (strictness === 'Strict') escalateThreshold = 40;
  if (strictness === 'Relaxed') escalateThreshold = 80;

  const isEscalationNeeded = riskScore >= escalateThreshold;

  const debugJSON = {
    sys_req_id: `r-${Math.floor(Math.random() * 999999)}`,
    agent_framework: "ContextMind Support Router V2.1",
    variables: { customer, tier, issue, priority, strictness },
    computed_risk: riskScore,
    escalation_threshold: escalateThreshold,
    crm_db_hits: memoryContexts.length,
    vector_search_latency: "38ms",
    final_directive: isEscalationNeeded ? "BYPASS_QUEUE_SEND_TIER_3" : "HANDLE_IN_NORMAL_QUEUE"
  }

  if (isAnalyzing) {
    return (
      <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '24px' }}>
        <Loader2 size={48} className="spin-animation" color="var(--status-target)" />
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '8px' }}>ContextMind AI is analyzing...</h2>
          <div className="processing-steps">
            <span className="step-1">Scanning CRM for Client History...</span>
            <span className="step-2">Evaluating Churn Probability...</span>
            <span className="step-3">Structuring Response Logic...</span>
          </div>
        </div>
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <h1 className="page-title">Generate Support Context</h1>
            <p className="page-description" style={{ marginBottom: 0 }}>
              Build a custom support scenario to see how AI handles routing and escalation.
            </p>
          </div>
          <button className="tab-button" onClick={() => setIsCreating(false)}>
            Cancel
          </button>
        </div>

        <div className="card" style={{ maxWidth: '800px', padding: '40px', margin: '0 auto' }}>
          <form onSubmit={handleSend} className="data-group">
            <div className="grid-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Customer / Company Name *</label>
                <input 
                  autoFocus className="custom-input" placeholder="e.g. Acme Corp, Startup XYZ..."
                  value={formCustomer} onChange={e => setFormCustomer(e.target.value)} required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Customer Tier</label>
                <select className="custom-input" value={formTier} onChange={e => setFormTier(e.target.value)}>
                  <option>Enterprise</option><option>Pro Plan</option><option>Free Tier</option>
                </select>
              </div>
            </div>

            <div className="grid-2" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Issue Summary *</label>
                <input className="custom-input" placeholder="e.g. API 500 Error, Password Reset..."
                  value={formIssue} onChange={e => setFormIssue(e.target.value)} required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="data-label">Current Queue Priority</label>
                <select className="custom-input" value={formPriority} onChange={e => setFormPriority(e.target.value)}>
                  <option>Tier 1 (SLA: 24.0 Hours)</option>
                  <option>Tier 2 (SLA: 4.0 Hours)</option>
                  <option>Tier 3 (SLA: 1.0 Hour)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
              <label className="data-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={16} /> AI Panic Level (Escalation Strictness)
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['Relaxed', 'Normal', 'Strict'].map(level => (
                  <button
                    key={level}
                    type="button"
                    className={`tab-button ${formStrictness === level ? 'active' : ''}`}
                    onClick={() => setFormStrictness(level)}
                    style={{ flex: 1, justifyContent: 'center', border: '1px solid var(--border)' }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="primary-button" style={{ marginTop: '32px' }}>
              <Zap size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
              Simulate Ticket Handling
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h1 className="page-title">Support Ticket Analysis</h1>
          <p className="page-description" style={{ marginBottom: 0 }}>
            {customer} ({tier}) reported: {issue}.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div className="status-badge active" style={{ display: 'flex', gap: '6px' }}>
            <SlidersHorizontal size={12} /> {strictness} Mode
          </div>
          <button className="primary-button-sm" onClick={handleOpenNew}>+ New Ticket</button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 className="section-label">
            <Inbox size={16} /> Current Context (Working Memory)
          </h3>
          <div className="data-group">
            <div className="data-row">
              <span className="data-label">Customer</span>
              <span className="data-value">{customer} ({tier})</span>
            </div>
            <div className="data-row">
              <span className="data-label">Issue</span>
              <span className="data-value">{issue}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Ticket Queue</span>
              <span className="data-value">{priority}</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="section-label">
            <Network size={16} /> Agent CRM Retrieval
          </h3>
          <div className="memory-list">
            {memoryContexts.map((mem, idx) => (
              <div key={idx} className={`memory-item ${mem.type}`}>
                <div className="memory-header">
                  <span className="memory-title">{mem.title}</span>
                  <span className="memory-time">{mem.time}</span>
                </div>
                <div className="memory-body">
                  {mem.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {isEscalationNeeded ? (
          <div className="decision-box danger-theme grid-full">
            <h3 className="section-label" style={{ color: 'inherit', opacity: 0.8 }}>
              <Cpu size={16} /> AI Agent Decision
            </h3>
            <div className="decision-action">
              <AlertTriangle size={28} /> Emergency: Bypass Queue, Escalate to Tier 3
            </div>
            <div className="decision-reason">
              Despite standard SLAs, the combination of customer tier and negative historical metadata generated a risk score of {riskScore} (Threshold: {escalateThreshold}). The agent bypasses the standard {priority.split(' ')[0]} queue and alerts engineering directly to prevent churn.
            </div>
            <div className="tags">
              <span className="tag danger">Risk Index: {riskScore}</span>
              <span className="tag warning">Action: Ignored Standard SLA</span>
              <span className="tag dark">Focus: Churn Prevention</span>
            </div>
          </div>
        ) : (
          <div className="decision-box grid-full" style={{ background: 'var(--status-target-bg)', color: '#1e3a8a', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <h3 className="section-label" style={{ color: 'inherit', opacity: 0.8 }}>
              <Cpu size={16} /> AI Agent Decision
            </h3>
            <div className="decision-action" style={{ color: '#1d4ed8' }}>
              <CheckCircle2 size={28} /> Handle Normally in Queue
            </div>
            <div className="decision-reason" style={{ color: '#1e40af' }}>
              The client's CRM history is stable and the issue does not trigger extreme severity thresholds (Risk Score {riskScore} is below {escalateThreshold}). The ticket will remain in the standard {priority.split(' ')[0]} queue, and the agent begins drafting a standard acknowledgement email.
            </div>
            <div className="tags">
              <span className="tag info">Risk Index: {riskScore}</span>
              <span className="tag info">Action: Follow SLA</span>
              <span className="tag info">Drafting: Standard Reply</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
