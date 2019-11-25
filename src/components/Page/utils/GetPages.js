import Pages from "../../../content/Pages.json";

const getPage = url => {
  let page = Pages[url];
  console.log(page);
  return page === null
    ? Pages.DoesNotExist
    : page === undefined
    ? Pages.DoesNotExist
    : page;
};

export default getPage;
