export interface UserProps {
  pfp      : string;
  name     : string;
  joinedAt : string;
  username : string;
  bio      : string;
  repos    : string;
  followers: string;
  following: string;
  links    : {
    location: string;
    twitter : string;
    blog    : string;
    company : string;
  };
}


export interface RepositoryProps {
  id          : number;
  name        : string;
  description?: string;
  stars       : number;
  forks       : number;
  html_url    : string;
  avatar_url  : string;
}

export interface TopAreaProps {
  setRepositories: (repos: RepositoryProps[] | null) => void;
}

export interface UserDataProps {
  user: UserProps;
}
