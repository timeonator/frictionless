import React from 'react';
import MaterialTable from 'material-table';


interface Heading { 
    field: string;
    title : string;
}
interface Data {
    name: string;
    path: string;
    title: string;
}


const columns : Array<Heading> = [
  { field: 'name', title: 'Name' },
  { field: 'path', title: 'Path' },
  { field: 'title', title: 'Title' },
];

const data : Array<Data> = [
  {
    name: 'solar-system',
    path: 'http://example.com/solar-system.csv',
    title: 'The Solar System',
  },
];

const Resources = () => {
  return (
    <>
      <MaterialTable columns={columns} data={data} />
    </>
  );
};
export default Resources;
