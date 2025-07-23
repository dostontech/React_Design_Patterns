import './App.css';
import { useState } from 'react';
import { TransactionContainer } from './components/ContainerPresentation/TransactionContainer';
import DashboardSummaryBox from './components/HooksComposition/DashboardSummaryBox';

function App() {
  const [selectedPage, setSelectedPage] = useState('transactions');

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white text-black p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Simple Bank</h2>
        <nav className="space-y-2 text-amber-50">
          <button
            onClick={() => setSelectedPage('dashboard')}
            className="block w-full text-left px-4 py-2 rounded"
          >
            Dashboard
          </button>
          <button
            onClick={() => setSelectedPage('transactions')}
            className="block w-full text-left px-4 py-2 rounded"
          >
            Container Presentation
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {selectedPage === 'dashboard' && <DashboardSummaryBox />}
        {selectedPage === 'transactions' && <TransactionContainer />}
      </main>
    </div>
  );
}

export default App;
