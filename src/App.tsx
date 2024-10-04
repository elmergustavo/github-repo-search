import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeContextProvider } from './contexts/ThemeContext';
import RepositoryList from './components/RepositoryList';
import { TopArea } from './components/TopArea';

// Assuming RepositoryProps is defined somewhere accessible
import { RepositoryProps } from './types';

function App() {
  const [repositories, setRepositories] = useState<RepositoryProps[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ThemeContextProvider>
      <Container>
        <TopArea setRepositories={setRepositories} setIsLoading={setIsLoading} />
        <RepositoryList repositories={repositories} isLoading={isLoading} />
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;
`;

export default App;
