const getRepositories = (repo) => {
  return repo.map((item) => ({
    id: item.id,
    imageURL: item.owner.avatar_url,
    name: item.full_name,
    user: item.owner.login,
    description: item.description
      ? item.description
      : 'No description available',
  }));
};

export { getRepositories };
