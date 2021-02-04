import { Layout } from 'antd';
import Navigation from '../Navigation/';

export default function AppBar() {
  const { Header } = Layout;

  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
    </Layout>
  );
}
