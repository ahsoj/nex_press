export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

//   const publishedAt = '2024-03-12T12:32:26Z';
//   const formattedDate = formatDate(publishedAt);

//   console.log(formattedDate); // Output: "Sunday, March 12, 2024"
