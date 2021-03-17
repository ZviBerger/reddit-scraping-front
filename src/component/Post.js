const Post = (props) => {
  return (
    <div className="Post">
      {props.title && <h4> {props.title}</h4>}
      <div>
        <b>votes:</b> {props.votes}
      </div>
      <div>
        <b>community:</b> {props.community}
      </div>
      {props.image_src && (
        <img
          loading="lazy"
          src={props.image_src}
          className="PostImg"
          alt="reddit post image"
        />
      )}
    </div>
  );
};

export default Post;
