import Layout from '../components/Layout';
import HeaderMethods from '../components/HeaderMethod';
import cover from '../images/page01/cover.png';

export default function method01() {
  return (
    <div>
      <Layout />
      <HeaderMethods section={{
        title: 'titolo1',
        quest: 'question',
      }}
      />
    </div>
  );
}
