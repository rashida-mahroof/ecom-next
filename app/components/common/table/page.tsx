import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface TableColumn {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  actions?: {
    edit?: boolean;
    delete?: boolean;
    approve?: boolean;
    reject?: boolean;
  };
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onApprove?: (id: number) => void;
  onReject?: (id: number) => void;
}

const CommonTable: React.FC<TableProps> = ({ columns, data, actions, onEdit, onDelete, onApprove, onReject }) => {
  const renderActionButton = (icon: IconDefinition, onClick: () => void, color: string, title: string) => (
    <button className={`text-${color}-500 mr-2`} onClick={onClick} title={title}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
  if(!data) return null;
  if(!columns) return null;
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[var(--color-ember)] text-[var(--on-primary)]">
          {columns.map((column, index) => (
            <th  key={index} className="border p-2 text-start">{column.header}</th>
          ))}
          {actions && <th className="border p-2">Actions</th>}
        </tr>
      </thead>
      <tbody >
        {data.map((row, rowIndex) => (
          <tr className="bg-white" key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="border p-2">
                {column.render ? column.render(row[column.accessor], row) : row[column.accessor]}
              </td>
            ))}
            {actions && (
              <td className="border p-2 ">
                {actions.edit && onEdit && renderActionButton(faEdit, () => onEdit(row.id), 'blue', 'Edit')}
                {actions.delete && onDelete && renderActionButton(faTrash, () => onDelete(row.id), 'red', 'Delete')}
                {actions.approve && onApprove && renderActionButton(faCheck, () => onApprove(row.id), 'green', 'Approve')}
                {actions.reject && onReject && renderActionButton(faTimes, () => onReject(row.id), 'red', 'Reject')}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;