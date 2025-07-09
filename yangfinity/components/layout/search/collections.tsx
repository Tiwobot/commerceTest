import FilterList from './filter';

function getCollections() {
  return [
    { title: 'All', path: '/products' }
  ];
}

export default function Collections() {
  const collections = getCollections();
  return <FilterList list={collections} title="Collections" />;
}
