import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const CustomNode = ({ data }: { data: any }) => {
  return (
    <div className={`p-2 rounded-md ${data.color || 'bg-white'} ${data.shape === 'circle' ? 'rounded-full' : ''}`}>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          fontFamily: data.font || 'inherit',
          fontSize: `${data.fontSize || 14}px`,
          color: data.textColor || 'black',
        }}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(CustomNode);