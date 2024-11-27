import React from 'react'

export default function Blog() {
  return (
    <div>
       <section id="blog">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="intro">
            <h6>Blog</h6>
            <h1>Blog Posts</h1>
            <p className="mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <article className="blog-post">
            <img src="img/project5.jpg" alt />
            <a href="#" className="tag">Web Design</a>
            <div className="content">
              <small>01 Dec, 2022</small>
              <h5>Web Design trends in 2022</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from</p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="blog-post">
            <img src="img/project4.jpg" alt />
            <a href="#" className="tag">Programming</a>
            <div className="content">
              <small>01 Dec, 2022</small>
              <h5>Web Design trends in 2022</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from</p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="blog-post">
            <img src="img/project2.jpg" alt />
            <a href="#" className="tag">Marketing</a>
            <div className="content">
              <small>01 Dec, 2022</small>
              <h5>Web Design trends in 2022</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
