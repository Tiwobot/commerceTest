import FilterList from './filter';

const categories = [
  'All',
  'Gameforge West',
  'Gameforge East',
  'Gameforge TR',
  'Private Servers',
  'Mobile Metin2',
];

function getCollections() {
  return categories.map((cat) => ({
    title: cat,
    path: cat === 'All' ? '/products' : `/products?category=${encodeURIComponent(cat)}`,
  }));
}

export default function Collections() {
  const collections = getCollections();
  return <FilterList list={collections} title="Collections" />;
}
