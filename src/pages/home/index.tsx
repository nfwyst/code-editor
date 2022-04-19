import { styled } from '@mui/material/styles';

import Layout from 'components/common/layout'
import LanguageList from 'components/home/language-list';

const Homecontainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  // @ts-ignore
  backgroundColor: theme.background,
}))

const WelcomeMessage = styled('div')(({ theme }) => ({
  padding: '15px',
  fontSize: '30px',
  // @ts-ignore
  color: theme.font,
}))

const Home = () => {
  return (
    <Layout>
      <Homecontainer>
        <WelcomeMessage>选择语言</WelcomeMessage>
        <LanguageList />
      </Homecontainer>
    </Layout>
  )
}

export default Home
