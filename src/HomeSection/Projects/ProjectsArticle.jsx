import React from 'react'


const ProjectsArticle = ({imageSrc, title, url, description}) => {
  return (
        <article>
            <img src={imageSrc} alt={description} />
            <h3>{title}</h3>
            <a href={url}>Read More <i className="mindre fi fi-br-arrow-up-right"></i></a>
        </article>
  )
}

export default ProjectsArticle