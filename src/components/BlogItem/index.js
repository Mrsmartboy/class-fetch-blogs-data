import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = eachItem

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <li className="item-container">
        <div className="image-container">
          <img
            src={imageUrl}
            alt={`blog ${id}`}
            className="blog-item-image-url"
          />
        </div>
        <div className="blog-data-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
