import React, { useMemo } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  ReactFlowProvider 
} from 'reactflow';
import 'reactflow/dist/style.css';
import './architecture.css';
import ArchitectureNode from './ArchitectureNode';
import { architectureGraphs } from '../../data/architectureGraphs';

const nodeTypes = {
  arch_input: ArchitectureNode,
  arch_process: ArchitectureNode,
  arch_storage: ArchitectureNode,
  arch_output: ArchitectureNode,
};

function Graph({ projectSlug }) {
  const graphData = architectureGraphs[projectSlug] || architectureGraphs["excode-discord-management-system"];
  
  const nodes = useMemo(() => graphData.nodes, [graphData]);
  const edges = useMemo(() => graphData.edges, [graphData]);

  return (
    <div style={{ height: '500px', width: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        preventScrolling={true}
      >
        <Background color="rgba(0, 229, 255, 0.05)" gap={20} size={1} />
      </ReactFlow>
      
      {/* Legend Overlay */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        padding: '12px',
        background: 'rgba(6, 14, 26, 0.8)',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 10
      }}>
        <LegendItem label="Input/Source" color="var(--color-primary)" />
        <LegendItem label="Process/Logic" color="var(--color-secondary)" />
        <LegendItem label="Storage/DB" color="var(--color-accent)" />
        <LegendItem label="Output/Action" color="#00aaff" />
      </div>
    </div>
  );
}

function LegendItem({ label, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: color }} />
      <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

export default function ArchitectureGraph(props) {
  return (
    <ReactFlowProvider>
      <Graph {...props} />
    </ReactFlowProvider>
  );
}
