import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hello World!', likesCount: 12},
    {id: 2, message: 'One More Disaster Artist', likesCount: 13},
  ];
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
        <div className={s.posts}>
          <Post
            message={postsData[0].message}
            likesCount={postsData[0].likesCount}
          />
          <Post
            message={postsData[1].message}
            likesCount={postsData[1].likesCount}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
