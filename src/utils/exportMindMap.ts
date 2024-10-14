import { Node, Edge } from 'react-flow-renderer';

export const exportToJSON = (nodes: Node[], edges: Edge[]) => {
  const data = { nodes, edges };
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mindmap.json';
  link.click();
  URL.revokeObjectURL(url);
};

export const exportToMM = (nodes: Node[], edges: Edge[]) => {
  // Implement MM format export logic here
  // This is a placeholder and needs to be implemented based on the MM format specification
  const mmContent = `<map version="1.0.1">
    <!-- MM format content goes here -->
  </map>`;
  const blob = new Blob([mmContent], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mindmap.mm';
  link.click();
  URL.revokeObjectURL(url);
};