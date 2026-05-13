/**
 * Architecture Graph Data Layer
 * Nodes and edges for project infrastructure visualization.
 * 
 * Types: 'arch_input' | 'arch_process' | 'arch_storage' | 'arch_output'
 */

export const architectureGraphs = {
  "excode-discord-management-system": {
    nodes: [
      { id: '1', type: 'arch_input', data: { label: 'Discord Gateway' }, position: { x: 250, y: 0 } },
      { id: '2', type: 'arch_process', data: { label: 'Async Event Router' }, position: { x: 250, y: 100 } },
      { id: '3', type: 'arch_process', data: { label: 'Threat Detection' }, position: { x: 100, y: 200 } },
      { id: '4', type: 'arch_process', data: { label: 'Moderation Pipeline' }, position: { x: 400, y: 200 } },
      { id: '5', type: 'arch_storage', data: { label: 'SQLite Logging' }, position: { x: 250, y: 300 } },
      { id: '6', type: 'arch_output', data: { label: 'Telemetry Dashboard' }, position: { x: 250, y: 400 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-5', source: '3', target: '5' },
      { id: 'e4-5', source: '4', target: '5' },
      { id: 'e5-6', source: '5', target: '6', animated: true },
    ]
  },

  "shop-management": {
    nodes: [
      { id: '1', type: 'arch_input', data: { label: 'POS Terminal' }, position: { x: 250, y: 0 } },
      { id: '2', type: 'arch_process', data: { label: 'Inventory Engine' }, position: { x: 250, y: 100 } },
      { id: '3', type: 'arch_process', data: { label: 'Analytics System' }, position: { x: 100, y: 200 } },
      { id: '4', type: 'arch_process', data: { label: 'AI Forecasting' }, position: { x: 400, y: 200 } },
      { id: '5', type: 'arch_storage', data: { label: 'Ledger Tracking' }, position: { x: 250, y: 300 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-5', source: '3', target: '5' },
      { id: 'e4-5', source: '4', target: '5' },
    ]
  },

  "miz-fps-optimizer": {
    nodes: [
      { id: '1', type: 'arch_input', data: { label: 'Client Auth' }, position: { x: 250, y: 0 } },
      { id: '2', type: 'arch_process', data: { label: 'HWID Validation' }, position: { x: 250, y: 100 } },
      { id: '3', type: 'arch_process', data: { label: 'License Engine' }, position: { x: 250, y: 200 } },
      { id: '4', type: 'arch_process', data: { label: 'Injection Core' }, position: { x: 100, y: 300 } },
      { id: '5', type: 'arch_output', data: { label: 'Performance Gain' }, position: { x: 250, y: 400 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5', animated: true },
    ]
  }
};
