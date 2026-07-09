const LOCAL_API_BASE_URL = "http://localhost:4000";

const isLocalHost = () => {
  if (typeof window === "undefined") return false;
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
};

const stripTrailingSlash = (value) => value.replace(/\/+$/, "");

export const API_BASE_URL = stripTrailingSlash(
  import.meta.env.VITE_API_BASE_URL ||
    (isLocalHost() ? LOCAL_API_BASE_URL : window.location.origin)
);

export const apiUrl = (path) => `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
