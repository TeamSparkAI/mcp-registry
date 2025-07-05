export function parseRepoUrl(repoUrl: string): {
  owner: string;
  repo: string;
  path?: string;
  source: 'github' | 'gitlab' | 'other';
} {
  // GitHub URLs with various formats
  const githubMatch = repoUrl.match(/https:\/\/github\.com\/([^\/]+)\/([^\/?#]+)(?:\/tree\/[^\/]+\/(.+))?/);
  if (githubMatch) {
    let owner = githubMatch[1];
    let repo = githubMatch[2];
    let path = githubMatch[3];
    
    // URL decode the components
    owner = decodeURIComponent(owner);
    repo = decodeURIComponent(repo);
    if (path) {
      path = decodeURIComponent(path);
    }
    
    // Remove .git suffix from repo name
    repo = repo.replace(/\.git$/, '');
    
    // Remove fragments (#fragment) from repo name - fragments are NOT part of the repo name
    repo = repo.split('#')[0];
    
    // Remove query parameters and fragments from path
    if (path) {
      // Remove query parameters (?param=value)
      path = path.split('?')[0];
      // Remove fragments (#fragment)
      path = path.split('#')[0];
    }
    
    /*
    console.log(`  Parsed URL: ${repoUrl}`);
    console.log(`    Owner: ${owner}`);
    console.log(`    Repo: ${repo}`);
    console.log(`    Path: ${path || 'undefined'}`);
    */
   
    return {
      owner,
      repo,
      path: path || undefined,
      source: 'github'
    };
  }

  // GitLab URLs
  const gitlabMatch = repoUrl.match(/https:\/\/gitlab\.com\/([^\/]+)\/([^\/]+)(?:\/-\/tree\/[^\/]+\/(.+))?/);
  if (gitlabMatch) {
    return {
      owner: gitlabMatch[1],
      repo: gitlabMatch[2],
      path: gitlabMatch[3] || undefined,
      source: 'gitlab'
    };
  }

  // Fallback for other URLs
  return {
    owner: '',
    repo: '',
    source: 'other'
  };
} 