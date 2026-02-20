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