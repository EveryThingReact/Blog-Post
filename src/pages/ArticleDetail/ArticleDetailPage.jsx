import React from 'react'
import MainLayout from '../../components/ MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SugestedPosts from './container/SugestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialShareButtons'

const BreadCrumbsData = [
    {name:"Home", link:"/"},
    {name:"Blog", link:"/blog"},
    {name:"Article Title", link:"/blog/1"},
]
const postData = [
    {
        _id: "1",
        image: images.post1Image,
        title: "Help children get better education",
        createdAt: "2025-01-28T15:35:53.607+0000"
    },
    {
        _id: "2",
        image: images.post1Image,
        title: "Help children get better education",
        createdAt: "2025-01-28T15:35:53.607+0000"
    },
    {
        _id: "3",
        image: images.post1Image,
        title: "Help children get better education",
        createdAt: "2025-01-28T15:35:53.607+0000"
    },
    {
        _id: "4",
        image: images.post1Image,
        title: "Help children get better education",
        createdAt: "2025-01-28T15:35:53.607+0000"
    },
]
const tagsData = [
    "Medicals",
    "lifestyle",
    "learn",
    "healthy",
    "diet",
    "education",
];
const ArticleDetailPage = () => {
  return (
<MainLayout>
    <section className='container mx-auto mx-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
      <article className='flex-1'>
        <BreadCrumbs data={BreadCrumbsData}/>
        <img className='rounded-xl w-full' src={images.post1Image} alt="postImage" />
        <Link to='/blog?category=selectedCategory' className='text-[#1565D8] text-sm font-sans inline-block mt-4 md:text-base'>EDUCATION</Link>
        <h1 className='text-xl font-medium font-sans mt-4 text-[#0D2436] md:text-[26px]'>Help children get better education</h1>
        <div className='mt-4 text-[#183856]'>
        <p className='leading-7 '>Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Assumenda sint ducimus odit quis itaque vel magni eveniet aliquam, alias, 
        quasi maxime a aut, delectus cupiditate quae aliquid magnam exercitationem est.
        Enim, labore rerum atque magni possimus, corrupti reiciendis ea ex at consequuntur 
        nemo, esse ut voluptas qui quae deleniti. Quibusdam nemo autem recusandae maxime ad 
        neque iste quos voluptates aliquam!</p>
        </div>
        <CommentsContainer className="mt-10 " logginedUserId="a"/>
      </article>
      <div>
      <SugestedPosts header=" Latest Article" post={postData} tags={tagsData} className="mt-8 lg:mt-0 lg:max-w-xs"/>
      <div className='mt-7'>
        <h2 className='font-sans font-medium text-[#0D2436] mb-4 md:text-xl'>Share On:</h2>
        <SocialShareButtons url={encodeURI("https://moonfo.com/post/client-side-and-server-side-explanation")} 
        
        title={encodeURIComponent("client side and server side")}/>
      </div>
      </div>
    </section>
</MainLayout>
  )
}

export default ArticleDetailPage