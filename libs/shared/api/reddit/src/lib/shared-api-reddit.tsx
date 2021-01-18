import axios from 'axios';

const REDDIT_URL = 'https://www.reddit.com';

export interface ISubredditTop {
  author: string;
  id: string;
  permalink: string;
  score: number;
  title: string;
  url: string;
}

export const getSubredditTop = async (subreddit: string, limit: number): Promise<ISubredditTop[]> => {
  const results = await axios.get(
    `${REDDIT_URL}/r/${subreddit}.json?sort=popular&limit=${limit}`,
  );
  const topPosts: ISubredditTop[] = results.data.data.children.map((post) => ({
    author: post.data.author,
    id: post.data.id,
    permalink: post.data.permalink,
    score: post.data.score,
    title: post.data.title,
    url: post.data.url,
  }));

  return topPosts;
};
