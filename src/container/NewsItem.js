import React from 'react'
// import PropTypes from 'prop-types'

const NewsItem = (props)=> {

    let { title, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="card gradient-background border border-success me-1 my-3" style={{ height:"350px",position:'relative'}}>
        <img style={{ overflow:'hidden' ,height:"150px"}} src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={{ height:"100px",overflow:'hidden', position:'relative'}}>{title}</h5>
            {/* <p className="card-text">{description}</p> */}
            <p className="card-text " style={{position:'absolute',top:'267px'}}><small className="text-body-secondary">By {author} at {date}</small></p>
            <a href={newsUrl} style={{position:'absolute',top:'310px',right:'10px'}} rel="noreferrer"target='_blank' className="btn btn-sm btn-outline-primary">Read more</a>
          </div>
      </div>
      
      // <div className="card mb-3" style={{maxWidth: "540px"}}>
      //   <div className="row g-0">
      //     <div className="col-md-4">
      //       <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
      //     </div>
      //     <div className="col-md-8">
      //       <div className="card-body">
      //         <h5 className="card-title">{title}</h5>
      //         <p className="card-text">{description}</p>
      //         <p className="card-text"><small className="text-body-secondary">By {author} at {date}</small></p>
      //         <a href={newsUrl} rel="noreferrer"target='_blank' className="btn btn-sm btn-primary">Read more</a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }

export default NewsItem
