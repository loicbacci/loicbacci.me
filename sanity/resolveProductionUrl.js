export default function resolveProductionUrl(document) {
  return `http://localhost:3000/projects/${document.slug.current}`
}