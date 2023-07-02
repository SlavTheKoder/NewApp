import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <div className={s.posts}>
          <Post message="Hello World!" likesCount="0" />
          <Post message="One More Disaster Artist" likesCount="23" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
