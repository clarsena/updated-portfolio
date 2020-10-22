import React, { Component } from 'react';

class Testimonials extends Component {
	constructor() {
		super();
		this.state = {
			blogIndex: 0,
		};
	}
	render() {
		if (this.props.data) {
			var blogs = this.props.data.blogs.map(function (blogs) {
				var blogImage = 'images/blogs/' + blogs.image;
				return (
					<li key={blogs.title}>
						<div className='blog-container'>
							<div className='blog-image'>
								<img src={blogImage} alt='' />
							</div>
							<div className='blog-info'>
								<p className='blog-title'>{blogs.title}</p>
								<p className='blog-date'>{blogs.datePosted}</p>
								<p className='blog-desc'>{blogs.description}</p>
								<a
									href={blogs.url}
									target='_blank'
									rel='noopener noreferrer'
								>
									<button type='button' className='read-more'>
										Read Post
									</button>
								</a>
							</div>
						</div>
					</li>
				);
			});
		}

		return (
			<section id='testimonials'>
				<div className='text-container'>
					<div className='row'>
						<h1>
							<span>Blog Posts</span>
						</h1>
						{/* <div className='two columns header-col'>
						</div> */}

						<div className='twelve columns flex-container'>
							<ul className='slides'>{blogs}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Testimonials;
