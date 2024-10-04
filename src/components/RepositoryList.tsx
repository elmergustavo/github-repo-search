import React from "react";
import styled from "styled-components";
import { RepositoryProps } from "../types";
import { FaStar, FaCodeBranch } from "react-icons/fa";

interface RepositoryListProps {
  repositories: RepositoryProps[] | null;
  isLoading: boolean;
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  isLoading,
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!repositories) {
    return <p>No repositories available.</p>;
  }

  return (
    <List>
      {repositories.map((repo) => (
        <Container key={repo.id}>
          <SideArea>
            <TopArea>
              <Pfp src={repo.avatar_url} alt={repo.name} />
              <div>
                <h2>{repo.name}</h2>
                <p>{repo.description || "No description available."}</p>
              </div>
            </TopArea>
            <BottomArea>
              <Stats>
                <span>
                  <FaStar /> {repo.stars}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks}
                </span>
              </Stats>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </BottomArea>
          </SideArea>
        </Container>
      ))}
    </List>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 73.3rem;

  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};

  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const TopArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  h2 {
    font-size: 18px;
    margin: 0;
  }

  p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #666;
  }
`;

const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #eee;
`;

const Stats = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;

  svg {
    margin-right: 4px;
  }
`;

const Pfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SideArea = styled.div`
  width: 100%;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #0079ff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default RepositoryList;
