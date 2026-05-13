import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const ArchitectureNode = ({ data, type }) => {
  const getLabelColor = () => {
    switch(type) {
      case 'arch_input': return 'var(--color-primary)';
      case 'arch_process': return 'var(--color-secondary)';
      case 'arch_storage': return 'var(--color-accent)';
      case 'arch_output': return '#00aaff';
      default: return '#fff';
    }
  };

  return (
    <div style={{
      padding: '12px 20px',
      borderRadius: '8px',
      background: 'rgba(6, 14, 26, 0.8)',
      border: `1px solid ${getLabelColor()}40`,
      boxShadow: `0 0 20px ${getLabelColor()}10`,
      backdropFilter: 'blur(10px)',
      minWidth: '150px',
      textAlign: 'center',
      position: 'relative',
    }}>
      <Handle type="target" position={Position.Top} style={{ background: getLabelColor(), width: '6px', height: '6px', border: 'none' }} />
      
      <div style={{
        fontSize: '0.6rem',
        fontFamily: 'var(--font-mono)',
        color: getLabelColor(),
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: '6px',
        opacity: 0.8
      }}>
        {type.replace('arch_', '')}
      </div>
      
      <div style={{
        fontSize: '0.85rem',
        fontWeight: 700,
        color: '#fff',
        fontFamily: 'var(--font-mono)'
      }}>
        {data.label}
      </div>

      <Handle type="source" position={Position.Bottom} style={{ background: getLabelColor(), width: '6px', height: '6px', border: 'none' }} />
    </div>
  );
};

export default memo(ArchitectureNode);
