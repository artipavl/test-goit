import Tweet from './tweet/tweet';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Tweet
        user={{
          user: 'Roland Bode',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/733.jpg',
          followers: 20,
          tweets: 73,
          id: '1',
        }}
      />
    </div>
  );
};
