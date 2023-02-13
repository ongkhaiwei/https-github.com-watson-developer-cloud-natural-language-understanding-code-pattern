/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { TableCell } from '@carbon/react';
import ProgressBar from '../ProgressBar';
import DataTableWrapper from './DataTableWrapper';

export const Relations = ({ language, result }) => {
  if (!result || result.length === 0) {
    return <p>{`No Relations returned for the input in language: ${language}.`}</p>;
  }

  const headers = [
    {
      header: 'Sentence',
      key: 'sentence',
    },
    {
      header: 'Type',
      key: 'type',
    },
    {
      header: 'Score',
      key: 'score',
    },
  ];

  const rows = result.map((keyword, i) => ({ ...keyword, id: `${i}` }));

  const renderCell = cell => {
    return (
      <TableCell key={cell.id}>
        {cell.info.header === 'score' ? (
          <ProgressBar progress={cell.value} />
        ) : (
          cell.value
        )}
      </TableCell>
    );
  };

  return (
    <DataTableWrapper rows={rows} headers={headers} renderCell={renderCell} />
  );
};

Relations.propTypes = {
  result: PropTypes.array,
  language: PropTypes.string,
};

Relations.defaultProps = {
  result: [],
  language: 'en',
};

export default Relations;
