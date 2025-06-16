import ProductPage from './ProductPageClient';
import { SAMPLE_PRODUCTS } from '@/lib/constants';

export async function generateStaticParams() {
  return SAMPLE_PRODUCTS.map(product => ({ id: product.id }));
}

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <ProductPage params={params} />;
}
