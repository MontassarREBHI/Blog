
const BlogCard = ({ post }) => {
    return (
      <li key={post._id} className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-1">{post.content}</p>
        <p className="text-sm text-gray-500">
          <strong>Author:</strong> {post.author}
        </p>
      </li>
    );
  };
  
  export default BlogCard;
  