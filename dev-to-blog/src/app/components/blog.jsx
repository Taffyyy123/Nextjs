import Link from "next/link";
import { useRouter } from "next/navigation";

const Blog = (props) => {
  const { title, tags, img, name, date, profile, url, id } = props;
  const router = useRouter();
  return (
    <div>
      <div className="blog-container">
        <img src={img} className="img" />
        <div className="text-container">
          <button onClick={() => router.push(id.toString())}>{tags}</button>
          <div className="title">{title}</div>
          <div className="footer-container">
            <div className="user-container">
              <img src={profile} className="pro" />
              <div className="name">{name}</div>
            </div>
            <div className="date">{date}, 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
