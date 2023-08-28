import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getRenderApiCalls()
  }

  getRenderApiCalls = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      topic: data.topic,
      author: data.author,
      content: data.content,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  getRenderBlogItemDetails = () => {
    const {blogsData} = this.state
    const {id, title, avatarUrl, imageUrl, author, content} = blogsData

    return (
      <div className="blog-item-details-container">
        <h1 className="title-blogs">{title}</h1>
        <div className="avatar-container-1">
          <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-image" />
          <p className="author-1">{author}</p>
        </div>
        <img src={imageUrl} alt={`blogs${id}`} className="blogs-image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getRenderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
