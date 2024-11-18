import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  command: string;
  output: string;
}

export function Terminal({ command, output }: TerminalProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <TerminalIcon className="w-4 h-4 text-gray-400 ml-4" />
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex items-center text-green-400">
          <span className="mr-2">$</span>
          <span>{command}</span>
        </div>
        <div className="mt-2 text-green-200 whitespace-pre-wrap">{output}</div>
      </div>
    </div>
  );
}