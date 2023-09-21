import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg font-bold flex flex-row items-center gap-3">
          You are being redirected to the post, please wait 1-2 seconds...
        </div>
      </div>
    </>
  )
}
