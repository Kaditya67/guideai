import image from '../assets/Image.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} style={{height:"200px",width:""}} className="card-img-top" alt="news thumbnail" />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">{description?description.slice(0,90):" The card showcases the news image, headline, a brief description, and a  button for navigation. It includes a fallback for missing descriptions and ensures links open in a new tab for better usability. This component is responsive and styled for readability, making it ideal for news apps and dashboards."}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
