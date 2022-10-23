import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummeryCard = ({ news }) => {
  const { title, _id, author, details, image_url, total_view,rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <Image
              roundedCircle
              src={author.img}
              style={{ height: "60px" }}
            ></Image>
            <div className="">
                <p className="mb-0">{author.name}</p>
                <p>{author.published_date}</p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image_url} variant="top" alt="Card image" />
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 250) + "......"}{" "}
                <Link to={`/news/${_id}`}>read more</Link>{" "}
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
          <Button variant="primary" className=""><Link  to={`/news/${_id}`} className="text-decoration-none text-light p-4 ">Deatil</Link></Button>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between ">

            <div className="">
                <FaStar className="text-warning me-2"/>
                <FaStar className="text-warning me-2"/>
                <FaStar className="text-warning me-2"/>
                <FaStar className="text-warning me-4"/>
                <span>{rating?.number}k</span>
            </div>
            <div className="">
                <FaEye/>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
