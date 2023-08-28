import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import UserInfo from '../UserInfo'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getRenderApiList()
  }

  getRenderApiList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedList = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      topic: eachItem.topic,
      author: eachItem.author,
    }))
    this.setState({blogsList: updatedList, isLoading: false})
  }

  renderBlogItems = () => {
    const {blogsList} = this.state
    return (
      <ul className="list-item-container">
        <UserInfo />
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItems()
        )}
      </div>
    )
  }
}

export default BlogList
