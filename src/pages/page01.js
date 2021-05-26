import Layout from '../components/Layout';
import '../scss/style.scss';
import HeaderProtocol from '../components/HeaderProtocol';
import cover from '../images/page01/cover.png';

export default function page01() {
  return (
    <div>
      <Layout />
      <HeaderProtocol section={{
        title: 'titolo1',
        main: '01/ titolo',
        text: 'blablablabla',
        src: cover,
        band: 'banda sotto',
      }}
      />

    </div>
  );
}
