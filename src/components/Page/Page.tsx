import React from "react";
import Spinner from "../Shared/Spinner/Spinner";
import Pages from "../../content/Pages.json";
import GetPages from "./utils/GetPages";
import { Link } from "react-router-dom";
import "./styles/page.css";

interface PageContent {
  title: string;
  body: string;
}

interface Params {
  isExact: Boolean;
  params: {
    id: string;
  };
  path: string;
  url: string;
}

interface Props {
  match: Params;
}

const Page: React.FunctionComponent<Props> = props => {
  const { match } = props;

  let currentPageContent: PageContent = GetPages(match.params.id);
  return (
    <React.Fragment>
      <div className="paper">
        <h2>{currentPageContent.title}</h2>
        <p>{currentPageContent.body}</p>
        <Link style={{ marginBottom: "1.5em" }} to="/">
          Go Back Home
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Page;
