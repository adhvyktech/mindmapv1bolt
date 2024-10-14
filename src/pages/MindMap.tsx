import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'react-flow-renderer';
import { useMindMap } from '../contexts/MindMapContext';
import { useParams } from 'react-router-dom';
import CustomNode from '../components/CustomNode';
import ControlPanel from '../components/ControlPanel';

const nodeTypes = {
  custom: CustomNode,
};

const MindMap: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getMindMap, updateMindMap } = useMindMap();
  const mindMap = getMindMap(id || '');

  const [nodes, setNodes, onNodesChange] = useNodesState(mindMap?.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mindMap?.edges || []);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleSave = () => {
    if (id) {
      updateMindMap(id, { nodes, edges });
    }
  };

  const handleExport = (format: 'json' | 'mm') => {
    // Implement export logic
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <ControlPanel onSave={handleSave} onExport={handleExport} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default MindMap;