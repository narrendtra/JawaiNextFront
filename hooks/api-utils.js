import axios from "../lib/axios";
export async function getAllEvents(url) {
  const response = await axios.get(url);
  return response.data;
}
export async function getEventById(id) {
  const allEvents = await getAllEvents("api/accommodations");
  return allEvents.find((event) => event.slug_url === id);
}

export async function getactEventById(id) {
  const allEvents = await getAllEvents("api/activities");
  return allEvents.find((event) => event.slug_url === id);
}
export async function gettourEventById(id) {
  const allEvents = await getAllEvents("api/categories");
  return allEvents.find((event) => event.slug_url === id);
}

export async function getblogEventById(id) {
  const allEvents = await getAllEvents("api/blogs");
  return allEvents.find((event) => event.slug_url === id);
}

export async function getcontantEventById(id) {
  const allEvents = await getAllEvents("api/contants/" + id);
  return allEvents;
}
