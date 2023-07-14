import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Hello World!', likesCount: 12},
    {id: 2, message: 'One More Disaster Artist', likesCount: 13},
  ];

  let postsElemenets = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        <div className={s.posts}>{postsElemenets}</div>
      </div>
    </div>
  );
};

export default MyPosts;
