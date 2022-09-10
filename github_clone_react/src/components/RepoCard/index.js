import "./index.css";

function RepoCard({ name, language, description, updated_at, svn_url }) {
  return (
    <li className="repoLi">
      <div className="py-4">
        <a className="repoHeading" href={svn_url}>
          <h3 className="wb-break-all">{name}</h3>
        </a>
        <div className="repoDescription">
          <p className="">{description}</p>
        </div>
        <div className="repoFooter">
          <span className="lang m3">
            <span
              className="repo-language-color"
              style={{ backgroundColor: "yellow" }}
            ></span>
            <span className="">{language}</span>
          </span>
          <span className="stars m3"></span>
          <span className="timeline m3">{updated_at}</span>
        </div>
      </div>
      <hr className="" />
    </li>
  );
}
export default RepoCard;
