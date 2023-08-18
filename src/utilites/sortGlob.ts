export default function sortGlob(glob: Record<string, any>[]) {
  return glob.sort(
    (a, b) => (b.frontmatter.priority || 0) - (a.frontmatter.priority || 0)
  );
}
