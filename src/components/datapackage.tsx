
// {
//     "name": "solar-system",
//     "path": "http://example.com/solar-system.csv",
//     "title": "The Solar System",
//     "description": "My favourite data about the solar system.",
//     "format": "csv",
//     "mediatype": "text/csv",
//     "encoding": "utf-8",
//     "bytes": 1,
//     "hash": "",
//     "schema": "",
//     "sources": "",
//     "licenses": ""

//   }
interface ResourceType {
    name: string;
    path :string;
    description:string;
    schema: string;    
}

// {
//     # general "metadata" like title, sources etc
//     "name" : "a-unique-human-readable-and-url-usable-identifier",
//     "title" : "A nice title",
//     "licenses" : [ ... ],
//     "sources" : [...],
//     # list of the data resources in this data package
//     "resources": [],
//     # optional
//     ... additional information ...
//   }
//
interface DataPackageType {
    _id : string;
    name : string;
    title: string; // Title for package
    // add more complex elements later
    resources: Array<ResourceType>;
}

const DataPackage = () => {
  return <h3>DataPackage</h3>;
};
export default DataPackage;
