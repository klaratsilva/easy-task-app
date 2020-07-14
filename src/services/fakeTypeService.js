export const types = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Home" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Hobby" },
  { _id: "5b21ca3eeb7f6fbccd471816", name: "Graden" },
  { _id: "5b21ca3eeb7f6fbccd471817", name: "Sport" },
];

export function getTypes() {
  return types.filter((t) => t);
}
