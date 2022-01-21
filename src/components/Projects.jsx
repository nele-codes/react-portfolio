import React from 'react';
import { Link } from 'react-router-dom';
import imagePlaceholder1 from '../blog-placeholder.png';
import imagePlaceholder2 from '../Blog-Post-Holder.jpg';




const Projects = () => {

    const postData = [
        {
            title: "Example 1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: {imagePlaceholder1}
        },
        {
            title: "Example 2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: {imagePlaceholder2}
        },
    ]
    return (
        <main className="min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive text-pink-300">My Projects Page</h1>
                <h2 className="text-lg text-pink-600 flex justify-center mb-12">Here is what I have been recently working on...</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/"} key={index}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-pink-700">
                                <img src={post.image} className="w-full h-full rounded-r object-fit absolute"></img>
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-pink-700 text-red-100 bg-opacity-75 rounded">{post.title}</h3>
                                    <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-pink-700 text-red-100 bg-opacity-75 rounded">{post.description}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Projects