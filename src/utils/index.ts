export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getQueryParams = (url: string) => {
  const params = new URLSearchParams(url.split("?")[1]);
  const queryParams: { [key: string]: string } = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });
  return queryParams;
};
